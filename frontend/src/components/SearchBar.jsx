import React, { useState } from 'react';

export default function SearchBar({ onFilter }) {
  const [query, setQuery] = useState('');
  const [area, setArea] = useState('');
  const [local, setLocal] = useState('');
  const [skill, setSkill] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    onFilter({ query, area, local, skill });
  }

  function clearAll() {
    setQuery(''); setArea(''); setLocal(''); setSkill('');
    onFilter({ query: '', area: '', local: '', skill: '' });
  }

  return (
    <form
      onSubmit={handleSearch}
      className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white 
                 p-4 rounded-lg shadow-sm flex flex-col sm:flex-row gap-3 items-center
                 transition-all duration-700 ease-in-out"
    >
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Buscar por nome ou resumo"
        className="flex-1 p-2 rounded border border-gray-400 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-black dark:text-white transition-colors duration-700"
      />
      <input
        value={area}
        onChange={e => setArea(e.target.value)}
        placeholder="Área (ex: Desenvolvimento)"
        className="p-2 rounded border border-gray-400 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-black dark:text-white transition-colors duration-700"
      />
      <input
        value={local}
        onChange={e => setLocal(e.target.value)}
        placeholder="Cidade/Estado"
        className="p-2 rounded border border-gray-400 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-black dark:text-white transition-colors duration-700"
      />
      <input
        value={skill}
        onChange={e => setSkill(e.target.value)}
        placeholder="Tecnologia/Skill"
        className="p-2 rounded border border-gray-400 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-black dark:text-white transition-colors duration-700"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Buscar
        </button>
        <button
          type="button"
          onClick={clearAll}
          className="px-4 py-2 rounded border border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          Limpar
        </button>
      </div>
    </form>
  );
}
