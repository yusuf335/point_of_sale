import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

// Import Models
import { Store } from "./store";
import { User } from "./user";
import { Order } from "./order";

@Entity("register")
export class Register {
  // Primary key
  @PrimaryGeneratedColumn()
  id: number;

  // Session started
  @CreateDateColumn()
  sessionStarted: Date;

  // Session ended
  @UpdateDateColumn()
  sessionEnded: Date;

  // Total of the register
  @Column({ type: "decimal", precision: 10, scale: 2 })
  total: number;

  // Many-to-One relationship with Store
  @ManyToOne(() => Store, (store) => store.registers, { onDelete: "CASCADE" })
  store: Store;

  // Many-to-One relationship with User
  @ManyToOne(() => User, (user) => user.registers, { onDelete: "CASCADE" })
  user: User;

  // One-to-Many relationship with Order
  @OneToMany(() => Order, (order) => order.register)
  orders: Order[];

  // Method to calculate total of the register
  // For large datasets, iterating over rows in JavaScript is slower than leveraging database aggregation.
  calculateTotal(): number {
    return this.orders
      ? this.orders.reduce((sum, item) => sum + item.total, 0)
      : 0;
  }
}
