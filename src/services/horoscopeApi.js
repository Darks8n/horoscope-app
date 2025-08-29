import { API_BASE_URL, AZTRO_API_URL, AGENT_API_URL } from '../utils/constants';

class HoroscopeApiService {
  async getAgentHoroscope(sign, period = 'today', details = null) {
    try {
      const res = await fetch(AGENT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sign, period, details })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return {
        success: true,
        data: {
          sign: data.sign || sign,
          period: data.period || period,
          horoscope: data.text,
          date: data.date || new Date().toISOString().split('T')[0],
          mood: data.mood,
          lucky_number: data.lucky_number,
          color: data.color,
          compatibility: data.compatibility,
          source: data.source || 'agent'
        }
      };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  async getHoroscope(sign, period = 'today') {
    try {
      const response = await fetch(`${API_BASE_URL}/${period}/${sign}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return {
        success: true,
        data: {
          sign,
          period,
          horoscope: data.horoscope,
          date: data.date,
          source: 'horoscope-api'
        }
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getAztroHoroscope(sign) {
    try {
      const response = await fetch(`${AZTRO_API_URL}/?sign=${sign}&type=today`, { method: 'POST' });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return {
        success: true,
        data: {
          sign,
          period: 'today',
          horoscope: data.description,
          date: data.current_date,
          compatibility: data.compatibility,
          mood: data.mood,
          lucky_number: data.lucky_number,
          lucky_time: data.lucky_time,
          color: data.color,
          source: 'aztro-api'
        }
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  getMockHoroscope(sign, period = 'today') {
    const mockHoroscopes = {
      aries: {
        today: "Your fiery energy is at its peak today. Take bold actions and trust your instincts.",
        tomorrow: "Tomorrow brings new opportunities for leadership. Your courage will be rewarded.",
        weekly: "This week, focus on your personal goals. Your determination will help you overcome any obstacles.",
        monthly: "This month brings exciting new beginnings. Your natural leadership will shine."
      },
      taurus: {
        today: "Your practical nature serves you well today. Focus on building solid foundations.",
        tomorrow: "Tomorrow is perfect for financial planning and material pursuits.",
        weekly: "This week emphasizes stability and growth. Your patience will lead to success.",
        monthly: "This month is ideal for long-term planning and achieving your material goals."
      },
      gemini: {
        today: "Your curiosity is heightened today. Explore new ideas and connect with others.",
        tomorrow: "Tomorrow brings intellectual stimulation and exciting conversations.",
        weekly: "This week, your adaptability will help you navigate any changes smoothly.",
        monthly: "This month encourages learning and expanding your horizons."
      },
      cancer: {
        today: "Your intuition is strong today. Trust your gut feelings and nurture your relationships.",
        tomorrow: "Tomorrow brings emotional clarity and deeper connections with loved ones.",
        weekly: "This week, focus on creating a comfortable and secure environment.",
        monthly: "This month emphasizes family bonds and emotional growth."
      },
      leo: {
        today: "Your charisma is magnetic today. Shine brightly and inspire others around you.",
        tomorrow: "Tomorrow brings recognition and opportunities to showcase your talents.",
        weekly: "This week, your natural leadership will be appreciated by many.",
        monthly: "This month brings success and admiration from your community."
      },
      virgo: {
        today: "Your attention to detail serves you well today. Focus on perfecting your craft.",
        tomorrow: "Tomorrow brings opportunities for organization and self-improvement.",
        weekly: "This week, your analytical mind will help solve complex problems.",
        monthly: "This month is perfect for setting new goals and improving your skills."
      },
      libra: {
        today: "Your sense of balance is strong today. Seek harmony in all your interactions.",
        tomorrow: "Tomorrow brings opportunities for partnership and collaboration.",
        weekly: "This week, focus on creating beauty and maintaining relationships.",
        monthly: "This month emphasizes finding balance between work and personal life."
      },
      scorpio: {
        today: "Your intensity is powerful today. Dive deep into your passions and interests.",
        tomorrow: "Tomorrow brings transformation and opportunities for personal growth.",
        weekly: "This week, your determination will help you overcome any obstacles.",
        monthly: "This month brings profound insights and personal revelations."
      },
      sagittarius: {
        today: "Your adventurous spirit is calling today. Embrace new experiences and learning.",
        tomorrow: "Tomorrow brings opportunities for travel and expanding your horizons.",
        weekly: "This week, your optimism will inspire others and open new doors.",
        monthly: "This month encourages exploration and philosophical growth."
      },
      capricorn: {
        today: "Your ambition drives you forward today. Focus on your long-term goals.",
        tomorrow: "Tomorrow brings opportunities for career advancement and recognition.",
        weekly: "This week, your discipline will help you achieve significant progress.",
        monthly: "This month is ideal for building lasting foundations for your future."
      },
      aquarius: {
        today: "Your innovative thinking is at its peak today. Share your unique ideas with others.",
        tomorrow: "Tomorrow brings opportunities for humanitarian work and social connections.",
        weekly: "This week, your originality will set you apart and attract like-minded people.",
        monthly: "This month emphasizes community involvement and intellectual growth."
      },
      pisces: {
        today: "Your intuition and creativity are heightened today. Trust your artistic instincts.",
        tomorrow: "Tomorrow brings spiritual insights and deeper emotional understanding.",
        weekly: "This week, your compassion will help you connect deeply with others.",
        monthly: "This month brings spiritual growth and artistic inspiration."
      }
    };

    return {
      success: true,
      data: {
        sign,
        period,
        horoscope: mockHoroscopes[sign]?.[period] || "Your horoscope is being prepared with cosmic wisdom.",
        date: new Date().toISOString().split('T')[0],
        source: 'mock-data'
      }
    };
  }
}

const horoscopeApi = new HoroscopeApiService();
export default horoscopeApi;