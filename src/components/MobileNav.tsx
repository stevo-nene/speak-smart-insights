
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BarChart, Menu, Mic, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <div className="flex flex-col gap-6 px-2 py-6">
          <NavLink 
            to="/" 
            className="flex items-center gap-2 px-2"
            onClick={() => setOpen(false)}
          >
            <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center">
              <Mic className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-xl font-semibold">SpeakSmart</span>
          </NavLink>
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )
                }
              >
                {item.icon}
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
