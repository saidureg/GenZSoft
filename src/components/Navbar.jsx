import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/brandLogo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/" className="text-lg">
          Home
        </Link>
      </li>
      <li>
        <Link to="/#About" className="text-lg">
          About
        </Link>
      </li>
      <li>
        <Link to="/#services" className="text-lg">
          Services
        </Link>
      </li>
      <li>
        <Link to="/#portfolio" className="text-lg">
          Portfolio
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent mt-9">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="logo" className="w-36 h-auto" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="py-1 px-3 lg:py-4 lg:px-7 rounded-[100px] bg-white text-[#0948FD] text-lg lg:text-xl text-center">
          Contact US
        </a>
      </div>
    </div>
  );
};

export default Navbar;
