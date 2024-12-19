import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";

// Utils Models
import { RecordEntity } from "./utils/Record.entity";

// Import Models
import { CategoryEntity } from "./category.entity";
import { StoreEntity } from "./store.entity";

@Entity("product")
export class ProductEntity {
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
  @Column(() => RecordEntity)
  record: RecordEntity;

  // Many-to-One relationship with Category
  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "category_id" })
  category: CategoryEntity;

  // Many-to-One relationship with Store
  @ManyToOne(() => StoreEntity, (store) => store.products, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "store_id" })
  store: StoreEntity;
}
