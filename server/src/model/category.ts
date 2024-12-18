import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  Collection,
  PrimaryGeneratedColumn,
} from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Product } from "./product";
import { Store } from "./store";

@Entity("category")
export class Category {
  // Primary key
  @PrimaryGeneratedColumn()
  id: number;

  // Name of the category
  @Column()
  name!: string;

  // Description of the category
  @Column()
  description!: string;

  // Record of the category
  @Column(() => Record)
  record: Record;

  // One-to-Many relationship with Product
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  // Many-to-One relationship with Store
  @ManyToOne(() => Store, (store) => store.categories, {
    onDelete: "CASCADE",
  })
  store: Store;
}
