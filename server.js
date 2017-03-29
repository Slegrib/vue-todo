/*
  Todo app built in vue js
  Author: Scott Birgel
*/
// main imports
import express from 'express';
import bodyParser from 'body-parser';

// import variables and routes
import config from './config';
import { serverRoutes } from './serverRoutes';

// create the express server
const server = express();

// point requests for static assets to the correct folder
server.use(express.static('public'));

// apply middleware to the express server
server.use(bodyParser.json());
serverRoutes(server);

// get the port the app will run on from the serverConfig
const port = config.port;

// start the app
server.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('🚀  SERVER ONLINE PORT %s 🚀', port);
});
