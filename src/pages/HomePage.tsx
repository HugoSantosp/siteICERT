import { Heart, Target, Users } from 'lucide-react';
import LocalImage from '../image/Logo.png';
import ImageIgreja2  from '../image/349341568_250120797622621_6122126321454702848_n.jpg';
import  ImageCulto  from '../image/culto.jpg';
import ImageJantaAmiga from '../image/jantaamiga.png';
import ImageCrianca from '../image/crianca.png';
import ImageSantaCeia from '../image/santaceia.png';
import { Calendar, Clock, MapPin, } from 'lucide-react';



const events = [
  {
    id: 1,
    title: 'Culto de Celebração',
    date: 'Todos os Domingos',
    time: '18:00',
    location: 'Auditório Principal',
    image: ImageCulto,
    shortDescription: 'Um fim de semana especial para jovens com louvor, palavra e comunhão.',
    fullDescription: 'Junte-se a nós para um fim de semana transformador com pregadores convidados, momentos de louvor e adoração, workshops e muito mais. Uma oportunidade única para crescer espiritualmente e fazer novas amizades.',
  },
  {
    id: 2,
    title: 'Conferencias das Quartas',
    date: 'Todas as Quartas-Feira',
    time: '19:30',
    location: 'Acampamento Vida Nova',
    image: ImageIgreja2,
    shortDescription: 'Um tempo especial de renovação para toda a família.',
    fullDescription: 'Um final de semana dedicado ao fortalecimento dos laços familiares através de atividades especiais, estudos bíblicos, momentos de lazer e comunhão.',
  },
  {
    id: 3,
    title: 'Culto de Santa Ceia',
    date: 'Primeiro Domingo do Mês',
    time: '09:00',
    location: 'Templo Principal',
    image: ImageSantaCeia,
    shortDescription: 'Celebração especial da ressurreição de Cristo.',
    fullDescription: 'Uma celebração especial com apresentações do coral, dramatização e uma mensagem poderosa sobre o significado da Páscoa.',
  },

];

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage:  `url(${LocalImage})`,
        }}
      >

      </div>

      {/* Propósitos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Propósitos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Amor ao Próximo</h3>
              <p className="text-gray-600">Demonstramos o amor de Cristo através de ações práticas do evangelho.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Missão</h3>
              <p className="text-gray-600">Alcançar pessoas com a mensagem transformadora do evangelho.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunhão</h3>
              <p className="text-gray-600">Cultivamos relacionamentos genuínos e apoio mútuo entre os membros.</p>
            </div>
          </div>
        </div>
      </section>

    {/* Services Section */}
       <section className="py-12 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-center mb-12">Nossos Cultos</h2>
           </div>
   
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {events.map((event) => (
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
   
                   <p className="text-gray-600 mb-4">{event.shortDescription}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

      {/* Projetos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={ImageCrianca}
                alt="Projeto Social"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Criança no Altar de Deus</h3>
                <p className="text-gray-600">Ajudando famílias em situação de vulnerabilidade com alimentos e suporte.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src= {ImageJantaAmiga}
                alt="Escola Bíblica"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Janta Amiga</h3>
                <p className="text-gray-600">Formação bíblica e discipulado para todas as idades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;