import { Entity, Column, OneToMany, ManyToOne } from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Product } from "./product";
import { Store } from "./store";

@Entity("category")
export class Category extends Record {
  @Column()
  name!: string;

  @Column()
  description!: string;

  // One-to-Many relationship with Product
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  // Many-to-One relationship with Store
  @ManyToOne(() => Store, (store) => store.categories, {
    onDelete: "CASCADE",
  })
  store: Store;
}
