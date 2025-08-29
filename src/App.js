import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ZodiacSelector from './components/ZodiacSelector';
import PeriodSelector from './components/PeriodSelector';
import HoroscopeCard from './components/HoroscopeCard';
import horoscopeApi from './services/horoscopeApi';
import './App.css';

// Debug logging
console.log('App component loaded');
console.log('Header component:', Header);
console.log('ZodiacSelector component:', ZodiacSelector);
console.log('PeriodSelector component:', PeriodSelector);
console.log('HoroscopeCard component:', HoroscopeCard);
console.log('horoscopeApi:', horoscopeApi);

function App() {
  const [selectedSign, setSelectedSign] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [horoscope, setHoroscope] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedSign && selectedPeriod) {
      fetchHoroscope();
    }
  }, [selectedSign, selectedPeriod]);

  const fetchHoroscope = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      let result;
      
      // Try the main API first
      if (selectedPeriod === 'today') {
        result = await horoscopeApi.getAztroHoroscope(selectedSign);
      } else {
        result = await horoscopeApi.getHoroscope(selectedSign, selectedPeriod);
      }
      
      if (result.success) {
        setHoroscope(result.data);
      } else {
        // Fallback to mock data
        result = horoscopeApi.getMockHoroscope(selectedSign, selectedPeriod);
        setHoroscope(result.data);
      }
    } catch (err) {
      setError('Failed to fetch horoscope. Please try again.');
      // Fallback to mock data
      const result = horoscopeApi.getMockHoroscope(selectedSign, selectedPeriod);
      setHoroscope(result.data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignSelect = (sign) => {
    setSelectedSign(sign);
  };

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
  };

  console.log('Rendering App component');
  console.log('selectedSign:', selectedSign);
  console.log('selectedPeriod:', selectedPeriod);
  console.log('horoscope:', horoscope);
  
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Discover Your Cosmic Destiny</h1>
          <p className="hero-subtitle">
            Unlock the secrets of the stars and explore what the universe has planned for you
          </p>
        </div>
        
        <ZodiacSelector 
          selectedSign={selectedSign} 
          onSignSelect={handleSignSelect} 
        />
        
        {selectedSign && (
          <PeriodSelector 
            selectedPeriod={selectedPeriod} 
            onPeriodSelect={handlePeriodSelect} 
          />
        )}
        
        <HoroscopeCard 
          horoscope={horoscope}
          period={selectedPeriod}
          isLoading={isLoading}
          error={error}
        />
        
        {/* Placeholder for AI Agent Integration */}
        <div className="ai-section">
          <h2 className="ai-title">🤖 AI-Powered Insights Coming Soon</h2>
          <p className="ai-description">
            Get personalized horoscope interpretations and cosmic guidance powered by advanced AI
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;