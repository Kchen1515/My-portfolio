import { useState } from "react";

import logo  from '../assets/logo.png'
import { navLinks } from "../constants";
import Hamburger from 'hamburger-react'
import Switcher from './Switcher'


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="kyc-logo" className="w-[124px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-blue-800" : "text-black"
            } mr-8`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <button className="bg-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-4 border-2 border-blue-800 hover:border-transparent rounded font-poppins ">
          Resume
        </button>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Hamburger toggled={toggle} toggle={setToggle} color="black" />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
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