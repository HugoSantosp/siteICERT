import { Calendar, Clock, MapPin, ChevronRight,Users } from 'lucide-react';
import ImageAliancados from '../image/celulas/AliancadosEmCristo.png'
import ImageFilhasdoRei from '../image/celulas/FilhasdoRei.png'
import Image300deGideao from '../image/celulas/300deGideao.png'
import ImageCristoRocha from '../image/celulas/CristoRochaEterna.png'
import ImageTirosh from '../image/celulas/Tirosh.png'
import ImageVivus from '../image/celulas/vivus2.jpg'
import ImageHerdeiras from '../image/celulas/Herdeiras.png'
import ImageAliancadas from '../image/celulas/MulheresAliancadas.png'
import ImageAmordeDeus from '../image/celulas/AmordeDeus.png'

const cellgroups = [
  {
    id: 1,
    leader: 'Jefferson e Lene',
    title: 'Aliançados em Cristo',
    date: 'Terça',
    time: '20:00',
    location: 'Rua Aurélio Cordeiro, 1407 - Tomazinho',
    image: ImageAliancados,
    fullDescription: 'Junte-se a célula de casais, fortelaça sua aliança conjugal em Cristo Jesus',
  },
  {
    id: 2,
    leader: ' Pra Ana Lúcia',
    title: 'Filhas do Rei',
    date: 'Terça',
    time: '19:30',
    location: 'Rua Manoel Gama,458 - Gato Preto',
    image: ImageFilhasdoRei,
    fullDescription: 'Junte-se a célula de mulheres, fortaleça em conhecimento feminino segundo A palavra de Deus.',
  },
  {
    id: 3,
    leader: 'Anderson',
    title: '300 de Gideão',
    date: 'Terça',
    time: '20:00',
    location: 'Dona Jove, 340 - Tomazinho',
    image: Image300deGideao,
    fullDescription: 'Junte-se a célula de Homem valorozos que aprendem todos os dias como Servir e Proteger Suas Famílias segundo a chamada de Deus.',
  },
  {
    id: 4,
    leader: 'Sílvia',
    title: 'Cristo Rocha Eterna',
    date: 'Quinta-Feira',
    time: '19:30',
    location: 'Antônio Martins de Oliveira, 783 - Tomazinho',
    image: ImageCristoRocha,
    fullDescription: 'Junte-se a célula de Mulheres onde apredemos aprendemos a ser mãe, mulher e esposa segundo A Bíblia Sagrada',
  },
  {
    id: 5,
    leader: 'Jaime e Adriana',
    title: 'Tirosh',
    date: 'Terça-Feira',
    time: '19:30',
    location: 'Manoel Gama, 446 - Tomazinho',
    image: ImageTirosh,
    fullDescription: 'Junte-se a célula de Família aprenda e entenda o conceito desse projeto segundo o coração de Deus ',
  },
  {
    id: 6,
    leader: 'Pr Igor Magalhães e Pra Bia Magalhães',
    title: 'VIVUS',
    date: 'Terça-Feira',
    time: '19:30',
    location: 'Dona Jove, 53 - Tomazinho',
    image: ImageVivus,
    fullDescription: 'Junte-se a célula de Jovens torne-se mais um jovem descrito em Joel e entenda a profundidade de um ambiente profético.',
  },
  {
    id: 7,
    leader: 'Pra Simone de Souza',
    title: 'Herdeiras',
    date: 'Quinta-Feira',
    time: '19:30',
    location: 'Dona Jove, 340 - Tomazinho',
    image: ImageHerdeiras,
    fullDescription: 'Junte-se a célula de Mulheres um entendimento sobre caminha sobre a mesma missão que sua familia.',
  },
  {
    id: 8,
    leader: 'Barbara Darc',
    title: 'Mulheres Aliançadas',
    date: 'Alternados',
    time: '19:30',
    location: 'Professor Alfredo Maurício Brum lote 3 quadra 2 - Tomazinho',
    image: ImageAliancadas,
    fullDescription: 'Junte-se a célula de Mulheres um entendimento sobre caminha sobre a mesma missão que sua familia.',
  },
  {
    id: 9,
    leader: 'Antônio Carlos',
    title: 'Amor de Deus',
    date: 'Alternados',
    time: '19:30',
    location: 'Peri 138 casa 9 - Tomazinho',
    image: ImageAmordeDeus,
    fullDescription: 'Junte-se a célula de Mulheres um entendimento sobre caminha sobre a mesma missão que sua familia.',
  },
];

const EventsPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossas Células</h1>
          <p className="text-lg text-gray-600">Encontre uma célula próxima a você e faça parte de uma comunidade acolhedora</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cellgroups.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>{event.leader}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{event.fullDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;