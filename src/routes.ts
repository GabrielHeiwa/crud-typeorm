import { Router, Request, Response } from "express";
import UserController from "./controller/UserController";
import PostController from "./controller/PostController";

const routes = Router();

routes.get("/user", UserController.getAllUser);
routes.get("/user/:user_id", UserController.getUser);
routes.post("/user", UserController.createUser);

routes.get("/post/:id", PostController.getAnyPost);
routes.get("/post", PostController.getAllPost);
routes.get("/post/:user_id", PostController.getAllPostFromUser);
routes.post("/post", PostController.createPost);
routes.put("/post/:id", PostController.udpatePost);
routes.delete("/post/:id", PostController.deletePost);

export default routes;
