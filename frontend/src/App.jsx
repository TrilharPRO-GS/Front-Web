import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './routes/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './routes/Error';

export default function App() {
  const [dark, setDark] = useState(() => {
    // verifica preferência salva no localStorage
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Header dark={dark} setDark={setDark} />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
