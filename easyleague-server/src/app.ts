
var path = require('path');
var cors = require('cors')
require('./config/passport');

// var favicon = require('serve-favicon');

import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from './routes/api-routes';

var passport = require('passport');
var session = require('express-session');
var elasticsearch = require('elasticsearch');


export const elasticSearchClient = new elasticsearch.Client({
  hosts: [
    'http://localhost:9200/',
  ]
});

class App {
  
  public app: express.Application;
  public route: Routes = new Routes();
  token: string;
  constructor() {
    console.log('Started Server');
    this.app = express();
    // this.app.use(function (req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //   next();
    // });
    this.config();
    this.route.routes(this.app);
  }

  private config(): void {
    this.app.use(cors())
    this.app.use(bodyParser.json({ limit: '50mb' }))
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    // this.app.use(require('cookie-parser'));
    // const expressSession = require('express-session');
    // this.app.use(expressSession({secret: 'mySecretKey'}));
    // this.app.use(passport.initialize());
    // this.app.use(passport.session());
    // this.app.use(session({secret: 'keyboard cat'}))


    this.app.use(function (err, req, res, next) {
      if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
      }
    });

  }

}

export default new App().app;