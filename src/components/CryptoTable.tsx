import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type Crypto = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  logo: string;
};

const fallbackCryptos: Crypto[] = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC", price: 97234.18, change: 1.38, logo: "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH", price: 3456.92, change: 2.15, logo: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png" },
  { id: "tether", name: "Tether", symbol: "USDT", price: 1.00, change: 0.01, logo: "https://dynamic-assets.coinbase.com/41f6a93a3a222078c939115fc304a67c384886b7a9e6c15571b92ae63e0d1d361e09b8edefe78f3cda888a2f85cadc26c5ab9cd4a62a0787a0e5726eb5b3b8e8e/asset_icons/b2a609b8b1ffa773f8dae68e6ea5a1a27f76bbebfe2e85fc0c4b12a0b72acffd.png" },
  { id: "solana", name: "Solana", symbol: "SOL", price: 198.45, change: -0.82, logo: "https://dynamic-assets.coinbase.com/2eeef71aa78f6643caa156e22e395a8c25b6fe81ef6293e39b2eaa86692e41e1645c8b174b015d0e50160c3d5a172ccfe1bab82e32ac95e3e94e1e1ca7ea4f22/asset_icons/b113da251aebabb1ae4ed511e4c3bd1093ef0a67ef0123b3e63e8a82d0792d64.png" },
  { id: "binancecoin", name: "BNB", symbol: "BNB", price: 598.12, change: 0.45, logo: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png" },
  { id: "ripple", name: "XRP", symbol: "XRP", price: 2.34, change: 5.67, logo: "https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png" },
  { id: "dogecoin", name: "Dogecoin", symbol: "DOGE", price: 0.32, change: 3.45, logo: "https://dynamic-assets.coinbase.com/3803f30367bb3972e192cd3fdd2230cd37e6d468eab12575a859229b20f12ff9c994d2c86ccd7bf9bc258e9bd7e46393286da59c94d8b18aaf4d5ff2c22d5ff6/asset_icons/1597d628dd19b7f1e400a71002fae8365855b65a5e2264ff8831413c2fca962e.png" },
  { id: "usd-coin", name: "USDC", symbol: "USDC", price: 1.00, change: 0.00, logo: "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png" },
];

const formatPrice = (price: number) => {
  if (price >= 1) {
    return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `$${price.toFixed(4)}`;
};

const tabs = ["Tradable", "Top gainers", "New on Coinbase"];

const CryptoTable = () => {
  const [activeTab, setActiveTab] = useState("Tradable");
  const [cryptos, setCryptos] = useState<Crypto[]>(fallbackCryptos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,solana,binancecoin,ripple,dogecoin,usd-coin&order=market_cap_desc&sparkline=false&price_change_percentage=24h"
        );
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        const mapped: Crypto[] = data.map((coin: any) => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          price: coin.current_price,
          change: coin.price_change_percentage_24h ?? 0,
          logo: coin.image,
        }));
        setCryptos(mapped);
      } catch {
        // Keep fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Explore millions of tokens and stocks, all in one place.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One trusted account for trading everything—from stocks to Bitcoin.¹
          </p>
        </div>
        <a href="#" className="text-primary font-semibold text-sm hover:underline whitespace-nowrap">
          Get started →
        </a>
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
              <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground w-12">#</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Name</th>
              <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">Price</th>
              <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">Change</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto, i) => (
              <motion.tr
                key={crypto.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="border-b border-border hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <td className="py-4 px-4 text-sm text-muted-foreground">{i + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={crypto.logo}
                      alt={crypto.name}
                      className="w-8 h-8 rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-sm text-foreground">{crypto.name}</p>
                      <p className="text-xs text-muted-foreground">{crypto.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-right font-semibold text-sm text-foreground">
                  {formatPrice(crypto.price)}
                </td>
                <td className="py-4 px-4 text-right">
                  <span className={`inline-flex items-center gap-1 text-sm font-medium ${crypto.change >= 0 ? "text-price-up" : "text-price-down"}`}>
                    {crypto.change >= 0 ? (
                      <TrendingUp className="w-3.5 h-3.5" />
                    ) : (
                      <TrendingDown className="w-3.5 h-3.5" />
                    )}
                    {crypto.change === 0 ? "--" : `${Math.abs(crypto.change).toFixed(2)}%`}
                  </span>
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
