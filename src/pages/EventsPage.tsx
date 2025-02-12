import { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Conferência de Jovens 2024',
    date: '15-17 Abril, 2024',
    time: '19:00',
    location: 'Auditório Principal',
    image: 'https://images.unsplash.com/photo-1526346698789-22fd84314424?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Um fim de semana especial para jovens com louvor, palavra e comunhão.',
    fullDescription: 'Junte-se a nós para um fim de semana transformador com pregadores convidados, momentos de louvor e adoração, workshops e muito mais. Uma oportunidade única para crescer espiritualmente e fazer novas amizades.',
  },
  {
    id: 2,
    title: 'Retiro de Famílias',
    date: '10-12 Maio, 2024',
    time: 'Todo o dia',
    location: 'Acampamento Vida Nova',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Um tempo especial de renovação para toda a família.',
    fullDescription: 'Um final de semana dedicado ao fortalecimento dos laços familiares através de atividades especiais, estudos bíblicos, momentos de lazer e comunhão.',
  },
  {
    id: 3,
    title: 'Culto de Páscoa',
    date: '31 Março, 2024',
    time: '10:00',
    location: 'Templo Principal',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Celebração especial da ressurreição de Cristo.',
    fullDescription: 'Uma celebração especial com apresentações do coral, dramatização e uma mensagem poderosa sobre o significado da Páscoa.',
  },
  {
    id: 4,
    title: 'Culto de Páscoa',
    date: '31 Março, 2024',
    time: '10:00',
    location: 'Templo Principal',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Celebração especial da ressurreição de Cristo.',
    fullDescription: 'Uma celebração especial com apresentações do coral, dramatização e uma mensagem poderosa sobre o significado da Páscoa.',
  },
  {
    id: 5,
    title: 'Culto de Páscoa',
    date: '31 Março, 2024',
    time: '10:00',
    location: 'Templo Principal',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Celebração especial da ressurreição de Cristo.',
    fullDescription: 'Uma celebração especial com apresentações do coral, dramatização e uma mensagem poderosa sobre o significado da Páscoa.',
  },
  {
    id: 6,
    title: 'Culto de Páscoa',
    date: '31 Março, 2024',
    time: '10:00',
    location: 'Templo Principal',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Celebração especial da ressurreição de Cristo.',
    fullDescription: 'Uma celebração especial com apresentações do coral, dramatização e uma mensagem poderosa sobre o significado da Páscoa.',
  }
];

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Eventos</h1>
          <p className="text-lg text-gray-600">Confira nossa programação de eventos e participe conosco</p>
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

                <button
                  onClick={() => setSelectedEvent(event)}
                  className="flex items-center text-blue-600 font-semibold hover:text-blue-800"
                >
                  Saiba mais
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{selectedEvent.fullDescription}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;