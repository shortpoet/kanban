import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Category } from "./Category"
import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType() // signifies class is part of GraphQL
@Entity({ name: 'projects' })
export class Project {
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
  
  // one option to load related entites
  // for more fine-grained control declare in viewmodel  
  // @OneToMany(type => Category, category => category.project, {
  //   eager: true
  // })

    
  categories: Category[]
}