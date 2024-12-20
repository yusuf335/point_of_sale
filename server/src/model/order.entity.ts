import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

// Utils Models
import { RecordEntity } from "./utils/Record.entity";

// Import Models
import { StoreEntity } from "./store.entity";
import { RegisterEntity } from "./register.entity";
import { CartItemEntity } from "./cartItem.entity";

// Define status
export enum orderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
  FAILED = "FAILED",
}

@Entity("order")
export class OrderEntity {
  // Primary key
  @PrimaryGeneratedColumn()
  id: number;

  // Record of the order
  @Column(() => RecordEntity)
  record: RecordEntity;

  // Total price of the order
  @Column("decimal", { precision: 10, scale: 2 })
  total: number;

  // Payment method
  @Column()
  paymentMethod: string;

  // Status of the order
  @Column("enum", { enum: orderStatus, default: orderStatus.PENDING })
  status: string;

  // Reason for failure
  @Column({ nullable: true })
  note: string;

  // Many-to-One relationship with Store
  @ManyToOne(() => StoreEntity, (store) => store.orders, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "store_id" })
  store: StoreEntity;

  // Many-to-One relationship with Register
  @ManyToOne(() => RegisterEntity, (register) => register.orders, {
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "register_id" })
  register: RegisterEntity;

  // One-to-Many relationship with Cart
  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.order, {
    cascade: true,
    eager: true,
  })
  cartItems: CartItemEntity[];

  // Method to calculate total
  // This method calculates the total price of the order by summing the price of each item in the cart
  // For large datasets, iterating over rows in JavaScript is slower than leveraging database aggregation.
  calculateTotal(): number {
    return this.cartItems
      ? this.cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )
      : 0;
  }
}
