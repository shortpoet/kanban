import { ITask } from "./ITask";

export interface ICategoryDTO {
  id: number;
  name: string;
  projectId: number;
  tasks: ITask[];
}
