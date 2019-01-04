"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const user_1 = require("./../models/user");
var passport = require('passport');
class AuthControllers {
    register(req, res) {
        console.log('registering');
        console.log(req.body);
        let user = new user_1.User({ email: req.body.email });
        user.setPassword(req.body.password);
        const token = user.generateJwt();
        let result = [];
        app_1.elasticSearchClient.search({
            index: 'users',
            body: {
                "query": {
                    "bool": {
                        "must": [{
                                "match": {
                                    "email": req.body.email
                                }
                            }, {
                                "match": {
                                    "type": "credentials"
                                }
                            }]
                    }
                }
            }
        }, function (error, resp, status) {
            if (error) {
                console.log('in error');
                console.log(error);
                console.log("search error: " + error);
            }
            else {
                resp.hits.hits.forEach(function (hit) {
                    hit._source.id = hit._id;
                    result.push(hit._source);
                    console.log(result);
                });
                if ((result.length > 0 && (result[0].email === req.body.email && result[0].type === 'credentials'))) {
                    console.log("User already registered");
                    console.log(result);
                    res.json({ "msg": "User already registered" });
                }
                else {
                    app_1.elasticSearchClient.index({
                        index: 'users',
                        type: 'doc',
                        // id: uuidv4(),
                        body: {
                            "email": req.body.email,
                            "password": user.user.hash,
                            "salt": user.user.salt,
                            "hash": user.user.hash,
                            "type": "credentials"
                        }
                    }, function (err, resp, status) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log(`Registered user ${req.body.email}`);
                            res.json({ "msg": `Registered user ${req.body.email}` });
                            // res.redirect('/login');
                        }
                    });
                }
            }
        });
    }
    login(req, res) {
        console.log(req);
        passport.authenticate('local', function (err, user, info) {
            var token;
            // If Passport throws/catches an error
            if (err) {
                res.status(404).json(err);
                return;
            }
            // If a user is found
            if (user) {
                token = user.generateJwt();
                res.status(200);
                res.json({
                    "token": token
                });
            }
            else {
                // If user is not found
                console.log('not found');
                res.status(401).json(info);
            }
        })(req, res);
    }
    ;
}
exports.AuthControllers = AuthControllers;
// module.exports.register = function(req, res) {
//   var user = new User();
//   user.name = req.body.name;
//   user.email = req.body.email;
//   user.setPassword(req.body.password);
//   user.save(function(err) {
//     var token;
//     token = user.generateJwt();
//     res.status(200);
//     res.json({
//       "token" : token
//     });
//   });
// };
// module.exports.login = function(req, res) {
//   passport.authenticate('local', function(err, user, info){
//     var token;
//     // If Passport throws/catches an error
//     if (err) {
//       res.status(404).json(err);
//       return;
//     }
//     // If a user is found
//     if(user){
//       token = user.generateJwt();
//       res.status(200);
//       res.json({
//         "token" : token
//       });
//     } else {
//       // If user is not found
//       res.status(401).json(info);
//     }
//   })(req, res);
// };
//# sourceMappingURL=authentication.js.map