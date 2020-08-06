import { ICategory } from "./ICategory";
import { ITask } from "./ITask";

export interface IProject {
  id: number;
  name: string;
  categories: ICategory[];
  tasks: ITask[];
}
