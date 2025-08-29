import React, { useState, useEffect, useRef } from 'react';
import ZodiacSelector from '../components/ZodiacSelector';
import PeriodSelector from '../components/PeriodSelector';
import HoroscopeCard from '../components/HoroscopeCard';
import horoscopeApi from '../services/horoscopeApi';

const Home = () => {
  const [selectedSign, setSelectedSign] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [horoscope, setHoroscope] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Refs for scrolling
  const periodSectionRef = useRef(null);

  useEffect(() => {
    if (selectedSign && selectedPeriod) {
      fetchHoroscope();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSign, selectedPeriod]);

  const fetchHoroscope = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // For now, mock-only so UI works end-to-end
      const result = horoscopeApi.getMockHoroscope(selectedSign, selectedPeriod);
      setHoroscope(result.data);
    } catch (e) {
      setError('Failed to fetch horoscope. Please try again.');
      const result = horoscopeApi.getMockHoroscope(selectedSign, selectedPeriod);
      setHoroscope(result.data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignSelect = (signId) => {
    // Set sign and force period to 'today'
    setSelectedSign(signId);
    setSelectedPeriod('today');

    // Scroll to the period buttons after they render
    requestAnimationFrame(() => {
      if (periodSectionRef.current) {
        periodSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  return (
    <>
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
        <div ref={periodSectionRef}>
          <PeriodSelector
            selectedPeriod={selectedPeriod}
            onPeriodSelect={setSelectedPeriod}
          />
        </div>
      )}

      <HoroscopeCard
        horoscope={horoscope}
        period={selectedPeriod}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default Home;