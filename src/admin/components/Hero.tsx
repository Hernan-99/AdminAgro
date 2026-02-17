import heroImage from "@/assets/hero-img.jpg";
import { Title } from "./Title";
export const Hero = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-48 md:h-56">
      <img
        src={heroImage}
        alt="Campo agrícola"
        className="w-full h-full object-cover"
      />
      <Title
        title="Bienvenido de nuevo"
        description="Gestiona tu inventario de maquinaria y productos agrícolas de forma
          eficiente."
      />
    </div>
  );
};
