
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "@/data/mockData";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard, DollarSign, Users, Package, BarChart2, LineChart, BrainCircuit, FileText, Book, User2, FileMinus
} from "lucide-react";

// Современные оттенки — цвета взяты ближе к референсу
const BG_LIGHT = "#f6f5fa"; // чуть теплый светлый фон
const NAV_ICON = "#192445"; // глубокий тёмно-синий для иконок (почти чёрный)
const NAV_ACTIVE_BG = "#eaf1fe"; // холодный светлый фон для активного
const NAV_ACTIVE_ICON = "#2166d2"; // синий акцент (без неона и слишком ярких тонов)
const NAV_TEXT = "#1a2340"; // основной текст sidebar
const NAV_ACTIVE_TEXT = "#122357"; // чуть темнее для активного пункта
const NAV_HOVER_BG = "#e7ebf5"; // светло-серый-холодный фон наведения

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
};

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside
      className="w-72 min-w-[220px] flex-shrink-0 flex flex-col border-r border-slate-200/80 shadow-sm rounded-tr-2xl rounded-br-lg"
      style={{
        background: BG_LIGHT,
      }}
    >
      <div className="h-20 flex items-center px-8 border-b border-slate-200/50 gap-3">
        <img
          src="/lovable-uploads/1c154341-dca0-4cc0-86a7-39b00e3ec66d.png"
          alt="Logo"
          className="w-10 h-10 rounded-xl shadow-md bg-white/90 object-contain"
          draggable={false}
        />
        <h1 className="text-xl font-extrabold tracking-tight font-sans select-none" style={{ color: NAV_TEXT }}>
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
                  // Основа стилей
                  "flex items-center gap-3 px-4 py-2.5 text-[15px] font-medium rounded-lg group transition-all duration-200",
                  isActive
                    ? "bg-[#eaf1fe] font-semibold border border-[#b3d1fb] text-[#122357] shadow transition-all duration-200"
                    : isAbout
                      ? "hover:bg-[#eaf1fe] hover:text-[#122357] text-[#122357] border border-transparent"
                      : "hover:bg-[#e7ebf5] hover:text-[#192445] text-[#192445]",
                  "outline-none focus-visible:ring-2 focus-visible:ring-[#b3d1fb]",
                )
              }
              style={({ isActive }) =>
                isActive
                  ? {
                    background: NAV_ACTIVE_BG,
                    color: NAV_ACTIVE_TEXT,
                    border: "1.5px solid #b3d1fb",
                    boxShadow: "0 2px 8px 0 rgba(50,75,130,0.04)",
                  }
                  : {
                    color: NAV_TEXT,
                  }
              }
              tabIndex={0}
            >
              {Icon && (
                <Icon
                  className="w-[20px] h-[20px] shrink-0 transition-colors duration-200"
                  style={{
                    color: location.pathname === item.path
                      ? NAV_ACTIVE_ICON
                      : NAV_ICON,
                  }}
                  strokeWidth={2.2}
                />
              )}
              <span className="whitespace-nowrap">{item.name}</span>
              {isAbout && (
                <span className="ml-2 px-2 py-0.5 rounded bg-[#d7e9fa] text-[#2166d2] text-[11px] font-semibold hidden md:inline-block animate-fade-in">
                  New!
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
      <div className="h-5" />
      {/* Нижняя тонкая подсветка */}
      <div className="w-full h-[4px] bg-gradient-to-r from-blue-100 via-blue-200 to-transparent opacity-80 rounded-bl-xl" />
    </aside>
  );
};

export default Sidebar;
