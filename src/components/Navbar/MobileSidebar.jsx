import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-20 bg-red-500 p-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png"
          alt="Menu"
          className="w-6 h-6"
        />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 max-w-[280px] w-full h-screen bg-gray-900/80 backdrop-blur-md shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 bg-gray-800 py-2 px-3 rounded-full text-white hover:bg-red-500 transition"
        >
          ✕
        </button>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          {["Home", "Feature", "Card", "About Us", "FAQ's"].map(
            (item, index) => (
              <li key={index} className="relative group w-full">
                <Link
                  to="/"
                  className="block text-lg text-white py-2 px-6 rounded-md text-center hover:text-red-400 transition duration-300"
                >
                  {item}
                </Link>
                {/* Glow Effect */}
                <span className="absolute inset-0 bg-red-500 opacity-0 blur-xl rounded-md group-hover:opacity-50 transition duration-300"></span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
