import { Router } from "express";
import CoursesController from "./controller/CoursesController";
import EventController from "./controller/EventsController";
import SpeechesController from "./controller/SpeechesController";
import SubscriberController from "./controller/SubscribersController";

const routes = Router();

routes.get("/courses/relationship", CoursesController.relationship);
routes.get("/courses", CoursesController.index);
routes.get("/courses/:courses_id", CoursesController.show);
routes.post("/courses", CoursesController.create);
routes.delete("/courses/:courses_id", CoursesController.delete);
routes.put("/courses/:courses_id", CoursesController.update);

routes.get("/event", EventController.index);
routes.post("/event", EventController.create);
routes.delete("/event/:event_id", EventController.delete);
routes.put("/event/:event_id", EventController.update);

routes.get("/speeches", SpeechesController.index);
routes.get("/speeches/:speeches_id", SpeechesController.show);
routes.post("/speeches", SpeechesController.create);
routes.delete("/speeches/:speeches_id", SpeechesController.delete);
routes.put("/speeches/:speeches_id", SpeechesController.update);

// routes.get("/subscriber/relationship", SubscriberController.indexWithRelationship)
routes.get("/subscriber/:event_id", SubscriberController.indexForEvent);
routes.post("/subscriber", SubscriberController.create);
// routes.put("/subscriber/:speeches_id", SpeechesController.update);

export default routes;
