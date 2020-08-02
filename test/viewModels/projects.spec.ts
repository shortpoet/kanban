import { RestProject, projectViewModel } from "../../src/viewModels/projects";
import { Connection, createConnection, getRepository, DeepPartial } from "typeorm";
import { Project } from "../../src/entity/Project";

let connection: Connection;

beforeAll(async () => {
  connection = await createConnection();
  const repo = getRepository(Project);
  await repo.remove(await repo.find());
});

afterAll(async () => {
  await connection.close();
});

const createProject = (attrs: DeepPartial<Project>): Promise<Project> => {
  const repo = getRepository(Project);
  return repo.save(<Project>{
    name: attrs.name || 'My new project'
  });
};

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