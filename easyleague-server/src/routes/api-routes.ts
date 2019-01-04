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


    app.route('/join').get((req: Request, res) => {
      // res.render('join', { title: "Join", userData: req.user, messages: { danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success') } });

    })

    app.route('/join').post( async function (req: Request, res: Response) {
      let result = [];
      const pwd = await bcrypt.hash(req.body.password, 5);
      // const client = await pool.connect()
      // await client.query(‘BEGIN’)
      console.log('pwd');

      console.log(pwd)
      elasticSearchClient.search({
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
          console.log("search error: " + error)
        }
        else {
          console.log("--- Response ---");
          console.log(resp);
          console.log("--- Hits ---");
          resp.hits.hits.forEach(function (hit) {
            console.log(hit);
            hit._source.id = hit._id;
            result.push(hit._source)
          });
          console.log('resulting');
          console.log(result);
          console.log(result.length);

          if (result.length > 0) {
            console.log('resulting');
            console.log(result);
            console.log(result.length);
            res.json({ "msg": "User already registered" });
          } else {
            elasticSearchClient.index({
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