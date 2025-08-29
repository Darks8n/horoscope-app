import React from 'react';
import { ZODIAC_SIGNS, ELEMENT_COLORS } from '../utils/constants';
import './HoroscopeCard.css';

const HoroscopeCard = ({ horoscope, period, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="horoscope-card loading">
        <div className="loading-spinner"></div>
        <p>Reading the stars...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="horoscope-card error">
        <div className="error-icon">⚠️</div>
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
        <p className="fallback-text">Don't worry, the stars are still shining!</p>
      </div>
    );
  }

  if (!horoscope) {
    return (
      <div className="horoscope-card empty">
        <div className="empty-icon">✨</div>
        <h3>Select Your Zodiac Sign</h3>
        <p>Choose your sign above to discover what the stars have in store for you!</p>
      </div>
    );
  }

  const zodiacSign = ZODIAC_SIGNS.find(sign => sign.id === horoscope.sign);
  const elementColor = ELEMENT_COLORS[zodiacSign?.element];

  return (
    <div className="horoscope-card" style={{ borderColor: elementColor }}>
      <div className="card-header">
        <div className="sign-info">
          <span className="sign-symbol" style={{ color: elementColor }}>
            {zodiacSign?.symbol}
          </span>
          <div>
            <h2 className="sign-name">{zodiacSign?.name}</h2>
            <p className="period-text">{period}</p>
          </div>
        </div>
        <div className="element-badge" style={{ backgroundColor: elementColor }}>
          {zodiacSign?.element}
        </div>
      </div>
      
      <div className="horoscope-content">
        <p className="horoscope-text">{horoscope.horoscope}</p>
        
        {horoscope.source === 'aztro-api' && (
          <div className="additional-info">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Mood:</span>
                <span className="info-value">{horoscope.mood}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Lucky Number:</span>
                <span className="info-value">{horoscope.lucky_number}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Lucky Color:</span>
                <span className="info-value">{horoscope.color}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Compatibility:</span>
                <span className="info-value">{horoscope.compatibility}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="card-footer">
        <span className="date-text">Date: {horoscope.date}</span>
        <span className="source-text">Source: {horoscope.source}</span>
      </div>
    </div>
  );
};

export default HoroscopeCard;