import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  Collection,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";

// Utils Models
import { RecordEntity } from "./utils/Record.entity";

// Import Models
import { ProductEntity } from "./product.entity";
import { StoreEntity } from "./store.entity";

@Entity("category")
export class CategoryEntity {
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
  @Column(() => RecordEntity)
  record: RecordEntity;

  // One-to-Many relationship with Product
  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];

  // Many-to-One relationship with Store
  @ManyToOne(() => StoreEntity, (store) => store.categories, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "store_id" })
  store: StoreEntity;
}
