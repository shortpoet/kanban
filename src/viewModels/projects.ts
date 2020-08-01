import { getRepository } from "typeorm";
import { Project } from "../entity/Project";

export interface RestProject {
  id: number
  name: string
}

export const projectViewModel = async (): Promise<RestProject[]> => {
  // const repo = getRepository(Project).find()
  const repo = getRepository(Project)
    .createQueryBuilder('projects')
    .getMany();
  const out = (await repo).map(x => ({ id: x.id, name: x.name }));
  return out;
};