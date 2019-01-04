"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const app_1 = require("../app");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy({
    usernameField: 'email'
}, function (username, pwd, done) {
    console.log('authenticating');
    app_1.elasticSearchClient.search({
        index: 'users',
        body: {
            query: {
                bool: {
                    must: [{
                            match: { "email": username }
                        },
                        {
                            match: { "type": 'credentials' }
                        }
                    ]
                }
            }
        }
    }, function (error, resp, status) {
        if (error) {
            console.log("search error: " + error);
        }
        else {
            let result = [];
            console.log("--- Response ---");
            console.log(resp);
            console.log("--- Hits ---");
            resp.hits.hits.forEach(function (hit) {
                console.log(hit);
                result.push(hit._source);
                console.log(result);
            });
            if (result.length > 1 && result[0].email !== username) {
                console.log('User not found');
                return done(null, false, {
                    message: 'User not found'
                });
            }
            else {
                let user = new user_1.User({ email: result[0].email, salt: result[0].salt, hash: result[0].hash });
                if (!user.validPassword(pwd)) {
                    console.log("--- ljljl ---");
                    console.log(!user.validPassword(pwd));
                    return done(null, false, {
                        message: 'Password is wrong'
                    });
                }
                console.log('User found');
                return done(null, user);
            }
        }
    });
    // User.findOne({ email: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   // Return if user not found in database
    //   if (!user) {
    //     return done(null, false, {
    //       message: 'User not found'
    //     });
    //   }
    //   // Return if password is wrong
    //   if (!user.validPassword(password)) {
    //     return done(null, false, {
    //       message: 'Password is wrong'
    //     });
    //   }
    //   // If credentials are correct, return the user object
    //   return done(null, user);
    // });
}));
//# sourceMappingURL=passport.js.map