import React, { useState } from 'react';

export default function SearchBar({ onFilter }){
  const [query, setQuery] = useState('');
  const [area, setArea] = useState('');
  const [local, setLocal] = useState('');
  const [skill, setSkill] = useState('');

  function handleSearch(e){
    e.preventDefault();
    onFilter({ query, area, local, skill });
  }

  function clearAll(){
    setQuery(''); setArea(''); setLocal(''); setSkill('');
    onFilter({ query: '', area: '', local: '', skill: '' });
  }

  return (
    <form onSubmit={handleSearch} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col sm:flex-row gap-3 items-center">
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar por nome ou resumo" className="flex-1 p-2 rounded border" />
      <input value={area} onChange={e => setArea(e.target.value)} placeholder="Área (ex: Desenvolvimento)" className="p-2 rounded border" />
      <input value={local} onChange={e => setLocal(e.target.value)} placeholder="Cidade/Estado" className="p-2 rounded border" />
      <input value={skill} onChange={e => setSkill(e.target.value)} placeholder="Tecnologia/Skill" className="p-2 rounded border" />
      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white">Buscar</button>
        <button type="button" onClick={clearAll} className="px-4 py-2 rounded border">Limpar</button>
      </div>
    </form>
  );
}
