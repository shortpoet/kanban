import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Project } from "./Project";
import { ObjectType, ID, Field, Int } from 'type-graphql';
import { Category } from "./Category";
import { ITask } from "../interfaces/ITask";

@ObjectType() // signifies class is part of GraphQL
@Entity({ name: 'tasks' })
export class Task implements ITask {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field() // default is string
  @Column()
  name: string

  @Field(type => Int)
  @Column({ name: 'project_id' })
  projectId: number

  @Field(type => Int)
  @Column({ name: 'category_id' })
  categoryId: number

  @Field(type => Project)
  @ManyToOne(type => Project, project => project.tasks)
  @JoinColumn({ name: 'project_id' })
  project: Project

  @Field(type => Category)
  @JoinColumn({ name: 'category_id' })
  @ManyToOne(type => Category, category => category.tasks, {
    eager: true
  })
  categories: Category[]
}