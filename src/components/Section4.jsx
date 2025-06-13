import React from 'react';



{/* Raximjanov Abdulatif qildi */}

const ProductComparison = () => {
  const withoutFeatures = [
    "Лишние товары складируются и не продаются",
    "Постоянно приходится думать, какой продукт будет актуален, и какой стоит выводить из ассортимента",
    "Лишние товары складируются и не продаются",
    "Постоянно приходится думать, какой продукт будет актуален, и какой стоит выводить из ассортимента",
    "Лишние товары складируются и не продаются",
    "Постоянно приходится думать, какой продукт будет актуален, и какой стоит выводить из ассортимента",
    "Лишние товары складируются и не продаются"
  ];

  const withFeatures = [
    "Оптимизированная система остатков",
    "В наличии есть оптимизированное ассортиментное решение, поддерживающее актуальный ассортимент",
    "Расширенный прогноз спроса",
    "В наличии есть оптимизированное ассортиментное решение, поддерживающее актуальный ассортимент",
    "В наличии есть оптимизированное ассортиментное решение, поддерживающее актуальный ассортимент",
    "Система контроля управления товаров"
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">С нами удобнее</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Without 1C-Товары */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">Без 1C-Товары</h2>
          <div className="space-y-4">
            {withoutFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                 
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* With 1C-Товары */}
        <div className="bg-green-50 rounded-lg p-6 shadow-sm border border-green-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
            Вместе с 1C-Товары
            
          </h2>
          <div className="space-y-4">
            {withFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;