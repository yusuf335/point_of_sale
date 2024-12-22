import { Repository } from "typeorm";
import { DataSource } from "apollo-datasource";
import { AppDataSource } from "../utils/database";

import { CartItemEntity } from "../model/cartItem.entity";

export class CartItemService extends DataSource {
  private static instance: CartItemService;
  private cartItemRepo: Repository<CartItemEntity>;

  constructor() {
    super();
    this.cartItemRepo = AppDataSource.getRepository(CartItemEntity);
  }

  public static getInstance(): CartItemService {
    if (!this.instance) {
      this.instance = new CartItemService();
    }
    return this.instance;
  }

  //   Get Cart Items by order ID
  async getCartItemsByOrder(orderId: number): Promise<CartItemEntity[]> {
    return this.cartItemRepo.find({ where: { order: { id: orderId } } });
  }

  //   Update Cart Item by ID
  async updateCartItem(
    id: number,
    cartItem: CartItemEntity
  ): Promise<CartItemEntity> {
    await this.cartItemRepo.update(id, cartItem);
    return this.cartItemRepo.findOne({ where: { id } });
  }

  //   Delete Cart Item by ID
  async deleteCartItem(id: number): Promise<boolean> {
    await this.cartItemRepo.delete(id);
    return true;
  }
}
