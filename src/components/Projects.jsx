import React from "react";
import Stage from "../assets/Stage.png";
import Todolist from "../assets/Todolist.png";
import Mean from "../assets/Mean.png";
import xo from "../assets/xo.png";
import stage1 from "../assets/stage1.png";
import seg from "../assets/segmentation.png";
import { useTheme } from "./ThemeContext";

const Projects = () => {
  const { isDarkMode } = useTheme();

  const ProjectsData = [
    { id: 1, src: Stage, description: "A project For Internship application with bootstrap and php" },
    { id: 2, src: Todolist, description: "A Todolist project with react." },
    { id: 3, src: Mean, description: "A project focused on calculating the average mark of the last project for Master 2 with dart and flutter." },
    { id: 4, src: stage1, description: "A project for Internship application with laravel." },
    { id: 5, src: xo, description: "A tic tac teo game with javascript." },
    { id: 6, src: seg, description: "A project of Region growing image segmentation with python  ." },
  ];

  return (
    <div> {/* Single parent element */}
      <div
        name="Projects"
        className={`${
          isDarkMode
            ? "bg-gradient-to-b from-black via-black to-gray-800 text-white"
            : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-800"
        } h-[1000px] w-full`}
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ProjectsData.map(({ id, src, description }, index) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg relative">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 flex flex-col items-center justify-center bg-opacity-75 p-4 rounded-md">
                    <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-md duration-200">
                      <a href="https://github.com/kabmz/tasklist-app" target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p
                    className={`text-sm font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                    style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;















