// conversions peformed upon data entered/saved
const readingConversions = {
  
  getWeatherCode(code) {
    const weatherCode = new Map();
    weatherCode.set('100', 'Clear');
    weatherCode.set('200', 'Partial Clouds');
    weatherCode.set('300', 'Cloudy');
    weatherCode.set('400', 'Light Showers');
    weatherCode.set('500', 'Heavy Showers');
    weatherCode.set('600', 'Rain');
    weatherCode.set('700', 'Snow');
    weatherCode.set('800', 'T-storm');
    return weatherCode.get(code);
  },
  
  getWeatherIcon(code) {
    const weatherIcon = new Map();
    weatherIcon.set('100', 'large circular coloured white sun icon');
    weatherIcon.set('200', 'large circular coloured white cloud sun icon');
    weatherIcon.set('300', 'large circular coloured white cloud icon');
    weatherIcon.set('400', 'large circular coloured white clod sun rain icon');
    weatherIcon.set('500', 'large circular coloured white cloud showers heavy icon');
    weatherIcon.set('600', 'large circular coloured white cloud rain icon');
    weatherIcon.set('700', 'large circular coloured snowflake icon');
    weatherIcon.set('800', 'large circular coloured white poo storm icon');
    return weatherIcon.get(code);
  },
  
  getFahrenheit(temp) {
    const fahrenheit = (temp * 9/5) +32;
    return fahrenheit;
  },
  
  getBeaufort(windSpeed) {
    let beaufort;
    switch(true) {
      case windSpeed < 2 && windSpeed > 0:
        beaufort = 0;
        break; 
      case windSpeed < 6 && windSpeed > 1:
        beaufort = 1;
        break;
      case windSpeed < 12 && windSpeed > 5:
        beaufort = 2;
        break;
      case windSpeed < 20 && windSpeed > 11:
        beaufort = 3;
        break;
      case windSpeed < 29 && windSpeed > 19:
        beaufort = 4;
        break;
      case windSpeed < 39 && windSpeed > 28:
        beaufort = 5;
        break;
      case windSpeed < 50 && windSpeed > 38:
        beaufort = 6;
        break;
      case windSpeed < 62 && windSpeed > 49:
        beaufort = 7;
        break;
      case windSpeed < 75 && windSpeed > 61:
        beaufort = 8;
        break;
      case windSpeed < 89 && windSpeed > 74:
        beaufort = 9;
        break;
      case windSpeed < 102 && windSpeed > 88:
        beaufort = 10;
        break;
      case windSpeed < 118 && windSpeed > 101:
        beaufort = 11;
        break;
    }
  },
  
  getCompass(windDirection) {
    let compass;
    switch(true) {
      case windDirection > 0 && windDirection < 11.25:
        compass ='N';
        break;
      case windDirection > 11.24 && windDirection < 33.75:
        compass = 'NNE';
        break;
      case windDirection > 33.74 && windDirection < 56.25:
        compass ='NE';
        break;
      case windDirection > 56.24 && windDirection < 78.75:
        compass ='ENE';
        break;
      case windDirection > 78.74&& windDirection < 101.25:
        compass ='E';
        break;
      case windDirection > 101.24 && windDirection < 123.75:
        compass ='ESE';
        break;
      case windDirection > 123.74 && windDirection < 146.25:
        compass ='SE';
        break;
      case windDirection > 146.24 && windDirection < 168.75:
        compass ='SSE';
        break;
      case windDirection > 168.74 && windDirection < 191.25:
        compass ='S';
        break;
      case windDirection > 191.24 && windDirection < 213.75:
        compass ='SSW';
        break;
      case windDirection > 213.74 && windDirection < 236.25:
        compass ='SW';
        break;
      case windDirection > 236.24 && windDirection < 258.75:
        compass ='WSW';
        break;
      case windDirection > 258.74 && windDirection < 281.25:
        compass ='W';
        break;
      case windDirection > 281.24 && windDirection < 303.75:
        compass ='WNW';
        break;
      case windDirection > 303.74 && windDirection < 326.25:
        compass ='NW';
        break;
      case windDirection > 326.24 && windDirection < 348.75:
        compass ='NNW';
        break;
    }
  },
  
  getWindChill(temp,windSpeed) {
    const windChill = 13.12 + (0.6215 * temp) - 11.37(windSpeed^0.16) + (0.3965 * temp)(windSpeed^0.16);
    return windChill;
  }
  
};


module.exports = readingConversions;