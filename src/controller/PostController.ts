import { getRepository } from "typeorm";
import { Request, Response } from "express";

import { Post } from "../entity/Post";

export default {
  async createPost(req: Request, res: Response) {
    try {
      const post = await getRepository(Post).save(req.body);
      res.json(post);
    } catch (error) {
      return res.json({
        message: "create operation failed, try again.",
        info: error,
      });
    }
  },

  async getAllPost(req: Request, res: Response) {
    try {
      const post = await getRepository(Post).find();
      return res.json(post);
    } catch (error) {
      res.json({ message: "query all post failed, try again.", info: error });
    }
  },

  async getAnyPost(req: Request, res: Response) {
    const { postId } = req.params;
    try {
      const post = await getRepository(Post).find({
        where: {
          user: postId,
        },
      });
      return res.json(post);
    } catch (error) {
      return res.json({
        message: "qeury any posts failed, try again.",
        info: error,
      });
    }
  },

  async udpatePost(req: Request, res: Response) {
    const { postId } = req.params;

    try {
      const post = await getRepository(Post).update({ id: postId }, req.body);
      return res.json(post);
    } catch (error) {
      return res.json({
        message: "update operation failed, try again.",
        info: error,
      });
    }
  },

  async deletePost(req: Request, res: Response) {
    const { postId } = req.params;

    try {
      await getRepository(Post).delete(postId);
      res.json({ message: "delete operation success." });
    } catch (error) {
      res.json({ message: "delete operation failed, try again.", info: error });
    }
  },

  async getAllPostFromUser(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const userPost = await getRepository(Post).find({
        where: {
          user: userId,
        },
      });
      return res.json({ message: "operation complete", userPost });
    } catch (error) {
      return res.json({
        message: "query all post from user failed, try again.",
        info: error,
      });
    }
  },
};
