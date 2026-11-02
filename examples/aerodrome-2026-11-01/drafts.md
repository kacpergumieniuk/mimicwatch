# Draft reports: Aerodrome (2026-11-01)

**DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.**


## aerodrome-duz.pages.dev (critical, phishing-likely, 100/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-duz.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://aerodrome-duz[.]pages[.]dev/ (172.66.47.108, 172.66.44.148) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-04 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Already on public wallet blocklist(s): scamsniffer
- Page title resembles the official title (100%)
- Brand named on the page (10x), including the title
- Wallet-connect prompt/library: Connect Wallet
- Drainer-style JS: SEAPORT
- Lure text: reward
- Resolves to 172.66.47.108, 172.66.44.148
- Page title: "Aerodrome Finance"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-duz.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-duz.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Drainer-style JS: SEAPORT; Wallet-connect prompt/library: Connect Wallet; Page title resembles the official title (100%); Brand named on the page (10x), including the title.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Drainer-style JS: SEAPORT; Wallet-connect prompt/library: Connect Wallet; Page title resembles the official title (100%); Brand named on the page (10x), including the title.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-duz.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Drainer-style JS: SEAPORT; Wallet-connect prompt/library: Connect Wallet; Page title resembles the official title (100%); Brand named on the page (10x), including the title.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Drainer-style JS: SEAPORT; Wallet-connect prompt/library: Connect Wallet; Page title resembles the official title (100%); Brand named on the page (10x), including the title.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome-duz.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Drainer-style JS: SEAPORT; Wallet-connect prompt/library: Connect Wallet; Page title resembles the official title (100%); Brand named on the page (10x), including the title. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Drainer-style JS: SEAPORT; Wallet-connect prompt/library: Connect Wallet; Page title resembles the official title (100%); Brand named on the page (10x), including the title.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome-duz.pages.dev
yarn add:blocklist aerodrome-duz.pages.dev

PR title: Block aerodrome-duz.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Drainer-style JS: SEAPORT; Wallet-connect prompt/library: Connect Wallet; Page title resembles the official title (100%); Brand named on the page (10x), including the title.
```


## aerodrom.finance (critical, phishing-likely, 95/100)

### Registrar abuse report to Hosting Concepts B.V. d/b/a Registrar.eu

**File at:** abuse@registrar.eu  
**Subject:** Phishing / brand impersonation: aerodrom.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Hosting Concepts B.V. d/b/a Registrar.eu abuse team,

The domain aerodrom[.]finance (registered with you on 2024-11-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aercdrorne[.]finance/dash[.]html
- Typosquat (omission) of the official domain
- One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): scamsniffer
- Page title resembles the official title (100%)
- Page text overlaps the official site (79% shingles)
- Brand named on the page (6x), including the title
- Resolves to 188.114.96.3, 188.114.97.3
- Page title: "Аеrоdrоmе Fіnаnсе"

We are not affiliated with the operator of aerodrom[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 1647, abuse phone +31.104482297

### Hosting abuse report to MNT-CLOUDFLARE

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrom.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello MNT-CLOUDFLARE,

hxxps://aercdrorne[.]finance/dash[.]html (188.114.96.3, 188.114.97.3) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (omission) of the official domain
- One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): scamsniffer
- Page title resembles the official title (100%)
- Page text overlaps the official site (79% shingles)
- Brand named on the page (6x), including the title
- Resolves to 188.114.96.3, 188.114.97.3
- Page title: "Аеrоdrоmе Fіnаnсе"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faercdrorne.finance%2Fdash.html

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aercdrorne.finance/dash.html`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Page text overlaps the official site (79% shingles); Page title resembles the official title (100%); Brand named on the page (6x), including the title; Already on public wallet blocklist(s): scamsniffer.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Page text overlaps the official site (79% shingles); Page title resembles the official title (100%); Brand named on the page (6x), including the title; Already on public wallet blocklist(s): scamsniffer.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aercdrorne.finance/dash.html`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Page text overlaps the official site (79% shingles); Page title resembles the official title (100%); Brand named on the page (6x), including the title; Already on public wallet blocklist(s): scamsniffer.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Page text overlaps the official site (79% shingles); Page title resembles the official title (100%); Brand named on the page (6x), including the title; Already on public wallet blocklist(s): scamsniffer.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aercdrorne.finance/dash.html`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Page text overlaps the official site (79% shingles); Page title resembles the official title (100%); Brand named on the page (6x), including the title; Already on public wallet blocklist(s): scamsniffer. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Page text overlaps the official site (79% shingles); Page title resembles the official title (100%); Brand named on the page (6x), including the title; Already on public wallet blocklist(s): scamsniffer.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrom.finance
yarn add:blocklist aerodrom.finance

PR title: Block aerodrom.finance (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Page text overlaps the official site (79% shingles); Page title resembles the official title (100%); Brand named on the page (6x), including the title; Already on public wallet blocklist(s): scamsniffer.
```


## aerodrome.financial (critical, phishing-likely, 95/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerodrome.financial impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerodrome[.]financial (registered with you on 2026-04-18) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerodrome[.]financial/
- Hostname contains the brand name
- TLS certificate issued 2026-10-08 (Certificate Transparency)
- Added by hand (--hosts: reported by the client or found by an earlier scan)
- Same favicon as the official site
- Page title resembles the official title (80%)
- Page text overlaps the official site (82% shingles)
- Brand named on the page (6x), including the title
- Wallet-connect prompt/library: connectwallet, walletconnect, Web3Modal
- Drainer-style JS: setApprovalForAll, drainer
- Lure text: rewards
- Resolves to 172.67.199.79, 104.21.21.150
- Page title: "Aerodrome Finance | Liquidity Hub on Base Network"
- Screenshot: shots/aerodrome.financial.jpg (attach)

We are not affiliated with the operator of aerodrome[.]financial. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome.financial (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://aerodrome[.]financial/ (172.67.199.79, 104.21.21.150) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-08 (Certificate Transparency)
- Added by hand (--hosts: reported by the client or found by an earlier scan)
- Same favicon as the official site
- Page title resembles the official title (80%)
- Page text overlaps the official site (82% shingles)
- Brand named on the page (6x), including the title
- Wallet-connect prompt/library: connectwallet, walletconnect, Web3Modal
- Drainer-style JS: setApprovalForAll, drainer
- Lure text: rewards
- Resolves to 172.67.199.79, 104.21.21.150
- Page title: "Aerodrome Finance | Liquidity Hub on Base Network"
- Screenshot: shots/aerodrome.financial.jpg (attach)

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome.financial%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome.financial/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Same favicon as the official site; Page text overlaps the official site (82% shingles); Drainer-style JS: setApprovalForAll, drainer; Wallet-connect prompt/library: connectwallet, walletconnect, Web3Modal.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Same favicon as the official site; Page text overlaps the official site (82% shingles); Drainer-style JS: setApprovalForAll, drainer; Wallet-connect prompt/library: connectwallet, walletconnect, Web3Modal.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome.financial/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Same favicon as the official site; Page text overlaps the official site (82% shingles); Drainer-style JS: setApprovalForAll, drainer; Wallet-connect prompt/library: connectwallet, walletconnect, Web3Modal.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Same favicon as the official site; Page text overlaps the official site (82% shingles); Drainer-style JS: setApprovalForAll, drainer; Wallet-connect prompt/library: connectwallet, walletconnect, Web3Modal.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome.financial/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Same favicon as the official site; Page text overlaps the official site (82% shingles); Drainer-style JS: setApprovalForAll, drainer; Wallet-connect prompt/library: connectwallet, walletconnect, Web3Modal. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Same favicon as the official site; Page text overlaps the official site (82% shingles); Drainer-style JS: setApprovalForAll, drainer; Wallet-connect prompt/library: connectwallet, walletconnect, Web3Modal.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome.financial
yarn add:blocklist aerodrome.financial

PR title: Block aerodrome.financial (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Same favicon as the official site; Page text overlaps the official site (82% shingles); Drainer-style JS: setApprovalForAll, drainer; Wallet-connect prompt/library: connectwallet, walletconnect, Web3Modal.
```

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrome.financial - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrome.financial
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-08 (Certificate Transparency)
- Added by hand (--hosts: reported by the client or found by an earlier scan)
- Same favicon as the official site
- Page title resembles the official title (80%)
- Page text overlaps the official site (82% shingles)
- Brand named on the page (6x), including the title
- Wallet-connect prompt/library: connectwallet, walletconnect, Web3Modal
- Drainer-style JS: setApprovalForAll, drainer
- Lure text: rewards
- Resolves to 172.67.199.79, 104.21.21.150
- Page title: "Aerodrome Finance | Liquidity Hub on Base Network"
- Screenshot: shots/aerodrome.financial.jpg (attach)
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrome-4gg.pages.dev (high, phishing-likely, 72/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-4gg.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://aerodrome-4gg[.]pages[.]dev/ (172.66.47.136, 172.66.44.120) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-06 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Already on public wallet blocklist(s): scamsniffer
- Page title resembles the official title (53%)
- Brand named on the page (10x), including the title
- Lure text: reward
- Resolves to 172.66.47.136, 172.66.44.120
- Page title: "Aerodrome Proposal"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-4gg.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-4gg.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (53%); Brand named on the page (10x), including the title; Already on public wallet blocklist(s): scamsniffer; Lure text: reward.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (53%); Brand named on the page (10x), including the title; Already on public wallet blocklist(s): scamsniffer; Lure text: reward.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-4gg.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (53%); Brand named on the page (10x), including the title; Already on public wallet blocklist(s): scamsniffer; Lure text: reward.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (53%); Brand named on the page (10x), including the title; Already on public wallet blocklist(s): scamsniffer; Lure text: reward.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome-4gg.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (53%); Brand named on the page (10x), including the title; Already on public wallet blocklist(s): scamsniffer; Lure text: reward. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (53%); Brand named on the page (10x), including the title; Already on public wallet blocklist(s): scamsniffer; Lure text: reward.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome-4gg.pages.dev
yarn add:blocklist aerodrome-4gg.pages.dev

PR title: Block aerodrome-4gg.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (53%); Brand named on the page (10x), including the title; Already on public wallet blocklist(s): scamsniffer; Lure text: reward.
```


## aerocdrome.finance (high, phishing-likely, 70/100)

### Registrar abuse report to NICENIC INTERNATIONAL GROUP CO., LIMITED

**File at:** abuse@nicenic.net  
**Subject:** Phishing / brand impersonation: aerocdrome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NICENIC INTERNATIONAL GROUP CO., LIMITED abuse team,

The domain aerocdrome[.]finance (registered with you on 2026-09-24) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerocdrome[.]finance/
- Typosquat (insertion) of the official domain
- Already on public wallet blocklist(s): metamask, scamsniffer
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.97.11, 188.114.96.11
- Page title: "Suspected Phishing | Cloudflare"

We are not affiliated with the operator of aerocdrome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3765, abuse phone +852.68584411

### Hosting abuse report to MNT-CLOUDFLARE

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerocdrome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello MNT-CLOUDFLARE,

hxxps://aerocdrome[.]finance/ (188.114.97.11, 188.114.96.11) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (insertion) of the official domain
- Already on public wallet blocklist(s): metamask, scamsniffer
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.97.11, 188.114.96.11
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerocdrome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerocdrome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask, scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Typosquat (insertion) of the official domain.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask, scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Typosquat (insertion) of the official domain.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerocdrome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask, scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Typosquat (insertion) of the official domain.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask, scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Typosquat (insertion) of the official domain.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.


## aerodrome-claim.com (high, phishing-likely, 70/100)

### Registrar abuse report to NICENIC INTERNATIONAL GROUP CO., LIMITED

**File at:** abuse@nicenic.net  
**Subject:** Phishing / brand impersonation: aerodrome-claim.com impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NICENIC INTERNATIONAL GROUP CO., LIMITED abuse team,

The domain aerodrome-claim[.]com (registered with you on 2026-02-09) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerodrome-claim[.]com/
- Brand name plus a phishing lure word
- TLS certificate issued 2026-10-03 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 172.67.181.55, 104.21.40.74
- Page title: "Suspected Phishing | Cloudflare"

We are not affiliated with the operator of aerodrome-claim[.]com. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3765, abuse phone +852.68581004

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-claim.com (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://aerodrome-claim[.]com/ (172.67.181.55, 104.21.40.74) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- TLS certificate issued 2026-10-03 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 172.67.181.55, 104.21.40.74
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-claim.com%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-claim.com/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-claim.com/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrome-claim.com - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrome-claim.com
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- TLS certificate issued 2026-10-03 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 172.67.181.55, 104.21.40.74
- Page title: "Suspected Phishing | Cloudflare"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrome-airdrop.pages.dev (high, phishing-likely, 70/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-airdrop.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://aerodrome-airdrop[.]pages[.]dev/ (188.114.96.11, 188.114.97.11) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- Hostname contains a lure word (claim/airdrop/support/...)
- TLS certificate issued 2026-10-03 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Already on public wallet blocklist(s): scamsniffer
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-airdrop.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-airdrop.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-airdrop.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome-airdrop.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"). Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome-airdrop.pages.dev
yarn add:blocklist aerodrome-airdrop.pages.dev

PR title: Block aerodrome-airdrop.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```


## aerodrome.website (high, phishing-likely, 65/100)

### Registrar abuse report to Global Domain Group LLC

**File at:** registry@globaldomaingroup.com  
**Subject:** Phishing / brand impersonation: aerodrome.website impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Global Domain Group LLC abuse team,

The domain aerodrome[.]website (registered with you on 2026-02-02) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerodrome[.]website/
- Official name on a different TLD
- TLS certificate issued 2026-10-10 (Certificate Transparency)
- Already on public wallet blocklist(s): scamsniffer
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 104.21.7.247, 172.67.188.30
- Page title: "Suspected Phishing | Cloudflare"

We are not affiliated with the operator of aerodrome[.]website. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3956, abuse phone +1.8053943992

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome.website (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://aerodrome[.]website/ (104.21.7.247, 172.67.188.30) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Official name on a different TLD
- TLS certificate issued 2026-10-10 (Certificate Transparency)
- Already on public wallet blocklist(s): scamsniffer
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 104.21.7.247, 172.67.188.30
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome.website%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome.website/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Official name on a different TLD.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Official name on a different TLD.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome.website/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Official name on a different TLD.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Official name on a different TLD.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome.website/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Official name on a different TLD. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Official name on a different TLD.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome.website
yarn add:blocklist aerodrome.website

PR title: Block aerodrome.website (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Official name on a different TLD.
```


## aerodrome-finance-coai-buy.pages.dev (high, phishing-likely, 60/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-finance-coai-buy.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://aerodrome-finance-coai-buy[.]pages[.]dev/ (188.114.96.0, 188.114.97.0) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-10 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Already on public wallet blocklist(s): scamsniffer
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.96.0, 188.114.97.0
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-finance-coai-buy.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-finance-coai-buy.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-finance-coai-buy.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome-finance-coai-buy.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"). Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome-finance-coai-buy.pages.dev
yarn add:blocklist aerodrome-finance-coai-buy.pages.dev

PR title: Block aerodrome-finance-coai-buy.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```


## aerodromefinances.pages.dev (high, phishing-likely, 60/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodromefinances.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://aerodromefinances[.]pages[.]dev/ (172.66.45.36, 172.66.46.220) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-07 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Already on public wallet blocklist(s): scamsniffer
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 172.66.45.36, 172.66.46.220
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodromefinances.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodromefinances.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodromefinances.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodromefinances.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"). Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodromefinances.pages.dev
yarn add:blocklist aerodromefinances.pages.dev

PR title: Block aerodromefinances.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```


## finance-aerodromee-en--us.pages.dev (high, phishing-likely, 57/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: finance-aerodromee-en--us.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://finance-aerodromee-en--us[.]pages[.]dev/ (188.114.96.11, 188.114.97.11) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-14 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Page title resembles the official title (80%)
- Brand named on the page (39x), including the title
- Wallet-connect prompt/library: connect your wallet, WalletConnect
- Mentions seed phrase, private key (no input form seen)
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "Aerodrome® Finance – The Future of DeFi Liquidity | Login, Exchange & FAQs"
- Screenshot: shots/finance-aerodromee-en--us.pages.dev.jpg (attach)

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Ffinance-aerodromee-en--us.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://finance-aerodromee-en--us.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet, WalletConnect; Page title resembles the official title (80%); Brand named on the page (39x), including the title; Mentions seed phrase, private key (no input form seen).`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet, WalletConnect; Page title resembles the official title (80%); Brand named on the page (39x), including the title; Mentions seed phrase, private key (no input form seen).
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://finance-aerodromee-en--us.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet, WalletConnect; Page title resembles the official title (80%); Brand named on the page (39x), including the title; Mentions seed phrase, private key (no input form seen).`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet, WalletConnect; Page title resembles the official title (80%); Brand named on the page (39x), including the title; Mentions seed phrase, private key (no input form seen).
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://finance-aerodromee-en--us.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet, WalletConnect; Page title resembles the official title (80%); Brand named on the page (39x), including the title; Mentions seed phrase, private key (no input form seen). Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet, WalletConnect; Page title resembles the official title (80%); Brand named on the page (39x), including the title; Mentions seed phrase, private key (no input form seen).
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-finance-aerodromee-en--us.pages.dev
yarn add:blocklist finance-aerodromee-en--us.pages.dev

PR title: Block finance-aerodromee-en--us.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet, WalletConnect; Page title resembles the official title (80%); Brand named on the page (39x), including the title; Mentions seed phrase, private key (no input form seen).
```

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] finance-aerodromee-en--us.pages.dev - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: finance-aerodromee-en--us.pages.dev
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-14 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Page title resembles the official title (80%)
- Brand named on the page (39x), including the title
- Wallet-connect prompt/library: connect your wallet, WalletConnect
- Mentions seed phrase, private key (no input form seen)
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "Aerodrome® Finance – The Future of DeFi Liquidity | Login, Exchange & FAQs"
- Screenshot: shots/finance-aerodromee-en--us.pages.dev.jpg (attach)
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrome-slipstream-us-en.pages.dev (high, phishing-likely, 56/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-slipstream-us-en.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://aerodrome-slipstream-us-en[.]pages[.]dev/ (188.114.97.11, 188.114.96.11) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-06 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Brand named on the page (7x), including the title
- Wallet-connect prompt/library: Connect your wallet, WalletConnect
- Lure text: rewards
- Resolves to 188.114.97.11, 188.114.96.11
- Page title: "Aerodrome Slipstream | Fast & Secure DeFi Trading Platform"
- Screenshot: shots/aerodrome-slipstream-us-en.pages.dev.jpg (attach)

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-slipstream-us-en.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-slipstream-us-en.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: Connect your wallet, WalletConnect; Brand named on the page (7x), including the title; Lure text: rewards.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: Connect your wallet, WalletConnect; Brand named on the page (7x), including the title; Lure text: rewards.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-slipstream-us-en.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: Connect your wallet, WalletConnect; Brand named on the page (7x), including the title; Lure text: rewards.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: Connect your wallet, WalletConnect; Brand named on the page (7x), including the title; Lure text: rewards.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome-slipstream-us-en.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: Connect your wallet, WalletConnect; Brand named on the page (7x), including the title; Lure text: rewards. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: Connect your wallet, WalletConnect; Brand named on the page (7x), including the title; Lure text: rewards.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome-slipstream-us-en.pages.dev
yarn add:blocklist aerodrome-slipstream-us-en.pages.dev

PR title: Block aerodrome-slipstream-us-en.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: Connect your wallet, WalletConnect; Brand named on the page (7x), including the title; Lure text: rewards.
```

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrome-slipstream-us-en.pages.dev - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrome-slipstream-us-en.pages.dev
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-06 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Brand named on the page (7x), including the title
- Wallet-connect prompt/library: Connect your wallet, WalletConnect
- Lure text: rewards
- Resolves to 188.114.97.11, 188.114.96.11
- Page title: "Aerodrome Slipstream | Fast & Secure DeFi Trading Platform"
- Screenshot: shots/aerodrome-slipstream-us-en.pages.dev.jpg (attach)
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrome-slipstream-uploaded-en.pages.dev (high, phishing-likely, 54/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-slipstream-uploaded-en.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://aerodrome-slipstream-uploaded-en[.]pages[.]dev/ (188.114.96.11, 188.114.97.11) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-05 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Brand named on the page (8x), including the title
- Wallet-connect prompt/library: connect your wallet
- Lure text: rewards
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "Fastest DeFi Swaps on Base L2 | Aerodrome Slipstream Liquidity"
- Screenshot: shots/aerodrome-slipstream-uploaded-en.pages.dev.jpg (attach)

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-slipstream-uploaded-en.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-slipstream-uploaded-en.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet; Brand named on the page (8x), including the title; Lure text: rewards.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet; Brand named on the page (8x), including the title; Lure text: rewards.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-slipstream-uploaded-en.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet; Brand named on the page (8x), including the title; Lure text: rewards.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet; Brand named on the page (8x), including the title; Lure text: rewards.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome-slipstream-uploaded-en.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet; Brand named on the page (8x), including the title; Lure text: rewards. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet; Brand named on the page (8x), including the title; Lure text: rewards.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome-slipstream-uploaded-en.pages.dev
yarn add:blocklist aerodrome-slipstream-uploaded-en.pages.dev

PR title: Block aerodrome-slipstream-uploaded-en.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Wallet-connect prompt/library: connect your wallet; Brand named on the page (8x), including the title; Lure text: rewards.
```

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrome-slipstream-uploaded-en.pages.dev - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrome-slipstream-uploaded-en.pages.dev
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-05 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Brand named on the page (8x), including the title
- Wallet-connect prompt/library: connect your wallet
- Lure text: rewards
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "Fastest DeFi Swaps on Base L2 | Aerodrome Slipstream Liquidity"
- Screenshot: shots/aerodrome-slipstream-uploaded-en.pages.dev.jpg (attach)
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerrodrome.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerrodrome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerrodrome[.]finance (registered with you on 2026-06-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aerrodrome[.]finance/
- Typosquat (insertion) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerrodrome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerrodrome.finance"

We are not affiliated with the operator of aerrodrome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: aerrodrome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://aerrodrome[.]finance/ (185.53.179.128) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (insertion) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerrodrome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerrodrome.finance"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faerrodrome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aerrodrome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerrodrome.finance"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerrodrome.finance"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aerrodrome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerrodrome.finance"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerrodrome.finance"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerrodrome.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerrodrome.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (insertion) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerrodrome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerrodrome.finance"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aeroddrome.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aeroddrome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aeroddrome[.]finance (registered with you on 2025-06-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aeroddrome[.]finance/
- Typosquat (insertion) of the official domain
- One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (19 chars of text, title "404 Not Found"): content not visible
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "404 Not Found"

We are not affiliated with the operator of aeroddrome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to MNT-CLOUDFLARE

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aeroddrome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello MNT-CLOUDFLARE,

hxxps://aeroddrome[.]finance/ (188.114.96.11, 188.114.97.11) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (insertion) of the official domain
- One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (19 chars of text, title "404 Not Found"): content not visible
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "404 Not Found"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faeroddrome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aeroddrome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (insertion) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (insertion) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aeroddrome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (insertion) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (insertion) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aeroddrome.finance/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (insertion) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (insertion) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aeroddrome.finance
yarn add:blocklist aeroddrome.finance

PR title: Block aeroddrome.finance (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (insertion) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```


## arodrome.finance (high, phishing-likely, 50/100)

### Registrar abuse report to NameCheap, Inc.

**File at:** abuse@namecheap.com  
**Subject:** Phishing / brand impersonation: arodrome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NameCheap, Inc. abuse team,

The domain arodrome[.]finance (registered with you on 2025-02-05) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://arodrome[.]finance/
- Typosquat (omission) of the official domain
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (19 chars of text, title "404 Not Found"): content not visible
- Resolves to 199.91.220.73
- Page title: "404 Not Found"

We are not affiliated with the operator of arodrome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 1068, abuse phone +1.9854014545

### Hosting abuse report to BL Networks

**File at:** admin@blnwx.com  
**Subject:** Phishing site hosted on your network: arodrome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello BL Networks,

hxxp://arodrome[.]finance/ (199.91.220.73) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (omission) of the official domain
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (19 chars of text, title "404 Not Found"): content not visible
- Resolves to 199.91.220.73
- Page title: "404 Not Found"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Farodrome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://arodrome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://arodrome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `http://arodrome.finance/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Almost empty page (19 chars of text, title "404 Not Found"): content not visible. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-arodrome.finance
yarn add:blocklist arodrome.finance

PR title: Block arodrome.finance (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```


## aerdrome.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerdrome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerdrome[.]finance (registered with you on 2026-06-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aerdrome[.]finance/
- Typosquat (omission) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerdrome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerdrome.finance"

We are not affiliated with the operator of aerdrome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: aerdrome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://aerdrome[.]finance/ (185.53.179.128) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (omission) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerdrome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerdrome.finance"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faerdrome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aerdrome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerdrome.finance"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerdrome.finance"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aerdrome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerdrome.finance"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerdrome.finance"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerdrome.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerdrome.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (omission) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerdrome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerdrome.finance"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerorome.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerorome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerorome[.]finance (registered with you on 2026-06-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aerorome[.]finance/
- Typosquat (omission) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerorome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerorome.finance"

We are not affiliated with the operator of aerorome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: aerorome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://aerorome[.]finance/ (185.53.179.128) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (omission) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerorome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerorome.finance"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faerorome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aerorome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerorome.finance"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerorome.finance"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aerorome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerorome.finance"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerorome.finance"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerorome.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerorome.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (omission) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerorome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerorome.finance"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodroe.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerodroe.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerodroe[.]finance (registered with you on 2026-06-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aerodroe[.]finance/
- Typosquat (omission) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodroe.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodroe.finance"

We are not affiliated with the operator of aerodroe[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: aerodroe.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://aerodroe[.]finance/ (185.53.179.128) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (omission) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodroe.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodroe.finance"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faerodroe.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aerodroe.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodroe.finance"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodroe.finance"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aerodroe.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodroe.finance"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (omission) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodroe.finance"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodroe.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodroe.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (omission) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodroe.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodroe.finance"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodromme.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerodromme.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerodromme[.]finance (registered with you on 2026-06-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aerodromme[.]finance/
- Typosquat (repetition) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodromme.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodromme.finance"

We are not affiliated with the operator of aerodromme[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: aerodromme.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://aerodromme[.]finance/ (185.53.179.128) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (repetition) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodromme.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodromme.finance"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faerodromme.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aerodromme.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (repetition) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodromme.finance"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (repetition) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodromme.finance"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aerodromme.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (repetition) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodromme.finance"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (repetition) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodromme.finance"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodromme.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodromme.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (repetition) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodromme.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodromme.finance"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aeeodrome.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aeeodrome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aeeodrome[.]finance (registered with you on 2026-06-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aeeodrome[.]finance/
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aeeodrome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aeeodrome.finance"

We are not affiliated with the operator of aeeodrome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: aeeodrome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://aeeodrome[.]finance/ (185.53.179.128) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aeeodrome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aeeodrome.finance"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faeeodrome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aeeodrome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aeeodrome.finance"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aeeodrome.finance"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aeeodrome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aeeodrome.finance"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aeeodrome.finance"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aeeodrome.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aeeodrome.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aeeodrome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aeeodrome.finance"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodtome.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerodtome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerodtome[.]finance (registered with you on 2025-06-20) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerodtome[.]finance/
- Typosquat (replacement) of the official domain
- One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (19 chars of text, title "404 Not Found"): content not visible
- Resolves to 104.21.6.242, 172.67.135.125
- Page title: "404 Not Found"

We are not affiliated with the operator of aerodtome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodtome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://aerodtome[.]finance/ (104.21.6.242, 172.67.135.125) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (19 chars of text, title "404 Not Found"): content not visible
- Resolves to 104.21.6.242, 172.67.135.125
- Page title: "404 Not Found"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodtome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodtome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (replacement) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (replacement) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodtome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (replacement) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (replacement) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodtome.finance/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (replacement) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (replacement) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodtome.finance
yarn add:blocklist aerodtome.finance

PR title: Block aerodtome.finance (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (replacement) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```


## aerodeome.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerodeome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerodeome[.]finance (registered with you on 2026-06-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aerodeome[.]finance/
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodeome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodeome.finance"

We are not affiliated with the operator of aerodeome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: aerodeome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://aerodeome[.]finance/ (185.53.179.128) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodeome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodeome.finance"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faerodeome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aerodeome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodeome.finance"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodeome.finance"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aerodeome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodeome.finance"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodeome.finance"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodeome.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodeome.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodeome.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodeome.finance"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrpme.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerodrpme.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerodrpme[.]finance (registered with you on 2026-06-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aerodrpme[.]finance/
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodrpme.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodrpme.finance"

We are not affiliated with the operator of aerodrpme[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: aerodrpme.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://aerodrpme[.]finance/ (185.53.179.128) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodrpme.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodrpme.finance"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faerodrpme.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aerodrpme.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrpme.finance"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrpme.finance"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aerodrpme.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrpme.finance"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrpme.finance"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrpme.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrpme.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodrpme.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodrpme.finance"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodromr.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerodromr.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerodromr[.]finance (registered with you on 2026-06-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aerodromr[.]finance/
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodromr.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodromr.finance"

We are not affiliated with the operator of aerodromr[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: aerodromr.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://aerodromr[.]finance/ (185.53.179.128) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodromr.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodromr.finance"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faerodromr.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aerodromr.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodromr.finance"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodromr.finance"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aerodromr.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodromr.finance"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodromr.finance"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodromr.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodromr.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "aerodromr.finance"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodromr.finance"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrmoe.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerodrmoe.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerodrmoe[.]finance (registered with you on 2025-06-22) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerodrmoe[.]finance/
- Typosquat (transposition) of the official domain
- One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (19 chars of text, title "404 Not Found"): content not visible
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "404 Not Found"

We are not affiliated with the operator of aerodrmoe[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to MNT-CLOUDFLARE

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrmoe.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello MNT-CLOUDFLARE,

hxxps://aerodrmoe[.]finance/ (188.114.96.11, 188.114.97.11) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (transposition) of the official domain
- One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (19 chars of text, title "404 Not Found"): content not visible
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "404 Not Found"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrmoe.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrmoe.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (transposition) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (transposition) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrmoe.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (transposition) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (transposition) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrmoe.finance/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (transposition) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (transposition) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrmoe.finance
yarn add:blocklist aerodrmoe.finance

PR title: Block aerodrmoe.finance (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Typosquat (transposition) of the official domain; One of 18 lookalikes on the same DNS account (ashley.ns.cloudflare.com + darl.ns.cloudflare.com): a single operator; Almost empty page (19 chars of text, title "404 Not Found"): content not visible.
```


## aeradrome.finance (high, phishing-likely, 50/100)

### Registrar abuse report to NICENIC INTERNATIONAL GROUP CO., LIMITED

**File at:** abuse@nicenic.net  
**Subject:** Phishing / brand impersonation: aeradrome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NICENIC INTERNATIONAL GROUP CO., LIMITED abuse team,

The domain aeradrome[.]finance (registered with you on 2026-08-25) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aeradrome[.]finance/
- Typosquat (vowel-swap) of the official domain
- One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (46 chars of text, title "Index of /"): content not visible
- Resolves to 143.246.213.236
- Page title: "Index of /"

We are not affiliated with the operator of aeradrome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3765, abuse phone +852.68584411

### Hosting abuse report to mnt-md-alexhost-1

**File at:** abuse@alexhost.com  
**Subject:** Phishing site hosted on your network: aeradrome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello mnt-md-alexhost-1,

hxxps://aeradrome[.]finance/ (143.246.213.236) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (vowel-swap) of the official domain
- One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (46 chars of text, title "Index of /"): content not visible
- Resolves to 143.246.213.236
- Page title: "Index of /"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faeradrome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aeradrome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (vowel-swap) of the official domain; One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator; Almost empty page (46 chars of text, title "Index of /"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (vowel-swap) of the official domain; One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator; Almost empty page (46 chars of text, title "Index of /"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aeradrome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (vowel-swap) of the official domain; One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator; Almost empty page (46 chars of text, title "Index of /"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (vowel-swap) of the official domain; One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator; Almost empty page (46 chars of text, title "Index of /"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aeradrome.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aeradrome.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (vowel-swap) of the official domain
- One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (46 chars of text, title "Index of /"): content not visible
- Resolves to 143.246.213.236
- Page title: "Index of /"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrame.finance (high, phishing-likely, 50/100)

### Registrar abuse report to NICENIC INTERNATIONAL GROUP CO., LIMITED

**File at:** abuse@nicenic.net  
**Subject:** Phishing / brand impersonation: aerodrame.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NICENIC INTERNATIONAL GROUP CO., LIMITED abuse team,

The domain aerodrame[.]finance (registered with you on 2026-08-25) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aerodrame[.]finance/
- Typosquat (vowel-swap) of the official domain
- One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (21 chars of text, title "502 Bad Gateway"): content not visible
- Resolves to 195.20.18.201
- Page title: "502 Bad Gateway"

We are not affiliated with the operator of aerodrame[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3765, abuse phone +852.68584411

### Hosting abuse report to IPSMAIN

**File at:** abuse@alexhost.com  
**Subject:** Phishing site hosted on your network: aerodrame.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello IPSMAIN,

hxxp://aerodrame[.]finance/ (195.20.18.201) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Typosquat (vowel-swap) of the official domain
- One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (21 chars of text, title "502 Bad Gateway"): content not visible
- Resolves to 195.20.18.201
- Page title: "502 Bad Gateway"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faerodrame.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aerodrame.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (vowel-swap) of the official domain; One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator; Almost empty page (21 chars of text, title "502 Bad Gateway"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (vowel-swap) of the official domain; One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator; Almost empty page (21 chars of text, title "502 Bad Gateway"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aerodrame.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (vowel-swap) of the official domain; One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator; Almost empty page (21 chars of text, title "502 Bad Gateway"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Typosquat (vowel-swap) of the official domain; One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator; Almost empty page (21 chars of text, title "502 Bad Gateway"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrame.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrame.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Typosquat (vowel-swap) of the official domain
- One of 4 lookalikes on the same DNS account (grace.ns.cloudflare.com + ivan.ns.cloudflare.com): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (21 chars of text, title "502 Bad Gateway"): content not visible
- Resolves to 195.20.18.201
- Page title: "502 Bad Gateway"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## claim-aerodrome.xyz (high, phishing-likely, 50/100)

### Registrar abuse report to GMO Internet Group, Inc. d/b/a Onamae.com

**File at:** abuse@internet.gmo  
**Subject:** Phishing / brand impersonation: claim-aerodrome.xyz impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello GMO Internet Group, Inc. d/b/a Onamae.com abuse team,

The domain claim-aerodrome[.]xyz (registered with you on 2026-09-10) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://claim-aerodrome[.]xyz/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 13.248.169.48, 76.223.54.146

We are not affiliated with the operator of claim-aerodrome[.]xyz. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 49, abuse phone +81.337709199

### Hosting abuse report to Amazon Technologies Inc.

**File at:** trustandsafety@support.aws.com  
**Subject:** Phishing site hosted on your network: claim-aerodrome.xyz (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Amazon Technologies Inc.,

hxxps://claim-aerodrome[.]xyz/ (13.248.169.48, 76.223.54.146) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 13.248.169.48, 76.223.54.146

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fclaim-aerodrome.xyz%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://claim-aerodrome.xyz/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://claim-aerodrome.xyz/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://claim-aerodrome.xyz/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-claim-aerodrome.xyz
yarn add:blocklist claim-aerodrome.xyz

PR title: Block claim-aerodrome.xyz (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.
```


## aerodromeapp.finance (high, phishing-likely, 50/100)

### Registrar abuse report to Name.com, Inc.

**File at:** abuse@name.com  
**Subject:** Phishing / brand impersonation: aerodromeapp.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Name.com, Inc. abuse team,

The domain aerodromeapp[.]finance (registered with you on 2026-04-23) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerodromeapp[.]finance/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Page not reachable: redirect count exceeded; http: redirect count exceeded
- Resolves to 188.114.96.3, 188.114.97.3

We are not affiliated with the operator of aerodromeapp[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 625, abuse phone +1.7203101849

### Hosting abuse report to MNT-CLOUDFLARE

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodromeapp.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello MNT-CLOUDFLARE,

hxxps://aerodromeapp[.]finance/ (188.114.96.3, 188.114.97.3) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Page not reachable: redirect count exceeded; http: redirect count exceeded
- Resolves to 188.114.96.3, 188.114.97.3

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodromeapp.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodromeapp.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: redirect count exceeded; http: redirect count exceeded.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: redirect count exceeded; http: redirect count exceeded.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodromeapp.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: redirect count exceeded; http: redirect count exceeded.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: redirect count exceeded; http: redirect count exceeded.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodromeapp.finance/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: redirect count exceeded; http: redirect count exceeded. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: redirect count exceeded; http: redirect count exceeded.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodromeapp.finance
yarn add:blocklist aerodromeapp.finance

PR title: Block aerodromeapp.finance (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: redirect count exceeded; http: redirect count exceeded.
```


## aerodrome-app.xyz (high, phishing-likely, 50/100)

### Registrar abuse report to Global Domain Group LLC

**File at:** abuse@globaldomaingroup.com  
**Subject:** Phishing / brand impersonation: aerodrome-app.xyz impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Global Domain Group LLC abuse team,

The domain aerodrome-app[.]xyz (registered with you on 2026-08-04) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerodrome-app[.]xyz/
- Brand name plus a phishing lure word
- TLS certificate issued 2026-10-02 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 104.21.95.37, 172.67.142.194

We are not affiliated with the operator of aerodrome-app[.]xyz. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3956, abuse phone +1.8053943992

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-app.xyz (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://aerodrome-app[.]xyz/ (104.21.95.37, 172.67.142.194) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- TLS certificate issued 2026-10-02 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 104.21.95.37, 172.67.142.194

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-app.xyz%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-app.xyz/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-app.xyz/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrome-app.xyz - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrome-app.xyz
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- TLS certificate issued 2026-10-02 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 104.21.95.37, 172.67.142.194
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## portal-aerodrome.xyz (high, phishing-likely, 50/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: portal-aerodrome.xyz impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain portal-aerodrome[.]xyz (registered with you on 2026-04-28) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://portal-aerodrome[.]xyz/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page returned HTTP 502
- Resolves to 172.67.212.4, 104.21.53.106
- Page title: "portal-aerodrome.xyz | 502: Bad gateway"

We are not affiliated with the operator of portal-aerodrome[.]xyz. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: portal-aerodrome.xyz (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://portal-aerodrome[.]xyz/ (172.67.212.4, 104.21.53.106) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page returned HTTP 502
- Resolves to 172.67.212.4, 104.21.53.106
- Page title: "portal-aerodrome.xyz | 502: Bad gateway"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fportal-aerodrome.xyz%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://portal-aerodrome.xyz/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page returned HTTP 502.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page returned HTTP 502.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://portal-aerodrome.xyz/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page returned HTTP 502.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page returned HTTP 502.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] portal-aerodrome.xyz - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: portal-aerodrome.xyz
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page returned HTTP 502
- Resolves to 172.67.212.4, 104.21.53.106
- Page title: "portal-aerodrome.xyz | 502: Bad gateway"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrome-financial-en-us.pages.dev (high, impersonation, 50/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-financial-en-us.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://aerodrome-financial-en-us[.]pages[.]dev/ (172.66.45.29, 172.66.46.227) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-04 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Page title resembles the official title (80%)
- Brand named on the page (9x), including the title
- Lure text: rewards
- Resolves to 172.66.45.29, 172.66.46.227
- Page title: "Aerodrome Finance — Fast & Secure DeFi Trading Platform"
- Screenshot: shots/aerodrome-financial-en-us.pages.dev.jpg (attach)

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-financial-en-us.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-financial-en-us.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (80%); Brand named on the page (9x), including the title; Lure text: rewards.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (80%); Brand named on the page (9x), including the title; Lure text: rewards.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-financial-en-us.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (80%); Brand named on the page (9x), including the title; Lure text: rewards.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (80%); Brand named on the page (9x), including the title; Lure text: rewards.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome-financial-en-us.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (80%); Brand named on the page (9x), including the title; Lure text: rewards. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (80%); Brand named on the page (9x), including the title; Lure text: rewards.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome-financial-en-us.pages.dev
yarn add:blocklist aerodrome-financial-en-us.pages.dev

PR title: Block aerodrome-financial-en-us.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Page title resembles the official title (80%); Brand named on the page (9x), including the title; Lure text: rewards.
```

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrome-financial-en-us.pages.dev - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrome-financial-en-us.pages.dev
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-04 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Page title resembles the official title (80%)
- Brand named on the page (9x), including the title
- Lure text: rewards
- Resolves to 172.66.45.29, 172.66.46.227
- Page title: "Aerodrome Finance — Fast & Secure DeFi Trading Platform"
- Screenshot: shots/aerodrome-financial-en-us.pages.dev.jpg (attach)
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrome.biz (high, phishing-likely, 45/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerodrome.biz impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerodrome[.]biz (registered with you on 2026-07-26) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://aerodrome[.]biz/
- Official name on a different TLD
- TLS certificate issued 2026-10-05 (Certificate Transparency)
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (0 chars of text, title "aerodrome.biz"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodrome.biz"

We are not affiliated with the operator of aerodrome[.]biz. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: aerodrome.biz (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://aerodrome[.]biz/ (185.53.179.128) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Official name on a different TLD
- TLS certificate issued 2026-10-05 (Certificate Transparency)
- One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (0 chars of text, title "aerodrome.biz"): content not visible
- Resolves to 185.53.179.128
- Page title: "aerodrome.biz"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Faerodrome.biz%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://aerodrome.biz/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Official name on a different TLD; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrome.biz"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Official name on a different TLD; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrome.biz"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://aerodrome.biz/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Official name on a different TLD; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrome.biz"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Official name on a different TLD; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrome.biz"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `http://aerodrome.biz/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Official name on a different TLD; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrome.biz"): content not visible. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Official name on a different TLD; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrome.biz"): content not visible.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome.biz
yarn add:blocklist aerodrome.biz

PR title: Block aerodrome.biz (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): scamsniffer; Official name on a different TLD; One of 16 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "aerodrome.biz"): content not visible.
```


## aerodrome-swap.app (high, phishing-likely, 45/100)

### Registrar abuse report to Tucows Domains Inc

**File at:** domainabuse@tucows.com  
**Subject:** Phishing / brand impersonation: aerodrome-swap.app impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Tucows Domains Inc abuse team,

The domain aerodrome-swap[.]app (registered with you on 2026-03-07) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerodrome-swap[.]app/
- Brand name plus a phishing lure word
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 104.21.57.64, 172.67.189.95
- Page title: "Suspected Phishing | Cloudflare"

We are not affiliated with the operator of aerodrome-swap[.]app. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 69, abuse phone +1.4165350123

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-swap.app (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://aerodrome-swap[.]app/ (104.21.57.64, 172.67.189.95) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 104.21.57.64, 172.67.189.95
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-swap.app%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-swap.app/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-swap.app/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome-swap.app/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome-swap.app
yarn add:blocklist aerodrome-swap.app

PR title: Block aerodrome-swap.app (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrome-swap.app - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrome-swap.app
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 104.21.57.64, 172.67.189.95
- Page title: "Suspected Phishing | Cloudflare"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## v2-aerodrome.finance (high, phishing-likely, 45/100)

### Registrar abuse report to PDR Ltd. d/b/a PublicDomainRegistry.com

**File at:** abuse@publicdomainregistry.com  
**Subject:** Phishing / brand impersonation: v2-aerodrome.finance impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello PDR Ltd. d/b/a PublicDomainRegistry.com abuse team,

The domain v2-aerodrome[.]finance (registered with you on 2026-01-01) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://v2-aerodrome[.]finance/
- Brand name plus a phishing lure word
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.97.11, 188.114.96.11
- Page title: "Suspected Phishing | Cloudflare"

We are not affiliated with the operator of v2-aerodrome[.]finance. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 303, abuse phone +91.2230797500

### Hosting abuse report to MNT-CLOUDFLARE

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: v2-aerodrome.finance (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello MNT-CLOUDFLARE,

hxxps://v2-aerodrome[.]finance/ (188.114.97.11, 188.114.96.11) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.97.11, 188.114.96.11
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fv2-aerodrome.finance%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://v2-aerodrome.finance/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://v2-aerodrome.finance/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://v2-aerodrome.finance/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word. Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-v2-aerodrome.finance
yarn add:blocklist v2-aerodrome.finance

PR title: Block v2-aerodrome.finance (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] v2-aerodrome.finance - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: v2-aerodrome.finance
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.97.11, 188.114.96.11
- Page title: "Suspected Phishing | Cloudflare"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrome-slipstream-wallet.pages.dev (high, phishing-likely, 45/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-slipstream-wallet.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://aerodrome-slipstream-wallet[.]pages[.]dev/ (172.66.44.245, 172.66.47.11) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- Hostname contains a lure word (claim/airdrop/support/...)
- TLS certificate issued 2026-10-06 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 172.66.44.245, 172.66.47.11
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-slipstream-wallet.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-slipstream-wallet.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-slipstream-wallet.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodrome-slipstream-wallet.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"). Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodrome-slipstream-wallet.pages.dev
yarn add:blocklist aerodrome-slipstream-wallet.pages.dev

PR title: Block aerodrome-slipstream-wallet.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrome-slipstream-wallet.pages.dev - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrome-slipstream-wallet.pages.dev
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- Hostname contains a lure word (claim/airdrop/support/...)
- TLS certificate issued 2026-10-06 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 172.66.44.245, 172.66.47.11
- Page title: "Suspected Phishing | Cloudflare"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodromevalidate.pages.dev (high, phishing-likely, 45/100)

### Hosting abuse report to Cloudflare Pages

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodromevalidate.pages.dev (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare Pages,

hxxps://aerodromevalidate[.]pages[.]dev/ (188.114.96.11, 188.114.97.11) is hosted on your platform and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- Hostname contains a lure word (claim/airdrop/support/...)
- TLS certificate issued 2026-10-03 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodromevalidate.pages.dev%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodromevalidate.pages.dev/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodromevalidate.pages.dev/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://aerodromevalidate.pages.dev/`
- **Please explain why this content is malicious:** `Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"). Observed 2026-11-01. Reported on behalf of Aerodrome.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-aerodromevalidate.pages.dev
yarn add:blocklist aerodromevalidate.pages.dev

PR title: Block aerodromevalidate.pages.dev (Aerodrome impersonation)
PR body: Impersonates Aerodrome (official: https://aerodrome.finance). Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare").
```

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodromevalidate.pages.dev - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodromevalidate.pages.dev
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- Hostname contains a lure word (claim/airdrop/support/...)
- TLS certificate issued 2026-10-03 (Certificate Transparency)
- Hosted on Cloudflare Pages subdomain
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.96.11, 188.114.97.11
- Page title: "Suspected Phishing | Cloudflare"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrome.fmance.cam (high, phishing-likely, 40/100)

### Registrar abuse report to Dynadot Inc

**File at:** abuse@dynadot.com  
**Subject:** Phishing / brand impersonation: aerodrome.fmance.cam impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Dynadot Inc abuse team,

The domain aerodrome[.]fmance[.]cam (registered with you on 2026-10-24) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerodrome[.]fmance[.]cam/
- Hostname contains the brand name
- TLS certificate issued 2026-10-24 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Almost empty page (183 chars of text, title "404: NOT_FOUND"): content not visible
- Resolves to 64.29.17.65, 216.198.79.65
- Page title: "404: NOT_FOUND"

We are not affiliated with the operator of aerodrome[.]fmance[.]cam. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 472, abuse phone +1.6502620100

### Hosting abuse report to Vercel, Inc

**File at:** abuse@vercel.com  
**Subject:** Phishing site hosted on your network: aerodrome.fmance.cam (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Vercel, Inc,

hxxps://aerodrome[.]fmance[.]cam/ (64.29.17.65, 216.198.79.65) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-24 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Almost empty page (183 chars of text, title "404: NOT_FOUND"): content not visible
- Resolves to 64.29.17.65, 216.198.79.65
- Page title: "404: NOT_FOUND"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome.fmance.cam%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome.fmance.cam/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Almost empty page (183 chars of text, title "404: NOT_FOUND"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Almost empty page (183 chars of text, title "404: NOT_FOUND"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome.fmance.cam/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Almost empty page (183 chars of text, title "404: NOT_FOUND"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Almost empty page (183 chars of text, title "404: NOT_FOUND"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrome.fmance.cam - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrome.fmance.cam
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-24 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Almost empty page (183 chars of text, title "404: NOT_FOUND"): content not visible
- Resolves to 64.29.17.65, 216.198.79.65
- Page title: "404: NOT_FOUND"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## aerodrome-votes.com (high, phishing-likely, 40/100)

### Registrar abuse report to NICENIC INTERNATIONAL GROUP CO., LIMITED

**File at:** abuse@nicenic.net  
**Subject:** Phishing / brand impersonation: aerodrome-votes.com impersonates Aerodrome

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NICENIC INTERNATIONAL GROUP CO., LIMITED abuse team,

The domain aerodrome-votes[.]com (registered with you on 2026-10-18) is being used to impersonate Aerodrome, a crypto project whose official site is hxxps://aerodrome[.]finance. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://aerodrome-votes[.]com/
- Hostname contains the brand name
- TLS certificate issued 2026-10-21 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 104.21.10.175, 172.67.146.38

We are not affiliated with the operator of aerodrome-votes[.]com. Aerodrome has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3765, abuse phone +852.68581004

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: aerodrome-votes.com (Aerodrome impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://aerodrome-votes[.]com/ (104.21.10.175, 172.67.146.38) is hosted on your network and impersonates Aerodrome (official: hxxps://aerodrome[.]finance).

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-21 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 104.21.10.175, 172.67.146.38

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for Aerodrome under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Faerodrome-votes.com%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://aerodrome-votes.com/`
- **Additional details (max 800):** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Page not reachable: This operation was aborted; http: This operation was aborted.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Page not reachable: This operation was aborted; http: This operation was aborted.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://aerodrome-votes.com/`
- **Further details:** `Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Page not reachable: This operation was aborted; http: This operation was aborted.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates Aerodrome (official: https://aerodrome.finance). Already on public wallet blocklist(s): metamask; Page not reachable: This operation was aborted; http: This operation was aborted.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] aerodrome-votes.com - Aerodrome impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: aerodrome-votes.com
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: Aerodrome (official: https://aerodrome.finance)

Evidence (observed 2026-11-01):
- Hostname contains the brand name
- TLS certificate issued 2026-10-21 (Certificate Transparency)
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 104.21.10.175, 172.67.146.38
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.
