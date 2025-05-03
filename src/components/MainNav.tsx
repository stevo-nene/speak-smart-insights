
import { NavLink } from "react-router-dom";
import { BarChart, Mic, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const navItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: <Mic className="h-5 w-5" />,
    },
    {
      title: "Analysis",
      href: "/analysis",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      title: "Progress",
      href: "/progress",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              "text-sm font-medium flex items-center gap-2 transition-colors",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default MainNav;
