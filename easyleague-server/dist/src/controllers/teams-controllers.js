"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
class TeamsControllers {
    getTeam(req, res) {
        let result = [];
        return app_1.elasticSearchClient.search({
            index: 'teams',
            body: {
                query: {
                    match: req.query,
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
                    hit._source.id = hit._id;
                    result.push(hit._source);
                });
                res.json(result);
            }
        });
    }
    postTeam(req, res) {
        console.log('req.body123');
        console.log(req.body);
        app_1.elasticSearchClient.index({
            index: 'teams',
            type: 'doc',
            body: req.body.body
        }, function (err, resp, status) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(`Added team ${req.body.name}`, resp);
            }
        });
    }
}
exports.TeamsControllers = TeamsControllers;
//# sourceMappingURL=teams-controllers.js.map