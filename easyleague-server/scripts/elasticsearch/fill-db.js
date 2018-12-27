var client = require('./connection.js');

client.index({
  index: 'leagues',
  id: 'league-1',
  type: 'doc',
  body: {
    "type": "league",
    "name": "nba",
    "commisioner": "davi",
    'sport': 'basketball',
    'start_time': 150000000,
    'end_time': 160000000
  }
}, function (err, resp, status) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("create", resp);
  }
});

  client.index({
    index: 'teams',
    id: 'team-sharks',
    type: 'doc',
    body: {
      "type": "team",
      "name": "Sharks",
      "rank": 1,
      "coach_id": 'user-davi',
      'created': 150000000,
      'broken': 156000000,
      'players': [
        { "id": "user-biri", "name": "Benjamin Acevedo", "position": ["PF", "C"]},
        {"id": "user-liz", "name": "Liz Rodriguez", "position": ["PG"]},
        { "id": "user-javy", "name": "Javier Schutz", "position": ["SG"]},
        {"id": "user-cindy", "name": "Cindy Li", "position": ["SF"]},
        { "id": "user-davi", "name": "Luis Davila", "position": ["C", "PF"]},
        {"id": "user-lizzy", "name": "Liz Foster", "position": ["SG"]},
        { "id": "user-fredo", "name": "Alfredo Velasco", "position": ["PG"]},
        {"id": "user-ron", "name": "Ronald Mcdonald", "position": ["SF"]},
        { "id": "user-april", "name": "April Schutz", "position": ["PF", "C"]},
        { "id": "user-mark", "name": "Mark Bosh", "position": ["SG"]},
        {"id": "user-mike", "name": "Mike Simpson", "position": ["SF", "SG", "PF"]},
        { "id": "user-david", "name": "David Goliath", "position": ["C"]}
      ]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'teams',
    id: 'team-hornets',
    type: 'doc',
    body: {
      "type": "team",
      "name": "Hornets",
      "rank": 2,
      "coach_id": 'user-davi',
      'created': 150000000,
      'broken': 156000000,
      'players': [
        { "id": "user-biri", "position": ["PF", "C"]},
        {"id": "user-liz", "position": ["PG"]},
        { "id": "user-javy", "position": ["SG"]},
        {"id": "user-cindy", "position": ["SF"]},
        { "id": "user-mario", "position": ["C", "PF"]},
        {"id": "user-lizzy", "position": ["SG"]},
        { "id": "user-fredo", "position": ["PG"]},
        {"id": "user-ron", "position": ["SF"]},
        { "id": "user-april", "position": ["PF", "C"]},
        { "id": "user-mark", "position": ["SG"]},
        {"id": "user-mike", "position": ["SF", "SG", "PF"]},
        { "id": "user-david", "position": ["C"]}
      ]
    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'teams',
    id: 'team-1',
    type: 'doc',
    body: {
      "type": "team",
      'name': 'Bulls',
      "rank": 2,
      "league_id": "league-1",
      "coach_id": "user-biri",
      'sport': 'basketball',
      'created': 150000000,
      'broken': 156000000,
      'players': [
        { "id": "user-biri", "position": ["PF", "C"]},
        {"id": "user-liz", "position": ["PG"]},
        { "id": "user-javy", "position": ["SG"]},
        {"id": "user-cindy", "position": ["SF"]},
        { "id": "user-mario", "position": ["C", "PF"]},
        {"id": "user-lizzy", "position": ["SG"]},
        { "id": "user-fredo", "position": ["PG"]},
        {"id": "user-ron", "position": ["SF"]},
        { "id": "user-april", "position": ["PF", "C"]},
        { "id": "user-mark", "position": ["SG"]},
        {"id": "user-mike", "position": ["SF", "SG", "PF"]},
        { "id": "user-david", "position": ["C"]}
      ]
    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-davi',
    type: 'doc',
    body: {
      "type": "user",
      "name": "Luis Davila",
      "user_name": "davi",
      "email": "ljdavila18@gmail.com",
      "rank": 1,
      "hometown": "Guayama",
      "country": "PR",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-biri',
    type: 'doc',
    body: {
      "type": "user",
      "name": "Benjamin Acevedo",
      "user_name": "biri",
      "email": "biri@gmail.com",
      "rank": 2,
      "hometown": "Santurce",
      "country": "PR",
      "team_id": ["team-hornets"]
    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-chick',
    type: 'doc',
    body: {
      "type": "user",
      "name": "Rama Acevedo",
      "user_name": "bomb",
      "email": "chick@gmail.com",
      "rank": 3,
      "hometown": "San Juan",
      "country": "PR",
      "team_id": ["team-sharks", "team-hornets"]
    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-liz',
    type: 'doc',
    body: {
      "type": "user",
      "name": "Liz Rodriguez",
      "user_name": "liz",
      "email": "liz@gmail.com",
      "rank": 6,
      "hometown": "Bayamon",
      "country": "PR",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-javy',
    type: 'doc',
    body: {
      "type": "user",
      "name": "Javier Schutz",
      "user_name": "javy",
      "email": "javier@gmail.com",
      "rank": 5,
      "hometown": "Durham, NC",
      "country": "USA",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-cindy',
    type: 'doc',
    body: {
      "type": "user",
      "name": "CIndy Li",
      "user_name": "cindy",
      "email": "cindy@gmail.com",
      "rank": 3,
      "hometown": "Durham, NC",
      "country": "USA",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-lizzy',
    type: 'doc',
    body: {
      "type": "user",
      "name": "Liz Foster",
      "user_name": "lizzy",
      "email": "lizzy@gmail.com",
      "rank": 4,
      "hometown": "Florida, NC",
      "country": "USA",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-fredo',
    type: 'doc',
    body: {
      "type": "user",
      "name": "Alfredo Velasco",
      "user_name": "fredo",
      "email": "fredo@gmail.com",
      "rank": 12,
      "hometown": "Charlotte, NC",
      "country": "USA",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-ron',
    type: 'doc',
    body: {
      "type": "user",
      "name": "Ronald Mcdonald",
      "user_name": "ron",
      "email": "ron@gmail.com",
      "rank": 7,
      "hometown": "Florida, NC",
      "country": "USA",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-april',
    type: 'doc',
    body: {
      "type": "user",
      "name": "April Schutz",
      "user_name": "april",
      "email": "april@gmail.com",
      "rank": 8,
      "hometown": "Raleigh, NC",
      "country": "USA",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-mark',
    type: 'doc',
    body: {
      "type": "user",
      "name": "Mark Bosh",
      "user_name": "mark",
      "email": "mark@gmail.com",
      "rank": 9,
      "hometown": "Wilminton, NC",
      "country": "USA",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-jamikevy',
    type: 'doc',
    body: {
      "type": "user",
      "name": "Mike Simpson",
      "user_name": "mike",
      "email": "mike@gmail.com",
      "rank": 10,
      "hometown": "Durham, NC",
      "country": "USA",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'users',
    id: 'user-david',
    type: 'doc',
    body: {
      "type": "user",
      "name": "David Goliath",
      "user_name": "davi",
      "email": "david@gmail.com",
      "rank": 11,
      "hometown": "Durham, NC",
      "country": "USA",
      "team_id": ["team-sharks"]

    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.index({
    index: 'stats',
    id: 'basketball-biri',
    type: 'doc',
    body: {
      "user_name": "biri",
      "team_id": "sharks",
      "league_id": "nba",
      "timestamp": 1453309234,
      "type": "basketball",
      "gm": 10, // games 
      "gp": 10, // games played
      "w": 8, // wins
      "l": 2, // loses
      "min": 100, // minutes
      "fga": 40, // field goals attemps
      "fgm": 20, // field goals made
      "pts": 200, // points
      "ast": 50, // assists
      "reb": 40, // rebounds
      "stl": 10, // steals
      "to": 20, // turnovers
      "blk": 8, // blocks
      "fta": 50, // free throwa attemps
      "ftm": 35, // free throws made
    }
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });