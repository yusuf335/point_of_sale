import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  Collection,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";

// Utils Models
import { RecordEntity } from "./utils/Record.entity";

// Import Models
import { ProductEntity } from "./product.entity";
import { CompanyEntity } from "./company.entity";

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

  // One-to-Many relationship with Product
  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];

  // Many-to-One relationship with Store
  @ManyToOne(() => CompanyEntity, (company) => company.categories, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "company_id" })
  company: CompanyEntity;

  // Record of the category
  @Column(() => RecordEntity)
  record: RecordEntity;
}
