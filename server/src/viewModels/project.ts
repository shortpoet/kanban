import { getRepository } from "typeorm";
import { Project } from "../entity/Project";
import { ICategoryDTO } from "../interfaces/ICategoryDTO";
import { IProjectDTO } from "../interfaces/IProjectDTO";
import { ITaskDTO } from "../interfaces/ITaskDTO";
const util = require('util');
export const projectViewModel = async (): Promise<IProjectDTO[]> => {
  // const repo = getRepository(Project).find()
  const repo = getRepository(Project)
    .createQueryBuilder('project')
    .innerJoinAndSelect('project.tasks', 'tasks')
    .innerJoinAndSelect('project.categories', 'categories')
    .innerJoinAndSelect('categories.tasks', 'categorytasks')
    .getMany();
  console.log(JSON.stringify(await repo));

  const out: IProjectDTO[] = (await repo).map(x => ({
    id: x.id,
    name: x.name,
    categories: x.categories.map(y => <ICategoryDTO>({ id: y.id, name: y.name, projectId: y.projectId, tasks: y.tasks })),
    tasks: x.tasks.map(y => <ITaskDTO>({ id: y.id, name: y.name, projectId: y.projectId, categoryId: y.categoryId }))
  }));
  // console.log("project vm");
  // console.log(util.inspect(out, false, null, true /* enable colors */))
  // console.log(out);

  return out;
};