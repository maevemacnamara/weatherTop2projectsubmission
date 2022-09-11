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
     (temp * 9/5) +32;
    return fahrenheit;
  },
  
  getBeaufort(windSpeed) {
    let beaufort;
    switch(true) {
      case windSpeed <2 && windSpeed >0:
        beaufort = 0;
        break; 
      case windSpeed <6 && windSpeed > 1:
        beaufort = 1;
        break;
      case windSpeed <20 && windSpeed > 5:
        beaufort = 2
        break;
      case windSpeed <39
    }
  },
  
};


module.exports = readingConversions;