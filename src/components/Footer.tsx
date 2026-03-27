const footerLinks = {
  Company: ["About", "Careers", "Affiliates", "Blog", "Press", "Security", "Sustainability"],
  Learn: [
    "Crypto basics", "Tips & tutorials", "Crypto glossary", "Market updates",
    "What is Bitcoin?", "What is crypto?", "What is a blockchain?",
    "How to set up a crypto wallet?", "How to send crypto?", "Taxes",
    "Coinbase Bytes newsletter",
  ],
  Individuals: ["Buy & sell", "Earn free crypto", "Wallet", "Card", "NFT", "Predictions", "Staking", "Verified Pools"],
  Businesses: ["Institutional", "Commerce", "Prime", "Asset Hub", "Cloud", "International Exchange"],
  Developers: ["Developer platform", "Base", "Node", "Wallet SDK", "Connect", "Onchain Kit", "International Exchange API", "Prime API", "Derivatives API"],
  "Asset prices": [
    "Bitcoin price", "Ethereum price", "Solana price", "XRP price",
    "Dogecoin price", "Cardano price", "Shiba Inu price", "Pepe price",
    "Apple price", "Tesla price", "Microsoft price", "Amazon price",
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-12">
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-[13px] text-foreground mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors leading-relaxed">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons — X, LinkedIn, Instagram, TikTok */}
        <div className="flex gap-4 mb-10">
          {/* X (Twitter) */}
          <a href="#" className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>

        {/* Copyright + legal links */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-[13px] text-muted-foreground mb-10">
          <span>© 2026 Coinbase</span>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
        </div>

        {/* Legal disclaimers */}
        <div className="space-y-4 text-[11px] text-muted-foreground leading-[1.6]">
          <p>
            ¹ Stocks rollout has begun; coming soon to all U.S. users. All securities and investments are offered by Coinbase Capital Markets Corp, member FINRA/SIPC. Securities services offered by Coinbase Capital Markets Corp are separate from digital asset services provided by Coinbase Inc., and any affiliates. SIPC does not apply to digital assets or cash held in your Coinbase Inc. account. Additional information about your broker, Coinbase Capital Markets Corp, can be found on FINRA's BrokerCheck. Execution, clearing and custody of all securities are provided by APEX Clearing Corporation.
          </p>
          <p>
            Cryptocurrency services offered by Coinbase Inc. (NMLS# 1163082). Coinbase Inc. is licensed to engage in virtual currency business activity by the New York Department of Financial Services. DEX trading is offered by Coinbase Bermuda Technologies Ltd.
          </p>
          <p>
            ² Valid for new users who make a cryptocurrency purchase of at least $50 or more on Coinbase. Limited while supplies last or Coinbase revokes this incentive at its sole discretion. Coinbase reserves the right to change the terms, for any reason. Void where prohibited or if Coinbase determines that the customer is not eligible. Average reward is approximately $52. See Full Terms.
          </p>
          <p>
            ³ Access to prediction markets initially limited to a subset of U.S. users, with rollout to all U.S. users coming soon. Futures and cleared swaps trading in the US is offered by Coinbase Financial Markets, Inc. ("CFM") a registered futures commission merchant ("FCM") with the Commodity Futures Trading Commission and a member of the National Futures Association ("NFA"). Leverage in futures trading can work for you or against you. The risk of loss using leverage can exceed your initial investment amount.
          </p>
          <p>
            This webpage is for informational purposes only and does not constitute the provision of investment advice. Products and features may not be available in all regions. The customer assumes full responsibility for its trading activity and should consult its advisors for its specific situation. All investments involve risk and the past performance of a security, or financial product does not guarantee future results or returns. There is always the potential of losing money when you invest in securities, or other financial products.
          </p>
          <p>
            All ticker names and company names are trademarks of their respective holders. Any reference on this page does not imply any affiliation with or endorsement by a third party.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
