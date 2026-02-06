import { motion } from "framer-motion";
import { Shield, Zap, Smartphone, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Your assets are protected by industry-leading security protocols and insurance coverage.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our high-performance matching engine.",
  },
  {
    icon: Smartphone,
    title: "Trade Anywhere",
    description: "Access your portfolio and trade on the go with our mobile app for iOS and Android.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Available in 100+ countries with support for hundreds of cryptocurrencies.",
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight text-center mb-4">
          The most trusted crypto platform
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Here are a few reasons why you should choose Coinbase.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
