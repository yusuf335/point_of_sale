import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("store")
export class Store extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;
}
