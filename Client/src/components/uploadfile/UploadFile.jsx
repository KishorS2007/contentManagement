import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextEditor from '../texteditor/TextEditor';
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { FaFilePdf } from "react-icons/fa6";

const UploadFile = () => {
    const [fileName,setFileName] = useState('');
    const [file,setFile] = useState(null)
    const [inputType,setinputType] = useState('');
    const [inputValue,setInputValue] = useState("");
    const [url,SetUrl] = useState(null);
    useEffect(()=>{
      if(file){
        const objectUrl = (URL.createObjectURL(file))
        SetUrl(objectUrl)
        console.log(objectUrl)
        return () => URL.revokeObjectURL(objectUrl);
      }
    },[file])

   

  return (<>
  <div className=' my-1 w-[75vw] h-screen media-[max-width:600px]:w-[100vw] ' >

<div className='flex justify-around my-5 media-[max-width-600px]:m-0'>
    <TextField variant='outlined' label="Topic" required    sx={{
    // Label styles (outside input root)
    
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#b377f9',
    },

    // Outlined input styles
    '& .MuiOutlinedInput-root': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#b377f9',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#b377f9',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#b377f9',
      },
    },
  }}/>
    <Box >
      <FormControl sx={{width:"15vw"}} variant='outlined' required>
        <InputLabel id="demo-simple-select-label" color="secondary"
        >Question Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputType}
          label="Question Type"
          onChange={(e)=>{
           setinputType(e.target.value)
          }}
           sx={{
          
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#b377f9', // default color
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#b377f9', // on hover
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#b377f9', // when focused
    },
  
        }}
        >
          <MenuItem value={'1'}>File</MenuItem>
          <MenuItem value={'2'}>Text</MenuItem>
        </Select>
      </FormControl>
    </Box>

</div>


<div>

    {
    inputType=='1'?
    <>
    <label htmlFor="file" className='border-2 bg-[#f8f3fc] border-[#b377f9] border-dashed mt-15 h-[43vh] flex justify-center items-center rounded-2xl'>
        <div>
        {/* <CloudUploadIcon sx={{color:"#b377f9",scale:1.7,marginBottom:2}}/> */}
        <br />
        <p className='text-[#7f16f7] font-roboto'>Upload Pdf Document</p>
    {url && <>
    {/* <PictureAsPdfIcon sx={{color:"#ff4545",marginRight:.5}}/> */}
    <FaFilePdf className='text-[red] inline mr-1'/> 
      <a href={url} target='_blank' className='w-20 underline decoration-[] text-[]'>{fileName}</a>
    </>
      }
        </div>
    </label>
    {/* <br /> */}
      <input type="file" id="file" className='hidden'  onChange={(e)=>{
        const selectedFile = e.target.files[0];
        setFile(selectedFile)
        setFileName(selectedFile.name)
      }
    }
      accept=".pdf" required/>
      </>
      :inputType=='2'?
      <>
      <div className='border-1 border-black mt-15'>
        <TextEditor setInputValue={setInputValue} inputValue={inputValue}/>
      </div>
      </>:""
    }
    {
      (inputType==1|| inputType==2 )&&
      <>
      <div className='flex justify-start mt-10 '>
<Button variant='contained' sx={{backgroundColor:"#a760f7",marginRight:2}}>Save</Button>
<Button variant='contained' sx={{backgroundColor:"red"}}>Cancel</Button>
</div>
      <div className='h-1 0'></div>
      </>
    }
</div>


</div>

</>)}

export default UploadFile
