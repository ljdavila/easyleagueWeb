import { elasticSearchClient } from '../app';
import { Request, Response } from 'express';

export class TeamsControllers {
  
  
  public getTeam(req: Request, res: Response) {
    let result = [];
    return elasticSearchClient.search({
      index: 'teams',
      body: {
        query: {
          match: req.query,
            // match_all: {}
          // regexp: { "service": ".+quest" }
          // wildcard: { "constituencyname": "???wich" }
    
        },
      }
    }, function (error, resp, status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        console.log(resp);
        console.log("--- Hits ---");
        resp.hits.hits.forEach(function(hit){
          console.log(hit);
          result.push(hit._source);
        });
        res.json(result);
      }
    });
  }
  
}