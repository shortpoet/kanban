import { RestProject, projectViewModel } from "../../src/viewModels/projects";
import { Connection, createConnection, getRepository } from "typeorm";
import { Project } from "../../src/entity/Project";
import { createProject } from "../projects";

let connection: Connection;

beforeAll(async () => {
  connection = await createConnection();
  const repo = getRepository(Project);
  await repo.remove(await repo.find());
});

afterAll(async () => {
  await connection.close();
});

describe('projects.ts', () => {
  test('project view model', async () => {
    const project = await createProject({name: 'Project'});
    const expected: RestProject[] = [
      {
        id: project.id,
        name: 'Project'
      }
    ];
    const actual = await projectViewModel();

    expect(actual).toEqual(expected);
  });
});