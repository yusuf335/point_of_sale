import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Category } from "./category";

Entity();
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @Column()
  image!: string;

  @Column()
  stock!: number;
}