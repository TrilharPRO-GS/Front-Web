import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './routes/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './routes/Error';

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition-colors duration-700 ease-in-out 
        ${dark ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}
      >
        <Header dark={dark} setDark={setDark} />
        <main className="flex-1 transition-all duration-700 ease-in-out">
          <Routes>
            <Route path="/" element={<Home dark={dark} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer dark={dark}/>
      </div>
    </BrowserRouter>
  );
}
