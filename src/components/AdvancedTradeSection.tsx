import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import advancedTradeImg from "@/assets/advanced-trade.png";

const AdvancedTradeSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src={advancedTradeImg}
            alt="Advanced Trade mobile interface"
            className="w-full max-w-md mx-auto rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Powerful tools, designed for the advanced trader.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
          </p>
          <a href="#" className="mt-6 inline-flex items-center gap-1 text-primary font-semibold hover:underline">
            Start trading
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedTradeSection;
