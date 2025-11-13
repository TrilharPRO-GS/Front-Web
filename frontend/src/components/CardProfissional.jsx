import React from 'react';

export default function CardProfissional({ perfil, onClick }){
  return (
    <article onClick={onClick} className="cursor-pointer bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img src={perfil.foto || '/images/avatar1.jpg'} alt={perfil.nome} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h3 className="font-semibold">{perfil.nome}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{perfil.cargo}</p>
        </div>
      </div>
      <p className="mt-3 text-sm">{perfil.resumo}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {perfil.habilidadesTecnicas && perfil.habilidadesTecnicas.slice(0,4).map((s, idx) => (
          <span key={idx} className="text-xs px-2 py-1 rounded-full border">{s}</span>
        ))}
      </div>
    </article>
  );
}
