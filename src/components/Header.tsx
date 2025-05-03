
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, User } from "lucide-react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-30">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center">
              <Mic className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-xl font-semibold">SpeakSmart</span>
          </Link>
        </div>
        
        <MainNav />
        
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="h-4 w-4" />
                <span className="sr-only">User</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
