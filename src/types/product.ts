type ProductStatus = "disponible" | "reservado" | "vendido" | "alquilado";
type ProductCategory = "Tractores" | "Cosechadoras" | "Sembradoras" | "Semillas";
type ProductType = "sale" | "rent" | "both";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  type: ProductType;
  salePrice: number;
  rentPrice: number;
  status: ProductStatus;
  description: string;
  image?: string;
  date: string;
}
