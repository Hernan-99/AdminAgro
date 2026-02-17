import { Toast } from "@/auth/components/Toast";
import { useAuth } from "@/context/AuthContext";
import { userMock } from "@/mock/user.mock";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState(userMock.email);
  const [password, setPassword] = useState("123456");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        navigate("/admin");
      }, 1500);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Bienvenido de vuelta
        </h2>
        <p className="text-gray-600">Ingresa tus credenciales</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2"
        >
          <LogIn size={18} />
          Iniciar sesión
        </button>
      </form>

      <div className="mt-6 text-center text-gray-600">
        ¿No tienes cuenta?{" "}
        <Link to="/auth/register" className="text-green-600 font-semibold">
          Regístrate
        </Link>
      </div>

      <Toast message="¡Login exitoso!" show={showToast} />
    </div>
  );
};
