import React from 'react';
import Trilhar from '../assets/trilhar.png';

export default function Header({ dark, setDark }) {
  const toggleDark = () => setDark(!dark);

  return (
    <header className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-3 justify-between bg-[#21755c] text-white">
      <img src={Trilhar} alt="Trilhar" className="w-20 h-20" />

      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold">TrilharPro</h1>
        <p className="text-sm">O futuro do trabalho</p>
      </div>

      <button
        onClick={toggleDark}
        className="px-3 py-1 rounded-md border border-white bg-white/10 hover:bg-white/20 transition flex items-center gap-2"
      >
        {dark ? (
          <>
            ☀️ <span className="hidden sm:inline">Modo Claro</span>
          </>
        ) : (
          <>
            🌙 <span className="hidden sm:inline">Modo Escuro</span>
          </>
        )}
      </button>
    </header>
  );
}
