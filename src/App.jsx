import React, { useEffect, useState } from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className={`min-h-screen ${theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-gray-900"}`}>
        <button
          onClick={toggleTheme}
          className={`fixed top-4 right-4 p-2 rounded-full ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
          }`}
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 3V1L9 4l3 3V4a9 9 0 0 0 0 18 9 9 0 0 0 0-18z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 6a6 6 0 0 0 0 12 6 6 0 0 0 0-12zm0 14a8 8 0 0 1-7.72-10.56A9.958 9.958 0 0 1 12 2a9.958 9.958 0 0 1 7.72 7.44A8 8 0 0 1 12 20z" />
            </svg>
          )}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Toaster />
      </div> 
    </>
  );
}

export default App;