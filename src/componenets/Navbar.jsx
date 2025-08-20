import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {

    const[isOpen, setOpen] = useState(false);
    const toggleMenu = () =>{
        setOpen(!isOpen)
    }
  return (
    <>
      <nav className=" bg-green-800 text-white py-4 md:py-6">
        <div className=" container mx-auto flex justify-between items-center">
          <h3>React Prctice</h3>
            {/* mobile Button */}
            <div>
                <button onClick={toggleMenu}>
                    {
                        isOpen ?  <IoMdCloseCircle />: <FaBars />
                    }
                 
                 
                </button>
            </div>

          <ul className="flex space-x-4 md:space-x-6">
            <li>Home</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
          <button>Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
