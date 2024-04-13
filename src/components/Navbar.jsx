import React from "react";
import { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Our Services" },
    { id: 3, text: "Partners" },
    { id: 4, text: "Blog" },
    { id: 5, text: "Register/Log In", href: "/login" },
  ];
  return (
    <div className="shadow-md z-40 relative">
      <div className="max-w-[1024px] flex justify-between items-center h-16 mx-auto px-4 ">
        <Link to="/">
          <h1 className=" text-3xl font-bold ">VitalCare</h1>
        </Link>
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-2 hover:bg-blue-500 rounded-xl m-2 cursor-pointer hover:text-white"
            >
              {item.href ? <Link to={item.href}>{item.text}</Link> : item.text}
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={20} className="z-40 relative" />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-full h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold m-4">VitalCare</h1>

          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-teal-200 duration-100 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
