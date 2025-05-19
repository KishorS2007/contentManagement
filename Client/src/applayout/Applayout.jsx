import { HashRouter as Router,Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../components/loader/Loader";
import { UseLoginData }  from "../store/UseLoginData";
const NewSidebar = lazy(()=>import("../components/newsidebar/Newsidebar"))
const Login = lazy(() => import("../pages/login/Login"));
const Sidebar = lazy(()=>import("../components/sidebar/Sidebar"));
const SubjectTable = lazy(()=>import("../components/table/Table"));
const DocumentSidebar = lazy(()=>import("../components/documentsidebar/DocumentSidebar"));
const Pdfviewer = lazy(()=>import("../components/pdfviewer/pdfviewer"));
const UploadFile = lazy(()=>import("../components/uploadfile/UploadFile"));
const Levels = lazy(()=>import("../pages/levels/Levels"));
const Applayout = () => {
  const isLogin = UseLoginData((state)=>state.isLogin)
  return (
        <Suspense fallback={<Loader />}>
          {
              <Routes>
            <Route path={"/"} element={<Login />} />
{/* { isLogin && */}
{/* <> */}
            <Route element={<Sidebar />}>
              <Route path={"/home"}  element={<SubjectTable />} />
              <Route path="/:id1/:id2" element={<Levels />} />
            </Route>

            <Route path="/documentmanagement" element={<NewSidebar />}>
              <Route index element={<Pdfviewer />}/> 
              {/* <Route index element={<UploadFile />} /> */}
            </Route>
{/* </> */}

{/* } */}
            <Route  path="*" element={<div>Error 404 page not found</div>}/> 
          </Routes>
          }
        </Suspense>
  );
};

export default Applayout;
