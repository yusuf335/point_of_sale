import { Repository } from "typeorm";
import { DataSource } from "apollo-datasource";
import { AppDataSource } from "../utils/database";

// Import the model
import { ProductEntity } from "../model/product.entity";

export class ProductService extends DataSource {
  private static instance: ProductService;
  private productRepo: Repository<ProductEntity>;

  constructor() {
    super();
    this.productRepo = AppDataSource.getRepository(ProductEntity);
  }

  static getInstance(): ProductService {
    if (!this.instance) {
      this.instance = new ProductService();
    }

    return this.instance;
  }

  // Create a new product
  async createProduct(
    name: string,
    description: string,
    price: number,
    image: string,
    category: number,
    company: number
  ): Promise<ProductEntity> {
    const product = new ProductEntity();
    product.name = name;
    product.description = description;
    product.price = price;
    product.image = image;
    product.category.id = category;
    product.company.id = company;

    return await this.productRepo.save(product);
  }

  // Update a product
  async updateProduct(
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    category: number,
    company: number
  ): Promise<ProductEntity> {
    const product = await this.productRepo.findOne({ where: { id } });

    if (!product) {
      throw new Error("Product not found");
    }

    product.name = name;
    product.description = description;
    product.price = price;
    product.image = image;
    product.category.id = category;
    product.company.id = company;

    return await this.productRepo.save(product);
  }

  // Delete a product
  async deleteProduct(id: number): Promise<ProductEntity> {
    const product = await this.productRepo.findOne({ where: { id } });

    if (!product) {
      throw new Error("Product not found");
    }

    await this.productRepo.delete(product.id);

    return product;
  }

  // Get a product by ID
  async getProduct(id: number): Promise<ProductEntity> {
    return await this.productRepo.findOne({ where: { id } });
  }

  // Get all products
  async getProducts(): Promise<ProductEntity[]> {
    return await this.productRepo.find();
  }
}
