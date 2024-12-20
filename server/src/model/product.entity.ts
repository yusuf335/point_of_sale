import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  OneToOne,
} from "typeorm";

// Utils Models
import { RecordEntity } from "./utils/Record.entity";

// Import Models
import { CategoryEntity } from "./category.entity";
import { CompanyEntity } from "./company.entity";
import { ProductStockEntity } from "./productStock.entity";

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

  // Many-to-One relationship with Category
  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "category_id" })
  category: CategoryEntity;

  // Many-to-One relationship with Store
  @ManyToOne(() => CompanyEntity, (company) => company.products, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "company_id" })
  company: CompanyEntity;

  // One-to-Many relationship with ProductStock
  @OneToMany(() => ProductStockEntity, (productStock) => productStock.product)
  @JoinColumn({ name: "product_stock_id" })
  productStock: ProductStockEntity;

  // Record of the product
  @Column(() => RecordEntity)
  record: RecordEntity;
}
