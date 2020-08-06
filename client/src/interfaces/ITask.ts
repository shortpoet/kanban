import { IProject } from "./IProject";
import { ICategory } from "./ICategory";

export interface ITask {
  id: number;
  name: string;
  projectId: number;
  categoryId: number;
  project: IProject;
  categories: Record<'id', string>;
}
