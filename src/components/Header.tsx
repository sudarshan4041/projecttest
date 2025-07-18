import React, { useState } from 'react';
import { ChevronDown, Search, Sun, Moon, Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: string;
  toggleLanguage: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode, language, toggleLanguage }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownItems = {
    'trading-bots': [
      { name: 'Dip Bot', description: 'Automated buying on price dips' },
      { name: 'Grid Bot', description: 'Grid trading strategy automation' },
      { name: 'Arbitrage Bot', description: 'Cross-exchange arbitrage trading' },
      { name: 'Support Resistance Bot', description: 'Trade based on support and resistance levels' }
    ],
    'plans': [
      { name: 'Weekly Plan', description: '7-day trading access' },
      { name: 'Monthly Plan', description: '30-day premium features' },
      { name: 'Yearly Plan', description: 'Full year with discounts' }
    ],
    'news': [
      { name: 'Crypto News', description: 'Latest cryptocurrency updates' },
      { name: 'Stock Market', description: 'Share market analysis' },
      { name: 'Trading Tips', description: 'Expert trading strategies' }
    ],
    'faqs': [
      { name: 'Getting Started', description: 'How to begin trading' },
      { name: 'Bot Settings', description: 'Configure your trading bots' },
      { name: 'Account Management', description: 'Manage your account' }
    ]
  };

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-black text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer tracking-wide">
                STINGFU
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Trading Bots */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('trading-bots')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
                  <span>Trading Bots</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Plans */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('plans')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
                  <span>Plans</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* News */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('news')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
                  <span>News</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* FAQs */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('faqs')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
                  <span>FAQs</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </nav>

            {/* Search, Actions, and Controls */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden md:flex items-center bg-gray-800 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-40"
                />
              </div>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <button className="text-white hover:text-cyan-400 transition-colors">
                  Sign In
                </button>
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Sign Up
                </button>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white hover:text-cyan-400 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors">
                Trading Bots
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors">
                Plans
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors">
                News
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors">
                FAQs
              </a>
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-800 text-white placeholder-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div className="px-3 py-2 space-y-2">
                <button className="w-full text-left text-white hover:text-cyan-400 transition-colors">
                  Sign In
                </button>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Full-width Dropdown Overlay */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
          style={{ top: '64px' }}
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-2xl animate-slideDown">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dropdownItems[activeDropdown as keyof typeof dropdownItems]?.map((item, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                  >
                    <h3 className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}