import { useEffect, useState } from "react";
import Applayout from "./applayout/Applayout";
import Loader from "./components/loader/Loader";
// import UploadFile from "./components/uploadfile/UploadFile";
// import DocumentSidebar from "./components/documentsidebar/DocumentSidebar";
function App(){
  const [isLoading,setIsLoading] = useState(true);
  
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },700)
  },[])

  return(<>
  {/* {isLoading? <Loader />: */}
   <Applayout /> 
  {/* {isLoading? <Loader />: <UploadFile />} */}
  {/* <Loader /> */}
  </>)
}
export default App;