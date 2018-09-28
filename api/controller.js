const fetch = require('node-fetch');
// local
const config = require('../config');

function fetchDarkSkyForecast() {
  return function (req, res, next) {
    const baseUrl = 'https://api.darksky.net';
    let uri = `${baseUrl}/forecast/${config.api_key}/${req.body.lat},${req.body.long}`;
    //additional uri params
    uri = uri.concat('?exclude=minutely,hourly&lang=en');

    const request = new fetch.Request(uri, {
      method: 'GET',
      mode: 'cors'
    });

    fetch(request)
      .then(response => response.json())
      .then(body => {
        res.status(200).send(body);
        return next();
      })
      .catch(err => {
        console.log(err);
        res.status(500);
        return next();
      });
    }
  }

module.exports = {
  fetchDarkSkyForecast
};
