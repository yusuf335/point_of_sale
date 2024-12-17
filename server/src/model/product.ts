import { Entity, Column, ManyToOne } from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Category } from "./category";
import { Store } from "./store";

@Entity("product")
export class Product extends Record {
  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price!: number;

  @Column()
  image!: string;

  @Column()
  stock!: number;

  // Many-to-One relationship with Category
  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: "CASCADE",
  })
  category: Category;

  // Many-to-One relationship with Store
  @ManyToOne(() => Store, (store) => store.products, { onDelete: "CASCADE" })
  store: Store;
}
