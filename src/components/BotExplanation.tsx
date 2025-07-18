import React from 'react';
import { TrendingDown, Grid3X3, ArrowLeftRight, BarChart3 } from 'lucide-react';

interface BotExplanationProps {
  language: string;
}

export default function BotExplanation({ language }: BotExplanationProps) {
  const content = {
    en: {
      title: "Our Trading Bots Explained",
      subtitle: "Choose the perfect bot for your trading strategy",
      bots: [
        {
          icon: TrendingDown,
          name: "Dip Bot",
          description: "Automatically buys cryptocurrency when prices drop by a specified percentage, helping you capitalize on market dips.",
          features: ["Smart dip detection", "Customizable buy triggers", "Risk management", "Portfolio diversification"],
          color: "from-green-500 to-emerald-600"
        },
        {
          icon: Grid3X3,
          name: "Grid Bot",
          description: "Places multiple buy and sell orders at predetermined intervals, profiting from market volatility within a price range.",
          features: ["Automated grid trading", "Profit from volatility", "Customizable grid size", "24/7 execution"],
          color: "from-blue-500 to-cyan-600"
        },
        {
          icon: ArrowLeftRight,
          name: "Arbitrage Bot",
          description: "Exploits price differences across multiple exchanges, buying low on one exchange and selling high on another.",
          features: ["Cross-exchange trading", "Real-time price monitoring", "Instant execution", "Risk-free profits"],
          color: "from-purple-500 to-indigo-600"
        },
        {
          icon: BarChart3,
          name: "Support Resistance Bot",
          description: "Trades based on technical analysis of support and resistance levels, buying at support and selling at resistance.",
          features: ["Technical analysis", "Support/resistance detection", "Trend following", "Advanced algorithms"],
          color: "from-orange-500 to-red-600"
        }
      ]
    },
    hi: {
      title: "हमारे ट्रेडिंग बॉट्स की व्याख्या",
      subtitle: "अपनी ट्रेडिंग रणनीति के लिए सही बॉट चुनें",
      bots: [
        {
          icon: TrendingDown,
          name: "डिप बॉट",
          description: "जब कीमतें निर्दिष्ट प्रतिशत से गिरती हैं तो स्वचालित रूप से क्रिप्टोकरेंसी खरीदता है, बाजार की गिरावट का फायदा उठाने में मदद करता है।",
          features: ["स्मार्ट डिप डिटेक्शन", "कस्टमाइज़ेबल खरीद ट्रिगर", "जोखिम प्रबंधन", "पोर्टफोलियो विविधीकरण"],
          color: "from-green-500 to-emerald-600"
        },
        {
          icon: Grid3X3,
          name: "ग्रिड बॉट",
          description: "पूर्व निर्धारित अंतराल पर कई खरीद और बिक्री ऑर्डर देता है, मूल्य सीमा के भीतर बाजार की अस्थिरता से लाभ कमाता है।",
          features: ["स्वचालित ग्रिड ट्रेडिंग", "अस्थिरता से लाभ", "कस्टमाइज़ेबल ग्रिड साइज़", "24/7 निष्पादन"],
          color: "from-blue-500 to-cyan-600"
        },
        {
          icon: ArrowLeftRight,
          name: "आर्बिट्रेज बॉट",
          description: "कई एक्सचेंजों में मूल्य अंतर का फायदा उठाता है, एक एक्सचेंज पर कम खरीदता है और दूसरे पर अधिक बेचता है।",
          features: ["क्रॉस-एक्सचेंज ट्रेडिंग", "रियल-टाइम मूल्य निगरानी", "तत्काल निष्पादन", "जोखिम-मुक्त लाभ"],
          color: "from-purple-500 to-indigo-600"
        },
        {
          icon: BarChart3,
          name: "सपोर्ट रेजिस्टेंस बॉट",
          description: "सपोर्ट और रेजिस्टेंस स्तरों के तकनीकी विश्लेषण के आधार पर ट्रेड करता है, सपोर्ट पर खरीदता है और रेजिस्टेंस पर बेचता है।",
          features: ["तकनीकी विश्लेषण", "सपोर्ट/रेजिस्टेंस डिटेक्शन", "ट्रेंड फॉलोइंग", "उन्नत एल्गोरिदम"],
          color: "from-orange-500 to-red-600"
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentContent.bots.map((bot, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${bot.color} flex items-center justify-center mr-4`}>
                  <bot.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">{bot.name}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {bot.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                {bot.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`mt-6 w-full bg-gradient-to-r ${bot.color} hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}