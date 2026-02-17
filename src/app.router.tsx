import { createBrowserRouter, Navigate } from "react-router-dom";
import { AdminLayout } from "./admin/layouts/AdminLayout";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { ProductsPage } from "./admin/pages/products/ProductsPage";
import { AddProduct } from "./admin/pages/agregar/AddProduct";
import { AuthLayout } from "./auth/layouts/AuthLayout";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { ProtectedRoute } from "./protected.route";
import { ProfilePage } from "./admin/pages/profile/ProfilePage";

export const appRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="/auth/login" /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },

  // Dashboard
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: "products", element: <ProductsPage /> },
          { path: "add", element: <AddProduct /> },
          { path: "settings", element: <ProfilePage /> },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/auth/login" />,
  },
]);
