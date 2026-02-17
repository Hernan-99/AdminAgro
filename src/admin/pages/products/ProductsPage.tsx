import {
  CategoryBadge,
  StatusBadge,
  TypeBadge,
} from "@/admin/components/ProductBadge";
import { ProductFormDialog } from "@/admin/components/ProductFormDialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useProducts } from "@/hooks/useProducts";
import type { Product } from "@/types/product";
import { Package, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
export const ProductsPage = () => {
  const { products, loading, removeProduct, updateProduct } = useProducts();
  const [editProduct, setEditProduct] = useState<Product | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    await removeProduct(id);
    toast.success("Producto eliminado correctamente");
  };

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold">Mis Productos</h1>

      {products.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Package className="h-12 w-12 mx-auto text-muted-foreground/40 mb-3" />
            <p className="text-muted-foreground">No hay productos cargados.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-md transition">
              <CardContent className="p-6 flex justify-between items-center">
                {/* IZQUIERDA */}
                <div className="flex items-start gap-4">
                  {/* Icono */}
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Package className="h-6 w-6 text-primary" />
                  </div>

                  {/* Info producto */}
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>

                    <p className="text-sm text-muted-foreground mb-2">
                      {product.description}
                    </p>

                    {/* etiquetas clasificatorias */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <CategoryBadge category={product.category} />
                      <TypeBadge type={product.type} />
                      <StatusBadge status={product.status} />
                      <span className="text-sm font-bold text-primary ml-1">
                        ${product.salePrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* acciones de edicion y eliminacion */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditProduct(product)}
                  >
                    <Pencil className="h-4 w-4 mr-1" />
                    Editar
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => setDeleteId(product.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Eliminar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {editProduct && (
        <ProductFormDialog
          open={!!editProduct}
          onClose={() => setEditProduct(null)}
          title="Editar Producto"
          product={editProduct}
          onSubmit={(data) => updateProduct(editProduct.id, data)}
        />
      )}

      {/* pop up para confirmar eliminacion */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar producto?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. El producto será eliminado
              permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>

            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                if (deleteId) handleDelete(deleteId);
                setDeleteId(null);
              }}
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
