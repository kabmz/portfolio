import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTheme } from "./ThemeContext"; // Import useTheme hook

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { isDarkMode } = useTheme(); // Use useTheme hook

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className={`flex justify-between items-center w-full h-20 px-4 text-white ${isDarkMode ? "bg-black" : "bg-white"} fixed`}>
      <div>
        <h1 className={`text-5xl font-signature ml-2 ${isDarkMode ? "text-white" : "text-black"}`}>CV</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium ${isDarkMode ? "text-gray-500" : "text-black"} hover:scale-105 duration-200`}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer pr-4 z-10 ${isDarkMode ? "text-gray-500" : "text-black"} md:hidden`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen ${isDarkMode ? "bg-gradient-to-b from-black to-gray-800 text-gray-500" : "bg-white text-black"}`}>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl ${isDarkMode ? "text-white" : "text-black"}`}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

