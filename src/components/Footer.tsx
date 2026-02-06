const footerLinks = {
  Company: ["About", "Careers", "Affiliates", "Blog", "Press", "Security"],
  Learn: ["Crypto basics", "Tips & tutorials", "Market updates", "What is Bitcoin?", "What is Ethereum?", "What is Solana?"],
  Individuals: ["Buy & sell", "Earn free crypto", "Wallet", "Card", "NFT", "Predictions"],
  Businesses: ["Institutional", "Commerce", "Prime", "Asset Hub", "Cloud"],
  Developers: ["Developer platform", "Base", "Node", "Wallet SDK", "Connect"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1440px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" r="512" fill="hsl(221, 100%, 50%)" />
                <path d="M512.147 692C413.028 692 332 611.513 332 512.147C332 412.78 413.028 332 512.147 332C601.544 332 676.147 396.705 690.29 480.098H870C854.856 299.05 702.054 156 512.147 156C316.249 156 156 316.249 156 512.147C156 708.044 316.249 868 512.147 868C702.054 868 854.856 725.243 870 544.195H690.29C676.147 627.295 601.544 692 512.147 692Z" fill="white" />
              </svg>
              <span className="text-sm text-muted-foreground">© 2025 Coinbase</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Preferences</a>
            </div>
          </div>

          <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
            <p>
              ¹ Stocks rollout has begun; coming soon to all U.S. users. All securities and investments are offered by Coinbase Capital Markets Corp, member FINRA/SIPC.
            </p>
            <p>
              ² Valid for new users who make a cryptocurrency purchase of at least $50 or more on Coinbase. Limited while supplies last. Average reward is approximately $52.
            </p>
            <p>
              ³ Access to prediction markets initially limited to a subset of U.S. users. Futures and cleared swaps trading in the US is offered by Coinbase Financial Markets, Inc.
            </p>
            <p>
              This webpage is for informational purposes only and does not constitute the provision of investment advice. All investments involve risk and the past performance of a security, or financial product does not guarantee future results or returns.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
