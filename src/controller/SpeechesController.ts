import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Speeches } from "../entity/Speeches";
export default {
  async create(req: Request, res: Response) {
    try {
      const speeche_created = await getRepository(Speeches).save(req.body);
      res.status(201).json({
        speeche_created,
      });
    } catch (error) {
      res.status(400).json({
        message: "create speeche operation failed, try again.",
        info: error,
      });
    }
  },

  async index(req: Request, res: Response) {
    try {
      const speeches_all = await getRepository(Speeches).find();
      return res.status(200).json({
        message: "success operation of get all speeches.",
        data: speeches_all,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Get all speeches operation failed, try again.",
        info: error,
      });
    }
  },

  async show(req: Request, res: Response) {
    const { speeches_id } = req.params;
    try {
      const speeches = await getRepository(Speeches).findOne(speeches_id);
      return res.status(200).json({
        message: "Get speeche operation success.",
        data: speeches,
      });
    } catch (error) {
      return res.status(401).json({
        message: "get speeches operation failed, try agaain.",
        info: error,
      });
    }
  },

  async update(req: Request, res: Response) {
    const { speeches_id } = req.params;
    try {
      const speeches_update = await getRepository(Speeches).update(
        speeches_id,
        req.body
      );
      return res.status(200).json({
        message: "Update operation success.",
        data: speeches_update,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Update operation failed, try again.",
        info: error,
      });
    }
  },

  async delete(req: Request, res: Response) {
    const { speeches_id } = req.params;
    try {
      await getRepository(Speeches).delete(speeches_id);
      return res.sendStatus(200).json({message: "delete operation success."});
    } catch (error) {
      return res.status(400).json({
        message: "Update operation failed, try again.",
        info: error,
      });
    }
  },
};
