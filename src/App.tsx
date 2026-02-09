import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CoinbaseLoader from "@/components/CoinbaseLoader";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RouteTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    const isAuthRoute = (p: string) => p === "/signin" || p === "/signup";
    const wasAuth = isAuthRoute(prevPath);
    const isAuth = isAuthRoute(location.pathname);

    // Show loader when transitioning between homepage and auth pages
    if ((wasAuth !== isAuth) && prevPath !== location.pathname) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 800);
      setPrevPath(location.pathname);
      return () => clearTimeout(timer);
    }
    setPrevPath(location.pathname);
  }, [location.pathname]);

  if (loading) return <CoinbaseLoader />;
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouteTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
