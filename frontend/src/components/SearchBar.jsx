import React, { useState, useMemo } from 'react';

export default function SearchBar({ perfis, onFilter, dark }) {
  const [query, setQuery] = useState('');
  const [area, setArea] = useState('');
  const [local, setLocal] = useState('');
  const [skill, setSkill] = useState('');

  // Extrair listas automáticas
  const { areas, cidades, tecnologias } = useMemo(() => {
    const a = new Set();
    const c = new Set();
    const t = new Set();

    perfis.forEach(p => {
      if (p.area) a.add(p.area);
      if (p.localizacao) c.add(p.localizacao);
      if (p.habilidadesTecnicas)
        p.habilidadesTecnicas.forEach(h => t.add(h));
    });

    return {
      areas: Array.from(a).sort(),
      cidades: Array.from(c).sort(),
      tecnologias: Array.from(t).sort(),
    };
  }, [perfis]);

  function handleSearch(e) {
    e.preventDefault();
    onFilter({ query, area, local, skill });
  }

  function clearAll() {
    setQuery('');
    setArea('');
    setLocal('');
    setSkill('');
    onFilter({ query: '', area: '', local: '', skill: '' });
  }

  return (
    <div
      className={`mb-8 space-y-4 p-6 rounded-lg border shadow-sm transition-all duration-700
        ${dark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-200 border-gray-300 text-black'}
      `}
    >
      {/* Campo de Busca principal */}
      <div>
        <label className="block text-sm font-medium mb-2">
          🔍 Buscar por nome, cargo ou tecnologia
        </label>

        <input
          type="text"
          placeholder="Digite sua busca..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`w-full px-4 py-2 rounded-md border focus:ring-2 transition-colors duration-700
            ${dark
              ? 'bg-gray-700 text-white border-gray-600 focus:ring-indigo-400'
              : 'bg-white text-black border-gray-500 focus:ring-indigo-600'
            }
          `}
        />
      </div>

      {/* Grid dos filtros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Área */}
        <div>
          <label className="block text-sm font-medium mb-2">🏢 Área Profissional</label>
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className={`w-full px-4 py-2 rounded-md border transition-colors duration-700 cursor-pointer
              ${dark
                ? 'bg-gray-700 text-white border-gray-600'
                : 'bg-white text-black border-gray-500'
              }
            `}
          >
            <option value="">Todas as áreas</option>
            {areas.map((a, i) => (
              <option key={i} value={a}>{a}</option>
            ))}
          </select>
        </div>

        {/* Cidade */}
        <div>
          <label className="block text-sm font-medium mb-2">📍 Cidade</label>
          <select
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            className={`w-full px-4 py-2 rounded-md border transition-colors duration-700 cursor-pointer
              ${dark
                ? 'bg-gray-700 text-white border-gray-600'
                : 'bg-white text-black border-gray-500'
              }
            `}
          >
            <option value="">Todas as cidades</option>
            {cidades.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Tecnologia */}
        <div>
          <label className="block text-sm font-medium mb-2">💻 Tecnologia</label>
          <select
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className={`w-full px-4 py-2 rounded-md border transition-colors duration-700 cursor-pointer
              ${dark
                ? 'bg-gray-700 text-white border-gray-600'
                : 'bg-white text-black border-gray-500'
              }
            `}
          >
            <option value="">Todas as tecnologias</option>
            {tecnologias.map((t, i) => (
              <option key={i} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Botões */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={handleSearch}
          className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Buscar
        </button>

        {(query || area || local || skill) && (
          <button
            onClick={clearAll}
            className={`flex-1 px-4 py-2 rounded-md font-medium transition-colors duration-700 cursor-pointer
              ${dark
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-white text-black hover:bg-gray-300'
              }
            `}
          >
            ✕ Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
}
