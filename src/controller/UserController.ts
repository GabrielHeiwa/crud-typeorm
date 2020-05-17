import { getRepository } from "typeorm";
import { Request, Response } from "express";

import { User } from "../entity/User";

export default {
  async getAllUser(req: Request, res: Response) {
    try {
      const user = await getRepository(User).find();
      return res.json({ message: "create operation success.", user });
    } catch (err) {
      return res.json({
        message: "Get all users operation failed, try again.",
        info: err,
      });
    }
  },

  async getUser(req: Request, res: Response) {
    const { user_id } = req.params;
    try {
      const user = await getRepository(User).findOne(user_id);
      return res.json({ message: "Get user operation succes.", user });
    } catch (err) {
      return res.json({
        message: "Get user operation failed, try again.",
        info: err,
      });
    }
  },

  async createUser(req: Request, res: Response) {
    try {
      const user = await getRepository(User).save(req.body);
      return res.json({ message: "Create user operation success.", user });
    } catch (err) {
      return res.json({
        message: "Create user operation failed, try again.",
        info: err,
      });
    }
  },

  async updateUser(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      await getRepository(User).update({ id: parseInt(userId) }, req.body);
      return res.json({ message: "update user operation success." });
    } catch (err) {
      return res.json({
        message: "update user operation failed, try again.",
        info: err,
      });
    }
  },

  async deleteUser(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      await getRepository(User).delete({ id: parseInt(userId) });
      return res.json({ message: "delete operation success." });
    } catch (err) {
      return res.json({
        message: "delete operation failed, try again.",
        info: err,
      });
    }
  },
};
