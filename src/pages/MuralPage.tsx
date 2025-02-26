import React from 'react';
import { Briefcase, Phone, Mail, MapPin, Star, MessageCircle, Instagram, PanelsTopLeft } from 'lucide-react';
import ImageAnchorLogo from '../image/mural/Anchor.jpg'
import ImageReinoBuffet from '../image/mural/OreinoBuffet.png'

const professionals = [
  {
    name: 'Hugo Santos',
    profession: 'Programador',
    description: 'Profissional especializado em criar, desenvolver e manter softwares, sites, aplicativos e sistemas computacionais',
    contact: {
      phone: '(21) 99492-7680',
      email: 'hugosantospereira11@gmail.com',
      address: 'NOVA IGUAÇU - RJ',
      instagram: 'santos_hugo_pereira'
    },
    rating: 5,
    image: ImageAnchorLogo,
    site: 'https://devservice.onrender.com/'
  },
  {
    name: 'O Reino Buffet',
    profession: 'Organizador de Eventos Gastronômicos',
    description: 'Profissional especializado em planejar, preparar e organizar refeições para eventos como casamentos, aniversários, confraternizações e encontros corporativos.',
    contact: {
      phone: '(21) 96620-5900',
      email: 'hugosantospereira11@gmail.com',
      address: 'SÃO JOÃO DE MERITI - RJ',
      instagram: 'o.reinobuffet'
    },
    rating: 5,
    image: ImageReinoBuffet,
    site: ''
  },
 
];

const MuralPage = () => {
  // Function to format phone number for WhatsApp link
  const formatWhatsAppNumber = (phone: string) => {
    // Remove non-numeric characters
    const numericOnly = phone.replace(/\D/g, '');
    // Add country code if not present (assuming Brazil)
    return numericOnly.startsWith('55') ? numericOnly : `55${numericOnly}`;
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mural de Profissionais</h1>
          <p className="text-lg text-gray-600">
            Conheça os profissionais da nossa comunidade e seus serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{professional.name}</h3>
                  <div className="flex">
                    {[...Array(professional.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-blue-600 mb-3">
                  <Briefcase className="h-5 w-5" />
                  <span className="font-semibold">{professional.profession}</span>
                </div>

                <p className="text-gray-600 mb-4">{professional.description}</p>

                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>{professional.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>{professional.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>{professional.contact.address}</span>
                  </div>
                </div>
                
                {/* Social Media Buttons */}
                <div className="absolute bottom-1 right-4 flex space-x-2">

                  {/* Site Button */}
                  <a 
                    href={`${professional.site}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 via-blue-lith-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-all hover:scale-110"
                    aria-label={`Perfil do Instagram de ${professional.name}`}
                    title={`Perfil do Instagram de ${professional.name}`}
                  >
                    <PanelsTopLeft className="h-5 w-5" />
                  </a>

                  {/* Instagram Button */}
                  <a 
                    href={`https://instagram.com/${professional.contact.instagram}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-all hover:scale-110"
                    aria-label={`Perfil do Instagram de ${professional.name}`}
                    title={`Perfil do Instagram de ${professional.name}`}
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  
                  
                  {/* WhatsApp Button */}
                  <a 
                    href={`https://wa.me/${formatWhatsAppNumber(professional.contact.phone)}?text=Olá ${professional.name}, vi seu contato no mural da Igreja Viva e gostaria de saber mais sobre seus serviços.`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
                    aria-label={`Conversar com ${professional.name} pelo WhatsApp`}
                    title={`Conversar com ${professional.name} pelo WhatsApp`}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/*
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">É um profissional da nossa igreja?</h3>
          <p className="text-gray-600 mb-6">
            Divulgue seus serviços em nosso mural e conecte-se com a comunidade.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Cadastrar Serviço
          </button>
        </div>
        */}
      </div>
    </div>
  );
};

export default MuralPage;