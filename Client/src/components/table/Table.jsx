import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetCLassName,GetSubjectName } from '../../api/api';
const columns = [
  { id: 'cls', label: 'Class', minWidth: 170,align:'left' },
  { id: 'english', label: 'subject 1', minWidth: 170 ,align:'left'},
  {
    id: 'tamil',
    label: 'subject 2',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'maths',
    label: 'subject 3',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
      id: 'science',
      label: 'subject 4',
      minWidth: 170,
      align: 'left',
      format: (value) => value.toFixed(2),
    },
    {
    id: 'socialscience',
    label: 'subject 5',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(cls,english,tamil,maths,science,socialscience) {
  return { cls,english,tamil,maths,science,socialscience };
}

export default function SubjectTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
const [rows, setRows] = useState([]);
  // const [className,setClassName] = useState([]);
  // const [subjectName,setSubjectName] = useState([]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    let prevcol  = null;


useEffect(()=>{
  const fetchData = async()=>{
    const classdata = await GetCLassName();
    const subjectData = await GetSubjectName();
    // setClassName(classdata);
    // setSubjectName(subjectData);
    // console.log(classdata);
    // console.log(subjectData);

    const classRows = classdata.map(cls => {
      const subjects = subjectData
        .filter(sub => sub.class_id === cls.class_id)
        .map(sub => sub.subject_name);

      const [english = "-", tamil = "-", maths = "-", science = "-", socialscience = "-"] = subjects;

      return createData(cls.classname, english, tamil, maths, science, socialscience);
    });

    setRows(classRows);
  }
  fetchData();
},[])


  return (
    <div>

    <Paper sx={{ width:1230}} className='shadow-xl'>
        
      <TableContainer sx={{ maxHeight: 440 , minWidth:1000,overflowX:'auto'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,fontSize:"1rem",fontWeight:"bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.cls} 
                sx={{'&:hover': {
      backgroundColor: 'rgb(236, 224, 253) !important',
      cursor: 'pointer',
            },}}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        const isclasscolumn =( column.id === 'cls');
                        if(isclasscolumn){
                        prevcol = value.toLowerCase().replace(' ','');
                        
                      }
                      return (
                        <TableCell key={column.id} align={column.align} sx={{color:'inherit',backgroundColor:'inherit',}}>
                          {isclasscolumn ? (value):
                            <Link className="!text-[#333]" to={`/${prevcol}/${value.toLowerCase().replace(' ','')}`}>{value}</Link>
                        }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      
      </Paper>
    </div>

  );
}
