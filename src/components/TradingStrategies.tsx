import React from 'react';
import { TrendingUp, Target, Shield, Zap, BarChart3, PieChart, Activity, DollarSign } from 'lucide-react';

interface TradingStrategiesProps {
  language: string;
}

export default function TradingStrategies({ language }: TradingStrategiesProps) {
  const content = {
    en: {
      title: "Advanced Trading Strategies",
      subtitle: "Proven strategies to maximize your trading potential",
      strategies: [
        {
          icon: TrendingUp,
          title: "Trend Following",
          description: "Identify and follow market trends for consistent profits with momentum-based trading strategies.",
          image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: Target,
          title: "Scalping Strategy",
          description: "Quick trades capturing small price movements with high-frequency trading techniques.",
          image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: Shield,
          title: "Risk Management",
          description: "Protect your capital with advanced stop-loss and position sizing strategies.",
          image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: Zap,
          title: "Momentum Trading",
          description: "Capitalize on strong price movements and market volatility for maximum returns.",
          image: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: BarChart3,
          title: "Technical Analysis",
          description: "Use charts, indicators, and patterns to predict future price movements accurately.",
          image: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: PieChart,
          title: "Portfolio Diversification",
          description: "Spread risk across multiple assets and strategies for stable long-term growth.",
          image: "https://images.pexels.com/photos/6802045/pexels-photo-6802045.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: Activity,
          title: "Swing Trading",
          description: "Hold positions for days or weeks to capture larger price swings and trends.",
          image: "https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: DollarSign,
          title: "Value Investing",
          description: "Identify undervalued assets with strong fundamentals for long-term investment.",
          image: "https://images.pexels.com/photos/6802048/pexels-photo-6802048.jpeg?auto=compress&cs=tinysrgb&w=300"
        }
      ]
    },
    hi: {
      title: "उन्नत ट्रेडिंग रणनीतियां",
      subtitle: "अपनी ट्रेडिंग क्षमता को अधिकतम करने के लिए सिद्ध रणनीतियां",
      strategies: [
        {
          icon: TrendingUp,
          title: "ट्रेंड फॉलोइंग",
          description: "मोमेंटम-आधारित ट्रेडिंग रणनीतियों के साथ लगातार मुनाफे के लिए बाजार के रुझान की पहचान करें और उनका पालन करें।",
          image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: Target,
          title: "स्कैल्पिंग रणनीति",
          description: "हाई-फ्रीक्वेंसी ट्रेडिंग तकनीकों के साथ छोटी कीमत की गतिविधियों को पकड़ने वाले त्वरित ट्रेड।",
          image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: Shield,
          title: "जोखिम प्रबंधन",
          description: "उन्नत स्टॉप-लॉस और पोजीशन साइज़िंग रणनीतियों के साथ अपनी पूंजी की सुरक्षा करें।",
          image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: Zap,
          title: "मोमेंटम ट्रेडिंग",
          description: "अधिकतम रिटर्न के लिए मजबूत मूल्य गतिविधियों और बाजार की अस्थिरता का फायदा उठाएं।",
          image: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: BarChart3,
          title: "तकनीकी विश्लेषण",
          description: "भविष्य की कीमत की गतिविधियों की सटीक भविष्यवाणी के लिए चार्ट, संकेतक और पैटर्न का उपयोग करें।",
          image: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: PieChart,
          title: "पोर्टफोलियो विविधीकरण",
          description: "स्थिर दीर्घकालिक विकास के लिए कई संपत्तियों और रणनीतियों में जोखिम फैलाएं।",
          image: "https://images.pexels.com/photos/6802045/pexels-photo-6802045.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: Activity,
          title: "स्विंग ट्रेडिंग",
          description: "बड़े मूल्य स्विंग और रुझानों को पकड़ने के लिए दिनों या हफ्तों तक पोजीशन रखें।",
          image: "https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          icon: DollarSign,
          title: "वैल्यू इन्वेस्टिंग",
          description: "दीर्घकालिक निवेश के लिए मजबूत बुनियादी बातों के साथ कम मूल्यांकित संपत्तियों की पहचान करें।",
          image: "https://images.pexels.com/photos/6802048/pexels-photo-6802048.jpeg?auto=compress&cs=tinysrgb&w=300"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentContent.strategies.map((strategy, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:scale-105 group">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={strategy.image}
                  alt={strategy.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="bg-cyan-600 rounded-lg p-2">
                    <strategy.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {strategy.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}