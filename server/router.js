const path = require('path');
const darksky = require('../api/darksky');

function routing(app) {
  app.use('/api/darksky', darksky.router);

  //404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get((req, res) => {
      res.send('404: Not found!');
      res.end();
    });

  //for not specified routes
  app.route('/*')
    .get((req, res) => {
      res.send('204: Nothing to serve here!');
      res.end();
    });
}

module.exports = routing;
