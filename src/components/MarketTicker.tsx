import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export default function MarketTicker() {
  const [marketData, setMarketData] = useState<MarketData[]>([
    { symbol: 'BTC/USD', price: 43250.00, change: 1250.00, changePercent: 2.98 },
    { symbol: 'ETH/USD', price: 2680.50, change: -45.30, changePercent: -1.66 },
    { symbol: 'XRP/USD', price: 0.6234, change: 0.0156, changePercent: 2.56 },
    { symbol: 'ADA/USD', price: 0.4567, change: -0.0089, changePercent: -1.91 },
    { symbol: 'SOL/USD', price: 98.76, change: 3.45, changePercent: 3.62 },
    { symbol: 'MATIC/USD', price: 0.8934, change: 0.0234, changePercent: 2.69 },
    { symbol: 'S&P 500', price: 4785.32, change: 23.45, changePercent: 0.49 },
    { symbol: 'NASDAQ', price: 15234.67, change: -87.23, changePercent: -0.57 },
    { symbol: 'DOW JONES', price: 37689.54, change: 156.78, changePercent: 0.42 },
    { symbol: 'NIFTY 50', price: 21456.78, change: 234.56, changePercent: 1.11 },
    { symbol: 'SENSEX', price: 71234.89, change: -345.67, changePercent: -0.48 },
    { symbol: 'FTSE 100', price: 7654.32, change: 45.67, changePercent: 0.60 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => prev.map(item => ({
        ...item,
        price: item.price + (Math.random() - 0.5) * (item.symbol.includes('/') ? 10 : 100),
        change: (Math.random() - 0.5) * (item.symbol.includes('/') ? 20 : 200),
        changePercent: (Math.random() - 0.5) * 3
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 border-y border-gray-800 py-3 overflow-hidden">
      <div className="animate-scroll flex space-x-8">
        {[...marketData, ...marketData].map((item, index) => (
          <div key={index} className="flex items-center space-x-3 min-w-max">
            <span className="text-cyan-400 font-medium">{item.symbol}</span>
            <span className="text-white font-semibold">
              {item.symbol.includes('/') ? `$${item.price.toFixed(2)}` : item.price.toFixed(2)}
            </span>
            <div className={`flex items-center space-x-1 ${
              item.change >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {item.change >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span className="text-sm">
                {item.change >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}