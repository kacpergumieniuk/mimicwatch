# Mimicwatch: lookalike domains, cloned sites and copycat tokens of Ethereum and Base projects

Mimicwatch finds sites, domains and tokens that impersonate crypto projects on Ethereum and Base, keeps the evidence,
has AI agents triage each one and a person approve them in batches, and publishes the confirmed ones as an **open
dataset** (`dataset/`, MIT). Confirmed
entries that no wallet blocklist knows yet are reported to public blocklists such as MetaMask's
[eth-phishing-detect](https://github.com/MetaMask/eth-phishing-detect), so wallet users get a warning before they
connect or sign.

It is read-only towards suspects and never files anything by itself.

**Where it stands (2026-11-02):**

- 15 Ethereum/Base brands scanned with a 30-day lookback on 2026-11-01: 22,876 lookalike domain names generated,
  1,220 of them registered, 1,796 domains checked in the reports, 249 token name matches on Base and Ethereum.
- 257 high or critical domain findings. 241 were already on MetaMask's or ScamSniffer's list or behind a phishing
  interstitial, which is an outside check that the scorer flags the right things.
- 16 were on no list. Review rejected 8 (review sites, a staging site, a generic word), kept 5 on watch and approved 3
  page clones: `aerodrome.financial`, `portal-hydrex.xyz`, `moonwelldefi.pages.dev` (`review/decisions.json`).
- 2 of them were reported to MetaMask on 2026-11-02 in
  [eth-phishing-detect#308466](https://github.com/MetaMask/eth-phishing-detect/issues/308466), together with one
  clone of a NEAR app found by the NEAR edition of the engine. MetaMask added all three to its blocklist the same day
  ([PR #308577](https://github.com/MetaMask/eth-phishing-detect/pull/308577)).
- `dataset/entries.json` holds 244 entries (3 reviewed here, 241 confirmed by an outside list or host), each tagged
  with the brand it imitates. Rebuild it with `npm run export`.

**Who runs it.** Mimicwatch is built and operated by Kacper Gumieniuk (GitHub `kacpergumieniuk`) with AI agents
(Claude, by Anthropic) doing the engineering, the daily scans, the triage and the draft reports. A person spot-checks
that work and approves it in batches. Nothing is reported to a blocklist before that approval, and the review log
names who decided what.

**Related:** [Mimicwatch for NEAR](https://github.com/kacpergumieniuk/mimicwatch-near) is a separate edition of the
same engine for NEAR account names, with an on-chain registry on NEAR testnet.

## What it does

```
brand.json ──► domains ─┬─ dnstwist-style permutations ─► DNS ─┐
                        ├─ Certificate Transparency (crt.sh) ───┤
                        └─ newly registered domains (WhoisDS) ──┤
                                                                ├─► page fingerprint (HTTP + Playwright screenshot)
                                                                ├─► wallet blocklist status (MetaMask, ScamSniffer)
                                                                └─► score, label ─► RDAP abuse contacts ─► drafts
           tokens ── new pools on Base/Ethereum (free RPC logs) ─► name/symbol match ─► Canisell risk engine ─► score
                                                                                    ─► report.html / .pdf, drafts.md, findings.json
```

1. **Brand profile** (`brands/*.json`): name, official domains, official token contracts (chain + address), social handles, keywords, allowlist. See `brands/example-small-project.json`.
2. **Domain watcher**
   - Permutations of every official domain: addition, bitsquatting, homoglyph (Unicode IDN and ASCII like `rn`→`m`), hyphenation, insertion, omission, repetition, replacement, transposition, vowel swap, plural, TLD swap (40 TLDs) and lure words (`claim`, `airdrop`, `migrate`, `support`, ... x 6 TLDs). Implemented from scratch in `src/domains/permute.ts`, mirroring dnstwist's fuzzer set.
   - DNS resolution (NS/A/AAAA/MX) with the system resolver or `--dns`.
   - Certificate Transparency from crt.sh's JSON (one request every 5 s, long timeouts, retries; see the limits below).
   - Memory: hosts found by earlier scans of the same brand are re-checked every run.
   - Newly registered domains from the WhoisDS free daily list (last 7 days).
   - Nameserver clusters: many lookalikes on one DNS account point at one operator; the official nameservers mean a defensive registration by the brand.
3. **Page check** for live suspects: HTTP fetch of HTML, favicon and up to 6 scripts, then Playwright render with a screenshot for the most suspicious 40. Signals: title / text / favicon-hash similarity to the official site, brand mentions (not counting the page's own hostname), wallet-connect prompts, seed-phrase requests, drainer-style JS (blanket approvals, Permit2, typed-data signing, heavy obfuscation), lure words, parked pages, phishing interstitials (Cloudflare "Suspected Phishing"), and whether the page has any crypto context at all.
4. **Token watcher**: every token that got a Uniswap v2/v3/v4 or Aerodrome pool in the lookback window, from free `eth_getLogs`. Names and symbols come via multicall. Matches against the brand: same symbol, brand word in the name, one-character lookalikes and homoglyphs. Official addresses are excluded. On Base, the top matches go through the **Canisell** token-risk engine (honeypot simulation, liquidity, owner powers, creator), vendored in `src/vendor/canisell` with attribution.
5. **Drafts** for every high/critical or impersonating finding, in `drafts.md` and inside the report:
   - registrar abuse email (RDAP abuse contact, RAA 3.18),
   - hosting/platform abuse (IP RDAP; Cloudflare, Vercel, GitHub Pages, Firebase forms),
   - Google Safe Browsing and Netcraft form fields,
   - MetaMask eth-phishing-detect issue (plus the slower PR route),
   - ScamSniffer issue,
   - for tokens: a community warning post, an explorer label request and a ScamSniffer address report.

   Every draft starts with `DRAFT - NOT FILED` and has placeholders for the reporter and the date of the Letter of Authorisation.
6. **Output** per brand and run: `report.html` (weekly brand report: summary, severity counts, "needs a decision", "already blocked", watch list, everything ruled out, coverage and limits), `report.pdf` (`--pdf`), `drafts.md`, `findings.json`, `shots/*.jpg`.

### Labels and severity

| Label | Meaning | Severity |
| --- | --- | --- |
| `phishing-likely` | Seed-phrase request, brand + wallet prompt or drainer JS, or already on a wallet blocklist / behind a phishing interstitial | high or critical |
| `impersonation` | Brand content with crypto context or visual similarity, no wallet prompt seen | medium, or high when it copies the official title |
| `lookalike-other-crypto` | Lookalike name that serves other crypto content (competitor, affiliate, phishing kit for another brand) | low to medium |
| `lookalike-unknown-content` | Lookalike name, content not visible (404, bot wall, "Access Denied", redirect stub, timeout) | at most medium |
| `parked`, `not-live` | Registered but no real site | at most low |
| `brand-owned-redirect` | Redirects to the official site or uses the official nameservers | info |
| `likely-false-positive` | No brand content, or the brand word in a non-crypto business ("aerodrome" = airfield) | at most low |
| `copycat-token` | Token with the brand name, a clone of name+symbol, or homoglyphs | by liquidity |
| `symbol-collision` | Same ticker only (often an unrelated project) | at most medium |
| `weak-match` | Symbol variant only | at most low |

Scores are deterministic heuristics (`src/scoring.ts`). A person has to look at everything above "low" before anything is filed.

## Setup

```bash
npm install
npx playwright install chromium-headless-shell   # once, for screenshots and PDF (free download)
npm test                                         # vitest, network mocked
npm run typecheck
npm run scan -- brands/aerodrome.json --pdf      # writes out/aerodrome-<date>/
npx tsx src/cli.ts render out/aerodrome-<date>/findings.json --pdf   # rebuild report/drafts after editing findings by hand
```

Requires Node 20+. No API keys, accounts or paid services.

Options: `--days 30` (CT and token lookback), `--nrd-days 7`, `--out out`, `--no-tokens`, `--no-pages`,
`--no-screenshots`, `--pdf`, `--max-pages 300`, `--max-render 40`, `--max-engine 30`, `--dns 1.1.1.1,9.9.9.9`,
`--fast` (skips bitsquatting), `--hosts <file>` (extra hostnames to check, e.g. reported by a brand or found earlier; marked "added by hand"). Env: `BASE_RPC_URL`, `ETH_RPC_URL`, `BASE_ARCHIVE_RPC_URL`.

A first scan of one brand takes 5-15 minutes, mostly polite waiting on crt.sh and page fetches. The token index is
cached in `.cache/` (aligned 10k-block windows plus name/symbol), so later scans and other brands reuse it.

### Scheduler mode (documented, not built)

Run it from cron on any always-on machine:

```cron
# Mondays 06:00 UTC: weekly 7-day scan per brand, PDF included
0 6 * * 1  cd /opt/mimicwatch && npx tsx src/cli.ts scan brands/*.json --days 7 --pdf --out reports >> scan.log 2>&1
# daily: cheap check (new certificates, new pools) without screenshots
0 7 * * *  cd /opt/mimicwatch && npx tsx src/cli.ts scan brands/*.json --days 1 --nrd-days 1 --no-screenshots --out daily >> scan.log 2>&1
```

Next steps for this mode: diff against the previous run so only new findings reach the review queue, and re-export the
dataset after each review.

## Data sources (all free, verified 2026-11-01)

| Source | Use | Limits seen |
| --- | --- | --- |
| crt.sh JSON (`?q=<kw>%&output=json`) | new TLS certificates | Unreliable for big brands: result sets are capped and differ between identical calls (`aerodrome%` gave 81, 142, 1 and 80 recent hosts across runs on the same day). `%kw%` is truncated to a few dozen rows. It often returns 404 or 502 (retried). Small brands with few certificates are much less affected. Mitigation: 4 query shapes per keyword, plus a per-brand memory (`.cache/seen-<brand>.json`), so every host any earlier scan found is re-checked. |
| WhoisDS free daily NRD zip | newly registered domains | Capped at 70,000 names per day, so it is a sample. At least the last 5 days are downloadable. |
| System DNS | registered / live | none |
| IANA RDAP bootstrap, registry RDAP, ARIN RDAP (redirects to other RIRs) | registrar and host abuse contacts | Some ccTLDs have no RDAP: fall back to WHOIS or the ICANN lookup. |
| MetaMask `eth-phishing-detect` config.json, ScamSniffer `domains.json` | already-blocked status | ScamSniffer's public list lags 7 days. |
| `base-rpc.publicnode.com` | Base pools, ~30 days of logs in 10k-block windows | fine for 30-day retro scans |
| `ethereum-rpc.publicnode.com` | Ethereum pools | only ~1.4 days of logs without an archive token. cloudflare-eth allows 800-block ranges, 1rpc 50, drpc and ankr need keys. So Ethereum coverage is daily-scan-only. |

### Reporting channels (checked 2026-11-01)

- **MetaMask eth-phishing-detect**: the live route is the GitHub issue template "Request blocklist addition" (domains one per line, rationale, duplicate check): 145 such issues since 2026-08-01. The README's `yarn add:blocklist` PR route still exists, but almost all recent merges come from `security-alliance-bot` (the list syncs with SEAL).
- **ScamSniffer**: GitHub issue with domain, scam addresses and evidence. PRs are overwritten. Its address list stopped updating in Feb 2024.
- **Google Safe Browsing**: web form with report type, threat type, threat category, URL, details (max 800 chars) and reCAPTCHA.
- **Netcraft**: web form with URL, details, your email and reCAPTCHA. A bulk and API route exists but needs an account (not used).
- **SEAL**: has a "Verifiable Phishing Reporter" based on TLS attestations (announced Oct 2025). Not integrated or tested.
- **Phantom blocklist**: accepts PRs to `blocklist.yaml` per its README, but no merged community PRs were seen since 2026-08-01. Not drafted.
- **Netlify and Webflow**: their old abuse pages return 404, so drafts fall back to the IP host contact. Render, Replit, Framer and GitBook addresses are unverified and marked so in drafts.

## Example: 30-day retro scans (2026-11-01)

See `examples/` for the full reports (HTML, PDF, drafts, JSON, screenshots) and the summary below. These are public brands
used only as demos, not clients. Only public data was read.

Command: `npm run scan -- brands/aerodrome.json brands/uniswap.json brands/metamask.json --days 30 --pdf --out examples`.
Each brand took 4-7 minutes.

| | Aerodrome | Uniswap | MetaMask |
| --- | --- | --- | --- |
| Lookalike permutations (registered) | 1,465 (97) | 4,000 (137) | 2,538 (171) |
| CT hostnames since 2026-10-02 | 142 | 95 | 7 (crt.sh returned only old rows) |
| Domains in the report / pages fetched / screenshots | 220 / 214 / 40 | 221 / 198 / 40 | 180 / 158 / 40 |
| **New high/critical, on no wallet blocklist** | **5** | **2** | **0** |
| Already blocklisted (MetaMask/ScamSniffer) but still resolving | 75 | 73 | 63 |
| Labelled false positive / brand-owned | 23 / 0 | 9 / 9 | 2 / 2 |
| Tokens with new pools indexed (Base 30 d, Ethereum 1.4 d) | 126,418 | 126,416 + 762 | 126,459 + 764 |
| Copycat tokens (name or name+symbol) / with >= $1k liquidity | 28 / 0 | 57 / 0 | 8 / 0 |

What stands out (all read-only observations, nothing filed):

- **Aerodrome:**
  - `aerodrome.financial` (critical) is a full clone: same favicon, 82% text overlap, connect-wallet libraries and `setApprovalForAll` in its JS. It is on neither MetaMask's nor ScamSniffer's list. The registrar is Dynadot, the host Cloudflare, and drafts are ready.
  - crt.sh returned it in some runs that day and not in others (the same query gave 1, 80 or 142 recent hosts), so it is also listed in `examples/aerodrome-extra-hosts.txt` (marked "added by hand").
  - Several `*.pages.dev` sites copy the official title ("Aerodrome Finance", "Aerodrome Slipstream") with wallet prompts.
  - The homoglyph typo `aerodrom.finance` uses a Cyrillic title ("Аеrоdrоmе Fіnаnсе") and is already blocked by ScamSniffer.
  - 28 AERO copycat tokens got pools in 30 days. None has $1k of liquidity, so all are "monitor".
- **Uniswap:**
  - `uniswapv4.com` (registered 2026-10-05) is a fake exchange ("Buy & Sell Digital Assets In The Uniswap V4") with a wallet prompt, and is on no list. Probably a true positive.
  - `uniswap-wallet-review.pages.dev` is flagged high but looks like an affiliate review site: a **probable false positive** to clear by hand.
  - 9 lookalikes were recognised as brand-owned (redirect to uniswap.org or use the official nameservers).
- **MetaMask:** nothing new above medium. 63 known phishing domains still resolve, 38 of them still serve a page.
  - 6 typo domains (`metaso.io`, `mstamask.io`, `metwmask.io`, ...) send visitors to a Google search for a competing wallet: labelled `lookalike-other-crypto`.

**False positives seen and how they are labelled:**
- Airfield businesses for the generic word "aerodrome" are `likely-false-positive`.
- A German research project (`uniswaphd.de`), the `uniswap-python` docs, a Unichain meme launchpad and an LP-PnL tool sit in the medium "impersonation" watch list. A person should clear them; the scorer cannot tell fan or third-party tools from impersonators.
- Same-ticker tokens (`AERO`, `UNI`) from unrelated projects are `symbol-collision` (low).

## Limits and known gaps

- Heuristic scoring with no ML or LLM classifier yet. Expect false positives on generic brand words; they are labelled, not hidden.
- Pages behind Cloudflare bot challenges ("Just a moment...") are not bypassed, so they stay "page not loaded".
- Some phishing kits cloak: they show a harmless page to non-wallet browsers or to some IP ranges. A clean page is not proof of a clean site.
- Not covered: X/Twitter, Telegram, Discord, app stores, search ads, Solana tokens, tokens without a DEX pool.
- Ethereum token coverage is ~1 day per scan on free RPCs (see above). Base covers 30 days.
- The Canisell engine is Base-only.
- crt.sh is flaky and non-deterministic, so one scan can miss a host the previous one found. The per-brand memory makes weekly scans additive. A failed query is reported in the report's "incomplete scan" banner and coverage section, never silently ignored. A second free CT source (e.g. a self-hosted certstream) is the next improvement.
- Between runs only the host memory is stored: there is no "new since last week" diff and no alerting yet.

## Ethics and legal

- **We only observe and report.** The scanner reads public data: DNS, certificate logs, public lists, chain logs,
  RDAP and public pages. It does not log in, submit forms, click, connect a wallet, sign anything or contact suspects.
- **Nothing is filed automatically.** There is no code path that sends email, submits a form, opens an issue or a PR.
  Drafts are text.
- **Takedowns need the brand owner's written authorisation.** Filing takedown requests on a brand's behalf requires
  the brand owner's signed authorisation and approval of each report. Mimicwatch does not file takedowns today.
- Reports state facts and evidence and say "impersonates", not "is a scam". Possible false positives are labelled in the report.
- Screenshots of suspect sites are kept only as evidence.
- **Two kinds of report, two rules.** Takedown requests to registrars and hosts are filed only for a brand that asked
  for it in writing. Reports to public community blocklists (MetaMask eth-phishing-detect, ScamSniffer)
  follow those lists' own public process: any user may file them, and we file only reviewed entries with evidence.
- We do not contact suspects, and we do not send unsolicited messages to projects.

## Open dataset

- `dataset/entries.json` and `dataset/entries.csv`: one row per domain (or token) that impersonates a named brand.
  Schema, inclusion rule and corrections process: [`docs/DATASET.md`](docs/DATASET.md).
- `review/decisions.json`: every review decision (approved, watch, rejected), with the reason, the reviewer and where
  the entry was reported.
- `data/scans/`: the saved scans the dataset is built from (`examples/` holds three more with full reports).
- `evidence/`: notes, screenshots and HTML excerpts for the reviewed clones.

`npm run export` rebuilds the dataset from those files without any network access.

## Licence

MIT, see [`LICENSE`](LICENSE). The vendored Canisell engine in `src/vendor/canisell` is by the same author and is
covered by the same licence here.

## Development

- `src/` TypeScript (ESM, `tsx`). `test/` vitest with mocked network: 92 tests covering permutations, matching, scoring, sources, drafts and the HTML report.
- `src/vendor/canisell/`: copy of the Canisell token-risk engine (`kacpergumieniuk/canisell` api/src at commit 3d546a0). Fix bugs upstream first. See `ATTRIBUTION.md` there.
- The permutation algorithm follows dnstwist's fuzzers (https://github.com/elceef/dnstwist, Apache-2.0). It is a reimplementation; no code was copied.
