import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
      {/* Matn qismi */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Управление запасами <br /> розничного магазина
        </h1>
        <p className="text-gray-700 mb-6">
          Использование сервиса <span className="font-semibold">1С-Товары</span>{" "}
          позволяет значительно упростить работу по формированию заявок
          поставщику.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
          Заказать демонстрацию
        </button>
      </div>

      {/* Rasm qismi */}
      <div className="mt-10 md:mt-0 md:ml-12">
        <img
          src="/images/hero.png" // Rasmni public/images papkasiga joylashtiring
          alt="Сравнение полок с и без 1С-Товары"
          className="max-w-md w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
