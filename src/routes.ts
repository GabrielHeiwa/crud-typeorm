import { Router } from "express";
import CoursesController from "./controller/CoursesController";
import EventController from './controller/EventsController';
const routes = Router();

routes.get("/courses", CoursesController.index);
routes.get("/courses/:courses_id", CoursesController.show);
routes.post("/courses", CoursesController.create);
routes.delete("/courses/:courses_id", CoursesController.delete);
routes.put("/courses/:courses_id", CoursesController.update);

routes.get("/event", CoursesController.index);
routes.get("/event/:event_id", CoursesController.show);
routes.post("/event", CoursesController.create);
routes.delete("/event/:event_id", CoursesController.delete);
routes.put("/event/:event_id", CoursesController.update);

export default routes;
