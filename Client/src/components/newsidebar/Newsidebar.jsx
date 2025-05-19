import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import CallMadeIcon from '@mui/icons-material/CallMade';
// import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import { Outlet } from 'react-router-dom';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaFilePdf } from 'react-icons/fa6';
import FolderIcon from '@mui/icons-material/Folder';
// import { green } from '@mui/material/colors';
import { IoHome, IoSchoolSharp} from "react-icons/io5";
import { GrDocumentTest } from "react-icons/gr";
import '../documentsidebar/DocumentSidebar.css'

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
   components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        // overflowX:"hidden",
        // scrollbarWidth:'none !important' 
        height: '100vh',
      }}
      className ="document-sidebar "
    >
      {/* <Typography>Dashboard content for {pathname}</Typography> */}
      <Outlet />
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};



function DashboardLayoutNavigationActions(props) {
  const { window } = props;

  const router = useDemoRouter('/contacts');
  const [level,setLevel] = React.useState(1);
  const [popoverAnchorEl, setPopoverAnchorEl] = React.useState(null);

  const isPopoverOpen = Boolean(popoverAnchorEl);
  const popoverId = isPopoverOpen ? 'simple-popover' : undefined;

  const handlePopoverButtonClick = (event) => {
    event.preventDefault(); 
    event.stopPropagation();
    setPopoverAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (event) => {
    event.stopPropagation();
    setPopoverAnchorEl(null);
  };

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  const popoverMenuAction = (
    <React.Fragment>
      <IconButton aria-describedby={popoverId} onClick={handlePopoverButtonClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id={popoverId}
        open={isPopoverOpen}
        anchorEl={popoverAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        disableAutoFocus
        disableAutoFocusItem
      >
        <MenuItem onClick={handlePopoverClose} sx={{border:0,borderBottom:"none",borderColor:"#e0e0e0"}}>Edit <IconButton sx={{scale:0.8}} disableRipple><ModeIcon /></IconButton></MenuItem>
        <MenuItem onClick={handlePopoverClose} sx={{border:0,borderColor:"#e0e0e0"}}>Delete <IconButton sx={{scale:0.8}} disableRipple><DeleteIcon /></IconButton></MenuItem>
        
      </Menu>
    </React.Fragment>
  );

  return (
    <DemoProvider window={demoWindow}>
      {/* preview-start */}
      <AppProvider
branding={{
          title:"Level - "+level,
          logo:"",
        }}
        navigation={[
          {
            segment: 'ClassWork',
            title: 'ClassWork',
            icon: <IoSchoolSharp />,
            // action: <Chip label={7} color="primary" size="small" />,
            children: [
                        {
                          segment: 'ClassWork/set-1',
                          title: 'set-1',
                          icon: <FolderIcon />,
                          // action: <IconButton></IconButton>,
                          children:[{
                          segment: 'ClassWork/set-1/Geometry-I',
                          title: 'Geometry-I',
                          action: popoverMenuAction,
                          icon: <FaFilePdf />}]

                        }, {
                          segment: 'ClassWork/set-2',
                          title: 'set-2',
                          icon: <FolderIcon />,
                          // action: <IconButton></IconButton>,
                          children:[{
                          segment: 'ClassWork/set-2/Geometry-II',
                          title: 'Geometry-II',
                          action: popoverMenuAction,
                          icon: <FaFilePdf />}]

                        }
                      ]
                      
          },
          {
            segment: 'HomeWork',
            title: 'HomeWork',
            icon: <IoHome />,
            // action: popoverMenuAction,
            children:[
                        {
                          segment: 'HomeWork/set-1',
                          title: 'set-1',
                          icon: <FolderIcon />,
                          // action: <IconButton></IconButton>,
                          children:[{
                          segment: 'HomeWork/set-1/Geometry-I',
                          title: 'Geometry-I',
                          action: popoverMenuAction,
                          icon: <FaFilePdf />}]

                        }, {
                          segment: 'HomeWork/set-2',
                          title: 'set-2',
                          icon: <FolderIcon />,
                          // action: <IconButton></IconButton>,
                          children:[{
                          segment: 'HomeWork/set-2/Geometry-II',
                          title: 'Geometry-II',
                          action: popoverMenuAction,
                          icon: <FaFilePdf />}]

                        }
                      ]},
                      
          
          {
            segment: 'Assessment',
            title: 'Assessment',
            icon: <GrDocumentTest/>,
            // action: popoverMenuAction,
            children: [
                        {
                          segment: 'Assessment/set-1',
                          title: 'set-1',
                          icon: <FolderIcon />,
                          // action: <IconButton></IconButton>,
                          children:[{
                          segment: 'Assessment/set-1/Geometry-I',
                          title: 'Geometry-I',
                          action: popoverMenuAction,
                          icon: <FaFilePdf />}]

                        }, {
                          segment: 'Assessment/set-2',
                          title: 'set-2',
                          icon: <FolderIcon />,
                          // action: <IconButton></IconButton>,
                          children:[{
                          segment: 'Assessment/set-2/Geometry-II',
                          title: 'Geometry-II',
                          action: popoverMenuAction,
                          icon: <FaFilePdf />}]

                        }
                      ]},
          
        ]}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
      {/* preview-end */}
     </DemoProvider>
  );
}

DashboardLayoutNavigationActions.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutNavigationActions;
