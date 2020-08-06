import { projectViewModel } from "../../viewModels/project";
import { Connection, createConnection, getRepository } from "typeorm";
import { Project } from "../../src/entity/Project";
import { createProject } from "../factories/projects";
import { createCategory } from "../factories/categories";
import { createTask } from "../factories/tasks";
import { IProjectDTO } from "../../../client/src/interfaces/IProjectDTO";

let connection: Connection;

beforeAll(async () => {
  connection = await createConnection();
  const repo = getRepository(Project);
  await repo.remove(await repo.find());
});

afterAll(async () => {
  await connection.close();
});

describe('projects.vm.ts', () => {
  test('project view model', async () => {
    const project = await createProject({ name: 'Project' });
    const category = await createCategory({ name: 'Category' }, project);
    const task = await createTask({ name: 'Task' }, project, category);
    // console.log("category");
    // console.log(category);
    // console.log("task");
    // console.log(task);

    const expected: IProjectDTO[] = [
      {
        id: project.id,
        name: 'Project',
        categories: [
          {
            id: category.id,
            name: 'Category',
            projectId: project.id,
            tasks: [task],
          }
        ],
        tasks: [
          {
            id: task.id,
            name: 'Task',
            projectId: project.id,
            categoryId: category.id
          }
        ]
      }
    ];

    const actual = await projectViewModel();
    // console.log((JSON.stringify(actual)));
    // console.log((JSON.stringify(expected)));
    // console.log(JSON.parse(JSON.stringify(actual)));
    // console.log(JSON.parse(JSON.stringify(expected)));


    expect(actual).toEqual(expected);
  });
});