import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

// Import Models
import { StoreEntity } from "./store.entity";
import { UserEntity } from "./user.entity";
import { OrderEntity } from "./order.entity";

@Entity("register")
export class RegisterEntity {
  // Primary key
  @PrimaryGeneratedColumn()
  id: number;

  // Session started
  @CreateDateColumn({ nullable: true })
  sessionStarted: Date;

  // Session ended
  @UpdateDateColumn({ nullable: true })
  sessionEnded: Date;

  // Total of the register
  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  total: number;

  // Many-to-One relationship with Store
  @ManyToOne(() => StoreEntity, (store) => store.registers, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "store_id" })
  store: StoreEntity;

  // Many-to-One relationship with User
  @ManyToOne(() => UserEntity, (user) => user.registers, {
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "user_id" })
  user: UserEntity;

  // One-to-Many relationship with Order
  @OneToMany(() => OrderEntity, (order) => order.register)
  orders: OrderEntity[];

  // Method to calculate total of the register
  // For large datasets, iterating over rows in JavaScript is slower than leveraging database aggregation.
  calculateTotal(): number {
    return this.orders
      ? this.orders.reduce((sum, item) => sum + item.total, 0)
      : 0;
  }
}
