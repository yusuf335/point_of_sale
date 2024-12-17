import { Entity, Column } from "typeorm";
import { Record } from "./utils/Record";

Entity();
export class Product extends Record {
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
