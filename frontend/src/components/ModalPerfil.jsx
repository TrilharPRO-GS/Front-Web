import React, { useState } from "react";

export default function ModalPerfil({ perfil, onClose, dark }) {
  const [recommendationSent, setRecommendationSent] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleRecommend = () => {
    setRecommendationSent(true);
    setTimeout(() => setRecommendationSent(false), 2000);
  };

  const handleMessage = () => {
    const msg = prompt(`Enviar mensagem para ${perfil.nome}:`);
    if (msg) alert('Mensagem enviada: ' + msg);
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 2000);
  };

  // Fecha ao clicar fora
  function handleClickOutside(e) {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  }

  return (
    <div
      id="modal-overlay"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-all duration-700 overflow-y-auto"
    >
      <div
        className={`rounded-xl shadow-2xl max-w-3xl w-full mx-auto overflow-visible transition-all duration-700 relative 
        ${dark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
        onClick={(e) => e.stopPropagation()} // impede o fechamento interno
      >
        {/* HEADER */}
        <div className="relative h-85 bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-end overflow-visible">
          <img
            src={perfil.foto || "/images/avatar1.jpg"}
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg ml-6 mb-4 object-cover"
          />

          {/* ✅ BOTÃO DE FECHAR */}
          <button
            onClick={onClose}
            className="ml-147 mb-23 text-white bg-black/20 backdrop-blur-sm hover:bg-white/20 
             rounded-full p-2 text-xl transition cursor-pointer"
          >
            ✕
          </button>

          
        </div>

        {/* CONTEÚDO */}
        <div className="p-6 space-y-6">
          {/* Nome + Título */}
          <div>
            <h2 className="text-3xl font-bold">{perfil.nome}</h2>
            <p className="text-lg text-indigo-500 font-semibold mt-1">
              {perfil.cargo}
            </p>
            <p className="opacity-70 mt-1">📍 {perfil.localizacao}</p>
            <p className="opacity-80 text-sm mt-2 italic">{perfil.resumo}</p>
          </div>

          {/* GRID PRINCIPAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Esquerda */}
            <div>
              <h3 className="text-lg font-bold mb-2">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {perfil.habilidadesTecnicas?.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm font-medium rounded-full
                      ${dark ? "bg-indigo-900 text-indigo-200" : "bg-indigo-100 text-indigo-700"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {perfil.softSkills?.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm font-medium rounded-full
                      ${dark ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-700"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Direita */}
            <div>
              <h3 className="text-lg font-bold mb-2">Idiomas</h3>
              <div className="space-y-2 mb-4">
                {perfil.idiomas?.map((idioma, idx) => (
                  <div
                    key={idx}
                    className={`text-sm ${dark ? "text-gray-300" : "text-gray-700"}`}
                  >
                    <span className="font-semibold">{idioma.idioma}</span> —{" "}
                    {idioma.nivel}
                  </div>
                ))}
              </div>

              {perfil.projetos?.length > 0 && (
                <>
                  <h3 className="text-lg font-bold mb-2">Projetos e Certificações</h3>
                  <ul className="space-y-2 text-sm">
                    {perfil.projetos.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <a
                          href={p.link || "#"}
                          target="_blank"
                          className={`font-medium underline
                          ${dark ? "text-yellow-300" : "text-blue-600"}`}
                        >
                          {p.titulo}
                        </a>
                        — {p.descricao}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Experiências */}
          {perfil.experiencias?.length > 0 && (
            <div className="border-t pt-4 border-gray-300 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-3">Experiências</h3>
              <div className="space-y-4">
                {perfil.experiencias.map((exp, idx) => (
                  <div key={idx} className="text-sm">
                    <p className="font-semibold">{exp.cargo}</p>
                    <p className="opacity-80">{exp.empresa}</p>
                    <p className="opacity-60 text-xs">
                      {exp.inicio} | {exp.fim}
                    </p>
                    <p className="mt-1 opacity-70">{exp.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Formação */}
          {perfil.formacao?.length > 0 && (
            <div className="border-t pt-4 border-gray-300 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-3">Formação Acadêmica</h3>
              <div className="space-y-3 text-sm">
                {perfil.formacao.map((f, idx) => (
                  <div key={idx}>
                    <p className="font-semibold">{f.curso}</p>
                    <p className="opacity-80">{f.instituicao}</p>
                    <p className="opacity-60 text-xs">Conclusão: {f.ano}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Botões */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleRecommend}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer
                ${
                  recommendationSent
                    ? "bg-green-500 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
            >
              {recommendationSent ? "✓ Recomendação enviada" : "👍 Recomendar"}
            </button>

            <button
              onClick={handleMessage}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer
                ${
                  messageSent
                    ? "bg-green-500 text-white"
                    : dark
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-500 hover:bg-gray-400 text-white"
                }`}
            >
              {messageSent ? "✓ Mensagem enviada" : "💬 Enviar mensagem"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
