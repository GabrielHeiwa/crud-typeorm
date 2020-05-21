import { Subscribers } from "../entity/Subscribers";
import { getRepository } from "typeorm";
import { Request, Response } from "express";

export default {
  async create(req: Request, res: Response) {
    try {
      const subscriber = await getRepository(Subscribers).save(req.body);
      return res.status(201).json({
        message: "create operation success.",
        data: subscriber,
      });
    } catch (error) {
      return res.status(400).json({
        message: "create subscriber operation failed, try again.",
        info: error,
      });
    }
  },
  // async update (req:Request, res:Response) {

  // },
  async indexInEvent(req: Request, res: Response) {
    const { event_id } = req.params;
    try {
      const relationship = await getRepository(Subscribers).find({
        relations: ["event_id"],
      });
      return res.status(200).json({
          message: "find subscribers of event success.",
          data: relationship
      })
    } catch (error) {
      res.status(400).json({
        message: "operation failed, try again.",
        info: error,
      });
    }
  },
};
