import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Store } from "./store";

export enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  CASHIER = "cashier",
}

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name!: string;

  @Column({
    unique: true,
  })
  email!: string;

  @Column()
  password!: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.CASHIER,
  })
  role!: UserRole;

  @Column({ default: true })
  isActive!: boolean;

  @Column({ default: false })
  isVerified!: boolean;

  @Column(() => Record)
  record: Record;

  @ManyToOne(() => Store, (store) => store.users, { onDelete: "CASCADE" })
  store: Store;
}
