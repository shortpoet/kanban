import { Category } from "./Category";
import { ObjectType, ID, Field } from 'type-graphql';
import { Task } from "./Task";
import { IProject } from "../../client/src/interfaces/IProject";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@ObjectType() // signifies class is part of GraphQL
@Entity({ name: 'projects' })
export class Project implements IProject {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field() // default is string
  @Column()
  name: string

  @Field(type => [Category]) // != Category[]
  @OneToMany(type => Category, category => category.project, {
    eager: true
  })
  categories: Category[]

  @Field(type => [Task]) // != Task[]
  @OneToMany(type => Task, task => task.project, {
    eager: true
  })
  tasks: Task[]

  // one option to load related entites
  // for more fine-grained control declare in viewmodel  
  // @OneToMany(type => Category, category => category.project, {
  //   eager: true
  // })



}