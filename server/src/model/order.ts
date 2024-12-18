import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Store } from "./store";
import { Register } from "./register";
import { CartItem } from "./cartItem";

// Define status
export enum orderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
  FAILED = "FAILED",
}

@Entity("order")
export class Order {
  // Primary key
  @PrimaryGeneratedColumn()
  id: number;

  // Record of the order
  @Column(() => Record)
  record: Record;

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
  message: string;

  // Many-to-One relationship with Store
  @ManyToOne(() => Store, (store) => store.orders, { onDelete: "CASCADE" })
  store: Store;

  // Many-to-One relationship with Register
  @ManyToOne(() => Register, (register) => register.orders, {
    onDelete: "SET NULL",
  })
  register: Register;

  // One-to-Many relationship with Cart
  @OneToMany(() => CartItem, (cartItem) => cartItem.order, {
    cascade: true,
    eager: true,
  })
  cartItems: CartItem[];

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
