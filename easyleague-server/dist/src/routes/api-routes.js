"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("./../controllers/authentication");
// import { ProfileControllers } from './../controllers/profile';
const users_controllers_1 = require("../controllers/users-controllers");
const teams_controllers_1 = require("../controllers/teams-controllers");
const app_1 = require("../app");
var passport = require('passport');
var request = require('request');
const bcrypt = require('bcrypt');
const uuidv4 = require('uuid/v4');
const LocalStrategy = require('passport-local').Strategy;
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});
class Routes {
    constructor() {
        this.userController = new users_controllers_1.UsersControllers();
        this.teamController = new teams_controllers_1.TeamsControllers();
        this.authController = new authentication_1.AuthControllers();
    }
    // public profileController: ProfileControllers = new ProfileControllers();
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'GET resquest successfull'
            });
        });
        app.route('/join').get((req, res) => {
            // res.render('join', { title: "Join", userData: req.user, messages: { danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success') } });
        });
        app.route('/join').post(function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                let result = [];
                const pwd = yield bcrypt.hash(req.body.password, 5);
                // const client = await pool.connect()
                // await client.query(‘BEGIN’)
                console.log('pwd');
                console.log(pwd);
                app_1.elasticSearchClient.search({
                    index: 'users',
                    body: {
                        query: {
                            match: {
                                "email": req.body.email,
                                "type": req.body.type
                            }
                        }
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
                            hit._source.id = hit._id;
                            result.push(hit._source);
                        });
                        console.log('resulting');
                        console.log(result);
                        console.log(result.length);
                        if (result.length > 0) {
                            console.log('resulting');
                            console.log(result);
                            console.log(result.length);
                            res.json({ "msg": "User already registered" });
                        }
                        else {
                            app_1.elasticSearchClient.index({
                                index: 'users',
                                type: 'doc',
                                // id: uuidv4(),
                                body: {
                                    "email": req.body.email,
                                    "password": pwd,
                                    "type": "credentials"
                                }
                            }, function (err, resp, status) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    console.log(`Registered user ${req.body.email}`, resp);
                                    // res.redirect('/login');
                                }
                            });
                        }
                    }
                });
            });
        });
        /********************* Elastic Search routes **********************/
        app.route('/users').get(this.userController.getUsers);
        app.route('/users/user').get(this.userController.getUser);
        app.route('/teams/team').get(this.teamController.getTeam);
        app.route('/teams/team').post(this.teamController.postTeam);
        //  app.route('/tl-availability').post(this.eventController.setAvailability);
        /********************* Authentication routes **********************/
        app.route('/api/register').post(this.authController.register); // to handle new users registering
        app.route('/api/login').post(this.authController.login); // to handle returning users logging in
        app.route('/api/profile/USERID').get();
        // app.get('/profile', auth, this.profileController.profileRead);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=api-routes.js.map