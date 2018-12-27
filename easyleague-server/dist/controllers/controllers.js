"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./../app");
var slack_messenger = require('../utilities/slack');
class UsersControllers {
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
                });
            }
        });
    }
    getUser(req, res) {
        app_1.elasticSearchClient.search({
            index: 'users',
            body: {
                query: {
                    match: { "id": "user-" + req.query.id },
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
                });
            }
        });
    }
}
exports.UsersControllers = UsersControllers;
//# sourceMappingURL=controllers.js.map