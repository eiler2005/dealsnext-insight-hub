
import { NavLink } from "react-router-dom";
import { navItems } from "@/data/mockData";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-secondary text-secondary-foreground flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-700">
        <h1 className="text-xl font-bold text-primary-foreground">DealsNext Suite</h1>
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
