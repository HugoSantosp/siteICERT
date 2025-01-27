import React from 'react';
import { Music, Heart, Users, Baby, BookOpen, Camera } from 'lucide-react';

const ministries = [
  {
    id: 1,
    name: 'Ministério de Louvor',
    leader: 'Ricardo Santos',
    description: 'Dedicado à adoração e condução musical nos cultos, com músicos e cantores comprometidos em adorar a Deus.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Ministério Infantil',
    leader: 'Maria Clara',
    description: 'Cuidando do desenvolvimento espiritual das crianças através de atividades lúdicas e ensino bíblico.',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1526634332515-d56c5fd16991?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Ministério de Jovens',
    leader: 'Felipe Oliveira',
    description: 'Focado em conectar e discipular jovens através de eventos, estudos bíblicos e atividades sociais.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Ministério de Ensino',
    leader: 'Prof. Paulo Mendes',
    description: 'Responsável pela escola bíblica, cursos teológicos e preparação de novos líderes.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Ministério de Mídia',
    leader: 'Lucas Silva',
    description: 'Cuida da transmissão dos cultos, fotografia, redes sociais e comunicação visual da igreja.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Ministério de Ação Social',
    leader: 'Ana Beatriz',
    description: 'Desenvolve projetos sociais, visitas a hospitais e auxílio às famílias necessitadas.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

function Ministries() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nossos Ministérios</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as diferentes áreas de atuação da nossa igreja, cada uma dedicada a servir
            e impactar vidas de maneira única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry) => {
            const IconComponent = ministry.icon;
            return (
              <div key={ministry.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-48">
                  <img 
                    src={ministry.image} 
                    alt={ministry.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center text-white">
                      <IconComponent className="h-6 w-6 mr-2" />
                      <h3 className="text-xl font-bold">{ministry.name}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{ministry.description}</p>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">
                      Líder: <span className="font-medium">{ministry.leader}</span>
                    </p>
                  </div>
                  
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Saiba Mais
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ministries;