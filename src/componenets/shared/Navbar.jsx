import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const { user, handleSignout } = useContext(AuthContext); // make sure handleSignout exists in AuthProvider

  const toggleMenu = () => setOpen((v) => !v);

  const handleLogout = () => {
    handleSignout()
      .then(() => alert("Logged out successfully"))
      .catch((err) => console.log(err));
  };

  const navLinks = ["Home", "Products", "Blogs", "Contact", "About"];
  const navPaths = ["/", "/product", "/blog", "/contact", "/about"];

  return (
    <nav className="bg-black/60 text-white py-4 md:py-6 fixed w-full top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 flex items-center gap-4">
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((name, idx) => (
            <li key={idx}>
              <Link
                to={navPaths[idx]}
                className={`${location.pathname === navPaths[idx] ? "text-green-500" : "hover:text-green-300"}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3">
          {/* Desktop Login / User */}
          {user ? (
            <div className="flex items-center gap-2">
              <span>{user?.email}</span>
              <button
                onClick={handleLogout}
                className="px-2 py-1 bg-red-500 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden md:block">
              <button
                className={`px-4 py-2 rounded-2xl cursor-pointer ${
                  location.pathname === "/login"
                    ? "bg-green-500 text-white"
                    : "bg-blue-950 hover:bg-blue-100 hover:text-black"
                }`}
              >
                Login
              </button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden inline-flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <IoMdCloseCircle size={28} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute left-0 right-0 bg-blue-600 border-t border-blue-700 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center py-4 space-y-3">
          {navLinks.map((name, idx) => (
            <li key={idx}>
              <Link
                to={navPaths[idx]}
                className={`${location.pathname === navPaths[idx] ? "text-green-500" : "hover:text-green-300"}`}
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}

          <li>
            {user ? (
              <div className="flex items-center gap-2">
                <span>{user?.email}</span>
                <button
                  onClick={() => { handleLogout(); setOpen(false); }}
                  className="px-2 py-1 bg-red-500 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" onClick={() => setOpen(false)}>
                <button
                  className={`px-4 py-2 rounded-2xl cursor-pointer ${
                    location.pathname === "/login"
                      ? "bg-green-500 text-white"
                      : "bg-blue-950 hover:bg-blue-100 hover:text-black"
                  }`}
                >
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
