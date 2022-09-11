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
  
  getFarenheit(temp) {
    const farenheit = (temp * 9/5) +32;
    return farenheit;
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
      case windDirection > 0 && windDirection < 11.24:
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
      case windDirection > && windDirection < :
        compass ='';
        break;
    }
  }
  
};


module.exports = readingConversions;