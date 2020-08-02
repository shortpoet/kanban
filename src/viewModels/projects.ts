import { getRepository } from "typeorm";
import { Project } from "../entity/Project";
import { Category } from "../entity/Category";

export interface RestProject {
  id: number
  name: string
  categories: Array<{id: number, name: string}>
}

export const projectViewModel = async (): Promise<RestProject[]> => {
  // const repo = getRepository(Project).find()
  const repo = getRepository(Project)
    .createQueryBuilder('project')
    .innerJoinAndSelect('project.categories', 'categories')
    .getMany();
  const out: RestProject[] = (await repo).map(x => ({
    id: x.id,
    name: x.name,
    categories: x.categories.map(y => <Category>({ id: y.id, name: y.name }))
  }));
  return out;
};