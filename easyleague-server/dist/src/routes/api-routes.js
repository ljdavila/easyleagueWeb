"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("./../controllers/authentication");
// import { ProfileControllers } from './../controllers/profile';
const users_controllers_1 = require("../controllers/users-controllers");
const teams_controllers_1 = require("../controllers/teams-controllers");
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
        /********************* Elastic Search routes **********************/
        app.route('/users').get(this.userController.getUsers);
        app.route('/users/user').get(this.userController.getUser);
        app.route('/teams/team').get(this.teamController.getTeam);
        app.route('/teams/team').post(this.teamController.postTeam);
        //  app.route('/tl-availability').post(this.eventController.setAvailability);
        /********************* Authentication routes **********************/
        app.route('/api/register').post(this.authController.register); // to handle new users registering
        app.route('/api/login').post(this.authController.login); // to handle returning users logging in
        // app.route('/api/profile/USERID').get();
        // app.get('/profile', auth, this.profileController.profileRead);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=api-routes.js.map