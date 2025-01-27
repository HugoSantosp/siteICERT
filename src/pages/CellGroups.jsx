import React from 'react';
import { Users, MapPin, Clock } from 'lucide-react';

const cellGroups = [
  {
    id: 1,
    name: 'Célula Jovem',
    leader: 'Pedro Silva',
    day: 'Terça-feira',
    time: '20:00',
    location: 'Zona Sul',
    description: 'Grupo dedicado aos jovens entre 18 e 30 anos.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Célula Família',
    leader: 'João e Maria Santos',
    day: 'Quinta-feira',
    time: '20:00',
    location: 'Zona Norte',
    description: 'Encontro para casais e famílias.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Célula Mulheres',
    leader: 'Ana Oliveira',
    day: 'Quarta-feira',
    time: '15:00',
    location: 'Centro',
    description: 'Grupo exclusivo para mulheres.',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Célula Universitários',
    leader: 'Lucas Mendes',
    day: 'Sexta-feira',
    time: '19:30',
    location: 'Zona Leste',
    description: 'Grupo voltado para estudantes universitários.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

function CellGroups() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nossas Células</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Células são pequenos grupos que se reúnem semanalmente para estudar a Palavra,
            compartilhar experiências e crescer juntos na fé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cellGroups.map((cell) => (
            <div key={cell.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={cell.image} 
                  alt={cell.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center text-white">
                    <Users className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-bold">{cell.name}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{cell.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{cell.day} às {cell.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{cell.location}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">
                    Líder: <span className="font-medium">{cell.leader}</span>
                  </p>
                </div>
                
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  Participar desta Célula
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CellGroups;