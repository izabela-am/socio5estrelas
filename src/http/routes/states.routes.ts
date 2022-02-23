import { Router } from "express";

const statesRouter = Router();

import { StateController } from "../../controllers/StateController";

const statesController = new StateController();

statesRouter.get('/all', statesController.all);
statesRouter.get('/top10', statesController.top10);
statesRouter.get('/:name', statesController.getByName);

export { statesRouter };
