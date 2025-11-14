import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import CardProfissional from '../components/CardProfissional';
import ModalPerfil from '../components/ModalPerfil';

export default function Home({ dark }) { // Recebe 'dark' aqui
  const [perfis, setPerfis] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(){
    try{
      const res = await axios.get('http://localhost:5000/api/perfis');
      setPerfis(res.data);
      setFiltered(res.data);
    }catch(err){
      console.error(err);
      alert('Erro ao carregar perfis. Verifique se o backend está rodando em http://localhost:5000');
    }
  }

  function applyFilter({ query, area, local, skill }){
    let out = [...perfis];
    if(query) out = out.filter(p => p.nome.toLowerCase().includes(query.toLowerCase()) || (p.resumo && p.resumo.toLowerCase().includes(query.toLowerCase())));
    if(area) out = out.filter(p => p.area && p.area.toLowerCase().includes(area.toLowerCase()));
    if(local) out = out.filter(p => p.localizacao && p.localizacao.toLowerCase().includes(local.toLowerCase()));
    if(skill) out = out.filter(p => p.habilidadesTecnicas && p.habilidadesTecnicas.join(' ').toLowerCase().includes(skill.toLowerCase()));
    setFiltered(out);
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <SearchBar onFilter={applyFilter} dark={dark} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filtered.map(p => (
          <CardProfissional
            key={p.id}
            perfil={p}
            onClick={() => setSelected(p)}
            dark={dark} 
          />
        ))}
      </div>

      {selected && <ModalPerfil perfil={selected} dark={dark} onClose={() => setSelected(null)} />}
    </div>
  );
}
