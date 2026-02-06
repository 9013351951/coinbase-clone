import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import coinbaseOneImg from "@/assets/coinbase-one.png";
import baseAppImg from "@/assets/base-app.png";
import primeImg from "@/assets/prime.png";

const products = [
  {
    badge: "COINBASE ONE",
    image: coinbaseOneImg,
    title: "Zero trading fees, more rewards.",
    description: "Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.",
    cta: "Claim free trial",
  },
  {
    badge: "BASE APP",
    image: baseAppImg,
    title: "Countless ways to earn crypto with the Base App.",
    description: "An everything app to trade, create, discover, and chat, all in one place.",
    cta: "Learn more",
  },
  {
    badge: "PRIME",
    image: primeImg,
    title: "The financial institution for a digital asset future.",
    description: "Coinbase Prime is the first choice for sophisticated investors and institutions that want to invest in digital assets.",
    cta: "Learn more",
  },
];

const ProductShowcase = () => {
  return (
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 space-y-16">
        {products.map((product, i) => (
          <motion.div
            key={product.badge}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
          >
            <div className="flex-1">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-lg mx-auto rounded-2xl"
              />
            </div>
            <div className="flex-1 max-w-xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <svg width="16" height="16" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="512" cy="512" r="512" fill="hsl(221, 100%, 50%)" />
                  <path d="M512.147 692C413.028 692 332 611.513 332 512.147C332 412.78 413.028 332 512.147 332C601.544 332 676.147 396.705 690.29 480.098H870C854.856 299.05 702.054 156 512.147 156C316.249 156 156 316.249 156 512.147C156 708.044 316.249 868 512.147 868C702.054 868 854.856 725.243 870 544.195H690.29C676.147 627.295 601.544 692 512.147 692Z" fill="white" />
                </svg>
                <span className="text-xs font-bold tracking-widest text-muted-foreground">{product.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                {product.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              <a href="#" className="mt-6 inline-flex items-center gap-1 text-primary font-semibold hover:underline">
                {product.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
