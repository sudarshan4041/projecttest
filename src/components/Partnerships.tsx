import React from 'react';

interface PartnershipsProps {
  language: string;
}

export default function Partnerships({ language }: PartnershipsProps) {
  const content = {
    en: {
      title: "Our Exchange Partners",
      subtitle: "Trusted collaborations with leading cryptocurrency exchanges"
    },
    hi: {
      title: "हमारे एक्सचेंज पार्टनर",
      subtitle: "अग्रणी क्रिप्टोकरेंसी एक्सचेंजों के साथ विश्वसनीय सहयोग"
    }
  };

  const currentContent = content[language as keyof typeof content];

  const exchanges = [
    {
      name: "Binance",
      logo: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "World's largest cryptocurrency exchange"
    },
    {
      name: "Bybit",
      logo: "https://images.pexels.com/photos/8369769/pexels-photo-8369769.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Leading derivatives trading platform"
    },
    {
      name: "BingX",
      logo: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Social trading and copy trading platform"
    }
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exchanges.map((exchange, index) => (
            <div key={index} className="bg-black rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:scale-105 group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-cyan-600 group-hover:border-cyan-400 transition-colors">
                <img
                  src={exchange.logo}
                  alt={exchange.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                {exchange.name}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {exchange.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}