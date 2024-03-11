import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import "../App.css";
import Login from "./Login";
import { FaFacebook, FaInstagram, FaGithub, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false); // Rename state to avoid conflict
  const toggleMenu = () => {
    setisMenu(!isMenu);
  };
  const navItems = [
    { Path: "/", link: "Home" },
    { Path: "/services", link: "Services" },
    { Path: "/about", link: "About" },
    { Path: "/contact", link: "Contact" },
    { Path: "/blogs", link: "Blogs" },
  ];
  // login details
  const openLogin = ()=>{
    setLoginOpen(true);

  }
  const closeLogin = ()=>{
    setLoginOpen(false);

  }
  

  return (
    <header className="bg-black text-white fixed top-0 right-0 left-0">
      <nav className="px-4 py-3 max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-white">
          Blog <span className="text-orange-500">Master</span>
        </a>
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ Path, link }) => (
            <li className="text-white" key={Path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={Path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}
        <div className="text-white lg:flex gap-5 items-center hidden">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500 ">
            <FaInstagram />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaGithub />
          </a>
          <button onClick={openLogin}  className="bg-orange-500 px-6 py-2 font-medium rounded-xl hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Log In
          </button>
        </div>
        {/* our login page  */}
        <Login isopen={isLoginOpen} onclose={closeLogin} /> {/* Fix: Use isLoginOpen state */}
        {/* mobile menu button only display on mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenu ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/* menu items only for mobiles */}
      <ul
        className={`md:hidden  block py-6 px-4 mt-14 text-white  space-y-4 gap-12 text-lg ${
          isMenu
            ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
            : "hidden"
        }`}
      >
        {navItems.map(({ Path, link }) => (
          <li className="text-white" key={Path}>
            <NavLink onClick={toggleMenu} to={Path}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
