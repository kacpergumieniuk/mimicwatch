# Mimicwatch open dataset

Files: `dataset/entries.json` (with a `meta` block) and `dataset/entries.csv` (same rows, flat). Licence: MIT.
Built by `npm run export` from `data/scans/`, `examples/` and `review/decisions.json`. No network access is needed to
rebuild it.

## What gets in

A row is exported only when the finding is **high or critical** and one of these is true:

| `status` | Meaning |
| --- | --- |
| `reviewed-approved` | A reviewer approved it in `review/decisions.json` (page clone, fake token, or a lure that names the brand). |
| `listed-elsewhere` | MetaMask eth-phishing-detect or ScamSniffer already lists it. Our value-add is the brand it imitates and the evidence. |
| `host-warning` | The host itself already shows a phishing interstitial (for example Cloudflare "Suspected Phishing"). |

Never exported: findings below high, hosts marked `watch` or `rejected`, and token name matches without an approved
review. Possible false positives stay in the per-scan reports, labelled, and out of the dataset.

## Fields

| Field | Description |
| --- | --- |
| `type` | `domain` or `token` |
| `id` | Hostname (lowercase), or `chain:address` for a token |
| `brand` | The project it imitates |
| `brandOfficial` | The brand's official domains (or official token contracts) at scan time |
| `label` | `phishing-likely`, `impersonation`, or `copycat-token` (see the README, "Labels and severity") |
| `severity`, `score` | Scorer output, 0-100 |
| `status` | See above |
| `listedOn` | Outside lists that already had it at scan time (`metamask`, `scamsniffer`) |
| `reportedTo` | Public reports we filed for it (issue URLs) |
| `firstSeen` | First Certificate Transparency or newly-registered-domain date, when known |
| `observedAt` | Start of the scan that last saw it |
| `evidence` | The facts the score was built from, one string each |

## Review

- The scanner proposes; a reviewer decides. Every decision is in `review/decisions.json` with the reason, the reviewer
  and the date.
- First-pass review is done by an AI agent (`claude-agent`). A person (`kacpergumieniuk`) approves every report before it
  is filed anywhere.
- Wording rule: entries say a site or token *impersonates* a brand. They do not judge the people behind it.

## Corrections

If an entry is wrong (for example a brand's own site or a fan tool), open an issue in this repository with the
hostname and why. A confirmed mistake is removed from the dataset and marked `rejected` in `review/decisions.json`
within 7 days.
