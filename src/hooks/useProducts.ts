import { productApi } from "@/mock/api.mock";
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await productApi.getAll();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products", error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (data: Omit<Product, "id" | "date">) => {
    try {
      const newProduct = await productApi.create(data);
      setProducts((prev) => [newProduct, ...prev]);
    } catch (error) {
      console.error("Error creating product", error);
    }
  };

  const updateProduct = async (id: number, data: Partial<Product>) => {
    try {
      const updated = await productApi.update(id, data);

      if (!updated) return;

      setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  const removeProduct = async (id: number) => {
    await productApi.remove(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    addProduct,
    updateProduct,
    products,
    loading,
    refresh: loadProducts,
    removeProduct,
  };
};
