import React from 'react';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Conferência de Jovens 2024',
    date: '15-17 Março, 2024',
    time: '19:00',
    location: 'Auditório Principal',
    image: 'https://images.unsplash.com/photo-1526346698789-22fd84314424?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Um fim de semana especial com louvor, pregações e muita comunhão.'
  },
  {
    id: 2,
    title: 'Encontro de Famílias',
    date: '23 Março, 2024',
    time: '15:00',
    location: 'Salão Social',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Momento especial para fortalecer os laços familiares.'
  },
  {
    id: 3,
    title: 'Vigília de Oração',
    date: '29 Março, 2024',
    time: '22:00',
    location: 'Templo Principal',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Uma noite dedicada à oração e busca pela presença de Deus.'
  }
];

function Events() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Próximos Eventos</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  Inscrever-se
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;