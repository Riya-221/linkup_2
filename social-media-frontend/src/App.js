import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Leftbar from "./components/leftbar/leftbar";
import Rightbar from "./components/rightbar/rightbar";
import Register from "./pages/register/register";
import Profile from "./pages/profile/profile";
import Home from "./pages/home/home";
import "./styles.scss";

import {
  Navigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
function App() {
  // const CurrentUser = true;
  const {darkMode} = useContext(DarkModeContext);
 const {CurrentUser} = useContext(AuthContext);
  const Layout= ()=> {
        return(
           <div className={`theme-${darkMode?"dark":"light"}`}>
          <Navbar />
          <div style={{display:"flex"}}>
          <Leftbar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <Rightbar />
          </div>
          </div>
        )
       
  };
  const ProtectedRoute = ({children})=>{
    if (!CurrentUser) {
      return <Navigate to="/login" />;
    }

return children 
  };  

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
      ),
      
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
        
          path: "/profile/:id",
          element: <Profile/>,
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  
  return (
    <div>
      {/* <Login/>
      <Register/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
