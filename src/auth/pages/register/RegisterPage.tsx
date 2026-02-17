import { Toast } from "@/auth/components/Toast";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const passwordStrength = () => {
    if (password.length >= 10 && /[^a-zA-Z0-9]/.test(password)) return 3;
    if (password.length >= 8 && /[0-9]/.test(password)) return 2;
    if (password.length > 0) return 1;
    return 0;
  };

  const strength = passwordStrength();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
  return (
    <>
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Crear cuenta</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full px-4 py-3 border rounded-xl"
            required
          />

          <input
            type="email"
            placeholder="Correo"
            className="w-full px-4 py-3 border rounded-xl"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Password Strength */}
          <div className="flex gap-1">
            {[1, 2, 3].map((level) => (
              <div
                key={level}
                className={`h-1 flex-1 rounded-full ${
                  strength >= level
                    ? strength === 1
                      ? "bg-red-400"
                      : strength === 2
                        ? "bg-yellow-400"
                        : "bg-green-500"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl flex items-center justify-center gap-2"
          >
            <UserPlus size={18} />
            Crear cuenta
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <Link to="/auth/login" className="text-green-600 font-semibold">
            Inicia sesión
          </Link>
        </div>

        <Toast message="¡Cuenta creada!" show={showToast} />
      </div>
    </>
  );
};
