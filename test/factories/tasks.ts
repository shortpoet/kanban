import { getRepository, DeepPartial } from "typeorm";
import { Task } from "../../src/entity/Task";
import { Project } from "../../src/entity/Project";
import { Category } from "../../src/entity/Category";

export const createTask = (attrs: DeepPartial<Task>, project: Project, category: Category): Promise<Task> => {
  const repo = getRepository(Task);
  return repo.save(<Task>{
    name: attrs.name || 'My Task',
    projectId: project.id,
    categoryId: category.id
  });
};
