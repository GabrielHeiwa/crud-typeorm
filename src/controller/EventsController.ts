import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Events } from "../entity/Events";
export default {
  async create(req: Request, res: Response) {
    try {
      const event_create = await getRepository(Events).save(req.body);
    } catch (error) {
      return res.sendStatus(400).json({
        message: "Create operation failed, try again.",
        info: error,
      });
    }
  },
  async index(req: Request, res: Response) {
    try {
      const event_index = await getRepository(Events).find();
      return res.status(200).json({
        message: "Get all events operation success.",
        data: event_index,
      });
    } catch (error) {
      return res.sendStatus(400).json({
        message: "Get all events operation failed, try again.",
        info: error,
      });
    }
  },
  async update(req: Request, res: Response) {
    const { event_id } = req.params;
    try {
      const event_update = await getRepository(Events).update(
        event_id,
        req.body
      );
      return res.status(200).json({
        message: "Update event operation success.",
        data: event_update,
      });
    } catch (error) {
      return res.sendStatus(400).json({
        message: "Update event operation failed, try again.",
        info: error,
      });
    }
  },
  async delete(req: Request, res: Response) {
    const { event_id } = req.params;
    try {
      await getRepository(Events).delete(event_id);
      return res.json({
        message: "Delete event operation succes.",
      });
    } catch (error) {
      return res.sendStatus(400).json({
        message: "Delete event operation failed, try again.",
        info: error,
      });
    }
  },
};
