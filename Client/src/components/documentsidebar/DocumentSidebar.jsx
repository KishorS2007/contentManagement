import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './DocumentSidebar.css'
import { Button } from '@mui/material';
import '../documentsidebar/DocumentSidebar.css'
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light:true,
     dark: false },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
    
  },
});

function DemoPageContent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        scrollbarWidth:'none !important'
      }}
    className="document-sidebar ">
      <Outlet />
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DocumentSidebar(props) {
  const { window } = props;
  const [title,setTitle] = useState("1A")
  const router = useDemoRouter('');
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <DemoProvider window={demoWindow}>
      <AppProvider 
        branding={{
          title:"Level - "+title,
          logo:"",
        }}
        navigation={[
          {
            segment: 'Classwork',
            title: 'Classwork',
            icon: <FolderIcon />,
            children: [
              {
                segment: 'set1',
                title: 'Set-1',
                icon: <FolderIcon />,
                children:[
                    {
                segment: 'harry-potter',
                title: 'Harry Potter',
                icon: <DescriptionIcon />,
              },
                ]
              },
              {
                segment:'set-2',
                title: 'Set-2',
                icon: <FolderIcon />,
                children:[
                    {
                segment: 'harry-potter',
                title: 'Harry Potter',
                icon: <DescriptionIcon />,
              },
                ]
              },
            ],
          },
          {
            segment: 'Homework',
            title: 'Homework',
            icon: <FolderIcon />,
           children: [
              {
                segment: 'set1',
                title: 'Set-1',
                icon: <FolderIcon />,
                children:[
                    {
                segment: 'harry-potter',
                title: 'Harry Potter',
                icon: <DescriptionIcon />,
              },
                ]
              },
              {
                segment: 'set2',
                title: 'Set-2',
                icon: <FolderIcon />,
                children:[
                    {
                segment: 'harry-potter',
                title: 'Harry Potter',
                icon: <DescriptionIcon />,
              },
                ]
              },
            ],
          },
          {
            segment: 'Assignment',
            title: 'Assignment',
            icon: <FolderIcon />,
            children: [
              {
                segment: 'set1',
                title: 'Set-1',
                icon: <FolderIcon />,
                children:[
                    {
                segment: 'harry-potter',
                title: 'Harry Potter',
                icon: <DescriptionIcon />,
              },
                ]
              },
              {
                segment: 'set2',
                title: 'Set-2',
                icon: <FolderIcon />,
                children:[
                    {
                segment: 'harry-potter',
                title: 'Harry Potter',
                icon: <DescriptionIcon />,
              },
                ]
              },
            ],
          },
        ]}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </DemoProvider>
  );
}

DocumentSidebar.propTypes = {
  window: PropTypes.func,
};

export default DocumentSidebar;
