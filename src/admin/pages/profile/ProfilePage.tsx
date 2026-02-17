import { InputField } from "@/admin/components/InputField";
import { useUser } from "@/hooks/useProfile";
import { Building2, Mail, MapPin, Phone, User as UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const ProfilePage = () => {
  const { user, loading, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.fullName,
        email: user.email,
        phone: user.phone ?? "",
        company: user.company ?? "",
        location: user.location ?? "",
      });
    }
  }, [user]);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    await updateUser(form);
    toast.success("Perfil actualizado correctamente");
    setIsEditing(false);
  };

  if (loading || !user) return <p className="p-6">Cargando perfil...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Mi Perfil</h1>

      {/* foto y nombre */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 flex items-center gap-6">
        <img
          src={user.avatar}
          alt={user.fullName}
          className="w-20 h-20 rounded-2xl object-cover"
        />

        <div>
          <h2 className="text-xl font-semibold">{user.fullName}</h2>
          <p className="text-gray-600">{user.company}</p>
          <p className="text-sm text-green-700">{user.location}</p>
          <p className="text-xs text-muted-foreground mt-1">Rol: {user.role}</p>
        </div>
      </div>

      {/* informacion del productor */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Información Personal</h3>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-sm rounded-xl border hover:bg-gray-50"
            >
              Editar
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm rounded-xl bg-green-700 text-white"
            >
              Guardar
            </button>
          )}
        </div>

        <div className="space-y-5">
          <InputField
            icon={<UserIcon size={18} />}
            label="Nombre completo"
            value={form.fullName}
            disabled={!isEditing}
            onChange={(v) => handleChange("fullName", v)}
          />

          <InputField
            icon={<Mail size={18} />}
            label="Email"
            value={form.email}
            disabled={!isEditing}
            onChange={(v) => handleChange("email", v)}
          />

          <InputField
            icon={<Phone size={18} />}
            label="Teléfono"
            value={form.phone}
            disabled={!isEditing}
            onChange={(v) => handleChange("phone", v)}
          />

          <InputField
            icon={<Building2 size={18} />}
            label="Empresa"
            value={form.company}
            disabled={!isEditing}
            onChange={(v) => handleChange("company", v)}
          />

          <InputField
            icon={<MapPin size={18} />}
            label="Ubicación"
            value={form.location}
            disabled={!isEditing}
            onChange={(v) => handleChange("location", v)}
          />
        </div>
      </div>
    </div>
  );
};
