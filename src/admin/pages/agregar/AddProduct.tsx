import { ProductFormDialog } from "@/admin/components/ProductFormDialog";
import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Agregar Producto</h1>

      <ProductFormDialog
        open={open}
        title="Nuevo Producto"
        onClose={() => {
          setOpen(false);
          navigate("/admin/products");
        }}
        onSubmit={async (data) => {
          await addProduct(data);
          toast.success("Producto agregado exitosamente");
          navigate("/admin/products");
        }}
      />
    </div>
  );
};
