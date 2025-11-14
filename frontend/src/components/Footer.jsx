import React from 'react';

export default function Footer({ dark }) {
  return (
    <footer className={`bg-[#21755c] justify-center grid transition-colors duration-700 ease-in-out ${dark ? 'text-black' : 'text-white'}`}>
      <div className='mt-5 mb-1 ml-5'>TrilharPro — Projeto Global Solution 2025</div>
      <div className='mb-5'>&copy; 2025 TrilharPro. Todos os direitos reservados.</div>
    </footer>
  );
}
