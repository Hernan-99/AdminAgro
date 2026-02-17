import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

const statusConfig: Record<
  Product["status"],
  { label: string; className: string }
> = {
  disponible: {
    label: "Disponible",
    className: "bg-green-100 text-green-700 border-green-300",
  },
  vendido: {
    label: "Vendido",
    className: "bg-gray-200 text-gray-700 border-gray-300",
  },
  alquilado: {
    label: "Alquilado",
    className: "bg-blue-100 text-blue-700 border-blue-300",
  },
  reservado: {
    label: "Reservado",
    className: "bg-yellow-100 text-yellow-700 border-yellow-300",
  },
};

// badge de estado
export const StatusBadge = ({ status }: { status: Product["status"] }) => {
  const config = statusConfig[status];

  return (
    <Badge
      variant="outline"
      className={cn("text-xs font-medium", config.className)}
    >
      {config.label}
    </Badge>
  );
};

// badge de categorias
export const CategoryBadge = ({
  category,
}: {
  category: Product["category"];
}) => (
  <Badge variant="secondary" className="text-xs font-medium">
    {category}
  </Badge>
);

// badge de etiquetas

const typeLabels: Record<Product["type"], string> = {
  sale: "Venta",
  rent: "Alquiler",
  both: "Venta / Alquiler",
};

export const TypeBadge = ({ type }: { type: Product["type"] }) => (
  <Badge variant="outline" className="text-xs font-medium">
    {typeLabels[type]}
  </Badge>
);
