"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./../app");
class UsersControllers {
    constructor() {
        this.result = [];
    }
    getUsers(req, res) {
        app_1.elasticSearchClient.search({
            index: 'users',
            body: {
                query: {
                    // match: { "month": "12"},
                    match_all: {}
                    // regexp: { "service": ".+quest" }
                    // wildcard: { "constituencyname": "???wich" }
                },
            }
        }, function (error, resp, status) {
            if (error) {
                console.log("search error: " + error);
            }
            else {
                console.log("--- Response ---");
                console.log(resp);
                console.log("--- Hits ---");
                resp.hits.hits.forEach(function (hit) {
                    console.log(hit);
                    this.result.push(hit._source);
                });
                res.json(this.result);
            }
        });
    }
    getUser(req, res) {
        let result = {};
        return app_1.elasticSearchClient.search({
            index: 'users',
            body: {
                query: {
                    match: req.body,
                },
            }
        }, function (error, resp, status) {
            if (error) {
                console.log("search error: " + error);
            }
            else {
                console.log("--- Response ---");
                console.log(resp);
                console.log("--- Hits ---");
                resp.hits.hits.forEach(function (hit) {
                    console.log(hit);
                    this.result.push(hit._source);
                });
                res.json(result);
            }
        });
    }
}
exports.UsersControllers = UsersControllers;
//# sourceMappingURL=controllers.js.map