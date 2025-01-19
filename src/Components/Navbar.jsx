import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" p-4 rounded-bl-full w-full ">
      <ul className="flex justify-end gap-5 mr-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#42f5ec] " : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "text-[#42f5ec] " : "text-white"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? "text-[#42f5ec] " : "text-white"
          }
        >
          project
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#42f5ec]" : "text-white"
          }
        >
          Contact
        </NavLink> */}
      </ul>
    </div>
  );
};

export default Navbar;
