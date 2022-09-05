"use strict";

const logger = require("../utils/logger");

const lucan = {
  title: 'Lucan',
  readings: [
    {
      code: '100',
      temp: ,
      
      
    }
  ]
}

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "WeatherTop Dashboard",
    };
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
