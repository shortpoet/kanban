
import { Request, Response } from "express";
import { projectViewModel } from "../viewModels/project"

export const projects = async (req: Request, res: Response) => {
  const vm = await projectViewModel();
  res.json(vm);

}