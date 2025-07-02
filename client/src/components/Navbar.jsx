import { motion } from "motion/react";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// const navlinks = [
//   {
//     text: "Home",
//     path: "",
//   },
//   {
//     text: "About",
//     path: "about",
//   },
//   {
//     text: "Projects",
//     path: "projects",
//   },
//   {
//     text: "Contact",
//     path: "contact",
//   },
// ];

export default function Navbar({navlinks}) {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="py-6">
      <nav className="max-w-xl mx-auto font-minecraft rounded-full bg-gray-100 flex p-1 items-center justify-center">
        {navlinks.map((navlink, idx) => (
          <NavLink
            key={navlink.text}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="w-full relative group text-center py-3 text-neutral-500"
            to={navlink.path}
          >
            <span className="relative text-xs xl:text-md font-bold group-hover:text-neutral-300 text-neutral-700 z-20">
              {navlink.text}
            </span>

            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 rounded-full w-full h-full bg-black"
              ></motion.div>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
