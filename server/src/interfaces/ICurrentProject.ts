import { ICategory } from "./ICategory";
import { ITask } from "./ITask";

// keep things flat as possible in flux store
// using taskMap
export interface ICurrentProject {
  id: string;
  name: string;
  categories: ICategory[];
  tasks: Record<string, ITask>;
}
