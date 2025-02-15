import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-white py-3 px-6 shadow-lg rounded-full w-3/4 mx-auto mt-7 flex items-center justify-between border border-purple-500 border-[4px] relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:border-[5px] after:border-purple-500 after:blur-lg after:opacity-90 after:shadow-[0_0_25px_#a855f7] after:pointer-events-none">
    {/* Logo */}
    <NavLink to="/home" className="flex items-center">
      <img 
        src="https://img.freepik.com/premium-vector/winged-sword-with-caduceus-cross_837966-1224.jpg?semt=ais_hybrid" 
        alt="Logo"
        className="w-14 h-10 object-cover rounded-full"
      />
    </NavLink>
  
    {/* Navigation Links */}
    <ul className="flex space-x-6 justify-center text-lg">
      <li>
        <NavLink to="/detection" className="text-gray-900 hover:text-purple-600 font-medium transition">
          Detection
        </NavLink>
      </li>
      <li>
        <NavLink to="/askQuestion" className="text-gray-900 hover:text-purple-600 font-medium transition">
          Ask Question
        </NavLink>
      </li>
      <li>
        <NavLink to="/faqs" className="text-gray-900 hover:text-purple-600 font-medium transition">
          FAQs
        </NavLink>
      </li>
      <li>
        <NavLink to="/articles" className="text-gray-900 hover:text-purple-600 font-medium transition">
          Articles & Research
        </NavLink>
      </li>
    </ul>
  </nav>
  

  );
}
