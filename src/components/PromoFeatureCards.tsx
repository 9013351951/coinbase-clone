import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import derivativesImg from "@/assets/derivatives.png";
import stocksImg from "@/assets/stocks.png";
import predictionMarketsImg from "@/assets/prediction-markets.png";

const cards = [
  {
    image: predictionMarketsImg,
    title: "Make the Big Game your game",
    description: "From touchdowns to the MVP, every moment is now a prediction market on Coinbase.",
    cta: "Trade now",
    disclaimer: 'Listed futures and swaps are offered by Coinbase Financial Markets ("CFM"), a NFA member firm. Trading prediction contracts involves substantial risk and may result in the loss of your entire investment.',
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
    disclaimer: "Image is for informational purposes. Prices shown may not reflect current price.",
  },
];

const PromoFeatureCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    const newPos = dir === "left" ? scrollPos - amount : scrollPos + amount;
    scrollRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    setScrollPos(newPos);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-24">
      {/* Carousel nav arrows */}
      <div className="flex justify-end gap-2 mb-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        onScroll={(e) => setScrollPos(e.currentTarget.scrollLeft)}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="min-w-[320px] md:min-w-[380px] flex-1 snap-start bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
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
                <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed">{card.disclaimer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoFeatureCards;
