import { Router } from "express";

const associateRouter = Router();

import { AssociateController } from "../../controllers/AssociateController";

const associateController = new AssociateController();

associateRouter.get('/plans', associateController.plans);
associateRouter.get('/age', associateController.ageGroup);
associateRouter.get('/gender', associateController.gender);
associateRouter.get('/paymentMethod', associateController.paymentMethod);

export { associateRouter };
