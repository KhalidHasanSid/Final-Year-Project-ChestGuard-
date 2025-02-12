import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-[#087198] py-3 px-6 rounded-full w-3/4 mx-auto mt-7 flex items-center justify-between">
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
          <NavLink to="/checkquestion" className="text-white hover:text-gray-200 transition">
            check new Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/askQuestion" className="text-white hover:text-gray-200 transition">
            awareness update 
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}
