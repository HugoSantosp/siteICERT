import React from 'react';
import { Briefcase, Phone, Mail, MapPin, Star, MessageCircle, Instagram, PanelsTopLeft } from 'lucide-react';
import ImageAnchorLogo from '../image/mural/Anchor.jpg'
import ImageReinoBuffet from '../image/mural/OreinoBuffet.png'
import ImageAnaLucia from '../image/mural/AnaLucia.png'
import ImageDanySilva from '../image/mural/DanySilvaDisigner.png'
import ImageLSDesigner from '../image/mural/LSDesigner.png'
import ImageIPGInspecoes from '../image/mural/Ipg.png'
import ImageDoceDaChile from '../image/mural/da - Bianca Chile.png'
import ImagePalavraRevelada from '../image/mural/PalavraRevelada.jpg'
import ImageLeneLemos from '../image/mural/LeneLemos_Terapeuta.png'

const professionals = [
  {
    name: 'Hugo Santos',
    profession: 'Programador',
    description: 'Profissional especializado em criar, desenvolver e manter softwares, sites, aplicativos e sistemas computacionais',
    contact: {
      phone: '(21) 99492-7680',
      email: 'hugosantospereira11@gmail.com',
      address: 'NOVA IGUAÇU - RJ',
      instagram: 'santos_hugo_pereira'
    },
    rating: 5,
    image: ImageAnchorLogo,
    site: 'https://devservice.onrender.com/'
  },
  {
    name: 'O Reino Buffet',
    profession: 'Organizador de Eventos Gastronômicos',
    description: 'Profissional especializado em planejar, preparar e organizar refeições para eventos como casamentos, aniversários, confraternizações e encontros corporativos.',
    contact: {
      phone: '(21) 96620-5900',
      email: 'Reizinho435@gmail.com',
      address: 'SÃO JOÃO DE MERITI - RJ',
      instagram: 'o.reinobuffet'
    },
    rating: 5,
    image: ImageReinoBuffet,
    site: ''
  },
  {
    name: 'Ana Lucia',
    profession: 'Em formação em Psicanálise, Terapeuta Floral, Auriculoterapeuta',
    description: 'Profissional especializado  em terapias diversas',
    contact: {
      phone: '(21) 99849-3687',
      email: 'dasilvaanalucia72@gmail.com',
      address: 'SÃO JOÃO DE MERITI - RJ',
      instagram: 'silva_analucia68'
    },
    rating: 5,
    image: ImageAnaLucia,
    site: 'https://www.facebook.com/Conquistadoredoreino'
  },
  {
    name: 'Danny Silva Art',
    profession: 'Desiner gráfico e Sublimação',
    description: 'Profissional especializada na criação de canecas, xícaras, azulejos e diversos brindes personalizados. Com amor e excelência, cada peça é produzida para encantar e satisfazer os clientes.',
    contact: {
      phone: '(21) 97447-2889',
      email: 'dannyflor094@gmail.com',
      address: 'SÃO JOÃO DE MERITI - RJ',
      instagram: 'dannysilvart'
    },
    rating: 5,
    image: ImageDanySilva,
    site: 'https://www.facebook.com/share/1A4mg1KAQe/'
  },
  {
    name: 'Laura Silva Designer & Fotografia ',
    profession: 'Designer digital',
    description: 'Profissional especializada em criar soluções visuais únicas e personalizadas, refletindo a identidade e os valores da sua marca, com impacto duradouro no público. ',
    contact: {
      phone: '(21) 99199-5292',
      email: 'laurasilvadesigner0@gmail.com ',
      address: 'SÃO JOÃO DE MERITI - RJ',
      instagram: 'lsdesfot'
    },
    rating: 5,
    image: ImageLSDesigner,
    site: ''
  },
  {
    name: 'IPG Inspeções',
    profession: 'Inspeção Predial de Gás',
    description: 'Profissional especializado em inspeções periódicas de gás, cumprindo a Lei n° 6890 de 2014, garantindo a segurança do seu lar com qualidade e confiança.',
    contact: {
      phone: '(21) 99321-1988',
      email: 'ipginspecaodegas@gmail.com',
      address: 'Rio de Janeiro - RJ',
      instagram: 'ipginspecoes'
    },
    rating: 5,
    image: ImageIPGInspecoes,
    site: 'https://ipginspecoes.com.br/'
  },
  {
    name: 'Docinhos da Chile',
    profession: 'Confeitaria',
    description: 'Profissional Especializado em Confecção de Doces.',
    contact: {
      phone: '(21) 99398-5494',
      email: 'biancachile1997@gmail.com',
      address: 'Nilópolis- Rj',
      instagram: 'docinhosdachile'
    },
    rating: 5,
    image: ImageDoceDaChile,
    site: ''
  },
  {
    name: 'Loja Palavra Revelada',
    profession: 'Venda de Materiais Cristãos(Livros, Bíblias, Artigos Religiosos)',
    description: 'Profissional Especializado em Levar a Palavra de Deus Através de Materiais Cristãos.',
    contact: {
      phone: '(21) 99295-1158',
      email: '',
      address: 'São João de Meriti- Rj',
      instagram: 'loja.palavrarevelada'
    },
    rating: 5,
    image: ImagePalavraRevelada,
    site: 'https://linktr.ee/loja.palavrarevelada?fbclid=PAZXh0bgNhZW0CMTEAAae0d-IfGptpUV6DZICCWOtz0mCN0szGzbTP9dqktzocItt_RcFyK7BUueJiQw_aem_u3tFCh_-Jx_yGnKLQ400HQ'
  },
   {
    name: 'Terapeuta Lene Lemos',
    profession: 'Psicoterapeuta',
    description: 'Profissional Especializado em Psicoterapia.',
    contact: {
      phone: '(21) 98215-3452',
      email: 'Lemoslene218@gmail.com',
      address: 'São João de Meriti- Rj',
      instagram: 'lenelemos2'
    },
    rating: 5,
    image: ImageLeneLemos,
    site: 'https://www.facebook.com/lene.lemos.79'
  },
  /*
  {
    name: 'Eduardo Laranja',
    profession: 'Professor de Japonês, Inglês, Português, Redação e Gramática',
    description: 'Proficional Especializado em Lecionar no ambito de Idiomas e Gramática.',
    contact: {
      phone: '(21) 96652-0198',
      email: '',
      address: 'São João de Meriti- Rj',
      instagram: ''
    },
    rating: 5,
    image: ImagePalavraRevelada,
    site: ''
  },
  */
  
];

const MuralPage = () => {
  // Function to format phone number for WhatsApp link
  const formatWhatsAppNumber = (phone: string) => {
    // Remove non-numeric characters
    const numericOnly = phone.replace(/\D/g, '');
    // Add country code if not present (assuming Brazil)
    return numericOnly.startsWith('55') ? numericOnly : `55${numericOnly}`;
  };

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
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
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

                <div className="space-y-2 text-gray-600 mb-4">
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
                
                {/* Social Media Buttons */}
                <div className="absolute bottom-1 right-4 flex space-x-2">

                  {/* Site Button */}
                  <a 
                    href={`${professional.site}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 via-blue-lith-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-all hover:scale-110"
                    aria-label={`Página de ${professional.name}`}
                    title={`Página de ${professional.name}`}
                  >
                    <PanelsTopLeft className="h-5 w-5" />
                  </a>

                  {/* Instagram Button */}
                  <a 
                    href={`https://instagram.com/${professional.contact.instagram}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-all hover:scale-110"
                    aria-label={`Perfil do Instagram de ${professional.name}`}
                    title={`Perfil do Instagram de ${professional.name}`}
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  
                  
                  {/* WhatsApp Button */}
                  <a 
                    href={`https://wa.me/${formatWhatsAppNumber(professional.contact.phone)}?text=Olá ${professional.name}, vi seu contato no mural da Igreja Icert e gostaria de saber mais sobre seus serviços.`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
                    aria-label={`Conversar com ${professional.name} pelo WhatsApp`}
                    title={`Conversar com ${professional.name} pelo WhatsApp`}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
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
          <a className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" target="_blank"  href='https://docs.google.com/forms/d/e/1FAIpQLSfmvZaZy2MkjqZ3bSjygn-YOAXium9-LEEG-xs1TmJpe8B75A/viewform?usp=dialog'>
            Cadastrar Serviço
          </a>
        </div>
       
      </div>
    </div>
  );
};

export default MuralPage;