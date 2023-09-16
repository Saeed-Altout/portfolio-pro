import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../data/dummy";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../data/Logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center ">
        <div className="h-[92px] flex justify-between items-center">
          <a className="w-[40px]" href="#/">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            type="button"
            className="md:hidden text-purple-500 text-4xl"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} `}>
          <ul className="flex flex-col md:flex-row">
            {links.map((link, index) => (
              <Link
                className="py-5 text-gradient text-lg font-semibold  md:mx-4 md:my-0 capitalize cursor-pointer"
                to={link.target}
              >
                {link.target}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
