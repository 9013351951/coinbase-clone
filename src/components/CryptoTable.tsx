import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type Crypto = {
  name: string;
  symbol: string;
  price: string;
  change: number;
  icon: string;
};

const cryptos: Crypto[] = [
  { name: "Bitcoin", symbol: "BTC", price: "$97,234.18", change: 1.38, icon: "₿" },
  { name: "Ethereum", symbol: "ETH", price: "$3,456.92", change: 2.15, icon: "Ξ" },
  { name: "Solana", symbol: "SOL", price: "$198.45", change: -0.82, icon: "◎" },
  { name: "XRP", symbol: "XRP", price: "$2.34", change: 5.67, icon: "✕" },
  { name: "Cardano", symbol: "ADA", price: "$0.98", change: -1.23, icon: "₳" },
  { name: "Dogecoin", symbol: "DOGE", price: "$0.32", change: 3.45, icon: "Ð" },
];

const tabs = ["Tradable", "Top gainers", "New on Coinbase"];

const CryptoTable = () => {
  const [activeTab, setActiveTab] = useState("Tradable");

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          Explore millions of tokens and stocks, all in one place.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          One trusted account for trading everything—from stocks to Bitcoin.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "bg-foreground text-background"
                : "bg-secondary text-foreground hover:bg-accent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">#</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Name</th>
              <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">Price</th>
              <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">Change</th>
              <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">Trade</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto, i) => (
              <motion.tr
                key={crypto.symbol}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-border hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <td className="py-4 px-4 text-sm text-muted-foreground">{i + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {crypto.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{crypto.name}</p>
                      <p className="text-xs text-muted-foreground">{crypto.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-right font-semibold text-sm text-foreground">
                  {crypto.price}
                </td>
                <td className="py-4 px-4 text-right">
                  <span className={`inline-flex items-center gap-1 text-sm font-medium ${crypto.change >= 0 ? "text-price-up" : "text-price-down"}`}>
                    {crypto.change >= 0 ? (
                      <TrendingUp className="w-3.5 h-3.5" />
                    ) : (
                      <TrendingDown className="w-3.5 h-3.5" />
                    )}
                    {Math.abs(crypto.change)}%
                  </span>
                </td>
                <td className="py-4 px-4 text-right hidden sm:table-cell">
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-xs px-4">
                    Trade
                  </Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="rounded-full px-8 font-medium">
          View more assets
        </Button>
      </div>
    </section>
  );
};

export default CryptoTable;
