import { Router } from "express";
import CoursesController from "./controller/CoursesController";
const routes = Router();

routes.get("/courses", CoursesController.index);
routes.get("/courses/:courses_id", CoursesController.show);
routes.post("/courses", CoursesController.create);
routes.delete("/courses/:courses_id", CoursesController.delete);
routes.put("/courses/:courses_id", CoursesController.update);

export default routes;
