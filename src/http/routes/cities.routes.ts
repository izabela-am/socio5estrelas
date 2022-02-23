import { Router } from "express";

const citiesRouter = Router();

import { CitiesController } from "../../controllers/CitiesController";

const citiesController = new CitiesController();

citiesRouter.get('/top10', citiesController.top15);

export { citiesRouter };
