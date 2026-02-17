import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/types/product";
import { Package } from "lucide-react";

interface Props {
  products: Product[];
}

export const RecentProds = ({ products }: Props) => {
  // ordeno las fechas de creacion
  const recentProducts = [...products]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Productos Recientes</h2>
      <div className="grid gap-3">
        {recentProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {product.category}
                  </p>
                </div>
              </div>
              <span className="text-sm font-medium">
                {product.type === "sale"
                  ? `$${product.salePrice.toLocaleString()}`
                  : product.type === "rent"
                    ? `$${product.rentPrice}/día`
                    : `Venta: $${product.salePrice} | Alq: $${product.rentPrice}`}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
