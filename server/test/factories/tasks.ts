import { Task } from "../../entity/Task";
import { Project } from "../../entity/Project";
import { Category } from "../../entity/Category";
import { DeepPartial, getRepository } from "typeorm";

export const createTask = (attrs: DeepPartial<Task>, project: Project, category: Category): Promise<Task> => {
  const repo = getRepository(Task);
  return repo.save(<Task>{
    name: attrs.name || 'My Task',
    projectId: project.id,
    categoryId: category.id
  });
};
