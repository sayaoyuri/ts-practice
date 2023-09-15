import { Request, Response } from "express";
import httpStatus from "http-status";
import { readAllService } from "../services/person-service";

export async function readController (req: Request, res: Response) {
  const person = await readAllService();

  return res.status(httpStatus.OK).send(person);
};