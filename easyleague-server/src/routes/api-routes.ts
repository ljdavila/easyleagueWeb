import { UsersControllers } from '../controllers/users-controllers';
import { TeamsControllers } from '../controllers/teams-controllers';

import { Request, Response } from 'express';

export class Routes {

  public userController: UsersControllers = new UsersControllers();
  public teamController: TeamsControllers = new TeamsControllers();

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

  //  app.route('/tl-availability').post(this.eventController.setAvailability);

  }

  
 

}