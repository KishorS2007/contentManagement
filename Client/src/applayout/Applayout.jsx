import Login from "../pages/login/login"
import Sidebar from "../components/sidebar/Sidebar"
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
const Applayout = () => {
  return (<>
      <Routes>
        <Route path="/" element={<Sidebar />}/>
        <Route path="/home" element={<Sidebar />}/>
      </Routes>
</>)}

export default Applayout
