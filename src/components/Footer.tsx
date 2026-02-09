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

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Logo + copyright + links row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <svg width="22" height="22" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" r="512" fill="hsl(221, 100%, 50%)" />
                <path d="M512.147 692C413.028 692 332 611.513 332 512.147C332 412.78 413.028 332 512.147 332C601.544 332 676.147 396.705 690.29 480.098H870C854.856 299.05 702.054 156 512.147 156C316.249 156 156 316.249 156 512.147C156 708.044 316.249 868 512.147 868C702.054 868 854.856 725.243 870 544.195H690.29C676.147 627.295 601.544 692 512.147 692Z" fill="white" />
              </svg>
              <span className="text-[13px] text-muted-foreground">© 2025 Coinbase</span>
            </div>
            <div className="flex flex-wrap gap-5">
              {["Privacy", "Terms", "Cookie Preferences", "Do Not Sell My Info"].map((link) => (
                <a key={link} href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 mb-10">
            {[
              { name: "twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { name: "facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              { name: "instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { name: "linkedin", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              { name: "youtube", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
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
      </div>
    </footer>
  );
};

export default Footer;
