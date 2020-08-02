import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Category } from "./Category"

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => Category, category => category.project)
  
  // one option to load related entites
  // for more fine-grained control declare in viewmodel  
  // @OneToMany(type => Category, category => category.project, {
  //   eager: true
  // })

    
  categories: Category[]
}