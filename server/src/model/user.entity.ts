import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from "typeorm";

// Utils Models
import { RecordEntity } from "./utils/Record.entity";

// Import Models
import { CompanyEntity } from "./company.entity";
import { StoreEntity } from "./store.entity";
import { RegisterEntity } from "./register.entity";

export enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  CASHIER = "cashier",
}

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

@Entity("user")
export class UserEntity {
  // Primary key
  @PrimaryGeneratedColumn()
  id: number;

  // Name of the user
  @Column()
  name!: string;

  // Email of the user
  @Column({
    unique: true,
  })
  email!: string;

  // Password of the user
  @Column()
  password!: string;

  // Role of the user
  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.CASHIER,
  })
  role!: UserRole;

  // Is the user active
  @Column({ type: "enum", enum: UserStatus, default: UserStatus.ACTIVE })
  isActive!: UserStatus;

  // Is the user verified
  @Column({ default: false })
  isVerified!: boolean;

  // Note of the user
  @Column({ nullable: true })
  note!: string;

  // Reset password token
  @Column({ nullable: true })
  resetPasswordToken!: string;

  // Many-to-One relationship with Company
  @ManyToOne(() => CompanyEntity, (company) => company.users)
  @JoinColumn({ name: "company_id" })
  company: CompanyEntity;

  // Many-to-Many relationship with Store
  @ManyToOne(() => StoreEntity, (store) => store.users)
  @JoinColumn({ name: "store_id" })
  stores: StoreEntity[];

  // One-to-Many relationship with Register
  @OneToMany(() => RegisterEntity, (register) => register.user)
  registers: RegisterEntity[];

  // Record of the user
  @Column(() => RecordEntity)
  record: RecordEntity;
}
