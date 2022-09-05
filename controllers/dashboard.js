"use strict";

const logger = require("../utils/logger");
const lucan = require("../models/station-store.js");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "WeatherTop Dashboard",
      station: lucan
    };
    logger.info('about to render', lucan);
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
