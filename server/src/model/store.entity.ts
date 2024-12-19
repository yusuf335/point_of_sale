import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";

// Utils models
import { RecordEntity } from "./utils/Record.entity";

// Import models
import { UserEntity } from "./user.entity";
import { CategoryEntity } from "./category.entity";
import { ProductEntity } from "./product.entity";
import { RegisterEntity } from "./register.entity";
import { OrderEntity } from "./order.entity";
import { CartItemEntity } from "./cartItem.entity";

@Entity("store")
export class StoreEntity {
  // Primary key
  @PrimaryGeneratedColumn()
  id: number;

  // Name of the store
  @Column({ unique: true })
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
  @Column(() => RecordEntity)
  record: RecordEntity;

  // Bi-directional Many-to-Many relationship with User
  @ManyToMany(() => UserEntity, (user) => user.stores)
  users: UserEntity[];

  // One-to-Many relationship with Category
  @OneToMany(() => CategoryEntity, (category) => category.store)
  categories: CategoryEntity[];

  // One-to-Many relationship with Product
  @OneToMany(() => ProductEntity, (product) => product.store)
  products: ProductEntity[];

  // One-to-Many relationship with Register
  @OneToMany(() => RegisterEntity, (register) => register.store)
  registers: RegisterEntity[];

  // One-to-Many relationship with Order
  @OneToMany(() => OrderEntity, (order) => order.store)
  orders: OrderEntity[];

  // One-to-Many relationship with Cart
  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.store)
  cartItems: CartItemEntity[];
}
