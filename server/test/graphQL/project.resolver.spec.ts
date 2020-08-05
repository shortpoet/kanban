import { Connection, createConnection, getRepository } from "typeorm";
import { Project } from "../../entity/Project";
import { createProject } from "../factories/projects";
import { Category } from "../../entity/Category";
import { createCategory } from "../factories/categories";
import { buildSchema } from "type-graphql";
import { ProjectsResolver } from "../../graphQL/project.resolvers";
import { generateSchema } from "../../graphQL/generateSchema";
import { graphql } from "graphql";
import { createTask } from "../factories/tasks";

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
    const task = await createTask({ name: 'Task' }, project, category);

    const expected = {
      project: {
        id: project.id.toString(),
        name: 'Project',
        categories: [
          {
            id: category.id.toString(),
            name: 'Category'
          }
        ],
        tasks: [
          {
            id: task.id.toString(),
            name: 'Task',
            projectId: project.id,
            categoryId: category.id
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
            tasks{
              id
              name
              categoryId
              projectId
            }
          }
        }
      `
    });
    console.log((JSON.stringify(actual.data)));
    console.log((JSON.stringify(expected)));

    expect(actual.data).toEqual(expected);
  });
});