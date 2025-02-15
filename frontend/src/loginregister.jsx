import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";


export default function Loginregister() {
  const words = ["Welcome to Chest Guard! Please register to get started"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, charIndex]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#111827] overflow-hidden">
    {/* Full-page Neon Border Effect */}
    <div className="absolute inset-0 before:absolute before:inset-0 before:border-[3px] before:border-purple-500 before:rounded-3xl before:shadow-[0px_0px_30px_6px_rgba(168,85,247,0.7)] before:pointer-events-none"></div>
  
    {/* Card */}
    <div className="relative w-[450px] h-120 p-6 rounded-3xl bg-[#111827] border-[2px] border-white shadow-[0px_0px_10px_2px_rgba(255,255,255,0.5)] before:absolute before:inset-0 before:rounded-3xl before:border-[2px] before:border-purple-500 before:shadow-[0px_0px_20px_5px_rgba(168,85,247,0.7)] before:pointer-events-none">
      <div className="absolute inset-0 from-slate-900 rounded-3xl"></div>
      <div className="relative flex flex-col items-center">
        <div className="w-[300px] flex justify-center mt-6">
          <img
            src="loginregp.png"
            alt="Login Graphic"
            className="w-full object-contain shadow-[0px_0px_15px_3px_rgba(168,85,247,0.6)] rounded-xl"
          />
        </div>
      </div>
      {/* Animated Text */}
      <div className="mt-8 h-[50px]">
        <h2 className="text-2xl font-semibold text-orange-500 text-center">
          Welcome {text}
          <span className="text-red-500 animate-blink">|</span>
        </h2>
      </div>
      {/* Buttons */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 mt-8 flex justify-center space-x-5">
        <button 
          onClick={() => navigate("/login")}
          className="w-[160px] h-[60px] px-4 py-2 bg-white/20 rounded-lg text-white text-2xl hover:bg-gray-700 transition"
        >
          LOGIN
        </button>
        <button 
          onClick={() => navigate("/registration")}
          className="w-[160px] h-[60px] px-4 py-2 bg-white/20 rounded-lg text-white text-2xl hover:bg-gray-700 transition"
        >
          REGISTER
        </button>
      </div>
    </div>
  </div>
  
  );
}
