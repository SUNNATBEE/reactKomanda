import React from 'react';
import image from '../assets/Grocery shopping-amico 2.png'

const Section1 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Text content */}
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Управление запасами <br /> розничного магазина
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full transition duration-300">
          Заказать демонстрацию
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={image}
          alt="Иллюстрация 1С-Товары"
          className="w-full max-w-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Section1;
