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

  // Many-to-One relationship with Order
  @ManyToOne(() => OrderEntity, (order) => order.cartItems, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "order_id" })
  order: OrderEntity;

  // Record of the product
  @Column(() => RecordEntity)
  record: RecordEntity;
}
