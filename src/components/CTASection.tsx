import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground tracking-tight">
            Start trading today
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-lg mx-auto">
            Join the millions of people who trust Coinbase. Sign up today and get up to $2,000 in crypto.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-background text-foreground hover:bg-background/90 rounded-full px-10 text-base font-semibold h-12"
          >
            Get started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
