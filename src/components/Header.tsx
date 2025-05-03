
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart, Mic, User } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center">
            <Mic className="h-4 w-4 text-white" />
          </div>
          <span className="font-display text-xl font-semibold">SpeakSmart</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            to="/analysis"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Analysis
          </Link>
          <Link
            to="/progress"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Progress
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <User className="h-4 w-4" />
            <span className="sr-only">User</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
