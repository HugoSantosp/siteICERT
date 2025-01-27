import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Church, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Events from './pages/Events';
import CellGroups from './pages/CellGroups';
import Ministries from './pages/Ministries';
import ImageLogo  from './image/logo2.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
               <img src={ImageLogo} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }}/>
                {/* <Church className="h-6 w-6" /> */}
                <span className="font-bold text-xl">ICERT | Agência do Reino de Deus</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-blue-200 transition">Início</Link>
                <Link to="/events" className="hover:text-blue-200 transition">ICERT News</Link>
                <Link to="/cell-groups" className="hover:text-blue-200 transition">Células</Link>
                <Link to="/ministries" className="hover:text-blue-200 transition">Ministérios</Link>
              </div>

              {/* Mobile menu button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  to="/" 
                  className="block px-3 py-2 hover:bg-blue-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link 
                  to="/events" 
                  className="block px-3 py-2 hover:bg-blue-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Eventos
                </Link>
                <Link 
                  to="/cell-groups" 
                  className="block px-3 py-2 hover:bg-blue-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Células
                </Link>
                <Link 
                  to="/ministries" 
                  className="block px-3 py-2 hover:bg-blue-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ministérios
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/cell-groups" element={<CellGroups />} />
            <Route path="/ministries" element={<Ministries />} />
          </Routes>
        </main>

        <footer className="bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">ICERT | Agência do Reino de Deus</h3>
                <p className="text-gray-300">Lugar Perfeito Para Pessoas Imperfeitas</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contato</h3>
                <p className="text-gray-300">Telefone: (11) 1234-5678</p>
                <p className="text-gray-300">Email: contato@igrejavida.com</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Endereço</h3>
                <p className="text-gray-300">Rua Dona jove, 56, Tomazinho - São João de Meriti</p>
                <p className="text-gray-300">Rio de Janeiro - RJ</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;