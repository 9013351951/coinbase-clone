import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-[hsl(0,0%,3%)] flex flex-col">
      {/* Header with logo */}
      <header className="px-8 py-6">
        <Link to="/">
          <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M512.148 692C413.229 692 332.577 611.348 332.577 512.429C332.577 413.51 413.229 332.858 512.148 332.858C601.024 332.858 674.876 398.762 690.004 484.429H870.29C854.162 300.762 700.452 156 512.148 156C316.243 156 156.577 315.667 156.577 512.429C156.577 709.191 316.243 868.858 512.148 868.858C700.452 868.858 854.162 724.096 870.29 540.429H690.004C674.876 626.096 601.024 692 512.148 692Z"
              fill="white"
            />
          </svg>
        </Link>
      </header>

      {/* Center card */}
      <main className="flex-1 flex items-start justify-center pt-4 px-4">
        <div className="w-full max-w-[420px] border border-[hsl(0,0%,18%)] rounded-xl bg-[hsl(0,0%,8%)] p-8 sm:p-10">
          {children}
        </div>
      </main>

      {/* Cookie banner */}
      <footer className="border-t border-[hsl(0,0%,15%)] bg-[hsl(0,0%,5%)] px-6 py-4 flex items-center justify-between gap-4 text-sm text-[hsl(0,0%,60%)]">
        <p>
          We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our{" "}
          <a href="#" className="text-primary hover:underline">Cookie Policy</a>.
        </p>
        <button className="shrink-0 bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
          Dismiss
        </button>
      </footer>
    </div>
  );
};

export default AuthLayout;
