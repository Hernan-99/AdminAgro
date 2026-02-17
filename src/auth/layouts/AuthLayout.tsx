import { CheckCircle, Wheat } from "lucide-react";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100" />

      {/* Patrón suave */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#16a34a_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Blur glass layer */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Card principal */}
      <div className="relative w-full max-w-6xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 relative overflow-hidden hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-emerald-800/90 z-10"></div>

          <img
            src="https://static.photos/agriculture/640x800/42"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-20 h-full flex flex-col justify-between p-12 text-white">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Wheat className="w-7 h-7" />
                </div>
                <span className="text-2xl font-bold">Admin ProAgro</span>
              </div>

              <h1 className="text-4xl font-bold mb-4 leading-tight">
                Compra y alquila recursos agropecuarios
              </h1>

              <p className="text-green-100">
                Únete a la comunidad más grande del país.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Más de 10,000 productos",
                "Vendedores certificados",
                "Alquileres flexibles",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-sm text-green-200">© 2026 ProAgro</div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 w-full p-8 lg:p-14 flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
