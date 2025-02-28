import { Music, Book, Users, Shield as Child, Cpu, Star, Flower2, Sun } from 'lucide-react';
import ImageAdoracao from '../image/Adoracao.jpg'
import ImageDanca from '../image/danca.jpeg'
import ImageIntercessao from '../image/intercessao.jpeg'
import ImageFamilia from '../image/Familia.png'
import ImageInfantil from '../image/Infantil.jpg'
import ImageRedeMelhorIdade from '../image/Rede-Melhor-Idade.png'
import ImageRedeMulheres from '../image/RedeMulheres.png'
import ImageMidia from '../image/MidiaImage.png'

const ministries = [
  {
    icon: <Music className="h-8 w-8" />,
    name: 'Ministério de Louvor',
    description: 'Conduzindo a igreja em adoração através da música e expressão artística.',
    image: ImageAdoracao
  },
  {
    icon: <Star className="h-8 w-8" />,
    name: 'Ministério de Dança',
    description: 'Formação bíblica e discipulado para todas as idades.',
    image: ImageDanca
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    name: 'Ministério de Mídia e Tecnologia',
    description: 'Produção audiovisual e presença digital da igreja.',
    image: ImageMidia
  },
  {
    icon: <Users className="h-8 w-8" />,
    name: 'Ministério de Família',
    description: 'Fortalecendo famílias através de aconselhamento e eventos.',
    image: ImageFamilia
  },
  {
    icon: <Book className="h-8 w-8" />,
    name: 'Ministério de Intercessão',
    description: 'Fortalecendo a igreja em Orações e suplicas.',
    image: ImageIntercessao
  },
  {
    icon: <Child className="h-8 w-8" />,
    name: 'Ministério Infantil',
    description: 'Cuidando e ensinando as crianças sobre o amor de Deus.',
    image: ImageInfantil
  },
  {
    icon: <Flower2 className="h-8 w-8" />,
    name: 'Rede de Mulheres',
    description: 'Cuidando e ensinando as crianças sobre o amor de Deus.',
    image: ImageRedeMulheres
  },
  {
    icon: <Sun className="h-8 w-8" />,
    name: 'Rede da Melhor Idade',
    description: 'Cuidando e ensinando as crianças sobre o amor de Deus.',
    image: ImageRedeMelhorIdade 
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
                className="w-full h-60 object-cover"
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