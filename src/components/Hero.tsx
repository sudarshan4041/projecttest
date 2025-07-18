import React from 'react';
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';

interface HeroProps {
  language: string;
}

export default function Hero({ language }: HeroProps) {
  const content = {
    en: {
      welcome: 'Welcome to Stingfu',
      subtitle: 'Advanced Trading Automation Platform',
      description: 'Unlock the power of automated trading with our sophisticated bot ecosystem. Trade smarter, not harder.',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      features: [
        { icon: Shield, title: 'Secure Trading', description: 'Bank-level security for your investments' },
        { icon: Zap, title: 'Lightning Fast', description: 'Execute trades in milliseconds' },
        { icon: TrendingUp, title: 'Profitable', description: 'Maximize your returns with AI-driven strategies' }
      ]
    },
    hi: {
      welcome: 'स्टिंगफू में आपका स्वागत है',
      subtitle: 'उन्नत ट्रेडिंग ऑटोमेशन प्लेटफॉर्म',
      description: 'हमारे परिष्कृत बॉट इकोसिस्टम के साथ स्वचालित ट्रेडिंग की शक्ति को अनलॉक करें। स्मार्ट ट्रेडिंग करें, कठिन नहीं।',
      getStarted: 'शुरू करें',
      learnMore: 'और जानें',
      features: [
        { icon: Shield, title: 'सुरक्षित ट्रेडिंग', description: 'आपके निवेश के लिए बैंक-स्तरीय सुरक्षा' },
        { icon: Zap, title: 'तेज़ी से', description: 'मिलीसेकंड में ट्रेड निष्पादित करें' },
        { icon: TrendingUp, title: 'लाभदायक', description: 'AI-संचालित रणनीतियों के साथ रिटर्न अधिकतम करें' }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            {currentContent.welcome}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            {currentContent.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105">
              <span>{currentContent.getStarted}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {currentContent.learnMore}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}