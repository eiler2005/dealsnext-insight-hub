
import { NavLink } from "react-router-dom";
import { navItems } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { LayoutDashboard, DollarSign, Users, Package, BarChart2, LineChart, BrainCircuit, FileText, Book, User2, FileMinus } from "lucide-react";

const customNavItems = [
  {
    name: "О системе",
    path: "/about",
    icon: "layout-dashboard",
    highlight: true,
  },
  ...navItems,
];

// Сопоставление иконок для ключевых разделов — можно доработать под ваши нужды
const iconMap: Record<string, any> = {
  "layout-dashboard": LayoutDashboard,
  "dashboard": LayoutDashboard,
  "deal-profitability": DollarSign,
  "client-insights": Users,
  "product-effectiveness": Package,
  "sales-funnel": BarChart2,
  "ai-recommendations": BrainCircuit,
  "reports-export": FileText,
  "product-registry": Book,
  "client-registry": User2,
  "individual-conditions": FileMinus,
  // можно добавить свои
};

const Sidebar = () => {
  return (
    <aside className="w-72 min-w-[220px] flex-shrink-0 bg-gradient-to-b from-[#1a2440] via-[#212a45] to-[#233052] text-secondary-foreground flex flex-col border-r border-slate-200/80 shadow-sm rounded-tr-2xl rounded-br-lg">
      <div className="h-20 flex items-center px-8 border-b border-slate-200/50 gap-3">
        <img
          src="/lovable-uploads/1c154341-dca0-4cc0-86a7-39b00e3ec66d.png"
          alt="Logo"
          className="w-10 h-10 rounded-xl shadow-md bg-white/90 object-contain"
          draggable={false}
        />
        <h1 className="text-xl font-extrabold tracking-tight text-primary-foreground font-sans select-none">
          DealsNext Suite
        </h1>
      </div>
      <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto sidebar-scroll">
        {customNavItems.map((item) => {
          const Icon = typeof item.icon === "string" ? iconMap[item.icon] : item.icon;
          const isAbout = item.path === "/about";
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-2.5 text-[15px] font-medium rounded-md group transition-all",
                  isActive
                    ? isAbout
                      // Для "О системе" выделяем немного, но нежно 
                      ? "bg-blue-100 text-blue-800 font-semibold shadow-xs border border-blue-200"
                      : "bg-primary/90 text-white border border-primary/50"
                    : isAbout
                      ? "hover:bg-blue-50 hover:text-blue-900 text-blue-900 border border-transparent"
                      : "hover:bg-primary/10 hover:text-primary",
                  isAbout ? "transition-colors" : "transition-colors"
                )
              }
              style={isAbout
                ? { boxShadow: "0 2px 8px -2px #3b82f670" }
                : undefined
              }
              tabIndex={0}
            >
              {Icon && (
                <Icon
                  className={cn(
                    "w-[20px] h-[20px] shrink-0",
                    isAbout ? "text-blue-700" : "text-primary"
                  )}
                />
              )}
              <span>{item.name}</span>
              {isAbout && (
                <span className="ml-2 px-2 py-0.5 rounded bg-blue-50 text-blue-800 text-[11px] font-semibold hidden md:inline-block animate-fade-in">
                  New!
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
      <div className="h-5" />
      {/* Легкая подсветка нижней грани для современного вида */}
      <div className="w-full h-[4px] bg-gradient-to-r from-blue-400/80 via-primary/60 to-transparent opacity-60 rounded-bl-xl" />
    </aside>
  );
};

export default Sidebar;
