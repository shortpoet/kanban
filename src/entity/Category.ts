import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Project } from "./Project";
import { ObjectType, ID, Field, Int } from 'type-graphql';
import { Task } from "./Task";

@ObjectType() // signifies class is part of GraphQL
@Entity({ name: 'categories' })
export class Category {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field() // default is string
  @Column()
  name: string
  
  @Field(type => Int)
  @Column({name: 'project_id'})
  projectId: number

  // @Field(type => Category)
  @ManyToOne(type => Project, project => project.categories)
  @JoinColumn({ name: 'project_id' })    
  project: Project

  @Field(type => [Category])
  @OneToMany(type => Task, task => task.category)
  tasks: Task[]

}