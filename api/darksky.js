const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/forecast', controller.fetchDarkSkyForecast());

module.exports = {
  router
};
