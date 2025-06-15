
import { NavLink } from "react-router-dom";
import { navItems } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";

const customNavItems = [
  {
    name: "О системе",
    path: "/about",
    icon: "layout-dashboard",
    highlight: true,
  },
  ...navItems,
];

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
          const Icon = typeof item.icon === "string" ? iconMap[item.icon] : item.icon;
          const isAbout = item.path === "/about";
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors group",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-gray-700 hover:text-white",
                  isAbout
                    ? "border-2 border-blue-700 bg-blue-50 text-blue-900 shadow-sm font-bold animate-pulse-once"
                    : ""
                )
              }
              style={isAbout ? {
                boxShadow: "0 3px 14px -4px #3b82f6b3",
                borderWidth: "2px"
              } : undefined}
            >
              {Icon && (
                <Icon className={cn("mr-3 h-5 w-5", isAbout ? "text-blue-700" : "")} />
              )}
              <span>{item.name}</span>
              {isAbout && (
                <span className="ml-2 px-2 py-0.5 rounded bg-blue-100 text-[11px] text-blue-800 font-semibold animate-fade-in">New!</span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
