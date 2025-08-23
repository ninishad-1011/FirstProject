import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            We provide high-quality products and services to help you achieve your goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link to="/" className="hover:text-green-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-green-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-green-500 transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-500 transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
          <p className="text-gray-400">Address: 123 Main Street, City, Country</p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
