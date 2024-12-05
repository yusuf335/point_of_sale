import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

Entity()
export class Cetagory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;
}