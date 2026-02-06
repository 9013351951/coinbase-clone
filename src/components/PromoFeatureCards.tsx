import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import derivativesImg from "@/assets/derivatives.png";
import stocksImg from "@/assets/stocks.png";
import predictionMarketsImg from "@/assets/prediction-markets.png";

const cards = [
  {
    image: predictionMarketsImg,
    title: "Make the Big Game your game",
    description: "From touchdowns to the MVP, every moment is now a prediction market on Coinbase.",
    cta: "Trade now",
    disclaimer: 'Listed futures and swaps are offered by Coinbase Financial Markets ("CFM"), a NFA member firm.',
  },
  {
    image: derivativesImg,
    title: "Trade more with less",
    description: "Unlock leverage with futures and perpetuals trading.³",
    cta: "Trade now",
  },
  {
    image: stocksImg,
    title: "Trade stocks around the clock",
    description: "From stocks to crypto, trade it all on Coinbase. Rolling out in the U.S. now.¹",
    cta: "Learn more",
  },
];

const PromoFeatureCards = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-24">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="aspect-[4/3] overflow-hidden">
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
              {card.disclaimer && (
                <p className="text-xs text-muted-foreground mt-3">{card.disclaimer}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PromoFeatureCards;
