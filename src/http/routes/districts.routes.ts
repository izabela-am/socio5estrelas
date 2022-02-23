import { Router } from "express";

const districtsRouter = Router();

import { DistrictsController } from "../../controllers/DistrictsController";

const districtsController = new DistrictsController();

districtsRouter.get('/top15', districtsController.top15);

export { districtsRouter };
