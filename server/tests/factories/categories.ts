import { Category } from "../../src/entity/Category";
import { Project } from "../../src/entity/Project";
import { DeepPartial, getRepository } from "typeorm";

export const createCategory = (attrs: DeepPartial<Category>, project: Project): Promise<Category> => {
  const repo = getRepository(Category);
  return repo.save(<Category>{
    name: attrs.name || 'My Category',
    projectId: project.id
  });
};
