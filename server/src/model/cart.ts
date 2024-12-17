import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Store } from "./store";

@Entity("cart")
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => Record)
  record: Record;

  @ManyToOne(() => Store, (store) => store.carts, { onDelete: "CASCADE" })
  store: Store;
}
