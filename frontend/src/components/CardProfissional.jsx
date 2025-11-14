import React from 'react';

export default function CardProfissional({ perfil, onClick, dark }) {
  return (
    <article
      onClick={onClick}
      className={`
        cursor-pointer rounded-xl p-5 shadow-md border
        transition-all duration-500 hover:shadow-xl hover:-translate-y-1
        ${dark 
          ? "bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
          : "bg-gray-200 border-gray-300 text-black hover:bg-gray-100"
        }
      `}
    >
      {/* FOTO + INFO */}
      <div className="flex items-center gap-4">
        <img
          src={perfil.foto || "/images/avatar1.jpg"}
          alt={perfil.nome}
          className="w-16 h-16 rounded-full object-cover shadow"
        />

        <div>
          <h3 className="text-lg font-bold leading-tight">{perfil.nome}</h3>
          <p className="text-sm opacity-80">{perfil.cargo}</p>

          <p className="text-xs mt-1 opacity-70 flex items-center gap-1">
            📍 {perfil.localizacao}
          </p>
        </div>
      </div>

      {/* RESUMO */}
      <p className="mt-3 text-sm opacity-90 line-clamp-3">
        {perfil.resumo}
      </p>

      {/* HABILIDADES TÉCNICAS */}
      {perfil.habilidadesTecnicas && (
        <div className="mt-3 flex flex-wrap gap-2">
          {perfil.habilidadesTecnicas.slice(0, 4).map((s, idx) => (
            <span
              key={idx}
              className={`
                px-3 py-1 text-xs font-medium rounded-full
                ${dark 
                  ? "bg-indigo-900 text-indigo-200"
                  : "bg-indigo-100 text-indigo-700"
                }
              `}
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {/* TEXTO FINAL */}
      <p
        className={`
          text-xs mt-4 font-semibold transition
          ${dark ? "text-indigo-300" : "text-indigo-700"}
        `}
      >
        Clique para ver perfil completo →
      </p>
    </article>
  );
}
