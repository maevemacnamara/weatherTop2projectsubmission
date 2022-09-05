'use strict'

const logger = require('../utils/logger');

const lucan = {
  title: 'Lucan',
  readings: [
    {
      code: '100',
      temp: '25',
      windSpeed:'11',
      windDirection:'NNE',
      pressure:'1000',
    },
    {
      code: '200',
      temp: '14',
      windSpeed:'22',
      windDirection:'SWS',
      pressure:'800',
    },
  ],
};

module.exports = lucan;