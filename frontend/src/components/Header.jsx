import React from 'react';
import Trilhar from '../assets/trilhar.png';

export default function Header({ dark, setDark }) {
  const toggleDark = () => setDark(!dark);

  return (
    <header
      className={`flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-3 justify-between 
                  transition-colors duration-700 ease-in-out
                  ${dark ? 'bg-[#21755c] text-black' : 'bg-[#21755c] text-white'}`}
    >
      <img src={Trilhar} alt="Trilhar" className="w-20 h-20 transition-all duration-700" />

      <div className="flex flex-col items-center transition-colors duration-700">
        <h1 className={`text-2xl font-semibold ${dark ? 'text-black' : 'text-white'}`}>TrilharPro</h1>
        <p className={`text-sm ${dark ? 'text-black' : 'text-white'}`}>O futuro do trabalho</p>
      </div>

      <button
        onClick={toggleDark}
        className={`px-3 py-2 rounded-full font-semibold flex items-center gap-2 
          transition-all duration-500 ease-in-out
          ${dark
            ? 'bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer'
            : 'bg-gray-800 text-white hover:bg-gray-600 cursor-pointer'}`}
      >
        {dark ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
