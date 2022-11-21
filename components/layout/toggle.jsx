import React from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);
  return (
    <div className="ml-4">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="btn text-yellow-400 dark:text-yellow-400 bg-yellow-900 shadow-none p-1 focus:outline-none text-lg rounded-md outline-none ring-transparent cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="btn text-purple-900 bg-purple-400 focus:outline-none shadow-none p-1 text-lg rounded-md outline-none ring-transparent cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Toggle;
