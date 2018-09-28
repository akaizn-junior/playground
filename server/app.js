const express = require('express');
const cors = require('cors');
const http = require('http');
// local
const config = require('../config');
const routing = require('./router');
// create server
const app = express();
const httpServer = http.createServer(app);

//allow cors for all
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

//accept request data as JSON
app.use(express.json());

//start server
httpServer.listen(config.port, config.ip, () => {
  console.log(`Proxy server listening on port ${config.port}`);
  console.log(`${config.proxyBaseUrl}`);
});

//add routing to the app
routing(app);

module.exports = app;
