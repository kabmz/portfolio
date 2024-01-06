import React from "react";
import { useTheme } from "./ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      name="About"
      className={`${
        isDarkMode
          ? "bg-gradient-to-b from-gray-800 to-black text-white"
          : "bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 text-gray-800"
      } w-full h-screen`}
    
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        We are university students passionate about software development, with a specific focus on crafting user interfaces (UI) for websites and applications. Our goal is to contribute to the overall success of products by creating user-friendly and appealing interfaces. Feel free to explore some of our projects in the dedicated section.
        </p>

        <br />

        <p className="text-xl">
        We are open to new professional opportunities where we can make a meaningful contribution, learn, and grow. If you have an opportunity that aligns with our skills and experience, please don't hesitate to get in touch. We look forward to the possibility of collaborating and bringing our unique perspectives to your team.
        </p>
      </div>
    </div>
  );
};

export default About;