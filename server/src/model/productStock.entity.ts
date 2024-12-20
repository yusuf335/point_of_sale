import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from "typeorm";

// Utils Models
import { RecordEntity } from "./utils/Record.entity";

// Import Models
import { StoreEntity } from "./store.entity";
import { ProductEntity } from "./product.entity";

// ProductStockStatus Enum
export enum ProductStockStatus {
  IN_STOCK = "IN_STOCK",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  DISCONTINUED = "DISCONTINUED",
}

@Entity("product_stock")
export class ProductStockEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  stock: number;

  @Column({
    type: "enum",
    enum: ProductStockStatus,
    default: ProductStockStatus.IN_STOCK,
  })
  status: ProductStockStatus;

  @ManyToOne(() => ProductEntity, (product) => product.productStock, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  product: ProductEntity;

  @ManyToOne(() => StoreEntity, (store) => store.productStocks, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "store_id" })
  store: StoreEntity;

  @Column(() => RecordEntity)
  record: RecordEntity;
}
