import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/types/product";
import { AlertCircle, DollarSign, Package, TrendingUp } from "lucide-react";

interface StatProps {
  products: Product[];
}

export const StatCard = ({ products }: StatProps) => {
  const total = products.length;
  const available = products.filter((p) => p.status === "disponible").length;
  const reserved = products.filter((p) => p.status === "reservado").length;
  const sold = products.filter((p) => p.status === "vendido").length;
  const rented = products.filter((p) => p.status === "alquilado").length;
  const stats = [
    {
      label: "Total Productos",
      value: total,
      icon: Package,
      color: "text-primary",
    },
    {
      label: "Disponibles",
      value: available,
      icon: TrendingUp,
      color: "text-success",
    },
    {
      label: "Vendidos",
      value: reserved,
      icon: DollarSign,
      color: "text-accent",
    },
    {
      label: "Vendidos",
      value: sold,
      icon: DollarSign,
      color: "text-accent",
    },
    {
      label: "Alquilados",
      value: rented,
      icon: AlertCircle,
      color: "text-info",
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className="text-3xl font-extrabold mt-1">{stat.value}</p>
              </div>
              <stat.icon className={`h-10 w-10 ${stat.color} opacity-60`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
