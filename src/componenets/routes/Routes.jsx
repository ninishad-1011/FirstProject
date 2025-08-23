
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../auth/Login";
import Register from "../auth/Register";





const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path:'product',
            Component: Product
        },
        {
            path:'blog',
            Component: Blogs
        },
        {
            path:'contact',
            Component:Contact
        },
        {
            path:'about',
            Component: About
        },
        {
          path:'login',
          Component: Login
        },
         {
          path:'register',
          Component: Register
        }

    ]
   
  }
]);

export default router;