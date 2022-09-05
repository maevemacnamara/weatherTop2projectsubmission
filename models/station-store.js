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

const leixlip = {
  title: 'Leixlip',
  readings: [
    {
      code: '200',
      temp: '10',
      windSpeed:'28',
      windDirection:'WSW',
      pressure:'900',
    },
    {
      code: '300',
      temp: '18',
      windSpeed:'05',
      windDirection:'ENE',
      pressure:'600',
    },
  ],
};

const stationCollection = [lucan, leixlip];

module.exports = stationCollection;