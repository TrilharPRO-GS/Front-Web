import React from 'react';

export default function Footer({ dark }) {
  return (
    <footer className={`bg-[#21755c] items-center justify-center grid transition-colors duration-700 ease-in-out 
      ${dark ? 'text-black' : 'text-white'}`}>
      <div className='mt-5 ml-5'>TrilharPro — Projeto Global Solution 2025</div>
      <div className='ml-4'>O Futuro do Trabalho Conectando Talentos</div>
      <div className='mb-5'>&copy; 2025 TrilharPro. Todos os direitos reservados.</div>
    </footer>
  );
}
