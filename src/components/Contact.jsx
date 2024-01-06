import React from "react";
import { useTheme } from "./ThemeContext";

const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      name="Contact"
      className={`${
        isDarkMode
          ? "bg-gradient-to-b from-black via-black to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-800"
      } h-screen w-full`}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/b759cc36-8a94-436a-8392-608bae7cd465"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`p-2 bg-transparent border-b-2 rounded-md ${
                isDarkMode ? "text-white" : "text-gray-800"
              } focus:outline-none focus:border-cyan-500`}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className={`my-4 p-2 bg-transparent border-b-2 rounded-md ${
                isDarkMode ? "text-white" : "text-gray-800"
              } focus:outline-none focus:border-cyan-500`}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className={`p-2 bg-transparent border-b-2 rounded-md ${
                isDarkMode ? "text-white" : "text-gray-800"
              } focus:outline-none focus:border-cyan-500`}
            ></textarea>

            <button className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300`}>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
