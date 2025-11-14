import React from 'react';

export default function ModalPerfil({ perfil, onClose, dark }) {
  function recomendar() {
    alert(`Você recomendou ${perfil.nome}!`);
  }

  function enviarMensagem() {
    const msg = prompt(`Enviar mensagem para ${perfil.nome}:`);
    if (msg) alert('Mensagem enviada: ' + msg);
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-all duration-700">
      <div
        className={`max-w-3xl w-full rounded-lg p-4 shadow-lg overflow-auto max-h-[90vh]
                   ${dark ? 'bg-gray-800 text-white': 'bg-gray-200 text-black'} transition-all duration-700 ease-in-out`}
      >
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <img
              src={perfil.foto || '/images/avatar1.jpg'}
              alt={perfil.nome}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">{perfil.nome}</h2>
              <p className="text-sm">{perfil.cargo} • {perfil.localizacao}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={recomendar} className="px-3 py-1 bg-yellow-400 rounded cursor-pointer">⭐ Recomendar</button>
            <button onClick={enviarMensagem} className="px-3 py-1 bg-indigo-600 text-white rounded cursor-pointer">✉️ Enviar</button>
            <button onClick={onClose} className="px-3 py-1 border rounded cursor-pointer">Fechar</button>
          </div>
        </div>

        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Resumo</h3>
            <p className="text-sm">{perfil.resumo}</p>

            <h3 className="font-semibold mt-3">Formação</h3>
            <ul className="text-sm list-disc ml-4">
              {perfil.formacao?.map((f, i) => (
                <li key={i}>
                  {f.curso} — {f.instituicao} ({f.ano})
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mt-3">Experiências</h3>
            <ul className="text-sm list-disc ml-4">
              {perfil.experiencias?.map((e, i) => (
                <li key={i}>
                  <strong>{e.empresa}</strong> · {e.cargo} · {e.inicio} — {e.fim}
                  <div className="text-xs opacity-80">{e.descricao}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {perfil.habilidadesTecnicas?.map((h, i) => (
                <span key={i} className="px-2 py-1 border rounded">{h}</span>
              ))}
            </div>

            <h3 className="font-semibold mt-3">Soft Skills & Idiomas</h3>
            <div className="mt-2 text-sm">
              <div><strong>Soft Skills:</strong> {perfil.softSkills?.join(', ')}</div>
              <div className="mt-2">
                <strong>Idiomas:</strong>{' '}
                {perfil.idiomas?.map(i => `${i.idioma} (${i.nivel})`).join(', ')}
              </div>
            </div>

            <h3 className="font-semibold mt-3">Projetos & Certificações</h3>
            <ul className="text-sm list-disc ml-4">
              {perfil.projetos?.map((p, i) => (
                <li key={i}>
                  <a
                    className={`${dark ? 'text-yellow-300' : 'text-blue-600'}`}
                    href={p.link || '#'}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.titulo}
                  </a>{' '}
                  — {p.descricao}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
