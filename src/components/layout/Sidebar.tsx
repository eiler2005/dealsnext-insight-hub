
import { NavLink } from "react-router-dom";
import { navItems } from "@/data/mockData";
import { cn } from "@/lib/utils";

const customNavItems = [
  {
    name: "О системе",
    path: "/about",
    icon: "layout-dashboard", // Choose 'layout-dashboard' as a placeholder icon
  },
  ...navItems,
];

import { LayoutDashboard } from "lucide-react";

const iconMap: Record<string, any> = {
  "layout-dashboard": LayoutDashboard,
  // добавьте сюда другие иконки если потребуется
};

const Sidebar = () => {
  return (
    <aside className="w-72 min-w-[220px] flex-shrink-0 bg-secondary text-secondary-foreground flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-700">
        <h1 className="text-xl font-bold text-primary-foreground">DealsNext Suite</h1>
      </div>
      {/* Главное меню теперь с "О системе" наверху */}
      <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto sidebar-scroll">
        {customNavItems.map((item) => {
          // Для нового "О системе"
          const Icon = typeof item.icon === "string" ? iconMap[item.icon] : item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-gray-700 hover:text-white"
                )
              }
            >
              {Icon && <Icon className="mr-3 h-5 w-5" />}
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
