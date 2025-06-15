
import { NavLink } from "react-router-dom";
import { navItems } from "@/data/mockData";
import { cn } from "@/lib/utils";
import PreviewCard from "./PreviewCard";
import { LayoutGrid, Info, TrendingUp, Layers } from "lucide-react";

const overviewCards = [
  {
    icon: <LayoutGrid size={20} className="text-blue-500" />,
    title: "Продукты",
    color: "#2563eb",
  },
  {
    icon: <Info size={20} className="text-orange-500" />,
    title: "Сделки",
    color: "#f97316",
  },
  {
    icon: <TrendingUp size={20} className="text-blue-600" />,
    title: "Аналитика",
    color: "#2563eb",
  },
  {
    icon: <Layers size={20} className="text-green-600" />,
    title: "AI Growth",
    color: "#16a34a",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-secondary text-secondary-foreground flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-700">
        <h1 className="text-xl font-bold text-primary-foreground">DealsNext Suite</h1>
      </div>
      {/* Раздел "Обзор" */}
      <div className="px-4 pt-4 pb-2 select-none">
        <div className="text-xs font-bold uppercase text-gray-400 mb-2">Обзор</div>
        <div>
          {overviewCards.map((c) => (
            <PreviewCard key={c.title} {...c} />
          ))}
        </div>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto sidebar-scroll">
        {navItems.map((item) => (
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
            <item.icon className="mr-3 h-5 w-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
