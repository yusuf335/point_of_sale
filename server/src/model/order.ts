import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Store } from "./store";

@Entity("order")
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => Record)
  record: Record;

  @ManyToOne(() => Store, (store) => store.orders, { onDelete: "CASCADE" })
  store: Store;
}
