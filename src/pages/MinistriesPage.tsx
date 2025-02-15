import React from 'react';
import { Music, Book, Users, Video, Shield as Child, Cpu, Star } from 'lucide-react';

const ministries = [
  {
    icon: <Music className="h-8 w-8" />,
    name: 'Ministério de Louvor',
    description: 'Conduzindo a igreja em adoração através da música e expressão artística.',
    image: 'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Star className="h-8 w-8" />,
    name: 'Ministério de Dança',
    description: 'Formação bíblica e discipulado para todas as idades.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    name: 'Ministério de Mídia e Tecnologia',
    description: 'Alcançando a comunidade através de projetos sociais e assistência.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Users className="h-8 w-8" />,
    name: 'Ministério de Família',
    description: 'Fortalecendo famílias através de aconselhamento e eventos.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Video className="h-8 w-8" />,
    name: 'Ministério de Mídia',
    description: 'Produção audiovisual e presença digital da igreja.',
    image: 'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Child className="h-8 w-8" />,
    name: 'Ministério Infantil',
    description: 'Cuidando e ensinando as crianças sobre o amor de Deus.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const MinistriesPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossos Ministérios</h1>
          <p className="text-lg text-gray-600">Descubra como você pode servir e se envolver em nossa comunidade</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={ministry.image}
                alt={ministry.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    {ministry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{ministry.name}</h3>
                </div>
                <p className="text-gray-600">{ministry.description}</p>
                {/* <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                  Saiba mais →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinistriesPage;