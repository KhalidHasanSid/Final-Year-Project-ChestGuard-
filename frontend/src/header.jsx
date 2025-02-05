import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-[#087198] py-3 px-6 rounded-full w-3/4 mx-auto mt-7">
      <div className=" rounded-full w-3/4 ml-auto">
        <ul className="flex space-x-6 justify-center text-lg">
          <li>
            <NavLink
              to="/detection"
              className="text-white hover:text-gray-200 transition"
            >
              Detection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/askQuestion"
              className="text-white hover:text-gray-200 transition"
            >
              Ask Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/faqs" className="text-white hover:text-gray-200 transition">
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink to="/faqs" className="text-white hover:text-gray-200 transition">
              Article&Researches
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
