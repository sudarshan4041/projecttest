import React, { useState } from 'react';
import Header from './components/Header';
import MarketTicker from './components/MarketTicker';
import Hero from './components/Hero';
import Tagline from './components/Tagline';
import BotExplanation from './components/BotExplanation';
import TutorialGifs from './components/TutorialGifs';
import TradingStrategies from './components/TradingStrategies';
import Partnerships from './components/Partnerships';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('EN');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'HI' : 'EN');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <MarketTicker />
      <Hero language={language.toLowerCase()} />
      <Tagline language={language.toLowerCase()} />
      <BotExplanation language={language.toLowerCase()} />
      <TutorialGifs language={language.toLowerCase()} />
      <TradingStrategies language={language.toLowerCase()} />
      <Partnerships language={language.toLowerCase()} />
      <Footer language={language.toLowerCase()} />
    </div>
  );
}

export default App;