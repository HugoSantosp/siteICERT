import { Church, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-6 w-6" />
              <span className="font-bold text-lg">ICERT | Agência do Reino de Deus</span>
            </div>
            <p className="text-gray-300">
              Um Lugar Perfeito Para Pessoas Imperfeitas.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(00) 0000-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>icer.tomazinho@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Av. Presidente Tancredo Neves, 1831 - Tomazinho, São João de Meriti - RJ</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Horários de Culto</h3>
            <div className="space-y-2">
              <p>Domingo: 18h</p>
              <p>Quarta-feira: 19h30</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Nossas Redes</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Facebook className="h-5 w-5" />
                <span>Icert.ag</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-5 w-5" />
                <span>Icert.ag</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ICERT. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
