import { useState } from "react";
import type { Product } from "@/types/product";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Product, "id">) => void;
  product?: Product;
  title: string;
}

export const ProductFormDialog = ({
  open,
  onClose,
  onSubmit,
  product,
  title,
}: ProductFormDialogProps) => {
  const [form, setForm] = useState<Omit<Product, "id">>({
    name: product?.name || "",
    description: product?.description || "",
    category: product?.category || "Tractores",
    type: product?.type || "sale",
    salePrice: product?.salePrice || 0,
    rentPrice: product?.rentPrice || 0,
    status: product?.status || "disponible",
    image: product?.image || "",
    date: product?.date || new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">

        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Nombre</Label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label>Descripción</Label>
            <Textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Categoría</Label>
              <Select
                value={form.category}
                onValueChange={(v) =>
                  setForm({ ...form, category: v as Product["category"] })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tractores">Tractor</SelectItem>
                  <SelectItem value="Cosechadoras">Cosechadora</SelectItem>
                  <SelectItem value="Sembradoras">Sembradora</SelectItem>
                  <SelectItem value="Semillas">Semillas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Tipo</Label>
              <Select
                value={form.type}
                onValueChange={(v) =>
                  setForm({ ...form, type: v as Product["type"] })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sale">Venta</SelectItem>
                  <SelectItem value="rent">Alquiler</SelectItem>
                  <SelectItem value="both">Venta / Alquiler</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Precio Venta</Label>
              <Input
                type="number"
                value={form.salePrice}
                onChange={(e) =>
                  setForm({
                    ...form,
                    salePrice: Number(e.target.value),
                  })
                }
              />
            </div>

            <div>
              <Label>Precio Alquiler</Label>
              <Input
                type="number"
                value={form.rentPrice}
                onChange={(e) =>
                  setForm({
                    ...form,
                    rentPrice: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div>
            <Label>Estado</Label>
            <Select
              value={form.status}
              onValueChange={(v) =>
                setForm({ ...form, status: v as Product["status"] })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="disponible">Disponible</SelectItem>
                <SelectItem value="reservado">Reservado</SelectItem>
                <SelectItem value="vendido">Vendido</SelectItem>
                <SelectItem value="alquilado">Alquilado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Guardar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
