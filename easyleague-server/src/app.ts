
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from './routes/api-routes';


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

    this.app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    this.config();
    this.route.routes(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

}

export default new App().app;