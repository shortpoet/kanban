import { IProject } from "./IProject";
import { ITask } from "./ITask";

export interface ICategory {
  id: number;
  name: string;
  projectId: number;
  project: IProject;
  tasks: ITask[];
}
