import { IProject } from "./IProject";
import { ICategory } from "./ICategory";

export interface ITaskDTO {
  id: number;
  name: string;
  projectId: number;
  categoryId: number;
}
