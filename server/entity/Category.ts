import { Project } from "./Project";
import { ObjectType, ID, Field, Int } from 'type-graphql';
import { Task } from "./Task";
import { ICategory } from "../../client/src/interfaces/ICategory";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@ObjectType() // signifies class is part of GraphQL
@Entity({ name: 'categories' })
export class Category implements ICategory {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field() // default is string
  @Column()
  name: string

  @Field(type => Int)
  @Column({ name: 'project_id' })
  projectId: number

  // @Field(type => Category)
  @ManyToOne(type => Project, project => project.categories)
  @JoinColumn({ name: 'project_id' })
  project: Project

  @Field(type => [Category])
  @OneToMany(type => Task, task => task.categories)
  tasks: Task[]

}