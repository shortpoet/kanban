import { Task } from '../entity/Task'
import { InputType, Field, ID, Resolver, Mutation, Arg } from 'type-graphql'
import { getRepository } from 'typeorm'

@InputType('UpdateTask')
class UpdateTask {
  @Field(type => ID)
  id: number

  @Field(type => ID)
  categoryId: number
}

@Resolver(of => Task)
export class TaskResolver {

  @Mutation(returns => Task)
  async updateTask(@Arg('task') updateTask: UpdateTask): Promise<Task> {
    const { id, categoryId } = updateTask;
    const repo = getRepository(Task);
    await repo.update({ id }, { categoryId });
    return repo.findOne(id);
  }
}