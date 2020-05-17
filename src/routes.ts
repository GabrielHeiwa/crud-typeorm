import { Router, Request, Response } from "express";
import UserController from "./controller/UserController";
import PostController from "./controller/PostController";

const routes = Router();

routes.get("/user", UserController.getAllUser);
routes.get("/user/:user_id", UserController.getUser);
routes.post("/user", UserController.createUser);
routes.put("/user/:userId", UserController.updateUser);

routes.get("/post/:postId", PostController.getAnyPost);
routes.get("/post", PostController.getAllPost);
routes.get("/post/user/:userId", PostController.getAllPostFromUser);
routes.post("/post", PostController.createPost);
routes.put("/post/:postId", PostController.udpatePost);
routes.delete("/post/:postId", PostController.deletePost);

export default routes;
