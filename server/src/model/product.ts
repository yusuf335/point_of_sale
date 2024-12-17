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

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;
}
