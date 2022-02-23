import { Router } from "express";

import { citiesRouter } from "./cities.routes";
import { statesRouter } from "./states.routes";
import { associateRouter } from "./associate.routes";
import { districtsRouter } from "./districts.routes";

const routes = Router();

routes.use('/states', statesRouter);
routes.use('/cities', citiesRouter);
routes.use('/districts', districtsRouter);
routes.use('/associate', associateRouter);

export { routes };
