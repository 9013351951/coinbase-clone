import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import heroPhone from "@/assets/hero-phone.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Phone mockup with blue gradient background */}
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
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-tight tracking-tight text-foreground">
            Trade anything, anytime, anywhere.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Trade crypto, stocks,¹ and more on a platform you can trust.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Sign up and get up to $2,000 in crypto.²
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="satoshi@nakamoto.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base rounded-lg border-border bg-background flex-1"
            />
            <Button className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base font-semibold whitespace-nowrap">
              Sign up
            </Button>
          </div>
        </motion.div>
      </div>

      <p className="mt-10 text-xs text-muted-foreground max-w-4xl">
        Securities offered by Coinbase Capital Markets (member SIPC, FINRA). Listed futures and swaps are offered via Coinbase Financial Markets ("CFM"), a NFA member firm. Crypto offered by Coinbase Inc. Stocks rollout has begun; coming soon to all U.S. users.
      </p>
    </section>
  );
};

export default HeroSection;
