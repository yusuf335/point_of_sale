import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Store } from "./store";

@Entity("register")
export class Register {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  sessionStarted: Date;

  @UpdateDateColumn()
  sessionEnded: Date;

  @ManyToOne(() => Store, (store) => store.registers, { onDelete: "CASCADE" })
  store: Store;
}
