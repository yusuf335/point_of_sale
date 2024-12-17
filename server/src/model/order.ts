import { Entity, ManyToOne } from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Store } from "./store";

@Entity("order")
export class Order extends Record {
  @ManyToOne(() => Store, (store) => store.orders, { onDelete: "CASCADE" })
  store: Store;
}
