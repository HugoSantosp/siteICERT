import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocalImage from '../image/Logo.png';
import ImageIgreja1 from '../image/5423_b965c0c2737788f9051538cc788bb354-27_10_2024, 11_32_21.jpg';
import ImageIgreja2  from '../image/349341568_250120797622621_6122126321454702848_n.jpg';
import  ImageCulto  from '../image/culto.jpg';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage:  `url(${LocalImage})`,
        }}
      >
        <div className="absolute inset-0  " />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">Bem-vindo à ICERT | Agência do Reino de Deus</h1>
            <p className="text-xl md:text-2xl mb-8">Um lugar de amor, fé e comunhão</p>
            <Link 
              to="/events" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Nossos Eventos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link> */}
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-gray-600 mb-6">
                Somos uma igreja comprometida em levar a mensagem de Cristo a todas as pessoas,
                construindo uma comunidade forte e unida no amor de Deus.
              </p>
              <Link 
                to="/cell-groups" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Conheça nossas células
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img 
                src= {ImageIgreja1}
                alt="Comunidade da igreja"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Cultos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src= {ImageIgreja2}
                  alt="Culto de Celebração"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Culto de Celebração</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Domingo às 18h</p>
                <p className="text-gray-500">
                  Momentos de louvor, adoração e pregação da Palavra de Deus.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src= {ImageCulto}
                  alt="Culto Conferecia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Culto Conferência</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Quarta-feira às 19h30</p>
                <p className="text-gray-500">
                  Um tempo especial de intercessão e busca pela presença de Deus.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src= {ImageCulto}
                  alt="Culto Conferecia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Culto Santa Ceia</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Segundo Domingo de Mês</p>
                <p className="text-gray-500">
                   Um momento de fé, unidade e renovação espiritual.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;