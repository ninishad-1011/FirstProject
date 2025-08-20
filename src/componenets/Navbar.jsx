import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <nav className=" bg-blue-800 text-white py-4 md:py-6 sticky top-0 border-b-4 border-green-400">
        <div className=" container mx-auto flex justify-between items-center">
          <h3>React Prctice</h3>
          {/* mobile Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <IoMdCloseCircle /> : <FaBars />}
            </button>
          </div>

          <ul className="hidden md:flex space-x-4 md:space-x-6 ">
            <ul className="hidden md:flex space-x-4 md:space-x-6">
              <li>
                <Link className="hover:text-green-300">Home</Link>
              </li>
              <li>
                <Link className="hover:text-green-300" to={"product"}>
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-300" to={"blog"}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-300" to={"contact"}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-300" to={"about"}>
                  About
                </Link>
              </li>
            </ul>
          </ul>
          <button className="hidden md:block bg-blue-950 px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-100 hover:text-black">
            Login
          </button>
        </div>
        {/* mobile menu collapsed */}
        <div
          className={`md:hidden w-full absolute bg-blue-600 top-full ${
            isOpen ? "block" : "hidden"
          } `}
        >
          <ul className="flex flex-col items-center py-4">
            <li>
              <Link className="hover:text-green-300">Home</Link>
            </li>
            <li>
              <Link className="hover:text-green-300" to={"product"}>
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-300" to={"blog"}>
                Blogs
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-300" to={"contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-300" to={"about"}>
                About
              </Link>
            </li>

            <li>
              <button className=" bg-blue-950 px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-100 hover:text-black">
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
