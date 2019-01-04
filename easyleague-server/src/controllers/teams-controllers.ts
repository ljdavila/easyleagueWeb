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
          hit._source.id = hit._id;
          result.push(hit._source);
        });
        res.json(result);
      }
    });
  }

  public postTeam(req: Request, res: Response) {
    console.log('req.body123');

    console.log(req.body);
    elasticSearchClient.index({
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