import { useEffect } from "react";

export default function Navbar() {
  const toggleDarkTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") == undefined) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className="w-full dark:text-white py-10 flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <div className="dark:bg-white bg-gray-800 rounded-full px-4 py-1 dark:shadow-md dark:shadow-yellow-300/40 ">
            <p className="dark:text-gray-900 text-white font-semibold">
              Chatbot <span className="dark:text-yellow-500 text-red-700">AI</span>
            </p>
          </div>
        </div>
        <div className="space-x-10 dark:text-white text-red-700 ">
          <a className="font-bold" href="#">
            Landing Page
          </a>
          <a href="#">Chat AI</a>
          <a href="#">About Us</a>
        </div>
        <div>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" onClick={toggleDarkTheme}></input>
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
          </label>
        </div>
      </div>
    </nav>
  );
}
