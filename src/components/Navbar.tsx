import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Home, Calendar, X, Menu, Briefcase } from 'lucide-react';
import ImageLogo  from '../image/logo2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
          <img src={ImageLogo} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }}/>
                <span className="font-bold text-xl">ICERT | Agência do Reino de Deus</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/ministerios" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600">
              <Users className="h-5 w-5" />
              <span>Ministérios</span>
            </Link>
            <Link to="/celulas" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600">
              <Users className="h-5 w-5" />
              <span>Células</span>
            </Link>
            <Link to="/eventos" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600">
              <Calendar className="h-5 w-5" />
              <span>Eventos</span>
            </Link>
            <Link to="/mural" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Briefcase className="h-5 w-5" />
              <span>Mural</span>
            </Link>
          </div>

              {/* Mobile menu button */}
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                  to="/eventos" 
                  className="block px-3 py-2 hover:bg-blue-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Eventos
                </Link>
                <Link 
                  to="/celulas" 
                  className="block px-3 py-2 hover:bg-blue-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Células
                </Link>
                <Link 
                  to="/ministerios" 
                  className="block px-3 py-2 hover:bg-blue-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ministérios
                </Link>
              </div>
            </div>
          )}
    </nav>


  );
};

export default Navbar;