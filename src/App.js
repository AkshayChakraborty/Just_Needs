import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./Component/Common/Navbar";
import Footer from "./Component/Common/Footer";
import Home from "./pages/Home";
import MenuMain from "./pages/MenuMain";
import BlogMain from "./pages/BlogMain";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BlogDetails from "./pages/BlogDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleMeal from "./Component/Core/SingleMeal";
import SingleBlog from "./pages/SingleBlog";



import Order from "./Component/Core/Order";

function App() {
  // const Nevigate = useNavigate()
  const RouteSettings = ({ children }) => {
    const token = localStorage.getItem("id")
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }
  const AdminRoutes = ({ children }) => {
    const adminToken = localStorage.getItem('admin_token')
    return adminToken !== null && adminToken !== undefined ? (
      children
    ) : (
      <Navigate to='/adminlogin' />
    )
  }
  const publicRoutes = [
    {
      path: '/',
      component: <Home />
    },

    {
      path: "/login",
      component: <Login />
    },
    {
      path: "/register",
      component: <Register />
    },
   
   
  ]

  const protectedRoutes = [
    {
      path: "/cart",
      component: <Cart />
    },
    {
      path: "/product",
      component: <MenuMain />
    },
    {
      path: "/blogmain",
      component: <BlogMain />
    },
    {
      path: "/about",
      component: <About />
    },
    {
      path: "/contact",
      component: <Contact />
    },
    {
      path: "/singlemeal/:id",
      component: <SingleMeal />
    },
    
    {
      path: "/singleblog/:id",
      component: <SingleBlog />
    },
    {
      path: '/order',
      component : <Order/>
    },
    {
      path: "/blogdetails",
      component: <BlogDetails />
    },
  ]
  
  return (
    <>
      <Router>
        <ToastContainer />
        {/* <Navbar /> */}
        <Routes>
          {
            publicRoutes.map((e, i) => {
              return (
                <Route
                  key={i}
                  path={e.path}
                  element={e.component}
                />
              )
            })
          }
          {
            protectedRoutes.map((e, i) => {
              return (
                <Route
                  key={i}
                  path={e.path}
                  element={<RouteSettings>{e.component}</RouteSettings>}
                />
              )
            })
          }
         
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
