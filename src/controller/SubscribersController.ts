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
  async update(req: Request, res: Response) {
    const { subscriber_id } = req.params;
    try {
      const subscriber_update = await getRepository(Subscribers).update(
        subscriber_id,
        req.body
      );
      return res.status(200).json({
        message: "Update operation success.",
        data: subscriber_update,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Update subscriber operation failed, try again.",
        info: error,
      });
    }
  },
  async indexForEvent(req: Request, res: Response) {
    const { event_id } = req.params;
    try {
      const subscriber_event = await getRepository(Subscribers).findOne({
        where: {
          event_id: event_id,
        },
      });

      if (subscriber_event === undefined)
        return res.status(400).json({
          message: "Event id not found, try again."
        });

      return res.status(200).json({
        message: "Index subscriber for event success.",
        data: subscriber_event,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Index for event operation failed, try again.",
        info: error,
      });
    }
  },
  // async indexWithRelationship(req: Request, res: Response) {
  //   try {
  //     const relationship = await getRepository(Subscribers).find({
  //       relations: ["event_id"]
  //     });
  //     return res.status(201).json(relationship);
  //   } catch (error) {
  //     res.status(400).json({
  //       message: "operation failed, try again.",
  //       info: error,
  //     });
  //   }
  // },
};
