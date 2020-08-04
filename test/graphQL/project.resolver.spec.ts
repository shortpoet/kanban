import { RestProject, projectViewModel } from "../../src/viewModels/projects";
import { Connection, createConnection, getRepository } from "typeorm";
import { Project } from "../../src/entity/Project";
import { createProject } from "../projects";
import { Category } from "../../src/entity/Category";
import { createCategory } from "../categories";
import { buildSchema } from "type-graphql";
import { ProjectsResolver } from "../../src/graphQL/project.resolvers";
import { generateSchema } from "../../src/graphQL/generateSchema";
import { graphql } from "graphql";

let connection: Connection;

beforeAll(async () => {
  connection = await createConnection();
  const repo = getRepository(Project);
  await repo.remove(await repo.find());
});

afterAll(async () => {
  await connection.close();
});

describe('project.resolvers.ts', () => {
  test('project view model', async () => {
    const project = await createProject({ name: 'Project' });
    const category = await createCategory({ name: 'Category' }, project);
    const expected = {
      project: {
        id: project.id.toString(),
        name: 'Project',
        categories: [
          {
            id: category.id.toString(),
            name: 'Category'
          }
        ]
      }
    };
    // create new graphQL instance to use for test due to decorators such as @Info, @Field, etc.
    // need schema for graphQL instance
    const schema = await generateSchema(ProjectsResolver);
    const actual = await graphql({
      schema,
      source: `
        {
          project(id: ${project.id}){
            id
            name
            categories{
              id
              name
            }
          }
        }
      `
    });
    expect(actual.data).toEqual(expected);
  });
});