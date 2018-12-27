"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
class UsersControllers {
    getUsers(req, res) {
        let result = [];
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
                    result.push(hit._source);
                });
                res.json(result);
            }
        });
    }
    getUser(req, res) {
        let result = [];
        console.log(req.query);
        return app_1.elasticSearchClient.search({
            index: 'users',
            body: {
                query: {
                    match: req.query
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
                console.log(res);
                resp.hits.hits.forEach(function (hit) {
                    console.log(hit);
                    result.push(hit._source);
                });
                console.log(result);
                res.json(result);
            }
        });
    }
    getPlayerByTeam(req, res) {
        console.log('Getting players');
        console.log(req);
        return app_1.elasticSearchClient.search({
            index: 'users',
            body: {
                query: {
                    match: { "team_id": req.params.id },
                },
            }
        }, function (error, resp, status) {
            if (error) {
                console.log("search error: " + error);
            }
            else {
                let result = [];
                console.log("--- Response ---");
                console.log(resp);
                console.log("--- Hits ---");
                resp.hits.hits.forEach(function (hit) {
                    console.log(hit);
                    result.push(hit._source);
                });
                res.json(result);
            }
        });
    }
}
exports.UsersControllers = UsersControllers;
//# sourceMappingURL=users-controllers.js.map