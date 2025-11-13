import React from 'react';

export default function Header({ dark, setDark }){
  return (
    <header className="flex items-center justify-between py-4 bg-[#21755c]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-linear-to-r from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">TP</div>
        <h1 className="text-2xl font-semibold">TrilharPro</h1>
        <span className="text-sm text-white ml-2 sm:inline flex-col">O futuro do trabalho</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded-md border"
        >
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
}
