import { Resolver, Arg, Info, Query } from 'type-graphql';
import { Project } from '../entity/Project';
import { getRepository } from 'typeorm';

@Resolver(of => Project)
export class ProjectsResolver {

  @Query(returns => Project) // more than one type of query can be run (this one is akin to get); eg. mutation (patch, post)
  async project(@Arg('id') id: number): Promise<Project> {
    const project = await getRepository(Project).findOne(id);
    if (!project) {
      throw Error(`Project with id ${id} not found`);
    }
    return project;
  }
}