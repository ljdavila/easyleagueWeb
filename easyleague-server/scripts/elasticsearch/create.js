var client = require('./connection.js');

try {

  client.indices.create({
    index: 'leagues'
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });


  client.indices.create({
    index: 'users'
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.indices.create({
    index: 'teams'
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.indices.create({
    index: 'sports'
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

  client.indices.create({
    index: 'stats'
  }, function (err, resp, status) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("create", resp);
    }
  });

} catch (error) {
  console.log('Error creating DB', error)
}