import { Project } from "../../src/entity/Project";
import { getRepository, DeepPartial } from "typeorm";

export const createProject = (attrs: DeepPartial<Project>): Promise<Project> => {
  const repo = getRepository(Project);
  return repo.save(<Project>{
    name: attrs.name || 'My new project'
  });
};
