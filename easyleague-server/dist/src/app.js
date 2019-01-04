"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var cors = require('cors');
require('./config/passport');
// var favicon = require('serve-favicon');
const express = require("express");
const bodyParser = require("body-parser");
const api_routes_1 = require("./routes/api-routes");
var passport = require('passport');
var session = require('express-session');
var elasticsearch = require('elasticsearch');
exports.elasticSearchClient = new elasticsearch.Client({
    hosts: [
        'http://localhost:9200/',
    ]
});
class App {
    constructor() {
        this.route = new api_routes_1.Routes();
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
    config() {
        this.app.use(cors());
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        // this.app.use(require('cookie-parser'));
        // const expressSession = require('express-session');
        // this.app.use(expressSession({secret: 'mySecretKey'}));
        // this.app.use(passport.initialize());
        // this.app.use(passport.session());
        // this.app.use(session({secret: 'keyboard cat'}))
        this.app.use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError') {
                res.status(401);
                res.json({ "message": err.name + ": " + err.message });
            }
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map