import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

// Utils models
import { Record } from "./utils/Record";

// Import models
import { User } from "./user";
import { Category } from "./category";
import { Product } from "./product";
import { Register } from "./register";
import { Order } from "./order";
import { Cart } from "./cart";

@Entity("store")
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

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
  @OneToMany(() => Cart, (cart) => cart.store)
  carts: Cart[];
}
