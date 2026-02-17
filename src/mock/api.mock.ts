import type { Product } from "@/types/product";
import { productsMock } from "./product.mock";

let products: Product[] = [...productsMock];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const productApi = {
  async getAll(): Promise<Product[]> {
    await delay(500);
    return [...products];
  },

  async getById(id: number): Promise<Product | undefined> {
    await delay(300);
    return products.find((p) => p.id === id);
  },

  async create(data: Omit<Product, "id" | "date">): Promise<Product> {
    await delay(500);

    const newProduct: Product = {
      ...data,
      id: Date.now(),
      date: new Date().toISOString(),
    };

    products.push(newProduct);
    return newProduct;
  },

  async update(id: number, data: Partial<Product>): Promise<Product | null> {
    await delay(500);

    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;

    products[index] = { ...products[index], ...data };
    return products[index];
  },

  async remove(id: number): Promise<boolean> {
    await delay(500);

    const initialLength = products.length;
    products = products.filter((p) => p.id !== id);
    return products.length < initialLength;
  },
};
