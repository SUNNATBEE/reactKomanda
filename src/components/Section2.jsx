import React from 'react';

{/* Raximjanov Abdulatif qildi */}

const FeatureCard = ({ icon, title, description, buttonText, iconBg }) => {
  const IconComponent = icon;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
        {buttonText}
      </button>
    </div>
  );
};

const PromoCard = () => (
  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="text-green-800 font-semibold">
          Подключи любой продукт на 1 месяц бесплатно и оцени наши преимущества
        </h3>
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
        Подключить сейчас
      </button>
    </div>
  </div>
);

const Section2 = () => {
  // SVG iconlar to'g'ridan-to'g'ri yaratildi
  const PackageIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );

  const ShoppingCartIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
    </svg>
  );

  const BarChartIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const TrendingUpIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );

  const GridIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );

  const DollarIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  );

  const features = [
    {
      icon: PackageIcon,
      title: "Управление запасами",
      description: "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках уровень запасов, позволяет оптимизировать систему контроля за остатками товаров, а также ведения и учета количества закупок и поставщиков.",
      buttonText: "Подробнее",
      iconBg: "bg-orange-500"
    },
    {
      icon: ShoppingCartIcon,
      title: "Автозаказ товаров",
      description: "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис: работает с разновидным и редким спросом для разных видов товаров. Автоматический подбирает подходящий метод расчета и позволяет вносить коррективы в автоматические расчеты.",
      buttonText: "Подробнее",
      iconBg: "bg-purple-500"
    },
    {
      icon: BarChartIcon,
      title: "Анализ магазина",
      description: "Система контроля упущенных продаж – главный инструмент выручки. Сервис: тек, еженедельный тек, месячный тек – это примеры показателей, которые анализирует сервис 1С-Товары, а также то, как они отражают его и управления целой и торговой недвижимости.",
      buttonText: "Подробнее",
      iconBg: "bg-blue-500"
    },
    {
      icon: TrendingUpIcon,
      title: "Прогнозирование спроса",
      description: "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис: работает с разновидным и редким спросом для разных видов товаров. Автоматический подбирает подходящий метод расчета и позволяет вносить коррективы в автоматические расчеты.",
      buttonText: "Подробнее",
      iconBg: "bg-red-500"
    },
    {
      icon: PackageIcon,
      title: "Управление поставками",
      description: "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис: работает с разновидным и редким спросом для разных видов товаров. Автоматический подбирает подходящий метод расчета и позволяет вносить коррективы в автоматические расчеты.",
      buttonText: "Подробнее",
      iconBg: "bg-indigo-500"
    },
    {
      icon: GridIcon,
      title: "Управление ассортиментом",
      description: "Сервис 1С-Товары позволяет ограничить ассортиментную матрицу. Быстро и просто принять решение о том какие товары вывести из ассортимента, а каким стоит уделить на полках магазина. Сервис позволяет узнать необходимо информацию динамику продаж и остатках товаров движение товаров оптимального остатка.",
      buttonText: "Подробнее",
      iconBg: "bg-teal-500"
    },
    {
      icon: DollarIcon,
      title: "Управление продажами",
      description: "Система контроля упущенных продаж позволяет увеличить выручку. Сервис: тек, еженедельный тек, месячный тек – это примеры показателей, которые анализирует сервис 1С-Товары, а также предоставляет ряд инструментов для управления целой и торговой недвижимости.",
      buttonText: "Подробнее",
      iconBg: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Система управления товарами
          </h1>
          <p className="text-gray-600">
            Комплексное решение для управления запасами, анализа продаж и оптимизации ассортимента
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              iconBg={feature.iconBg}
            />
          ))}
        </div>

        {/* Promo Card */}
        <PromoCard />
      </div>
    </div>
  );
};

export default Section2;