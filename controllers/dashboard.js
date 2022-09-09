"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const uuid = require('uuid');
const accounts = require ('./accounts.js');

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "Station Dashboard",
      station: stationStore.getUserStations(loggedInUser.id),
    };
    logger.info('about to render', stationStore.getAllStations());
    response.render("dashboard", viewData);
  },

  deleteStation(request,response) {
    const stationId = request.params.id;
    logger.debug('Deleting Station ${stationId)');
    stationStore.removeStation(stationId);
    response.redirect('/dashboard');
  },
  
  addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      title: request.body.title,
      latitude: Number(request.body.latitude),
      longitude: Number(request.body.longitude),
      readings: [],
    };
    logger.debug('Creating a new Station', newStation);
    stationStore.addStation(newStation);
    response.redirect('/dashboard');
  }
};

module.exports = dashboard;
