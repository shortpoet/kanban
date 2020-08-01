import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: 'projects' })
class Project {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}