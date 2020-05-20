import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Courses } from "../entity/Courses";
export default {
  async create(req: Request, res: Response) {
    try {
      const course_created = await getRepository(Courses).save(req.body);
      res.status(201).json({
        course_created,
      });
    } catch (error) {
      res.status(400).json({
        message: "create course operation failed, try again.",
        info: error,
      });
    }
  },

  async index(req: Request, res: Response) {
    try {
      const courses_all = await getRepository(Courses).find();
      return res.status(200).json({
        message: "success operatio of get all courses.",
        data: courses_all,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Get all courses operation failed, try again.",
        info: error,
      });
    }
  },

  async show(req: Request, res: Response) {
    const { courses_id } = req.params;
    try {
      const courses = await getRepository(Courses).findOne(courses_id);
      return res.status(200).json({
        message: "Get course operation success.",
        data: courses,
      });
    } catch (error) {
      return res.status(401).json({
        message: "get courses operation failed, try agaain.",
        info: error,
      });
    }
  },

  async update(req: Request, res: Response) {
    const { courses_id } = req.params;
    try {
      const courses_update = await getRepository(Courses).update(
        courses_id,
        req.body
      );
      return res.status(200).json({
        message: "Update operation success.",
        data: courses_update,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Update operation failed, try again.",
        info: error,
      });
    }
  },

  async delete(req: Request, res: Response) {
    const { courses_id } = req.params;
    try {
      await getRepository(Courses).delete(courses_id);
      return res.sendStatus(200).json({message: "delete operation success."});
    } catch (error) {
      return res.status(400).json({
        message: "Update operation failed, try again.",
        info: error,
      });
    }
  },
};
