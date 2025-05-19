import { useState } from 'react'
const Pdfviewer = () => {
    const [Pdf,_] = useState('/tailwind-css.pdf');
  return (
    <center className='overflow-y-hidden '>
      <iframe src={Pdf} 
      className='w-[75vw] h-screen media-[max-width:600px]:w-[100vw]  ' title=''></iframe>
    </center>
  )
}

export default Pdfviewer;
