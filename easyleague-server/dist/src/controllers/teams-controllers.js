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
                    result.push(hit._source);
                });
                res.json(result);
            }
        });
    }
}
exports.TeamsControllers = TeamsControllers;
//# sourceMappingURL=teams-controllers.js.map