import { ArrowRight } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="bg-promo text-promo-foreground py-3 text-center text-sm font-medium">
      <a href="#" className="inline-flex items-center gap-1 underline hover:opacity-90 transition-opacity">
        Earn up to $2,000 when you buy $50 in crypto
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default PromoBanner;
