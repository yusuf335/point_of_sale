import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Category } from "./category";
import { Store } from "./store";

@Entity("product")
export class Product {
  // Primary key
  @PrimaryGeneratedColumn()
  id: number;

  // Name of the product
  @Column()
  name!: string;

  // Description of the product
  @Column()
  description!: string;

  // Price of the product
  @Column("decimal", { precision: 10, scale: 2 })
  price!: number;

  // Image of the product
  @Column()
  image!: string;

  // Stock of the product
  @Column({ type: "int", default: 0 })
  stock: number;

  // Record of the product
  @Column(() => Record)
  record: Record;

  // Many-to-One relationship with Category
  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: "CASCADE",
  })
  category: Category;

  // Many-to-One relationship with Store
  @ManyToOne(() => Store, (store) => store.products, { onDelete: "CASCADE" })
  store: Store;
}
