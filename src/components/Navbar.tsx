import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["Cryptocurrencies", "Individuals", "Businesses", "Institutions", "Developers", "Company"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="512" cy="512" r="512" fill="hsl(221, 100%, 50%)" />
              <path d="M512.147 692C413.028 692 332 611.513 332 512.147C332 412.78 413.028 332 512.147 332C601.544 332 676.147 396.705 690.29 480.098H870C854.856 299.05 702.054 156 512.147 156C316.249 156 156 316.249 156 512.147C156 708.044 316.249 868 512.147 868C702.054 868 854.856 725.243 870 544.195H690.29C676.147 627.295 601.544 692 512.147 692Z" fill="white" />
            </svg>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="hidden md:flex text-sm font-medium">
            Sign in
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 text-sm font-semibold hidden md:flex">
            Sign up
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block px-3 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-lg"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full">Sign in</Button>
            <Button className="w-full bg-primary text-primary-foreground rounded-full">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
