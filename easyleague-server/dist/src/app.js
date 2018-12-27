"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const api_routes_1 = require("./routes/api-routes");
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
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.config();
        this.route.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map