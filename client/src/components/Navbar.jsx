import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import logo from "../images/circular logos.png";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-scroll";

function Navbar() {
  const location = useLocation();
  const { user } = useContext(Context);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    if (location.pathname !== "/") {
      window.location.href = "/";
    }
  };

  const navItems = [
    { link: "Service", path: "Service" },
    { link: "About", path: "About" },
    { link: "Project", path: "Project" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0 border-b">
        <div className="text-xl container max-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                className="w-8 inline-block items-center"
                src={logo}
                alt=""
              />
            </a>
            <ul className="hidden md:flex space-x-12">
              <Link
                onClick={handleNavLinkClick}
                to={"home"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-90}
                key="Overview"
                className="block hover:text-gray-300 text-secondary cursor-pointer"
              >
                Home
              </Link>

              {location.pathname === "/"
                ? navItems.map(({ link, path }) => (
                    <Link
                      onClick={handleNavLinkClick}
                      to={path}
                      key={link}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      className="block hover:text-gray-300 text-secondary cursor-pointer"
                    >
                      {link}
                    </Link>
                  ))
                : null}
              <NavLink
                to="/event"
                className="block hover:text-gray-300 text-secondary cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Event
              </NavLink>
              <NavLink
                to="/contact"
                className="block hover:text-gray-300 text-secondary cursor-pointer"
                onClick={handleMenuItemClick}
              >
                Contact us
              </NavLink>
            </ul>
          </div>
          <div className="space-x-12 hidden md:flex items-center">
            {!user ? (
              <NavLink to="/login">
                <button className="ring-[#5B5AA3] text-secondary px-4 py-2 transition-all duration-300 rounded hover:text-primary active:text-secondary hover:bg-white active:bg-white hover:ring-1 ">
                  Sign in
                </button>
              </NavLink>
            ) : null}
            {!user ? (
              <NavLink to="/signup">
                <button className="bg-secondary text-white  px-4 py-2 transition-all duration-300 rounded  hover:bg-primary ">
                  Sign up
                </button>
              </NavLink>
            ) : null}
          </div>
          {user ? (
            <NavLink
              to={user.user && (user.user.role ? "/admin" : "/user")}
              className="ml-2"
              onClick={handleMenuItemClick}
            >
              <span className="hidden md:block material-symbols-outlined text-5xl text-secondary">
                account_circle
              </span>
            </NavLink>
          ) : null}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none focus:text-gray-300 "
            >
              {isMenuOpen ? (
                <FaX className="text-black text-[40px] text-gray-500" />
              ) : (
                <FaBars className="text-[3] text-[40px] text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-5 px-4 pt-[150px] pb-5 bg-[#1e7992] ${
          isMenuOpen
            ? "block fixed top-0 right-0 left-0 indent-6 overflow-hidden "
            : "hidden"
        }`}
      >
        {" "}
        {user ? (
          <NavLink
            to={user.user && (user.user.role ? "/admin" : "/user")}
            className="ml-2"
            onClick={handleMenuItemClick}
          >
            <span className=" material-symbols-outlined text-5xl text-secondary flex justify-start">
              account_circle
            </span>
          </NavLink>
        ) : null}
        <Link
          onClick={handleNavLinkClick}
          to={"home"}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-90}
          key="Overview"
          className="block text-xl md:hidden text-white hover:text-gray-300 cursor-pointer "
        >
          Home
        </Link>
        {navItems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-90}
            key={link}
            to={path}
            className="block text-xl md:hidden text-white hover:text-gray-300 cursor-pointer "
            onClick={() => {
              setMenuOpen(false);
              handleNavLinkClick(path);
            }}
          >
            {link}
          </Link>
        ))}
        <NavLink
          to="/event"
          className="block text-xl md:hidden text-white hover:text-gray-300 cursor-pointer "
          onClick={handleMenuItemClick}
        >
          Event
        </NavLink>
        <NavLink
          to="/contact"
          className="block text-xl md:hidden text-white hover:text-gray-300 cursor-pointer "
          onClick={handleMenuItemClick}
        >
          Contact us
        </NavLink>
        {!user?(<NavLink
          className="block md:hidden text-xl flex justify-center text-white hover:text-gray-300 cursor-pointer "
          to="/login"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Login
        </NavLink>):null}
       { !user? (<NavLink
          className="block md:hidden text-xl text-white hover:text-gray-300 cursor-pointer ring-2 cursor-pointer  flex justify-center ring-white rounded "
          to="/signup"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Sign Up
        </NavLink>):null}
      </div>
    </>
  );
}

export default Navbar;
