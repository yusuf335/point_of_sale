import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Store } from "./store";
import { Order } from "./order";

@Entity("cartItem")
export class CartItem {
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

  // Record of the product
  @Column(() => Record)
  record: Record;

  // Many-to-One relationship with Store
  @ManyToOne(() => Store, (store) => store.cartItems, { onDelete: "CASCADE" })
  store: Store;

  // Many-to-One relationship with Order
  @ManyToOne(() => Order, (order) => order.cartItems, { onDelete: "CASCADE" })
  order: Order;
}
