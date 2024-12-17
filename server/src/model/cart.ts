import { Entity, ManyToMany, ManyToOne } from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Store } from "./store";

@Entity("cart")
export class Cart extends Record {
  @ManyToOne(() => Store, (store) => store.carts, { onDelete: "CASCADE" })
  store: Store;
}
