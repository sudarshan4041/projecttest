import React from 'react';
import { BarChart3, TrendingUp, Activity, PieChart } from 'lucide-react';

interface TaglineProps {
  language: string;
}

export default function Tagline({ language }: TaglineProps) {
  const content = {
    en: {
      tagline: "Trade with the Best Trading Bots",
      subtitle: "Why hustle with yourself when AI can do it better?",
      description: "Experience the future of automated trading with our advanced AI-powered bots that work 24/7 to maximize your profits."
    },
    hi: {
      tagline: "सर्वश्रेष्ठ ट्रेडिंग बॉट्स के साथ ट्रेड करें",
      subtitle: "जब AI बेहतर कर सकता है तो खुद से क्यों परेशान हों?",
      description: "हमारे उन्नत AI-संचालित बॉट्स के साथ स्वचालित ट्रेडिंग के भविष्य का अनुभव करें जो आपके मुनाफे को अधिकतम करने के लिए 24/7 काम करते हैं।"
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Tagline */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {currentContent.tagline}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              {currentContent.subtitle}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              {currentContent.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Activity className="w-5 h-5" />
                <span className="text-sm font-medium">24/7 Trading</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <PieChart className="w-5 h-5" />
                <span className="text-sm font-medium">Risk Management</span>
              </div>
            </div>
          </div>

          {/* Right Side - Trading Charts */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Chart */}
              <div className="col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-cyan-400 font-semibold">BTC/USD</h3>
                  <span className="text-green-400 text-sm">+2.45%</span>
                </div>
                <div className="h-32 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 300 100">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q50,60 100,70 T200,50 T300,40"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                    <path
                      d="M0,80 Q50,60 100,70 T200,50 T300,40 L300,100 L0,100 Z"
                      fill="url(#chartGradient)"
                    />
                  </svg>
                </div>
              </div>

              {/* Small Charts */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">ETH</span>
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-white font-semibold">$2,680</div>
                <div className="text-red-400 text-xs">-1.2%</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">SOL</span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-white font-semibold">$98.76</div>
                <div className="text-green-400 text-xs">+3.6%</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-cyan-600 rounded-full p-3 animate-bounce">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-600 rounded-full p-2 animate-pulse">
              <PieChart className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}