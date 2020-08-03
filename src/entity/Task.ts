import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Project } from "./Project";
import { ObjectType, ID, Field } from 'type-graphql';
import { Category } from "./Category";

@ObjectType() // signifies class is part of GraphQL
@Entity({ name: 'tasks' })
export class Task {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field() // default is string
  @Column()
  name: string

  @Column({name: 'project_id'})
  projectId: number

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
  category: Category
}