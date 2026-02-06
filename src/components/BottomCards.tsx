import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import earnCryptoImg from "@/assets/earn-crypto.webp";
import learnBasicsImg from "@/assets/learn-basics.png";

const cards = [
  {
    image: earnCryptoImg,
    title: "Explore more crypto",
    description: "Browse real-time prices, charts, and daily movers for thousands of cryptocurrencies, all in one place.",
    cta: "Explore more crypto",
  },
  {
    image: learnBasicsImg,
    title: "Learn the basics",
    description: "Explore beginner guides, practical tutorials, and market updates on Bitcoin, Ethereum and more.",
    cta: "Learn the basics",
  },
];

const BottomCards = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-24">
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
              <a href="#" className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline">
                {card.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BottomCards;
