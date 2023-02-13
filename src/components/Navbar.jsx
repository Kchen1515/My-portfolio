import { useState } from "react";

import logo  from '../assets/logo.png'
import { navLinks } from "../constants";
import Hamburger from 'hamburger-react'
import '../../styles/navbar.css'


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-6">
      <img src={logo} alt="kyc-logo" className="w-[150px]" />
      <ul className="hidden sm:flex justify-center items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-gray-500" : "text-black"
            } mr-8 font-bold hover:text-gray-500 text-[1.15rem]`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <button className=" font-bold bg-transparent hover:bg-gray-500 text-black hover:text-white py-2 px-4 border-2 border-black hover:border-black rounded font-poppins ">
          <a href="src/assets/Kong Yu Chen Resume.pdf" download>Resume</a>
        </button>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-10">
        <div className={`z-10`}>
          <Hamburger toggled={toggle} toggle={setToggle} color={toggle ? "white" : "black"}/>
        </div>
        <div
          className={` flex p-6 bg-black-gradient absolute w-[50%] right-[-50%] top-0 min-w-[140px] h-full transition-transform duration-700 sidebar bg-gray-500 ${toggle ? 'transform translate-x-[-100%]' : null}`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col gap-5">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[1.5rem] ${
                  active === nav.title ? "text-white" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={(e) => {
                  setActive(nav.title)
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;