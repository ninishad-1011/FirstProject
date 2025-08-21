import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState();
  const location = useLocation(); 

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-blue-800 text-white py-4 md:py-6 sticky top-0 border-b-4 border-green-400">
        <div className="container mx-auto flex justify-between items-center">
         <img className="h-[80px] m-0 p-0" src="./src/assets/logo.png" alt="" />
          {/* mobile Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <IoMdCloseCircle /> : <FaBars />}
            </button>
          </div>

          <ul className="hidden md:flex space-x-4 md:space-x-6">
            <li>
              <Link
                to="/"
                onClick={() => handleClick("/")}
                className={`${
                  location.pathname === "/" ? "text-green-500" : "hover:text-green-300"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="product"
                onClick={() => handleClick("product")}
                className={`${
                  location.pathname === "/product" ? "text-green-500" : "hover:text-green-300"
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                onClick={() => handleClick("blog")}
                className={`${
                  location.pathname === "/blog" ? "text-green-500" : "hover:text-green-300"
                }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                onClick={() => handleClick("contact")}
                className={`${
                  location.pathname === "/contact" ? "text-green-500" : "hover:text-green-300"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="about"
                onClick={() => handleClick("about")}
                className={`${
                  location.pathname === "/about" ? "text-green-500" : "hover:text-green-300"
                }`}
              >
                About
              </Link>
            </li>
          </ul>

          <button className="hidden md:block bg-blue-950 px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-100 hover:text-black">
            Login
          </button>
        </div>

        {/* mobile menu collapsed */}
        <div
          className={`md:hidden w-full absolute bg-blue-600 top-full ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center py-4">
            <li>
              <Link
                to="/"
                onClick={() => handleClick("/")}
                className={`${
                  location.pathname === "/" ? "text-green-500" : "hover:text-green-300"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="product"
                onClick={() => handleClick("product")}
                className={`${
                  location.pathname === "/product" ? "text-green-500" : "hover:text-green-300"
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                onClick={() => handleClick("blog")}
                className={`${
                  location.pathname === "/blog" ? "text-green-500" : "hover:text-green-300"
                }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                onClick={() => handleClick("contact")}
                className={`${
                  location.pathname === "/contact" ? "text-green-500" : "hover:text-green-300"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="about"
                onClick={() => handleClick("about")}
                className={`${
                  location.pathname === "/about" ? "text-green-500" : "hover:text-green-300"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <button className="bg-blue-950 px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-100 hover:text-black">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
