import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
    <button
      className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg
        hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-red-300
        transition-transform duration-300 transform hover:scale-105 shadow-md"
      onClick={handleLogout}
    >
      Logout
    </button>
  </div>
  
  );
}

export default Logout;
