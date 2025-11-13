import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (
    <BrowserRouter>
      <Header/>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        
      <Footer />
    </BrowserRouter>
  )
}
