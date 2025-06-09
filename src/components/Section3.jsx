import React from "react";

const Section3 = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Для розничных магазинов и ресторанов
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col items-center">
            <img
              src="public/Coffee shop-amico 1.png"
              alt="Retail Illustration 1"
              className="w-full max-w-md"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Получайте рекомендации по управлению ассортиментом
              </h3>
              <p className="text-gray-600 mb-2">
                Для этого подключите бесплатно наш продукт «1С:Ритейл Нейро».
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>
                  какие товары и когда нужно продавать, чтобы увеличить прибыль
                </li>
                <li>
                  какие товары не стоит заказывать, чтобы снизить списания
                </li>
                <li>
                  как менять цены в зависимости от спроса и других факторов
                </li>
              </ul>
              <a
                href="#"
                className="text-green-600 font-medium mt-2 inline-block"
              >
                Подробнее о 1С:Ритейл Нейро →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Прогнозируйте спрос и управляйте запасами
              </h3>
              <p className="text-gray-600 mb-2">
                Используя 1С:Товары для анализа спроса и планирования поставок,
                вы избежите дефицита и избытка товаров.
              </p>
              <a
                href="#"
                className="text-green-600 font-medium mt-2 inline-block"
              >
                Подробнее о 1С:Товары →
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col items-center order-2 md:order-1">
            <img
              src="public/Grocery shopping-amico 1.png"
              alt="Retail Illustration 2"
              className="w-full max-w-md"
            />
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Планируйте ассортимент без ошибок
              </h3>
              <p className="text-gray-600">
                Узнайте, какие товары приносят вам прибыль и всегда должны быть
                в ассортименте, а какие — исключить.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Контролируйте бизнес и повышайте прибыль
              </h3>
              <p className="text-gray-600">
                Анализ продаж, моделей покупок и эффективности сотрудников
                поможет вам принимать верные управленческие решения.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Хотите бесплатную консультацию?
            <br />
            Оставляйте заявку
          </h3>
          <p className="text-gray-700 mb-6 text-center">
            Оставляйте заявку и наши менеджеры свяжутся с Вами в ближайшее время
          </p>
          <form className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              placeholder="Ваш телефон"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Ваш e-mail"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 w-full"
            >
              Отправить
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Нажимая кнопку, вы даете согласие на обработку персональных данных
            <br />и соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
