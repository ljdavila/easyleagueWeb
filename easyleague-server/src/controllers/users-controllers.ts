import { elasticSearchClient } from '../app';
import { Request, Response } from 'express';


export class UsersControllers {

  public getUsers(req: Request, res: Response) {
    let result = []
    elasticSearchClient.search({
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
        console.log("search error: " + error)
      }
      else {
        console.log("--- Response ---");
        console.log(resp);
        console.log("--- Hits ---");
        resp.hits.hits.forEach(function (hit) {
          console.log(hit);
          result.push(hit._source);
        })
        res.json(result);
      }
    });
  }

  public getUser(req: Request, res: Response) {
    let result = [];
    console.log(req.query)
    return elasticSearchClient.search({
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
        console.log("search error: " + error)
      }
      else {

        console.log("--- Response ---");
        console.log(resp);
        console.log("--- Hits ---");
        console.log(res)

        resp.hits.hits.forEach(function (hit) {
          console.log(hit);
          result.push(hit._source);
        });
        console.log(result)
        res.json(result);
      }
    });
  }

  public getPlayerByTeam(req: Request, res: Response) {
    console.log('Getting players');
    console.log(req);
    return elasticSearchClient.search({
      index: 'users',
      body: {
        query: {
          match: { "team_id": req.params.id },
          // match_all: {}
          // regexp: { "service": ".+quest" }
          // wildcard: { "constituencyname": "???wich" }
          // match: {}
        },
      }
    }, function (error, resp, status) {
      if (error) {
        console.log("search error: " + error)
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
