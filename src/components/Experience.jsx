import React from "react";
import { useTheme } from "./ThemeContext";
import html from "../assets/Html.png";
import css from "../assets/Css.png";
import javascript from "../assets/js.png";
import reactImage from "../assets/React.png";
import Mysql from "../assets/Mysql.png";
import Dart from "../assets/Dart.png";
import github from "../assets/github.png";
import Flutter from "../assets/Flutter.png";
import laravel from "../assets/Laravel.png";
import php from "../assets/php.png";
import python from "../assets/python.png";

const Experience = () => {
  const { isDarkMode } = useTheme();
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Dart,
      title: "Dart",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Flutter,
      title: "Flutter",
      style: "shadow-white", // No change for white shadow
    },
    {
      id: 7,
      src: Mysql,
      title: "MySql",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
    id: 9,
    src: laravel,
    title: "Laravel",
    style: "shadow-white", 
  },
  {
    id: 10,
    src: php,
    title: "Php",
    style: "shadow-pink-400",
  },
  {
    id: 11,
    src: python,
    title: "Python",
    style: "shadow-gray-400",
  },
  ];

  return (
    <div
    name="Experience"
    className={`${
      isDarkMode
        ? "bg-gradient-to-b from-gray-800 to-black text-white"
        : "bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 text-gray-800"
    } h-auto w-full`}  
  >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
