import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

// Utils Models
import { RecordEntity } from "./utils/Record.entity";

// Import Models
import { StoreEntity } from "./store.entity";
import { OrderEntity } from "./order.entity";

@Entity("cart_item")
export class CartItemEntity {
  // Primary key
  @PrimaryGeneratedColumn()
  id: number;

  // Foreign key to Product
  @Column({ type: "int" })
  productId: number;

  // Name of the product
  @Column()
  name: string;

  // Price of the product
  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  // Quantity of the product
  @Column({ type: "int" })
  quantity: number;

  // Total price of the product
  @Column({ type: "decimal", precision: 10, scale: 2 })
  totalPrice: number;

  // Record of the product
  @Column(() => RecordEntity)
  record: RecordEntity;

  // Many-to-One relationship with Store
  @ManyToOne(() => StoreEntity, (store) => store.cartItems, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "store_id" })
  store: StoreEntity;

  // Many-to-One relationship with Order
  @ManyToOne(() => OrderEntity, (order) => order.cartItems, {
    onDelete: "CASCADE",
  })
  order: OrderEntity;
}
