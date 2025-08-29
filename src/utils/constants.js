export const ZODIAC_SIGNS = [
  { id: 'aries', name: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19', element: 'Fire' },
  { id: 'taurus', name: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20', element: 'Earth' },
  { id: 'gemini', name: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20', element: 'Air' },
  { id: 'cancer', name: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22', element: 'Water' },
  { id: 'leo', name: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22', element: 'Fire' },
  { id: 'virgo', name: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22', element: 'Earth' },
  { id: 'libra', name: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22', element: 'Air' },
  { id: 'scorpio', name: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21', element: 'Water' },
  { id: 'sagittarius', name: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21', element: 'Fire' },
  { id: 'capricorn', name: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19', element: 'Earth' },
  { id: 'aquarius', name: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18', element: 'Air' },
  { id: 'pisces', name: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20', element: 'Water' }
];

export const HOROSCOPE_PERIODS = [
  { id: 'today', name: 'Today' },
  { id: 'tomorrow', name: 'Tomorrow' },
  { id: 'yesterday', name: 'Yesterday' },
  { id: 'weekly', name: 'This Week' },
  { id: 'monthly', name: 'This Month' }
];

// public endpoints (kept for optional fallback)
export const API_BASE_URL = 'https://horoscope-api.herokuapp.com/horoscope';
export const AZTRO_API_URL = 'https://aztro.sameerkumar.website';

// OUR AI AGENT ENDPOINT (replace with real URL)
export const AGENT_API_URL = 'https://OUR-AI-AGENT-DOMAIN/api/horoscope';

export const ELEMENT_COLORS = {
  Fire: '#FF6B6B',
  Earth: '#4ECDC4',
  Air: '#45B7D1',
  Water: '#96CEB4'
};