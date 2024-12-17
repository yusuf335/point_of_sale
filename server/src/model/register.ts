import { Column, Entity, ManyToOne } from "typeorm";

// Utils Models
import { Record } from "./utils/Record";

// Import Models
import { Store } from "./store";

@Entity("register")
export class Register extends Record {
  @ManyToOne(() => Store, (store) => store.registers, { onDelete: "CASCADE" })
  store: Store;
}
