import { ITaskDTO } from "./ITaskDTO";
import { ICategoryDTO } from "./ICategoryDTO";

export interface IProjectDTO {
  id: number;
  name: string;
  categories: ICategoryDTO[];
  tasks: ITaskDTO[];
}
