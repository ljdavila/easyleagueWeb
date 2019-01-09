var client = require('./connection.js');

client.indices.putMapping({
  index: 'leagues',
  type: 'doc',
  body: {
    properties:
    {
      /* common */       
      'type': { 'type': 'text' },
      'name': { 'type': 'text' },
      'sport': { 'type': 'keyword'},

      /* league */
      "commisioner": { "type": "keyword" },
      'start_time': { 'type': 'date'},
      'end_time': { 'type': 'date'},

      /* team */
      'coach': { 'type': 'keyword'},
      'league_id': { 'type': 'keyword'},
      
    }
  }
}, function (err, resp, status) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("mapping", resp);
  }
});


client.indices.putMapping({
  index: 'teams',
  type: 'doc',
  body: {
    properties:
    {
      'type': { 'type': 'text' },
      'name': { 'type': 'text' },
      'sport': { 'type': 'keyword'},
      'created': { 'type': 'date'},
      'logo': { 'type': 'binary'},
      'coach_id': { 'type': 'keyword'},
      'players': {"type" : "nested",
                  properties: {
                    "id": {'type': 'keyword'},
                    "name": {'type': 'keyword'},
                    'position': {'type': 'keyword'}
                  }
                }    
    }
  }
}, function (err, resp, status) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("mapping", resp);
  }
});

client.indices.putMapping({
  index: 'users',
  type: 'doc',
  body: {
    properties:
    {
      'name': { 'type': 'text' },
      'email': { 'type': 'text' },
      "user_name": { "type": "text" },
      'birthday': { 'type': 'keyword' },
      'rank': { 'type': 'long' },
      'hometown': {'type': 'keyword'},
      'country' : { 'type': 'keyword'},
      'type': { 'type': 'text' },
      'team_id': {'type': 'keyword'},
      'league_id': { 'type':'keyword' },
      'salt': {'type':'text'},
      'hash': {'type':'text'},
      'picture': {'type': 'binary'}
    }
  }
}, function (err, resp, status) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("mapping", resp);
  }
});

client.indices.putMapping({
  index: 'stats',
  type: 'doc',
  body: {
    properties: {
      /* Common */
      "timestamp": { "type": "date" },
      "type": { "type": "keyword" },
      "name": { "type": "text" },
      "gm": { "type": "integer" }, // games 
      "gp": { "type": "integer" }, // games played
      "w": { "type": "integer" }, // wins
      "l": { "type": "integer" }, // loses
      "t": { "type": "integer" }, // ties
      "min": { "type": "integer" }, // minutes
      "user_name": { "type": "keyword" },
      "team_id": { "type": "keyword" },
      "league_id": { "type": "keyword" },

      /* Basketball */
      "fga": { "type": "integer" }, // field goals attemps
      "fgm": { "type": "integer" }, // field goals made
      "pts": { "type": "integer" }, // points
      "ast": { "type": "integer" }, // assists
      "reb": { "type": "integer" }, // rebounds
      "stl": { "type": "integer" }, // steals
      "to": { "type": "integer" }, // turnovers
      "blk": { "type": "integer" }, // blocks
      "fta": { "type": "integer" }, // free throwa attemps
      "ftm": { "type": "integer" }, // free throws made

      // Ice hockey
      "stk": { "type": "integer" }, // winning or losing streaks
      "otl": { "type": "integer" }, // overtime loses 
      "sol": { "type": "integer" }, // shootout loses
      "gf": { "type": "integer" }, // goals for
      "ga": { "type": "integer" }, // goals against
      "otw": { "type": "integer" }, // overtime win
      "sow": { "type": "integer" }, // shootout wins
      "row": { "type": "integer" }, // regulation plus Overtime wins ( secondary tiebreaker)

      //Ice Hockey individual
      "s": { "type": "integer" }, // shots on goal
      "pn": { "type": "integer" }, // penalties
      "pim": { "type": "integer" }, // penalties in minutes
      "ppg": { "type": "integer" }, // power play goals
      "ppa": { "type": "integer" }, // power play assists
      "shg": { "type": "integer" }, // shorthanded goals
      "shg": { "type": "integer" }, // shorthanded assist
      "gwg": { "type": "integer" }, // game winning goals
      "gtg": { "type": "integer" }, // game tying goals
      "eng": { "type": "integer" }, // empty net goals
      "sv": { "type": "integer" } // saves
    }
  }
}, function (err, resp, status) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("mapping", resp);
  }
});