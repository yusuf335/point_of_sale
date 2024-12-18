import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

// Utils models
import { Record } from "./utils/Record";

// Import models
import { User } from "./user";
import { Category } from "./category";
import { Product } from "./product";
import { Register } from "./register";
import { Order } from "./order";
import { CartItem } from "./cartItem";

@Entity("store")
export class Store {
  // Primary key
  @PrimaryGeneratedColumn()
  id: number;

  // Name of the store
  @Column()
  name: string;

  // Address of the store
  @Column()
  address: string;

  // Phone number of the store
  @Column()
  phone: string;

  @Column({ type: "int" })
  maxRegisters: number;

  // Record of the store
  @Column(() => Record)
  record: Record;

  // One-to-Many relationship with User
  @OneToMany(() => User, (user) => user.store)
  users: User[];

  // One-to-Many relationship with Category
  @OneToMany(() => Category, (category) => category.store)
  categories: Category[];

  // One-to-Many relationship with Product
  @OneToMany(() => Product, (product) => product.store)
  products: Product[];

  // One-to-Many relationship with Register
  @OneToMany(() => Register, (register) => register.store)
  registers: Register[];

  // One-to-Many relationship with Order
  @OneToMany(() => Order, (order) => order.store)
  orders: Order[];

  // One-to-Many relationship with Cart
  @OneToMany(() => CartItem, (cartItem) => cartItem.store)
  cartItems: CartItem[];
}
