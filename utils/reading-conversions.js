// conversions peformed upon data entered/saved
const readingConversions = {
  getFarenheit(temp) {
    return (temp - 32) * (5/9);
  },
  
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
  
  
};


module.exports = readingConversions;