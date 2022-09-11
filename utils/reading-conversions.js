// conversions peformed upon data entered/saved
const readingConversions = {
  
  updateWeather(station){
    let latestReading = null;
    if (station.readings.length > 0) {
      latestReading = station.readings[station.readings - 1];
      station.code = latestReading.code;
      station.weather = readingConversions.weatherCode.get(latestReading.code);
      station.icon = readingConversions.weatherIcon.get(latestReading.code)
      station.temp = latestReading.temp;
      station.fahrenheit = readingConversions.fahrenheit(latestReading.temp);
      station.windBft = readingConversions.beaufort(latestReading.windSpeed);
      station.windChill = readingConversions.windChill(latestReading.temp, latestReading.windSpeed);
      station.pressure = readingConversions.pressure;
    }
  },
  
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
  }
  
};


module.exports = readingConversions;