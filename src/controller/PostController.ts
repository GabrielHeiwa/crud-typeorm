import { getRepository } from "typeorm";
import { Request, Response } from "express";

import { Post } from "../entity/Post";

export default {
  async createPost(req: Request, res: Response) {
    const post = await getRepository(Post).save(req.body);
    res.json(post);
  },
  async getAllPost(req: Request, res: Response) {
    try {
      const post = await getRepository(Post).find();
      return res.json(post);
    } catch (error) {
      res.json({ error });
    }
  },
  async getPost(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const post = await getRepository(Post).find({
        where: {
          user: id,
        },
      });
      return res.json(post);
    } catch (error) {
      return res.json({ error });
    }
  },
  async udpatePost(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      const post = await getRepository(Post).update({ id: id }, req.body);
      //   const post = await getRepository(Post)
      //     .createQueryBuilder()
      //     .update(Post)
      //     .set({
      //       title: title,
      //       description: description,
      //     })
      //     .where("id = :id", { id })
      //     .execute();
      return res.json(post);
    } catch (error) {}
  },
  async deletePost(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const post = await getRepository(Post).delete(id);
      res.json({message: "delete operation success."})
    } catch (error) {
        res.json({message: "delete operation failed, try again."})
    }
  },
};
