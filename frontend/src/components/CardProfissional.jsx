import React from 'react';

export default function CardProfissional({ perfil, onClick, dark }) {
  return (
    <article
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-lg shadow hover:shadow-lg
                 ${dark ? 'bg-gray-800 text-white' : 'bg-gray-400 text-black'}
                 transition-all duration-700 ease-in-out`}
    >
      <div className="flex items-center gap-4">
        <img
          src={perfil.foto || '/images/avatar1.jpg'}
          alt={perfil.nome}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{perfil.nome}</h3>
          <p className="text-sm">{perfil.cargo}</p>
          <p className="text-xs mt-2 flex items-center gap-1">📍 {perfil.localizacao}</p>
        </div>
      </div>
      <p className="mt-3 text-sm">{perfil.resumo}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {perfil.habilidadesTecnicas &&
          perfil.habilidadesTecnicas.slice(0, 4).map((s, idx) => (
            <span
              key={idx}
              className={`text-xs px-2 py-1 rounded-full border ${dark ? ' border-black' : 'border-gray-200'}`}
            >
              {s}
            </span>
          ))}
      </div>
    </article>
  );
}
