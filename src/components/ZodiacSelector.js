import React from 'react';
import { ZODIAC_SIGNS, ELEMENT_COLORS } from '../utils/constants';
import './ZodiacSelector.css';

console.log('ZodiacSelector - ZODIAC_SIGNS:', ZODIAC_SIGNS);
console.log('ZodiacSelector - ELEMENT_COLORS:', ELEMENT_COLORS);

const ZodiacSelector = ({ selectedSign, onSignSelect }) => {
  console.log('ZodiacSelector rendering, selectedSign:', selectedSign);
  return (
    <div className="zodiac-selector">
      <h2 className="selector-title">Choose Your Zodiac Sign</h2>
      <div className="zodiac-grid">
        {ZODIAC_SIGNS.map((sign) => (
          <div
            key={sign.id}
            className={`zodiac-card ${selectedSign === sign.id ? 'selected' : ''}`}
            onClick={() => onSignSelect(sign.id)}
            style={{
              borderColor: ELEMENT_COLORS[sign.element],
              backgroundColor: selectedSign === sign.id ? `${ELEMENT_COLORS[sign.element]}20` : 'transparent'
            }}
          >
            <div className="zodiac-symbol" style={{ color: ELEMENT_COLORS[sign.element] }}>
              {sign.symbol}
            </div>
            <h3 className="zodiac-name">{sign.name}</h3>
            <p className="zodiac-dates">{sign.dates}</p>
            <span className="zodiac-element" style={{ backgroundColor: ELEMENT_COLORS[sign.element] }}>
              {sign.element}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZodiacSelector; 