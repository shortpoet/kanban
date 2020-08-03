import { getRepository } from "typeorm";
import { Project } from "../entity/Project";
import { IProject } from "../interfaces/IProject";
import { ICategoryDTO } from "../interfaces/ICategoryDTO";
import { IProjectDTO } from "../interfaces/IProjectDTO";
import { ITaskDTO } from "../interfaces/ITaskDTO";

export const projectViewModel = async (): Promise<IProjectDTO[]> => {
  // const repo = getRepository(Project).find()
  const repo = getRepository(Project)
    .createQueryBuilder('project')
    .innerJoinAndSelect('project.tasks', 'tasks')
    .innerJoinAndSelect('project.categories', 'categories')
    .innerJoinAndSelect('categories.tasks', 'categorytasks')
    .getMany();
  const out: IProjectDTO[] = (await repo).map(x => ({
    id: x.id,
    name: x.name,
    categories: x.categories.map(y => <ICategoryDTO>({ id: y.id, name: y.name, projectId: y.projectId, tasks: y.tasks })),
    tasks: x.tasks.map(y => <ITaskDTO>({ id: y.id, name: y.name, projectId: y.projectId, categoryId: y.categoryId }))
  }));
  console.log(out[0].categories);
  
  return out;
};