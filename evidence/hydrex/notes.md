# portal-hydrex.xyz (observed 2026-11-01, read-only)

- Not on MetaMask eth-phishing-detect (src/config.json) or ScamSniffer domains.json, both downloaded 2026-11-01 16:14 CET.
- Registered 2026-09-23 via Dynadot (abuse@dynadot.com, from registry RDAP); DNS + hosting Cloudflare.
- Page is a static mirror of the Hydrex app (title "Hydrex", logo, nav Trade/Accounts/Earn/Vote/Analytics) with a lure the official site does not use: "$HYDX Holder Crates are Live! Hold $HYDX through the snapshot, open your Crate, and claim your allocation." The official site and docs (docs.hydrex.fi) mention no "Crates".
- 65 absolute references in the HTML point at app-hydrexvote.today (favicon, token images, /accounts, /analytics). That domain IS on MetaMask's blocklist, so this looks like a re-deploy of an already-known phishing kit.
- Wallet-connect libraries (walletconnect, reown.com, window.ethereum); the tool's "secretForm" flag came from swap amount inputs, NOT a seed-phrase field. No seed-phrase request was seen. The "obfuscated JS (300 _0x identifiers)" signal is real but alone is not proof of a drainer; what we have verified is brand cloning + lure + link to a blocklisted sibling.
- Screenshot: portal-hydrex.xyz.jpg. Full tool record: finding-portal-hydrex.xyz.json.
- Other Hydrex lookalikes in the same scan were already on MetaMask's list (6 of 9 high/critical), so Hydrex users are an active phishing target.
- Ruled out as false positives: hydrex.blocktronics.xyz (third-party LP analytics tool, title "Hydrex · LP Profitability Scan"), hydrex-japan.info (unrelated Japanese supplement site).
