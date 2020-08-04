import { Resolver, Arg, Info, Query } from 'type-graphql';
import { Project } from '../entity/Project';
import { getRepository } from 'typeorm';
import { RequestInfo } from 'express-graphql';
import { MetadataStorage } from 'class-validator';
import { GraphQLResolveInfo } from 'graphql';
import { IProjectDTO } from '../interfaces/IProjectDTO';
import { ICategoryDTO } from '../interfaces/ICategoryDTO';
import { ITaskDTO } from '../interfaces/ITaskDTO';
const util = require('util');
@Resolver(of => Project)
export class ProjectsResolver {

  @Query(returns => Project) // more than one type of query can be run (this one is akin to get); eg. mutation (patch, post)
  async project(@Arg('id') id: number, @Info() info: GraphQLResolveInfo): Promise<Project> {
    // console.log(info.fieldNodes[0].selectionSet.selections);
    
    const project = await getRepository(Project).findOne(id);
    console.log(project);
    

    if (!project) {
      throw Error(`Project with id ${id} not found`);
    }

    const out: IProjectDTO = {
      id: project.id,
      name: project.name,
      categories: project.categories.map(y => <ICategoryDTO>({ id: y.id, name: y.name, projectId: y.projectId, tasks: y.tasks })),
      tasks: project.tasks.map(y => <ITaskDTO>({ id: y.id, name: y.name, projectId: y.projectId, categoryId: y.categoryId }))
    };
    // console.log(util.inspect(out, false, null, true /* enable colors */))
    
    return project;
  }
}