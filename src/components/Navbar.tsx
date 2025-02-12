import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Home, Calendar } from 'lucide-react';
import ImageLogo  from '../image/logo2.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
          <img src={ImageLogo} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }}/>
                {/* <Church className="h-6 w-6" /> */}
                <span className="font-bold text-xl">ICERT | Agência do Reino de Deus</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/ministerios" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Users className="h-5 w-5" />
              <span>Ministérios</span>
            </Link>
            <Link to="/celulas" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Users className="h-5 w-5" />
              <span>Células</span>
            </Link>
            <Link to="/eventos" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Calendar className="h-5 w-5" />
              <span>Eventos</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;