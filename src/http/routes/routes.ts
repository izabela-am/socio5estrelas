import { Router } from "express";
import { citiesRouter } from "./cities.routes";
import { districtsRouter } from "./districts.routes";

import { statesRouter } from "./states.routes";

const routes = Router();

routes.use('/states', statesRouter);
routes.use('/cities', citiesRouter);
routes.use('/districts', districtsRouter);

export { routes };
