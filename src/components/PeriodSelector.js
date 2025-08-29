import React from 'react';
import { HOROSCOPE_PERIODS } from '../utils/constants';
import './PeriodSelector.css';

const PeriodSelector = ({ selectedPeriod, onPeriodSelect }) => {
  return (
    <div className="period-selector">
      <h3 className="period-title">Select Time Period</h3>
      <div className="period-buttons">
        {HOROSCOPE_PERIODS.map((period) => (
          <button
            key={period.id}
            className={`period-btn ${selectedPeriod === period.id ? 'active' : ''}`}
            onClick={() => onPeriodSelect(period.id)}
          >
            {period.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PeriodSelector;