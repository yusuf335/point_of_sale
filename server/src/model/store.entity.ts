import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";

// Utils models
import { RecordEntity } from "./utils/Record.entity";

// Import models
import { UserEntity } from "./user.entity";
import { ProductStockEntity } from "./productStock.entity";
import { RegisterEntity } from "./register.entity";
import { OrderEntity } from "./order.entity";
import { CompanyEntity } from "./company.entity";

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

  // Maximum number of registers in the store
  @Column({ type: "int" })
  maxRegisters: number;

  // Many to One relationship with Company
  @ManyToOne(() => CompanyEntity, (company) => company.stores, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "company_id" })
  company: CompanyEntity;

  // One-to-Many relationship with User
  @OneToMany(() => UserEntity, (user) => user.stores)
  users: UserEntity[];

  // One-to-Many relationship with Product Stock
  @OneToMany(() => ProductStockEntity, (productStock) => productStock.store)
  productStocks: ProductStockEntity[];

  // One-to-Many relationship with Register
  @OneToMany(() => RegisterEntity, (register) => register.store)
  registers: RegisterEntity[];

  // One-to-Many relationship with Order
  @OneToMany(() => OrderEntity, (order) => order.store)
  orders: OrderEntity[];

  // Record of the store
  @Column(() => RecordEntity)
  record: RecordEntity;
}
