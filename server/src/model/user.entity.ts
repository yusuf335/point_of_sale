import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";

// Utils Models
import { RecordEntity } from "./utils/Record.entity";

// Import Models
import { StoreEntity } from "./store.entity";
import { RegisterEntity } from "./register.entity";

export enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  CASHIER = "cashier",
}

@Entity("user")
export class UserEntity {
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

  @Column(() => RecordEntity)
  record: RecordEntity;

  @ManyToMany(() => StoreEntity, (store) => store.users)
  @JoinTable()
  stores: StoreEntity[];

  @OneToMany(() => RegisterEntity, (register) => register.user)
  registers: RegisterEntity[];
}
