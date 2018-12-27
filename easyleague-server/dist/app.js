"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var elasticsearch = require('elasticsearch');
exports.elasticSearchClient = new elasticsearch.Client({
    hosts: [
        'http://localhost:9200/',
    ]
});
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map