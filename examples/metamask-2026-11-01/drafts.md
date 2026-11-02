# Draft reports: MetaMask (2026-11-01)

**DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.**


## metamask.com (critical, phishing-likely, 100/100)

### Registrar abuse report to Cloudflare, Inc.

**File at:** registrar-abuse@cloudflare.com  
**Subject:** Phishing / brand impersonation: metamask.com impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc. abuse team,

The domain metamask[.]com (registered with you on 2005-01-28) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamask[.]com/
- Official name on a different TLD
- Already on public wallet blocklist(s): scamsniffer
- Same favicon as the official site
- Page title resembles the official title (100%)
- Page text overlaps the official site (78% shingles)
- Brand named on the page (28x), including the title
- Lure text: Eligible, rewards
- Resolves to 104.18.42.93, 172.64.145.163
- Page title: "MetaMask Crypto Wallet. Buy and Sell Bitcoin, Ethereum, Solana"

We are not affiliated with the operator of metamask[.]com. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 1910, abuse phone +1.6503198930

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: metamask.com (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://metamask[.]com/ (104.18.42.93, 172.64.145.163) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Official name on a different TLD
- Already on public wallet blocklist(s): scamsniffer
- Same favicon as the official site
- Page title resembles the official title (100%)
- Page text overlaps the official site (78% shingles)
- Brand named on the page (28x), including the title
- Lure text: Eligible, rewards
- Resolves to 104.18.42.93, 172.64.145.163
- Page title: "MetaMask Crypto Wallet. Buy and Sell Bitcoin, Ethereum, Solana"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamask.com%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamask.com/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Same favicon as the official site; Page text overlaps the official site (78% shingles); Page title resembles the official title (100%); Brand named on the page (28x), including the title.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Same favicon as the official site; Page text overlaps the official site (78% shingles); Page title resembles the official title (100%); Brand named on the page (28x), including the title.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamask.com/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Same favicon as the official site; Page text overlaps the official site (78% shingles); Page title resembles the official title (100%); Brand named on the page (28x), including the title.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Same favicon as the official site; Page text overlaps the official site (78% shingles); Page title resembles the official title (100%); Brand named on the page (28x), including the title.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://metamask.com/`
- **Please explain why this content is malicious:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Same favicon as the official site; Page text overlaps the official site (78% shingles); Page title resembles the official title (100%); Brand named on the page (28x), including the title. Observed 2026-11-01. Reported on behalf of MetaMask.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Same favicon as the official site; Page text overlaps the official site (78% shingles); Page title resembles the official title (100%); Brand named on the page (28x), including the title.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-metamask.com
yarn add:blocklist metamask.com

PR title: Block metamask.com (MetaMask impersonation)
PR body: Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Same favicon as the official site; Page text overlaps the official site (78% shingles); Page title resembles the official title (100%); Brand named on the page (28x), including the title.
```


## wallet-metamask.io (high, phishing-likely, 70/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: wallet-metamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain wallet-metamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://wallet-metamask[.]io/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.96.3, 188.114.97.3
- Page title: "Suspected Phishing | Cloudflare"

We are not affiliated with the operator of wallet-metamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to MNT-CLOUDFLARE

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: wallet-metamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello MNT-CLOUDFLARE,

hxxps://wallet-metamask[.]io/ (188.114.96.3, 188.114.97.3) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.96.3, 188.114.97.3
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fwallet-metamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://wallet-metamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://wallet-metamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] wallet-metamask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: wallet-metamask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 188.114.96.3, 188.114.97.3
- Page title: "Suspected Phishing | Cloudflare"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamaskv2.com (high, phishing-likely, 70/100)

### Registrar abuse report to Hosting Concepts B.V. d/b/a Registrar.eu

**File at:** abuse@registrar.eu  
**Subject:** Phishing / brand impersonation: metamaskv2.com impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Hosting Concepts B.V. d/b/a Registrar.eu abuse team,

The domain metamaskv2[.]com (registered with you on 2026-05-10) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamaskv2[.]com/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 104.21.45.145, 172.67.215.125
- Page title: "Suspected Phishing | Cloudflare"

We are not affiliated with the operator of metamaskv2[.]com. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 1647, abuse phone +31.104482297

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: metamaskv2.com (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://metamaskv2[.]com/ (104.21.45.145, 172.67.215.125) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 104.21.45.145, 172.67.215.125
- Page title: "Suspected Phishing | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamaskv2.com%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamaskv2.com/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamaskv2.com/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare"); Brand name plus a phishing lure word.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamaskv2.com - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamaskv2.com
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Host already shows a phishing warning instead of the site ("Suspected Phishing | Cloudflare")
- Resolves to 104.21.45.145, 172.67.215.125
- Page title: "Suspected Phishing | Cloudflare"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamask.xyz (high, phishing-likely, 56/100)

### Registrar abuse report to NameCheap, Inc.

**File at:** abuse@namecheap.com  
**Subject:** Phishing / brand impersonation: metamask.xyz impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NameCheap, Inc. abuse team,

The domain metamask[.]xyz (registered with you on 2019-02-11) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamask[.]xyz/
- Official name on a different TLD
- Already on public wallet blocklist(s): metamask
- Brand named on the page (2x)
- Parked / for-sale page
- Resolves to 52.40.42.113, 44.232.173.249
- Page title: "MetaMask.xyz for sale | Spaceship.com"

We are not affiliated with the operator of metamask[.]xyz. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 1068, abuse phone +1.9854014545

### Hosting abuse report to Amazon Technologies Inc.

**File at:** trustandsafety@support.aws.com  
**Subject:** Phishing site hosted on your network: metamask.xyz (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Amazon Technologies Inc.,

hxxps://metamask[.]xyz/ (52.40.42.113, 44.232.173.249) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Official name on a different TLD
- Already on public wallet blocklist(s): metamask
- Brand named on the page (2x)
- Parked / for-sale page
- Resolves to 52.40.42.113, 44.232.173.249
- Page title: "MetaMask.xyz for sale | Spaceship.com"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamask.xyz%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamask.xyz/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Brand named on the page (2x); Already on public wallet blocklist(s): metamask; Official name on a different TLD; Parked / for-sale page.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Brand named on the page (2x); Already on public wallet blocklist(s): metamask; Official name on a different TLD; Parked / for-sale page.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamask.xyz/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Brand named on the page (2x); Already on public wallet blocklist(s): metamask; Official name on a different TLD; Parked / for-sale page.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Brand named on the page (2x); Already on public wallet blocklist(s): metamask; Official name on a different TLD; Parked / for-sale page.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamask.xyz - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamask.xyz
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Official name on a different TLD
- Already on public wallet blocklist(s): metamask
- Brand named on the page (2x)
- Parked / for-sale page
- Resolves to 52.40.42.113, 44.232.173.249
- Page title: "MetaMask.xyz for sale | Spaceship.com"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## netamask.io (high, phishing-likely, 55/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: netamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain netamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://netamask[.]io/
- Homoglyph lookalike of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "netamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "netamask.io"

We are not affiliated with the operator of netamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: netamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://netamask[.]io/ (185.53.179.128) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Homoglyph lookalike of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "netamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "netamask.io"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fnetamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://netamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Homoglyph lookalike of the official domain; Already on public wallet blocklist(s): metamask; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "netamask.io"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Homoglyph lookalike of the official domain; Already on public wallet blocklist(s): metamask; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "netamask.io"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://netamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Homoglyph lookalike of the official domain; Already on public wallet blocklist(s): metamask; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "netamask.io"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Homoglyph lookalike of the official domain; Already on public wallet blocklist(s): metamask; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "netamask.io"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] netamask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: netamask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Homoglyph lookalike of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "netamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "netamask.io"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metanask.io (high, phishing-likely, 55/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metanask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metanask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://metanask[.]io/
- Homoglyph lookalike of the official domain
- One of 6 lookalikes on the same DNS account (ns1.ns306.parklogic.com + ns2.ns306.parklogic.com): a single operator
- Already on public wallet blocklist(s): metamask
- Bot challenge or redirect stub ("Redirecting"): real content not visible
- Resolves to 162.4.84.247
- Page title: "Redirecting..."

We are not affiliated with the operator of metanask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to ParkLogic Pty Ltd

**File at:** tech@parklogic.com  
**Subject:** Phishing site hosted on your network: metanask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello ParkLogic Pty Ltd,

hxxp://metanask[.]io/ (162.4.84.247) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Homoglyph lookalike of the official domain
- One of 6 lookalikes on the same DNS account (ns1.ns306.parklogic.com + ns2.ns306.parklogic.com): a single operator
- Already on public wallet blocklist(s): metamask
- Bot challenge or redirect stub ("Redirecting"): real content not visible
- Resolves to 162.4.84.247
- Page title: "Redirecting..."

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmetanask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://metanask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Homoglyph lookalike of the official domain; Already on public wallet blocklist(s): metamask; One of 6 lookalikes on the same DNS account (ns1.ns306.parklogic.com + ns2.ns306.parklogic.com): a single operator; Bot challenge or redirect stub ("Redirecting"): real content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Homoglyph lookalike of the official domain; Already on public wallet blocklist(s): metamask; One of 6 lookalikes on the same DNS account (ns1.ns306.parklogic.com + ns2.ns306.parklogic.com): a single operator; Bot challenge or redirect stub ("Redirecting"): real content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://metanask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Homoglyph lookalike of the official domain; Already on public wallet blocklist(s): metamask; One of 6 lookalikes on the same DNS account (ns1.ns306.parklogic.com + ns2.ns306.parklogic.com): a single operator; Bot challenge or redirect stub ("Redirecting"): real content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Homoglyph lookalike of the official domain; Already on public wallet blocklist(s): metamask; One of 6 lookalikes on the same DNS account (ns1.ns306.parklogic.com + ns2.ns306.parklogic.com): a single operator; Bot challenge or redirect stub ("Redirecting"): real content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metanask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metanask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Homoglyph lookalike of the official domain
- One of 6 lookalikes on the same DNS account (ns1.ns306.parklogic.com + ns2.ns306.parklogic.com): a single operator
- Already on public wallet blocklist(s): metamask
- Bot challenge or redirect stub ("Redirecting"): real content not visible
- Resolves to 162.4.84.247
- Page title: "Redirecting..."
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamask.claims (high, phishing-likely, 55/100)

### Registrar abuse report to NICENIC INTERNATIONAL GROUP CO., LIMITED

**File at:** abuse@nicenic.net  
**Subject:** Phishing / brand impersonation: metamask.claims impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NICENIC INTERNATIONAL GROUP CO., LIMITED abuse team,

The domain metamask[.]claims (registered with you on 2025-12-04) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamask[.]claims/
- Official name on a different TLD
- Hostname contains a lure word (claim/airdrop/support/...)
- One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator
- Already on public wallet blocklist(s): metamask
- Page not reachable: Connect Timeout Error (attempted address: metamask.claims:443, timeout: 10000ms)
- Resolves to 127.0.0.127

We are not affiliated with the operator of metamask[.]claims. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3765, abuse phone +852.68584411

### Hosting abuse report to Internet Assigned Numbers Authority

**File at:** abuse@iana.org  
**Subject:** Phishing site hosted on your network: metamask.claims (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Internet Assigned Numbers Authority,

hxxps://metamask[.]claims/ (127.0.0.127) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Official name on a different TLD
- Hostname contains a lure word (claim/airdrop/support/...)
- One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator
- Already on public wallet blocklist(s): metamask
- Page not reachable: Connect Timeout Error (attempted address: metamask.claims:443, timeout: 10000ms)
- Resolves to 127.0.0.127

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamask.claims%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamask.claims/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Official name on a different TLD; One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator; Page not reachable: Connect Timeout Error (attempted address: metamask.claims:443, timeout: 10000ms).`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Official name on a different TLD; One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator; Page not reachable: Connect Timeout Error (attempted address: metamask.claims:443, timeout: 10000ms).
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamask.claims/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Official name on a different TLD; One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator; Page not reachable: Connect Timeout Error (attempted address: metamask.claims:443, timeout: 10000ms).`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Official name on a different TLD; One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator; Page not reachable: Connect Timeout Error (attempted address: metamask.claims:443, timeout: 10000ms).
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamask.claims - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamask.claims
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Official name on a different TLD
- Hostname contains a lure word (claim/airdrop/support/...)
- One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator
- Already on public wallet blocklist(s): metamask
- Page not reachable: Connect Timeout Error (attempted address: metamask.claims:443, timeout: 10000ms)
- Resolves to 127.0.0.127
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamaska.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metamaska.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metamaska[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamaska[.]io/
- Typosquat (addition) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (76 chars of text, title "Coming Soon"): content not visible
- Resolves to 198.185.159.145
- Page title: "Coming Soon"

We are not affiliated with the operator of metamaska[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to Squarespace, Inc.

**File at:** abuse-network@squarespace.com  
**Subject:** Phishing site hosted on your network: metamaska.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Squarespace, Inc.,

hxxps://metamaska[.]io/ (198.185.159.145) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (addition) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (76 chars of text, title "Coming Soon"): content not visible
- Resolves to 198.185.159.145
- Page title: "Coming Soon"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamaska.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamaska.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (addition) of the official domain; Almost empty page (76 chars of text, title "Coming Soon"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (addition) of the official domain; Almost empty page (76 chars of text, title "Coming Soon"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamaska.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (addition) of the official domain; Almost empty page (76 chars of text, title "Coming Soon"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (addition) of the official domain; Almost empty page (76 chars of text, title "Coming Soon"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamaska.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamaska.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (addition) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (76 chars of text, title "Coming Soon"): content not visible
- Resolves to 198.185.159.145
- Page title: "Coming Soon"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamasks.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metamasks.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metamasks[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamasks[.]io/
- Typosquat (addition) of the official domain
- Already on public wallet blocklist(s): metamask, scamsniffer
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 76.223.54.146, 13.248.169.48

We are not affiliated with the operator of metamasks[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to Amazon.com, Inc.

**File at:** trustandsafety@support.aws.com  
**Subject:** Phishing site hosted on your network: metamasks.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Amazon.com, Inc.,

hxxps://metamasks[.]io/ (76.223.54.146, 13.248.169.48) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (addition) of the official domain
- Already on public wallet blocklist(s): metamask, scamsniffer
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 76.223.54.146, 13.248.169.48

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamasks.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamasks.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask, scamsniffer; Typosquat (addition) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask, scamsniffer; Typosquat (addition) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamasks.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask, scamsniffer; Typosquat (addition) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask, scamsniffer; Typosquat (addition) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.


## mdtamask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: mdtamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain mdtamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://mdtamask[.]io/
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 91.195.240.94
- Page title: "mdtamask.io - mdtamask Zasoby i informacje."

We are not affiliated with the operator of mdtamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to IX1-MNT

**File at:** abuse@internetx.com  
**Subject:** Phishing site hosted on your network: mdtamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello IX1-MNT,

hxxps://mdtamask[.]io/ (91.195.240.94) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 91.195.240.94
- Page title: "mdtamask.io - mdtamask Zasoby i informacje."

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmdtamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://mdtamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://mdtamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] mdtamask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: mdtamask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 91.195.240.94
- Page title: "mdtamask.io - mdtamask Zasoby i informacje."
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metemask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metemask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metemask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metomask[.]io/
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Bot challenge or redirect stub ("Домен не прикреплен"): real content not visible
- Resolves to 159.194.208.102
- Page title: "Домен не прикреплен"

We are not affiliated with the operator of metemask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to BEGET-MNT

**File at:** abuse@beget.ru  
**Subject:** Phishing site hosted on your network: metemask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello BEGET-MNT,

hxxps://metomask[.]io/ (159.194.208.102) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Bot challenge or redirect stub ("Домен не прикреплен"): real content not visible
- Resolves to 159.194.208.102
- Page title: "Домен не прикреплен"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetomask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metomask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Bot challenge or redirect stub ("Домен не прикреплен"): real content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Bot challenge or redirect stub ("Домен не прикреплен"): real content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metomask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Bot challenge or redirect stub ("Домен не прикреплен"): real content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Bot challenge or redirect stub ("Домен не прикреплен"): real content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metemask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metemask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Bot challenge or redirect stub ("Домен не прикреплен"): real content not visible
- Resolves to 159.194.208.102
- Page title: "Домен не прикреплен"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamqsk.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metamqsk.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metamqsk[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamqsk[.]io/
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 91.195.240.94
- Page title: "metamqsk.io - metamqsk Zasoby i informacje."

We are not affiliated with the operator of metamqsk[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to IX1-MNT

**File at:** abuse@internetx.com  
**Subject:** Phishing site hosted on your network: metamqsk.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello IX1-MNT,

hxxps://metamqsk[.]io/ (91.195.240.94) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 91.195.240.94
- Page title: "metamqsk.io - metamqsk Zasoby i informacje."

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamqsk.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamqsk.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamqsk.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamqsk.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamqsk.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 91.195.240.94
- Page title: "metamqsk.io - metamqsk Zasoby i informacje."
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamark.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metamark.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metamark[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamark[.]io/
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 76.223.67.189, 13.248.213.45

We are not affiliated with the operator of metamark[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to Amazon.com, Inc.

**File at:** trustandsafety@support.aws.com  
**Subject:** Phishing site hosted on your network: metamark.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Amazon.com, Inc.,

hxxps://metamark[.]io/ (76.223.67.189, 13.248.213.45) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 76.223.67.189, 13.248.213.45

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamark.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamark.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamark.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamark.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamark.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 76.223.67.189, 13.248.213.45
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamasj.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metamasj.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metamasj[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://metamasj[.]io/
- Typosquat (bitsquatting) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "metamasj.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metamasj.io"

We are not affiliated with the operator of metamasj[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: metamasj.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://metamasj[.]io/ (185.53.179.128) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "metamasj.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metamasj.io"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmetamasj.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://metamasj.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metamasj.io"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metamasj.io"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://metamasj.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metamasj.io"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metamasj.io"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamasj.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamasj.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "metamasj.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metamasj.io"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamasi.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metamasi.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metamasi[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://metamasi[.]io/
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 91.195.240.94
- Page title: "metamasi.io - metamasi Zasoby i informacje."

We are not affiliated with the operator of metamasi[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to IX1-MNT

**File at:** abuse@internetx.com  
**Subject:** Phishing site hosted on your network: metamasi.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello IX1-MNT,

hxxp://metamasi[.]io/ (91.195.240.94) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 91.195.240.94
- Page title: "metamasi.io - metamasi Zasoby i informacje."

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmetamasi.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://metamasi.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://metamasi.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (bitsquatting) of the official domain; Parked / for-sale page.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamasi.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamasi.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (bitsquatting) of the official domain
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 91.195.240.94
- Page title: "metamasi.io - metamasi Zasoby i informacje."
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## meta-mask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: meta-mask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain meta-mask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://meta-mask[.]io/
- Typosquat (hyphenation) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (153 chars of text, title "Index of /"): content not visible
- Resolves to 23.153.104.2
- Page title: "Index of /"

We are not affiliated with the operator of meta-mask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to Aquiryn LLC

**File at:** abuse@aquiryn.com  
**Subject:** Phishing site hosted on your network: meta-mask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Aquiryn LLC,

hxxps://meta-mask[.]io/ (23.153.104.2) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (hyphenation) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (153 chars of text, title "Index of /"): content not visible
- Resolves to 23.153.104.2
- Page title: "Index of /"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmeta-mask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://meta-mask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (hyphenation) of the official domain; Almost empty page (153 chars of text, title "Index of /"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (hyphenation) of the official domain; Almost empty page (153 chars of text, title "Index of /"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://meta-mask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (hyphenation) of the official domain; Almost empty page (153 chars of text, title "Index of /"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (hyphenation) of the official domain; Almost empty page (153 chars of text, title "Index of /"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] meta-mask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: meta-mask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (hyphenation) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (153 chars of text, title "Index of /"): content not visible
- Resolves to 23.153.104.2
- Page title: "Index of /"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## meytamask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: meytamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain meytamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://meytamask[.]io/
- Typosquat (insertion) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "meytamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "meytamask.io"

We are not affiliated with the operator of meytamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: meytamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://meytamask[.]io/ (185.53.179.128) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (insertion) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "meytamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "meytamask.io"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmeytamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://meytamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meytamask.io"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meytamask.io"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://meytamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meytamask.io"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meytamask.io"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] meytamask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: meytamask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (insertion) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "meytamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "meytamask.io"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metyamask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metyamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metyamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://metyamask[.]io/
- Typosquat (insertion) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "metyamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metyamask.io"

We are not affiliated with the operator of metyamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: metyamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://metyamask[.]io/ (185.53.179.128) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (insertion) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "metyamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metyamask.io"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmetyamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://metyamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metyamask.io"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metyamask.io"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://metyamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metyamask.io"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (insertion) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metyamask.io"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metyamask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metyamask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (insertion) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "metyamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metyamask.io"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metmask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metmask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metmask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metmask[.]io/
- Typosquat (omission) of the official domain
- Already on public wallet blocklist(s): scamsniffer
- Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna
- Resolves to 45.77.75.133, 45.77.92.157, 207.246.78.75

We are not affiliated with the operator of metmask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to Vultr Holdings, LLC

**File at:** abuse@vultr.com  
**Subject:** Phishing site hosted on your network: metmask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Vultr Holdings, LLC,

hxxps://metmask[.]io/ (45.77.75.133, 45.77.92.157, 207.246.78.75) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (omission) of the official domain
- Already on public wallet blocklist(s): scamsniffer
- Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna
- Resolves to 45.77.75.133, 45.77.92.157, 207.246.78.75

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetmask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metmask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metmask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://metmask.io/`
- **Please explain why this content is malicious:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna. Observed 2026-11-01. Reported on behalf of MetaMask.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-metmask.io
yarn add:blocklist metmask.io

PR title: Block metmask.io (MetaMask impersonation)
PR body: Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Typosquat (omission) of the official domain; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna.
```


## mrtamask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: mrtamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain mrtamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://mrtamask[.]io/
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "mrtamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "mrtamask.io"

We are not affiliated with the operator of mrtamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: mrtamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://mrtamask[.]io/ (185.53.179.128) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "mrtamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "mrtamask.io"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmrtamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://mrtamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "mrtamask.io"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "mrtamask.io"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://mrtamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "mrtamask.io"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "mrtamask.io"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] mrtamask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: mrtamask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "mrtamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "mrtamask.io"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## mwtamask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: mwtamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain mwtamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://mwtamask[.]io/
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "mwtamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "mwtamask.io"

We are not affiliated with the operator of mwtamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: mwtamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://mwtamask[.]io/ (185.53.179.128) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "mwtamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "mwtamask.io"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmwtamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://mwtamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "mwtamask.io"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "mwtamask.io"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://mwtamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "mwtamask.io"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "mwtamask.io"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] mwtamask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: mwtamask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "mwtamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "mwtamask.io"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## meyamask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: meyamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain meyamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://meyamask[.]io/
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "meyamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "meyamask.io"

We are not affiliated with the operator of meyamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: meyamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://meyamask[.]io/ (185.53.179.128) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "meyamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "meyamask.io"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmeyamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://meyamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meyamask.io"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meyamask.io"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://meyamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meyamask.io"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meyamask.io"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] meyamask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: meyamask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "meyamask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "meyamask.io"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## megamask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: megamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain megamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://megamask[.]io/
- Typosquat (replacement) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 66.96.162.138

We are not affiliated with the operator of megamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to Newfold Digital, Inc.

**File at:** IARPOC@Newfold.com  
**Subject:** Phishing site hosted on your network: megamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Newfold Digital, Inc.,

hxxps://megamask[.]io/ (66.96.162.138) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 66.96.162.138

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmegamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://megamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://megamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; Almost empty page (0 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] megamask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: megamask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 66.96.162.138
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## meramask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: meramask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain meramask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://meramask[.]io/
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "meramask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "meramask.io"

We are not affiliated with the operator of meramask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: meramask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://meramask[.]io/ (185.53.179.128) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "meramask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "meramask.io"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmeramask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://meramask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meramask.io"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meramask.io"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://meramask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meramask.io"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "meramask.io"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] meramask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: meramask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "meramask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "meramask.io"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metsmask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metsmask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metsmask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://metsmask[.]io/
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask, scamsniffer
- Almost empty page (0 chars of text, title "metsmask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metsmask.io"

We are not affiliated with the operator of metsmask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: metsmask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://metsmask[.]io/ (185.53.179.128) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask, scamsniffer
- Almost empty page (0 chars of text, title "metsmask.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metsmask.io"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmetsmask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://metsmask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask, scamsniffer; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metsmask.io"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask, scamsniffer; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metsmask.io"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://metsmask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask, scamsniffer; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metsmask.io"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask, scamsniffer; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metsmask.io"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.


## metamasl.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: metamasl.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain metamasl[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://metamasl[.]io/
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "metamasl.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metamasl.io"

We are not affiliated with the operator of metamasl[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to TIA27-MNT

**File at:** abuse@teaminternet.com  
**Subject:** Phishing site hosted on your network: metamasl.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello TIA27-MNT,

hxxp://metamasl[.]io/ (185.53.179.128) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "metamasl.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metamasl.io"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmetamasl.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://metamasl.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metamasl.io"): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metamasl.io"): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://metamasl.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metamasl.io"): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Typosquat (replacement) of the official domain; One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator; Almost empty page (0 chars of text, title "metamasl.io"): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamasl.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamasl.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Typosquat (replacement) of the official domain
- One of 15 lookalikes on the same DNS account (ns1.dyna-ns.net + ns2.dyna-ns.net): a single operator
- Already on public wallet blocklist(s): metamask
- Almost empty page (0 chars of text, title "metamasl.io"): content not visible
- Resolves to 185.53.179.128
- Page title: "metamasl.io"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## claim-metamask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: claim-metamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain claim-metamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://claim-metamask[.]io/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Page not reachable: Connect Timeout Error (attempted address: claim-metamask.io:443, timeout: 10000m
- Resolves to 58.64.137.69

We are not affiliated with the operator of claim-metamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report

**File at:** esabuse@hkbnes.net  
**Subject:** Phishing site hosted on your network: claim-metamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team,

hxxps://claim-metamask[.]io/ (58.64.137.69) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Page not reachable: Connect Timeout Error (attempted address: claim-metamask.io:443, timeout: 10000m
- Resolves to 58.64.137.69

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fclaim-metamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://claim-metamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: Connect Timeout Error (attempted address: claim-metamask.io:443, timeout: 10000m.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: Connect Timeout Error (attempted address: claim-metamask.io:443, timeout: 10000m.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://claim-metamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: Connect Timeout Error (attempted address: claim-metamask.io:443, timeout: 10000m.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: Connect Timeout Error (attempted address: claim-metamask.io:443, timeout: 10000m.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://claim-metamask.io/`
- **Please explain why this content is malicious:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: Connect Timeout Error (attempted address: claim-metamask.io:443, timeout: 10000m. Observed 2026-11-01. Reported on behalf of MetaMask.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: Connect Timeout Error (attempted address: claim-metamask.io:443, timeout: 10000m.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-claim-metamask.io
yarn add:blocklist claim-metamask.io

PR title: Block claim-metamask.io (MetaMask impersonation)
PR body: Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page not reachable: Connect Timeout Error (attempted address: claim-metamask.io:443, timeout: 10000m.
```


## claimmetamask.com (high, phishing-likely, 50/100)

### Registrar abuse report to GoDaddy.com, LLC

**File at:** abuse@godaddy.com  
**Subject:** Phishing / brand impersonation: claimmetamask.com impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello GoDaddy.com, LLC abuse team,

The domain claimmetamask[.]com (registered with you on 2025-10-28) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://claimmetamask[.]com/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Page returned HTTP 525
- Resolves to 104.21.51.139, 172.67.181.40
- Page title: "claimmetamask.com | 525: SSL handshake failed"

We are not affiliated with the operator of claimmetamask[.]com. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 146, abuse phone 480-624-2505

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: claimmetamask.com (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://claimmetamask[.]com/ (104.21.51.139, 172.67.181.40) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Page returned HTTP 525
- Resolves to 104.21.51.139, 172.67.181.40
- Page title: "claimmetamask.com | 525: SSL handshake failed"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fclaimmetamask.com%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://claimmetamask.com/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 525.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 525.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://claimmetamask.com/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 525.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 525.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://claimmetamask.com/`
- **Please explain why this content is malicious:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 525. Observed 2026-11-01. Reported on behalf of MetaMask.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 525.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-claimmetamask.com
yarn add:blocklist claimmetamask.com

PR title: Block claimmetamask.com (MetaMask impersonation)
PR body: Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 525.
```


## metamaskairdrop.com (high, phishing-likely, 50/100)

### Registrar abuse report to GoDaddy.com, LLC

**File at:** abuse@godaddy.com  
**Subject:** Phishing / brand impersonation: metamaskairdrop.com impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello GoDaddy.com, LLC abuse team,

The domain metamaskairdrop[.]com (registered with you on 2024-02-21) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamaskairdrop[.]com/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 15.197.148.33, 3.33.130.190

We are not affiliated with the operator of metamaskairdrop[.]com. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 146, abuse phone 480-624-2505

### Hosting abuse report to Amazon Technologies Inc.

**File at:** trustandsafety@support.aws.com  
**Subject:** Phishing site hosted on your network: metamaskairdrop.com (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Amazon Technologies Inc.,

hxxps://metamaskairdrop[.]com/ (15.197.148.33, 3.33.130.190) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (0 chars of text, title ""): content not visible
- Resolves to 15.197.148.33, 3.33.130.190

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamaskairdrop.com%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamaskairdrop.com/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamaskairdrop.com/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://metamaskairdrop.com/`
- **Please explain why this content is malicious:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible. Observed 2026-11-01. Reported on behalf of MetaMask.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-metamaskairdrop.com
yarn add:blocklist metamaskairdrop.com

PR title: Block metamaskairdrop.com (MetaMask impersonation)
PR body: Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (0 chars of text, title ""): content not visible.
```


## metamaskrewards.com (high, phishing-likely, 50/100)

### Registrar abuse report to Spaceship, Inc.

**File at:** abuse@spaceship.com  
**Subject:** Phishing / brand impersonation: metamaskrewards.com impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Spaceship, Inc. abuse team,

The domain metamaskrewards[.]com (registered with you on 2025-10-28) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamaskrewards[.]com/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Parked / for-sale page
- Resolves to 44.232.173.249, 52.40.42.113
- Page title: "metamaskrewards.com for sale | Spaceship.com"

We are not affiliated with the operator of metamaskrewards[.]com. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3862, abuse phone +1.9854014545

### Hosting abuse report to Amazon.com, Inc.

**File at:** trustandsafety@support.aws.com  
**Subject:** Phishing site hosted on your network: metamaskrewards.com (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Amazon.com, Inc.,

hxxps://metamaskrewards[.]com/ (44.232.173.249, 52.40.42.113) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Parked / for-sale page
- Resolves to 44.232.173.249, 52.40.42.113
- Page title: "metamaskrewards.com for sale | Spaceship.com"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamaskrewards.com%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamaskrewards.com/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamaskrewards.com/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://metamaskrewards.com/`
- **Please explain why this content is malicious:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page. Observed 2026-11-01. Reported on behalf of MetaMask.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-metamaskrewards.com
yarn add:blocklist metamaskrewards.com

PR title: Block metamaskrewards.com (MetaMask impersonation)
PR body: Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page.
```


## metamasksupport.app (high, phishing-likely, 50/100)

### Registrar abuse report to NICENIC INTERNATIONAL GROUP CO., LIMITED

**File at:** abuse@nicenic.net  
**Subject:** Phishing / brand impersonation: metamasksupport.app impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NICENIC INTERNATIONAL GROUP CO., LIMITED abuse team,

The domain metamasksupport[.]app (registered with you on 2026-10-13) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamasksupport[.]app/
- Brand name plus a phishing lure word
- One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 62.204.35.164
- Page title: "Domain for Sale"

We are not affiliated with the operator of metamasksupport[.]app. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3765, abuse phone +1.4006228300

### Hosting abuse report to mnt-ee-bluevps-1

**File at:** abuse@bluevps.com  
**Subject:** Phishing site hosted on your network: metamasksupport.app (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello mnt-ee-bluevps-1,

hxxps://metamasksupport[.]app/ (62.204.35.164) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 62.204.35.164
- Page title: "Domain for Sale"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamasksupport.app%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamasksupport.app/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator; Parked / for-sale page.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator; Parked / for-sale page.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamasksupport.app/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator; Parked / for-sale page.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator; Parked / for-sale page.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamasksupport.app - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamasksupport.app
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- One of 5 lookalikes on the same DNS account (ns3.my-ndns.com + ns4.my-ndns.com): a single operator
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 62.204.35.164
- Page title: "Domain for Sale"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamaskhelp.app (high, phishing-likely, 50/100)

### Registrar abuse report to Porkbun LLC

**File at:** abuse@porkbun.com  
**Subject:** Phishing / brand impersonation: metamaskhelp.app impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Porkbun LLC abuse team,

The domain metamaskhelp[.]app (registered with you on 2025-10-14) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://metamaskhelp[.]app/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 207.207.210.107, 207.207.210.229
- Page title: "porkbun.com | expired domain"

We are not affiliated with the operator of metamaskhelp[.]app. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 1861, abuse phone +1.8557675286

### Hosting abuse report to Porkbun, LLC

**File at:** abuse@porkbun.com  
**Subject:** Phishing site hosted on your network: metamaskhelp.app (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Porkbun, LLC,

hxxp://metamaskhelp[.]app/ (207.207.210.107, 207.207.210.229) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 207.207.210.107, 207.207.210.229
- Page title: "porkbun.com | expired domain"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmetamaskhelp.app%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://metamaskhelp.app/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Parked / for-sale page.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Parked / for-sale page.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://metamaskhelp.app/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Parked / for-sale page.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Parked / for-sale page.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamaskhelp.app - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamaskhelp.app
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Parked / for-sale page
- Resolves to 207.207.210.107, 207.207.210.229
- Page title: "porkbun.com | expired domain"
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## connect-metamask.app (high, phishing-likely, 50/100)

### Registrar abuse report to NICENIC INTERNATIONAL GROUP CO., LIMITED

**File at:** abuse@nicenic.net  
**Subject:** Phishing / brand impersonation: connect-metamask.app impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NICENIC INTERNATIONAL GROUP CO., LIMITED abuse team,

The domain connect-metamask[.]app (registered with you on 2026-10-18) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://connect-metamask[.]app/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 188.114.96.3, 188.114.97.3

We are not affiliated with the operator of connect-metamask[.]app. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3765, abuse phone +1.4006228300

### Hosting abuse report to MNT-CLOUDFLARE

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: connect-metamask.app (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello MNT-CLOUDFLARE,

hxxps://connect-metamask[.]app/ (188.114.96.3, 188.114.97.3) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 188.114.96.3, 188.114.97.3

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fconnect-metamask.app%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://connect-metamask.app/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://connect-metamask.app/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] connect-metamask.app - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: connect-metamask.app
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 188.114.96.3, 188.114.97.3
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## wallet-metamask.app (high, phishing-likely, 50/100)

### Registrar abuse report to NICENIC INTERNATIONAL GROUP CO., LIMITED

**File at:** abuse@nicenic.net  
**Subject:** Phishing / brand impersonation: wallet-metamask.app impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NICENIC INTERNATIONAL GROUP CO., LIMITED abuse team,

The domain wallet-metamask[.]app (registered with you on 2026-10-05) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://wallet-metamask[.]app/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 188.114.97.0, 188.114.96.0

We are not affiliated with the operator of wallet-metamask[.]app. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 3765, abuse phone +1.4006228300

### Hosting abuse report to MNT-CLOUDFLARE

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: wallet-metamask.app (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello MNT-CLOUDFLARE,

hxxps://wallet-metamask[.]app/ (188.114.97.0, 188.114.96.0) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 188.114.97.0, 188.114.96.0

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fwallet-metamask.app%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://wallet-metamask.app/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://wallet-metamask.app/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] wallet-metamask.app - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: wallet-metamask.app
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 188.114.97.0, 188.114.96.0
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## app-metamask.com (high, phishing-likely, 50/100)

### Registrar abuse report to Gandi SAS

**File at:** abuse@support.gandi.net  
**Subject:** Phishing / brand impersonation: app-metamask.com impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Gandi SAS abuse team,

The domain app-metamask[.]com (registered with you on 2026-10-31) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://app-metamask[.]com/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (10 chars of text, title ""): content not visible
- Resolves to 74.91.199.229

We are not affiliated with the operator of app-metamask[.]com. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 81, abuse phone +33.170377661

### Hosting abuse report to Newfold Digital, Inc.

**File at:** IARPOC@Newfold.com  
**Subject:** Phishing site hosted on your network: app-metamask.com (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Newfold Digital, Inc.,

hxxps://app-metamask[.]com/ (74.91.199.229) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Almost empty page (10 chars of text, title ""): content not visible
- Resolves to 74.91.199.229

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fapp-metamask.com%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://app-metamask.com/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (10 chars of text, title ""): content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (10 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://app-metamask.com/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (10 chars of text, title ""): content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (10 chars of text, title ""): content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `https://app-metamask.com/`
- **Please explain why this content is malicious:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (10 chars of text, title ""): content not visible. Observed 2026-11-01. Reported on behalf of MetaMask.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (10 chars of text, title ""): content not visible.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-app-metamask.com
yarn add:blocklist app-metamask.com

PR title: Block app-metamask.com (MetaMask impersonation)
PR body: Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Almost empty page (10 chars of text, title ""): content not visible.
```


## metamaskofficial.com (high, phishing-likely, 50/100)

### Registrar abuse report to NameSilo, LLC

**File at:** abuse@namesilo.com  
**Subject:** Phishing / brand impersonation: metamaskofficial.com impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello NameSilo, LLC abuse team,

The domain metamaskofficial[.]com (registered with you on 2025-11-06) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://metamaskofficial[.]com/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Parked / for-sale page
- Brand word used without any crypto context (1x): probably an unrelated business
- Resolves to 91.195.240.123
- Page title: "metamaskofficial.com - metamaskofficial Zasoby i informacje."

We are not affiliated with the operator of metamaskofficial[.]com. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 1479, abuse phone +1.4805240066

### Hosting abuse report to IX1-MNT

**File at:** abuse@internetx.com  
**Subject:** Phishing site hosted on your network: metamaskofficial.com (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello IX1-MNT,

hxxp://metamaskofficial[.]com/ (91.195.240.123) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Parked / for-sale page
- Brand word used without any crypto context (1x): probably an unrelated business
- Resolves to 91.195.240.123
- Page title: "metamaskofficial.com - metamaskofficial Zasoby i informacje."

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmetamaskofficial.com%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://metamaskofficial.com/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page; Brand word used without any crypto context (1x): probably an unrelated business.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page; Brand word used without any crypto context (1x): probably an unrelated business.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://metamaskofficial.com/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page; Brand word used without any crypto context (1x): probably an unrelated business.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page; Brand word used without any crypto context (1x): probably an unrelated business.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `http://metamaskofficial.com/`
- **Please explain why this content is malicious:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page; Brand word used without any crypto context (1x): probably an unrelated business. Observed 2026-11-01. Reported on behalf of MetaMask.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page; Brand word used without any crypto context (1x): probably an unrelated business.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-metamaskofficial.com
yarn add:blocklist metamaskofficial.com

PR title: Block metamaskofficial.com (MetaMask impersonation)
PR body: Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Parked / for-sale page; Brand word used without any crypto context (1x): probably an unrelated business.
```


## metamask-verify.com (high, phishing-likely, 50/100)

### Registrar abuse report to IONOS SE

**File at:** abuse@ionos.com  
**Subject:** Phishing / brand impersonation: metamask-verify.com impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello IONOS SE abuse team,

The domain metamask-verify[.]com (registered with you on 2026-06-30) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxp://metamask-verify[.]com/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Page returned HTTP 409
- Resolves to 216.24.57.1
- Page title: "DNS resolution error | metamask-verify.com | Cloudflare"

We are not affiliated with the operator of metamask-verify[.]com. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 83, abuse phone +1.6105601459

### Hosting abuse report to Render

**File at:** abuse@render.com  
**Subject:** Phishing site hosted on your network: metamask-verify.com (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Render,

hxxp://metamask-verify[.]com/ (216.24.57.1) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): scamsniffer
- Page returned HTTP 409
- Resolves to 216.24.57.1
- Page title: "DNS resolution error | metamask-verify.com | Cloudflare"

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=http%3A%2F%2Fmetamask-verify.com%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `http://metamask-verify.com/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 409.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 409.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `http://metamask-verify.com/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 409.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 409.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### MetaMask eth-phishing-detect: blocklist addition issue

**File at:** https://github.com/MetaMask/eth-phishing-detect/issues/new?template=01-blocklist-addition.yaml

- **Malicious domains, IPs, IPFS hashes, or IPNS names:** `http://metamask-verify.com/`
- **Please explain why this content is malicious:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 409. Observed 2026-11-01. Reported on behalf of MetaMask.`
- **Is this a duplicate request?:** `Search open issues for the domain first, then tick the box`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 409.
```

### MetaMask eth-phishing-detect: alternative PR (slower; most merges are bot syncs)

**File at:** https://github.com/MetaMask/eth-phishing-detect

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

git checkout -b block-metamask-verify.com
yarn add:blocklist metamask-verify.com

PR title: Block metamask-verify.com (MetaMask impersonation)
PR body: Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): scamsniffer; Brand name plus a phishing lure word; Page returned HTTP 409.
```


## metamask-verify.org (high, phishing-likely, 50/100)

### Registrar abuse report to Porkbun LLC

**File at:** abuse@porkbun.com  
**Subject:** Phishing / brand impersonation: metamask-verify.org impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Porkbun LLC abuse team,

The domain metamask-verify[.]org (registered with you on 2026-07-11) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamask-verify[.]org/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna
- Resolves to 137.220.60.224

We are not affiliated with the operator of metamask-verify[.]org. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 1861, abuse phone +1.8557675286

### Hosting abuse report to Vultr Holdings, LLC

**File at:** abuse@vultr.com  
**Subject:** Phishing site hosted on your network: metamask-verify.org (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Vultr Holdings, LLC,

hxxps://metamask-verify[.]org/ (137.220.60.224) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna
- Resolves to 137.220.60.224

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamask-verify.org%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamask-verify.org/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamask-verify.org/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamask-verify.org - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamask-verify.org
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: 807F20EE01000000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert interna
- Resolves to 137.220.60.224
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## metamaskrestore.org (high, phishing-likely, 50/100)

### Registrar abuse report to Porkbun LLC

**File at:** abuse@porkbun.com  
**Subject:** Phishing / brand impersonation: metamaskrestore.org impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Porkbun LLC abuse team,

The domain metamaskrestore[.]org (registered with you on 2026-08-22) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://metamaskrestore[.]org/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Bot challenge or redirect stub ("Just a moment..."): real content not visible
- Resolves to 104.21.13.252, 172.67.133.145
- Page title: "Just a moment..."

We are not affiliated with the operator of metamaskrestore[.]org. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Registrar IANA ID 1861, abuse phone +1.8557675286

### Hosting abuse report to Cloudflare, Inc.

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: metamaskrestore.org (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Cloudflare, Inc.,

hxxps://metamaskrestore[.]org/ (104.21.13.252, 172.67.133.145) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Bot challenge or redirect stub ("Just a moment..."): real content not visible
- Resolves to 104.21.13.252, 172.67.133.145
- Page title: "Just a moment..."

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fmetamaskrestore.org%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://metamaskrestore.org/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Bot challenge or redirect stub ("Just a moment..."): real content not visible.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Bot challenge or redirect stub ("Just a moment..."): real content not visible.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://metamaskrestore.org/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Bot challenge or redirect stub ("Just a moment..."): real content not visible.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Bot challenge or redirect stub ("Just a moment..."): real content not visible.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] metamaskrestore.org - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: metamaskrestore.org
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Bot challenge or redirect stub ("Just a moment..."): real content not visible
- Resolves to 104.21.13.252, 172.67.133.145
- Page title: "Just a moment..."
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.


## portal-metamask.io (high, phishing-likely, 50/100)

### Registrar abuse report

**File at:** (registrar abuse address not found via RDAP: look it up at https://lookup.icann.org)  
**Subject:** Phishing / brand impersonation: portal-metamask.io impersonates MetaMask

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello Abuse Team abuse team,

The domain portal-metamask[.]io (registered with you) is being used to impersonate MetaMask, a crypto project whose official site is hxxps://metamask[.]io, https://consensys[.]io. We ask you to suspend the domain under your abuse policy and the RAA section 3.18 obligations.

Evidence (observed 2026-11-01, read-only, URLs defanged):
- URL: hxxps://portal-metamask[.]io/
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 188.114.96.0, 188.114.97.0

We are not affiliated with the operator of portal-metamask[.]io. MetaMask has not authorised its use of the brand. Screenshots and HTML captures are available on request.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

### Hosting abuse report to MNT-CLOUDFLARE

**File at:** https://abuse.cloudflare.com/  
**Subject:** Phishing site hosted on your network: portal-metamask.io (MetaMask impersonation)

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Hello MNT-CLOUDFLARE,

hxxps://portal-metamask[.]io/ (188.114.96.0, 188.114.97.0) is hosted on your network and impersonates MetaMask (official: hxxps://metamask[.]io, https://consensys[.]io).

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 188.114.96.0, 188.114.97.0

Please take the content down under your acceptable use policy.

Regards,
{{REPORTER_NAME}}
{{REPORTER_ORG}}, acting for MetaMask under a Letter of Authorisation dated {{LOA_DATE}}
{{REPORTER_EMAIL}}
```

> Email alternative: abuse@cloudflare.com

### Google Safe Browsing report

**File at:** https://safebrowsing.google.com/safebrowsing/report_phish/?url=https%3A%2F%2Fportal-metamask.io%2F

- **Report Type:** `This page is not safe`
- **Threat Type:** `Social engineering (phishing) - pick the closest option shown`
- **Threat Category:** `Pick the closest option shown (impersonation / phishing)`
- **URL to report:** `https://portal-metamask.io/`
- **Additional details (max 800):** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.
```

> Web form with reCAPTCHA: a person has to submit it.

### Netcraft report

**File at:** https://report.netcraft.com/report

- **The URL of the site:** `https://portal-metamask.io/`
- **Further details:** `Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.`
- **Your email address:** `{{REPORTER_EMAIL}}`

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Impersonates MetaMask (official: https://metamask.io, https://consensys.io). Already on public wallet blocklist(s): metamask; Brand name plus a phishing lure word; Page not reachable: This operation was aborted; http: This operation was aborted.
```

> Web form with reCAPTCHA. Netcraft feeds many browser and registrar blocklists.

### ScamSniffer scam-database issue

**File at:** https://github.com/scamsniffer/scam-database/issues/new  
**Subject:** [Phishing] portal-metamask.io - MetaMask impersonation

```text
DRAFT - NOT FILED. File only after the brand owner approves it and has signed a Letter of Authorisation.

Domain: portal-metamask.io
Receiving addresses (with chain): {{ADD IF KNOWN, e.g. from a victim's drain tx}}
Impersonates: MetaMask (official: https://metamask.io, https://consensys.io)

Evidence (observed 2026-11-01):
- Brand name plus a phishing lure word
- Already on public wallet blocklist(s): metamask
- Page not reachable: This operation was aborted; http: This operation was aborted
- Resolves to 188.114.96.0, 188.114.97.0
```

> ScamSniffer asks for issues, not PRs (their JSON is regenerated). Attach the screenshot.
