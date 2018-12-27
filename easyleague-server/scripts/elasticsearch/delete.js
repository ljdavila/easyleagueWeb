var client = require('./connection.js');

client.indices.delete({index: 'users'},function(err,resp,status) {  
  console.log("delete",resp);
});

client.indices.delete({index: 'sports'},function(err,resp,status) {  
  console.log("delete",resp);
});

client.indices.delete({index: 'leagues'},function(err,resp,status) {  
  console.log("delete",resp);
});

client.indices.delete({index: 'stats'},function(err,resp,status) {  
  console.log("delete",resp);
});

client.indices.delete({index: 'teams'},function(err,resp,status) {  
  console.log("delete",resp);
});
