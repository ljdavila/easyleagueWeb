"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers/controllers");
class Routes {
    constructor() {
        this.controller = new controllers_1.Controllers();
    }
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'GET resquest successfull'
            });
        });
        /********************* Elastic Search routes **********************/
        app.route('/users').get(this.controller.getUsers);
        app.route('/teams/team/:id').get(this.controller.getUsers);

        //  app.route('/tl-availability').post(this.eventController.setAvailability);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=api-routes.js.map