// src/components/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Product from "./Product";
import Blogs from "./Blogs";
import Contact from "./Contact";
import About from "./About";



; // The corrected line

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
            Component: Contact
        },
        {
            path:'about',
            Component: About
        }
    ]
   
  }
]);

export default router;