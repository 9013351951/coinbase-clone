import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import heroPhone from "@/assets/hero-phone.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-14 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-[520px]">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-3xl -m-4" />
            <img
              src={heroPhone}
              alt="Coinbase trading app showing portfolio with crypto, stocks, and derivatives"
              className="relative w-full rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 max-w-xl"
        >
          <h1 className="text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-black leading-[1.05] tracking-[-0.02em] text-foreground">
            Trade anything, anytime, anywhere.
          </h1>
          <p className="mt-6 text-[18px] text-muted-foreground leading-relaxed">
            Trade crypto, stocks,¹ and more on a platform you can trust.
          </p>
          <p className="mt-2 text-[16px] text-muted-foreground">
            Sign up and get up to $2,000 in crypto.²
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="satoshi@nakamoto.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-[15px] rounded-lg border-border bg-background flex-1"
            />
            <Button
              className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-[15px] font-semibold whitespace-nowrap"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </Button>
          </div>
        </motion.div>
      </div>

      <p className="mt-12 text-[11px] text-muted-foreground max-w-4xl leading-relaxed">
        Securities offered by Coinbase Capital Markets (member SIPC, FINRA). Listed futures and swaps are offered via Coinbase Financial Markets ("CFM"), a NFA member firm. Crypto offered by Coinbase Inc. Stocks rollout has begun; coming soon to all U.S. users.
      </p>
    </section>
  );
};

export default HeroSection;
