import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "react-feather";

// Import developer images
import Developer from "../assets/two.jpg";


const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      name="Home"
      className={`${
        isDarkMode
          ? "bg-gradient-to-b from-black via-black to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-800"
      } h-screen w-full`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            WE are Full Stack Developers
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            We have 4 years of experience building and designing software.
            Currently, we love to work on web applications using technologies like
            React, Laravel, and MySql.
          </p>

          <div>
            <Link
              to="Projects"
              smooth
              duration={500}
              className={`group ${
                isDarkMode ? "text-white" : "text-gray-800"
              } w-fit px-6 py-3 my-2 flex items-center rounded-md ${
                isDarkMode
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                  : "bg-gradient-to-r from-cyan-300 to-blue-300 "
              } cursor-pointer`}
            >
              Projects
              <span
                className={`group-hover:rotate-90 duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/3 flex items-center justify-center relative">
          <button
            onClick={toggleTheme}
            className="text-3xl text-gray-500 hover:text-gray-700 transition absolute top-4 right-4"
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </button>

          <img
            src={Developer}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;


