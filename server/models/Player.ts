import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name:string;

  @Column("int")
  age:number;

  @Column()
  position:number;

  @Column()
  photo:string;
}
