import {
  Settings,
  ChevronLeft,
  ChevronRight,
  Package,
  CirclePlus,
  LayoutDashboard,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const menuItems = [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard, active: true },
    { label: "Productos", path: "/admin/products", icon: Package },
    { label: "Agregar Producto", path: "/admin/add", icon: CirclePlus },
    { label: "Mi Perfil", path: "/admin/settings", icon: Settings },
  ];

  return (
    <aside
      className={`bg-green-600 border-r border-gray-200 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-18" : "w-64"
      } flex flex-col`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-white">AgroAdmin</h1>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg text-white hover:bg-green-400 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "bg-green-500 text-white border-r-2 border-green-500"
                        : "text-white hover:bg-green-400 hover:text-green-900"
                    }`
                  }
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {!isCollapsed && (
        <div className="bg-green-700 p-4 mx-3 mb-4 rounded-xl bg-sidebar-accent">
          <p className="text-xs text-gray-800 text-sidebar-foreground/60">
            Versión 1.0
          </p>
          <p className="text-xs text-gray-800 text-sidebar-foreground/40 mt-1">
            © 2026 AgroAdmin
          </p>
        </div>
      )}
    </aside>
  );
};
