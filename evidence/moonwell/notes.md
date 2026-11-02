# moonwelldefi.pages.dev (observed 2026-11-01, read-only, page text/HTML as fetched by the scanner; one extra plain GET of the root HTML to inspect it)

- Not on MetaMask eth-phishing-detect or ScamSniffer domains.json (downloaded 2026-11-01).
- Cloudflare Pages subdomain (project name "moonwelldefi"), certificate seen in CT on 2026-10-08.
- Title is identical to the official site's ("Moonwell - Lending made simple"); page text is a copy of the official app UI (Discover / Markets / Vaults / Stake / Transfer / Card / Portfolio / Governance, "Get Started on Moonwell", "Try the new Smart Wallet ... Coinbase Wallet").
- The HTML shows kit characteristics: a script strips every `href` from every link and adds an `interact-button` class to every link and button, so all controls are handled by a single externally loaded script (aedef8f1-3faa-46eb-b6da-72b297a512eb.js, ~30,000 `_0x` obfuscated identifiers per the tool); an HTML comment reads "Please update files.zip if you not already did". See moonwelldefi.pages.dev-html-head.txt.
- No screenshot was taken (second run used --no-screenshots after Playwright hung on this brand's first run). A person can rebuild one with the tool before sending.
- We did not execute the script or connect a wallet, so we cannot say what it signs. What is verified: a copy of Moonwell's app on a non-Moonwell host with controls stripped and replaced by an obfuscated external script.
- Sanity checks on others: moonwell-frontend-claimsite.moonwell.workers.dev (flagged high by the tool) is the legacy Moonbeam/Moonriver site and sits in a `moonwell` workers.dev account with sibling workers `moonwell-frontend-salesite` and `moonwell-metrics-transaction-cache`, so it looks like the team's own staging: FALSE POSITIVE, do not report.
- rewards-moonwell.fi shows a Cloudflare "Suspected Phishing" interstitial, content not visible, on neither list: low confidence, not included.
