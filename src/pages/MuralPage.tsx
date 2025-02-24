import React from 'react';
import { Briefcase, Phone, Mail, MapPin, Star } from 'lucide-react';

const professionals = [
  {
    name: 'Ana Silva',
    profession: 'Dentista',
    description: 'Especialista em Ortodontia com mais de 10 anos de experiência.',
    contact: {
      phone: '(11) 99999-9999',
      email: 'ana.silva@email.com',
      address: 'Rua das Flores, 123 - Centro'
    },
    rating: 5,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Carlos Santos',
    profession: 'Eletricista',
    description: 'Serviços residenciais e comerciais, instalações e manutenção.',
    contact: {
      phone: '(11) 98888-8888',
      email: 'carlos.santos@email.com',
      address: 'Av. Principal, 456 - Vila Nova'
    },
    rating: 5,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Mariana Oliveira',
    profession: 'Advogada',
    description: 'Especializada em Direito Civil e Trabalhista.',
    contact: {
      phone: '(11) 97777-7777',
      email: 'mariana.oliveira@email.com',
      address: 'Rua do Comércio, 789 - Jardim Europa'
    },
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const MuralPage = () => {
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
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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

                <div className="space-y-2 text-gray-600">
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">É um profissional da nossa igreja?</h3>
          <p className="text-gray-600 mb-6">
            Divulgue seus serviços em nosso mural e conecte-se com a comunidade.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Cadastrar Serviço
          </button>
        </div>
      </div>
    </div>
  );
};

export default MuralPage;