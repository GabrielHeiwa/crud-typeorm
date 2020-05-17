import { getRepository } from "typeorm";
import { Request, Response } from "express";

import { User } from "../entity/User";

export default {
  async getAllUser(req: Request, res: Response) {
    const user = await getRepository(User).find();
    return res.json(user);
  },

  async getUser(req: Request, res: Response) {
    const { user_id } = req.params;
    const user = await getRepository(User).findOne(user_id);
    res.json(user);
  },
  async createUser(req: Request, res: Response) {
    const user = await getRepository(User).save(req.body);
    res.json(user);
  },
};
