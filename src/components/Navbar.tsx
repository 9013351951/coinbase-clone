import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

type DropdownItem = { label: string; desc?: string };

const navDropdowns: Record<string, DropdownItem[]> = {
  Cryptocurrencies: [
    { label: "Prices", desc: "View real-time crypto prices" },
    { label: "Learn", desc: "Explore crypto basics" },
    { label: "Earn", desc: "Earn free crypto" },
    { label: "Roadmap", desc: "See our product roadmap" },
    { label: "Bitcoin", desc: "Learn about Bitcoin" },
    { label: "Ethereum", desc: "Learn about Ethereum" },
  ],
  Individuals: [
    { label: "Buy & Sell", desc: "Buy and sell crypto instantly" },
    { label: "Earn", desc: "Earn rewards on crypto" },
    { label: "Card", desc: "Spend crypto with a card" },
    { label: "Wallet", desc: "Your keys, your crypto" },
    { label: "NFT", desc: "Explore digital collectibles" },
    { label: "Predictions", desc: "Trade prediction markets" },
  ],
  Businesses: [
    { label: "Commerce", desc: "Accept crypto payments" },
    { label: "Asset Hub", desc: "Issue & manage assets" },
    { label: "Cloud", desc: "Build with blockchain APIs" },
    { label: "Prime", desc: "Trading & custody for institutions" },
  ],
  Institutions: [
    { label: "Prime", desc: "Advanced trading & custody" },
    { label: "Asset Management", desc: "Manage digital asset portfolios" },
    { label: "Custody", desc: "Secure cold storage" },
    { label: "Staking", desc: "Earn rewards via staking" },
  ],
  Developers: [
    { label: "Developer Platform", desc: "Build on Coinbase" },
    { label: "Base", desc: "Build on Base L2" },
    { label: "Node", desc: "Access blockchain data" },
    { label: "Wallet SDK", desc: "Embed wallet functionality" },
    { label: "Connect", desc: "Onboard users with sign-in" },
  ],
  Company: [
    { label: "About", desc: "Learn about Coinbase" },
    { label: "Careers", desc: "Join our team" },
    { label: "Blog", desc: "Read the latest news" },
    { label: "Press", desc: "Press releases & media" },
    { label: "Security", desc: "How we protect you" },
  ],
};

const navLinks = Object.keys(navDropdowns);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleMouseEnter = (link: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(link);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo + Links */}
        <div className="flex items-center gap-8" ref={dropdownRef}>
          <Link to="/" className="flex items-center">
            <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="512" cy="512" r="512" fill="hsl(221, 100%, 50%)" />
              <path d="M512.147 692C413.028 692 332 611.513 332 512.147C332 412.78 413.028 332 512.147 332C601.544 332 676.147 396.705 690.29 480.098H870C854.856 299.05 702.054 156 512.147 156C316.249 156 156 316.249 156 512.147C156 708.044 316.249 868 512.147 868C702.054 868 854.856 725.243 870 544.195H690.29C676.147 627.295 601.544 692 512.147 692Z" fill="white" />
            </svg>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-3 py-2 text-[14px] font-medium transition-colors rounded-lg ${
                    activeDropdown === link ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link}
                </button>

                {activeDropdown === link && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div className="w-72 bg-card border border-border rounded-xl shadow-lg p-2 z-50">
                      {navDropdowns[link].map((item) => (
                        <a
                          key={item.label}
                          href="#"
                          className="block px-3 py-2.5 rounded-lg hover:bg-accent transition-colors"
                        >
                          <p className="text-sm font-medium text-foreground">{item.label}</p>
                          {item.desc && (
                            <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Globe className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="hidden md:flex text-sm font-medium rounded-full px-5 h-9"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </Button>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 text-sm font-semibold hidden md:flex h-9"
            onClick={() => navigate("/signup")}
          >
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
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === link ? null : link)}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-lg"
              >
                {link}
              </button>
              {mobileExpanded === link && (
                <div className="pl-4 pb-2 space-y-0.5">
                  {navDropdowns[link].map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full rounded-full" onClick={() => { navigate("/signin"); setMobileOpen(false); }}>Sign in</Button>
            <Button className="w-full bg-primary text-primary-foreground rounded-full" onClick={() => { navigate("/signup"); setMobileOpen(false); }}>Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
