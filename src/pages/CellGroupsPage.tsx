import { Users, MapPin, Clock } from 'lucide-react';

const cellGroups = [
  {
    name: 'Vida Nova',
    leader: 'João e Maria Silva',
    location: 'Região Central',
    time: 'Terças, 20h',
    description: 'Grupo focado em casais jovens e profissionais.',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Esperança',
    leader: 'Pedro Santos',
    location: 'Zona Sul',
    time: 'Quartas, 19h30',
    description: 'Célula para jovens universitários e profissionais.',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Família em Cristo',
    leader: 'Ana e Carlos Oliveira',
    location: 'Zona Norte',
    time: 'Quintas, 20h',
    description: 'Grupo para famílias com crianças.',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Luz do Mundo',
    leader: 'Roberto Pereira',
    location: 'Zona Leste',
    time: 'Sextas, 19h',
    description: 'Célula voltada para novos convertidos.',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const CellGroupsPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossas Células</h1>
          <p className="text-lg text-gray-600">
            Encontre uma célula próxima a você e faça parte de uma comunidade acolhedora
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cellGroups.map((cell, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={cell.image} alt={cell.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{cell.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>Líderes: {cell.leader}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{cell.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>{cell.time}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{cell.description}</p>
               {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Participar desta Célula
                </button> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quer ser um líder de célula?</h3>
          <p className="text-gray-600 mb-6">
            Se você tem interesse em liderar uma célula, entre em contato conosco para saber mais sobre o processo de formação de líderes.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Quero ser líder
          </button>
        </div>
      </div>
    </div>
  );
};

export default CellGroupsPage;