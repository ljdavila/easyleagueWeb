import { AuthControllers } from './../controllers/authentication';
// import { ProfileControllers } from './../controllers/profile';
import { UsersControllers } from '../controllers/users-controllers';
import { TeamsControllers } from '../controllers/teams-controllers';

import { Request, Response } from 'express';
import { elasticSearchClient } from '../app';

var passport = require('passport');
var request = require('request');
const bcrypt = require('bcrypt')
const uuidv4 = require('uuid/v4');
const LocalStrategy = require('passport-local').Strategy;

var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

export class Routes {


  public userController: UsersControllers = new UsersControllers();
  public teamController: TeamsControllers = new TeamsControllers();
  public authController: AuthControllers = new AuthControllers();
  // public profileController: ProfileControllers = new ProfileControllers();

  public routes(app): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET resquest successfull'
      })
    })

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