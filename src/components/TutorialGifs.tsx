import React from 'react';
import { Play, Clock, Users, Star } from 'lucide-react';

interface TutorialGifsProps {
  language: string;
}

export default function TutorialGifs({ language }: TutorialGifsProps) {
  const content = {
    en: {
      title: "Trading Bot Tutorials",
      subtitle: "Learn how to set up and optimize your trading bots",
      tutorials: [
        {
          title: "Setting Up Your First Dip Bot",
          description: "Complete guide to configure and deploy a dip buying bot",
          duration: "5:30",
          views: "12.5K",
          rating: 4.8,
          thumbnail: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          title: "Grid Bot Configuration Masterclass",
          description: "Advanced strategies for grid trading automation",
          duration: "8:45",
          views: "9.2K",
          rating: 4.9,
          thumbnail: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          title: "Arbitrage Bot Setup Tutorial",
          description: "Step-by-step guide to cross-exchange arbitrage",
          duration: "6:15",
          views: "15.8K",
          rating: 4.7,
          thumbnail: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          title: "Support Resistance Bot Strategies",
          description: "Technical analysis automation with S/R levels",
          duration: "7:20",
          views: "8.9K",
          rating: 4.8,
          thumbnail: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          title: "Risk Management Best Practices",
          description: "Protect your capital with proper risk settings",
          duration: "4:50",
          views: "18.3K",
          rating: 4.9,
          thumbnail: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          title: "Portfolio Diversification with Bots",
          description: "Balance multiple bots for optimal performance",
          duration: "9:10",
          views: "11.7K",
          rating: 4.6,
          thumbnail: "https://images.pexels.com/photos/6802045/pexels-photo-6802045.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    },
    hi: {
      title: "ट्रेडिंग बॉट ट्यूटोरियल",
      subtitle: "अपने ट्रेडिंग बॉट्स को सेट अप और ऑप्टिमाइज़ करना सीखें",
      tutorials: [
        {
          title: "अपना पहला डिप बॉट सेट करना",
          description: "डिप खरीदारी बॉट को कॉन्फ़िगर और तैनात करने की पूरी गाइड",
          duration: "5:30",
          views: "12.5K",
          rating: 4.8,
          thumbnail: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          title: "ग्रिड बॉट कॉन्फ़िगरेशन मास्टरक्लास",
          description: "ग्रिड ट्रेडिंग ऑटोमेशन के लिए उन्नत रणनीतियां",
          duration: "8:45",
          views: "9.2K",
          rating: 4.9,
          thumbnail: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          title: "आर्बिट्रेज बॉट सेटअप ट्यूटोरियल",
          description: "क्रॉस-एक्सचेंज आर्बिट्रेज के लिए चरण-दर-चरण गाइड",
          duration: "6:15",
          views: "15.8K",
          rating: 4.7,
          thumbnail: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          title: "सपोर्ट रेजिस्टेंस बॉट रणनीतियां",
          description: "S/R स्तरों के साथ तकनीकी विश्लेषण ऑटोमेशन",
          duration: "7:20",
          views: "8.9K",
          rating: 4.8,
          thumbnail: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          title: "जोखिम प्रबंधन सर्वोत्तम प्रथाएं",
          description: "उचित जोखिम सेटिंग्स के साथ अपनी पूंजी की सुरक्षा करें",
          duration: "4:50",
          views: "18.3K",
          rating: 4.9,
          thumbnail: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          title: "बॉट्स के साथ पोर्टफोलियो विविधीकरण",
          description: "इष्टतम प्रदर्शन के लिए कई बॉट्स को संतुलित करें",
          duration: "9:10",
          views: "11.7K",
          rating: 4.6,
          thumbnail: "https://images.pexels.com/photos/6802045/pexels-photo-6802045.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.tutorials.map((tutorial, index) => (
            <div key={index} className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:scale-105 group">
              <div className="relative">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-cyan-600 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{tutorial.duration}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{tutorial.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{tutorial.rating}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Watch Tutorial
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}