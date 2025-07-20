import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, X } from 'lucide-react';
import ImageRetiroCasais from '../image/events/RetiroCasais.png'
import ImageCongressoMulheres from '../image/congresso-de-mulheres2.png'



import ImageDiscipulado from '../image/events/Discipulado.png'
import ImageBatismo from '../image/events/Batismo.png'
import ImagePascoa from '../image/events/Pascoa.png'
import ImageLicoesElas from '../image/events/ConferenciaComElas.png'
import ImageColunaOracao from '../image/events/ColunaDeOracao.png'
import ImageEscolaApostolica from '../image/events/EscolaApostolica.png'
import ImageCongressoAnual from '../image/events/CongressoAnual.png'


const events = [
  {
    id: 1,
    title: 'Festa da Páscoa',
    date: '19/04/2025 e 20/04/2025',
    time: '--',
    location: 'Agência',
    image: ImagePascoa,
    shortDescription: 'Disse-lhe Jesus: "Eu sou a ressurreição e a vida. Aquele que crê em mim, ainda que morra, viverá; e quem vive e crê em mim, não morrerá eternamente. Você crê nisso?"',
    fullDescription: 'Disse-lhe Jesus: "Eu sou a ressurreição e a vida. Aquele que crê em mim, ainda que morra, viverá; e quem vive e crê em mim, não morrerá eternamente. Você crê nisso?"',
  },
  
 
];

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showWelcomeVideo, setShowWelcomeVideo] = useState(false);

  useEffect(() => {
    setShowWelcomeVideo(true);
  }, []);
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ICERT News</h1>
          <p className="text-lg text-gray-600">Confira nossa programação de eventos do mês de Março de 2025 e participe conosco</p>
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
                

                <div className="flex items-center gap-4 mt-4">
                    {/* Botão de Saiba Mais */}
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="flex items-center text-blue-600 font-semibold hover:text-blue-800"
                    >
                      Saiba mais
                      <ChevronRight className="h-5 w-5 ml-1" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

          {/* Welcome Video Modal */}
          {showWelcomeVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full relative">
              <button
                onClick={() => setShowWelcomeVideo(false)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-[600px] rounded-t-lg"
                  src= "https://drive.google.com/file/d/15l3Dg8GHXaWiRMN5V-Xupn-LjXuFikaW/preview"
                  title="Welcome Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allow"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

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
                    {/* Botão de inscrição (exibido apenas para um evento específico) */}
                    {selectedEvent.title === "Congresso de Mulheres" && (
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfJc7syy8M4uM7msWeiIIY0bNIoZhjp4Wrz5EH3UqnmEm9SqA/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                      >
                        Inscreva-se
                      </a>
                    )}
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="bg-blue-600 text-white px-4 py-2  ml-2 rounded-lg hover:bg-blue-700 transition"
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
