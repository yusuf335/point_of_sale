import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

// Utils Models
import { RecordEntity } from "./utils/Record.entity";

// Import Models
import { StoreEntity } from "./store.entity";
import { UserEntity } from "./user.entity";
import { ProductEntity } from "./product.entity";
import { CategoryEntity } from "./category.entity";

@Entity("company")
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @OneToMany(() => StoreEntity, (store) => store.company, {
    nullable: true,
    cascade: true,
  })
  stores: StoreEntity[];

  @OneToMany(() => UserEntity, (user) => user.company, {
    nullable: true,
    cascade: true,
  })
  users: UserEntity[];

  @OneToMany(() => ProductEntity, (product) => product.company, {
    nullable: true,
    cascade: true,
  })
  products: ProductEntity[];

  @OneToMany(() => CategoryEntity, (category) => category.company, {
    nullable: true,
    cascade: true,
  })
  categories: CategoryEntity[];

  @Column(() => RecordEntity)
  record: RecordEntity;
}
