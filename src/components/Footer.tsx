const footerLinks = {
  Company: ["About", "Careers", "Affiliates", "Blog", "Press", "Security", "Sustainability"],
  Learn: ["Crypto basics", "Tips & tutorials", "Market updates", "What is Bitcoin?", "What is Ethereum?", "What is Solana?", "What is crypto?", "What is a blockchain?"],
  Individuals: ["Buy & sell", "Earn free crypto", "Wallet", "Card", "NFT", "Predictions", "Staking"],
  Businesses: ["Institutional", "Commerce", "Prime", "Asset Hub", "Cloud", "International Exchange"],
  Developers: ["Developer platform", "Base", "Node", "Wallet SDK", "Connect", "Onchain Kit"],
  Support: ["Help center", "Contact us", "Create account", "ID verification", "Account information", "Supported crypto"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1440px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
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
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Preferences</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Do Not Sell My Info</a>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 mb-8">
            {["twitter", "facebook", "instagram", "linkedin", "youtube"].map((social) => (
              <a key={social} href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-xs text-muted-foreground font-bold uppercase">{social[0]}</span>
              </a>
            ))}
          </div>

          <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
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
      </div>
    </footer>
  );
};

export default Footer;
