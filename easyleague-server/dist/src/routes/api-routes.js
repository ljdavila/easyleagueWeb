"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_controllers_1 = require("../controllers/users-controllers");
const teams_controllers_1 = require("../controllers/teams-controllers");
class Routes {
    constructor() {
        this.userController = new users_controllers_1.UsersControllers();
        this.teamController = new teams_controllers_1.TeamsControllers();
    }
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
        //  app.route('/tl-availability').post(this.eventController.setAvailability);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=api-routes.js.map