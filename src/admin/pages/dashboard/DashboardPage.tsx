import { Hero } from "@/admin/components/Hero";
import { RecentProds } from "@/admin/components/RecentProds";
import { StatCard } from "@/admin/components/StatCard";
import { useProducts } from "@/hooks/useProducts";

export const DashboardPage = () => {
  const { products, loading } = useProducts();
  
  if (loading) return <p>Cargando...</p>;
  return (
    <div className="space-y-8 animate-fade-in">
      <Hero />
      <StatCard products={products} />
      <RecentProds products={products} />
    </div>
  );
};
