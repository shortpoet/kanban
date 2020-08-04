import { ICategory } from "./ICategory";
import { ITask } from "./ITask";

export interface IFetchProject {
  id: string;
  name: string;
  categories: ICategory[];
  tasks: ITask[];
}
