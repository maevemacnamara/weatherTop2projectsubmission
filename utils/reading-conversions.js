// conversions peformed upon data entered/saved
const readingConversions = {
  getFarenheit(temp) {
    return (temp - 32) * (5/9);
  }
};


module.exports = readingConversions;