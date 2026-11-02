/**
 * Open dataset export: saved scans (findings.json) + review decisions -> dataset/entries.json and entries.csv.
 *
 * An entry is exported only when it is high or critical AND either
 *   - a reviewer approved it (review/decisions.json), or
 *   - an independent wallet blocklist (MetaMask eth-phishing-detect, ScamSniffer) already lists it, or the host
 *     itself already shows a phishing interstitial (e.g. Cloudflare "Suspected Phishing").
 * Rejected and "watch" hosts, medium and lower findings, and token matches below high are never exported.
 * Pure function plus a thin file wrapper; no network.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import type { ScanResult } from "./scan.ts";
import type { DomainFinding, TokenFinding } from "./scoring.ts";

export interface ReviewDecision {
  host?: string;
  address?: string;
  brand: string;
  decision: "approved" | "rejected" | "watch";
  reason: string;
  reviewer: string;
  reviewedAt: string;
  reportedTo?: string[];
  reportedBy?: string;
  reportedAt?: string;
}

export interface DatasetEntry {
  type: "domain" | "token";
  /** Hostname, or chain:address for tokens. */
  id: string;
  brand: string;
  brandOfficial: string[];
  label: string;
  severity: string;
  score: number;
  /** reviewed-approved: our reviewer approved it; listed-elsewhere: on MetaMask or ScamSniffer; host-warning: the host itself shows a phishing interstitial. */
  status: "reviewed-approved" | "listed-elsewhere" | "host-warning";
  listedOn: string[];
  reportedTo: string[];
  firstSeen?: string;
  observedAt: string;
  evidence: string[];
}

const HIGH = new Set(["high", "critical"]);

export function buildDataset(scans: ScanResult[], decisions: ReviewDecision[]): DatasetEntry[] {
  const byId = new Map<string, ReviewDecision>();
  for (const d of decisions) byId.set((d.host ?? d.address ?? "").toLowerCase(), d);
  const out = new Map<string, DatasetEntry>();

  const add = (e: DatasetEntry) => {
    const prev = out.get(e.id);
    // Keep the newest observation of the same id.
    if (!prev || prev.observedAt < e.observedAt) out.set(e.id, e);
  };

  for (const s of scans) {
    const official = s.brand.officialDomains;
    const observedAt = s.startedAt;
    for (const f of s.domains as DomainFinding[]) {
      if (!HIGH.has(f.severity)) continue;
      const r = byId.get(f.host.toLowerCase());
      if (r && r.decision !== "approved") continue;
      if (!r && !f.alreadyBlocked) continue;
      add({
        type: "domain",
        id: f.host.toLowerCase(),
        brand: s.brand.name,
        brandOfficial: official,
        label: f.label,
        severity: f.severity,
        score: f.score,
        status: r ? "reviewed-approved" : f.listedOn?.length ? "listed-elsewhere" : "host-warning",
        listedOn: f.listedOn ?? [],
        reportedTo: r?.reportedTo ?? [],
        firstSeen: f.ctFirstSeen ?? f.nrdDate,
        observedAt,
        evidence: f.evidence,
      });
    }
    for (const t of s.tokens as TokenFinding[]) {
      if (!HIGH.has(t.severity)) continue;
      const id = `${t.chain}:${t.address.toLowerCase()}`;
      const r = byId.get(t.address.toLowerCase());
      if (!r || r.decision !== "approved") continue;
      add({
        type: "token",
        id,
        brand: s.brand.name,
        brandOfficial: s.brand.officialTokens.filter((o) => o.chain === t.chain).map((o) => `${o.chain}:${o.address}`),
        label: t.label,
        severity: t.severity,
        score: t.score,
        status: "reviewed-approved",
        listedOn: [],
        reportedTo: r.reportedTo ?? [],
        observedAt,
        evidence: t.evidence,
      });
    }
  }
  return [...out.values()].sort((a, b) => a.brand.localeCompare(b.brand) || a.id.localeCompare(b.id));
}

const csvCell = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

export function toCsv(entries: DatasetEntry[]): string {
  const head = ["type", "id", "brand", "label", "severity", "score", "status", "listed_on", "reported_to", "first_seen", "observed_at"];
  const rows = entries.map((e) =>
    [e.type, e.id, e.brand, e.label, e.severity, String(e.score), e.status, e.listedOn.join(" "), e.reportedTo.join(" "), e.firstSeen ?? "", e.observedAt]
      .map(csvCell)
      .join(","),
  );
  return [head.join(","), ...rows].join("\n") + "\n";
}

export async function exportDataset(findingFiles: string[], decisionsFile: string, outDir: string): Promise<DatasetEntry[]> {
  const scans = await Promise.all(findingFiles.map(async (f) => JSON.parse(await readFile(f, "utf8")) as ScanResult));
  const decisions = (JSON.parse(await readFile(decisionsFile, "utf8")) as { decisions: ReviewDecision[] }).decisions;
  const entries = buildDataset(scans, decisions);
  await mkdir(outDir, { recursive: true });
  const meta = {
    name: "Mimicwatch open impersonation dataset (Ethereum + Base)",
    license: "MIT",
    generatedAt: new Date().toISOString(),
    scans: scans.map((s) => ({ brand: s.brand.name, startedAt: s.startedAt, periodDays: s.periodDays })),
    counts: {
      entries: entries.length,
      reviewedApproved: entries.filter((e) => e.status === "reviewed-approved").length,
      listedElsewhere: entries.filter((e) => e.status === "listed-elsewhere").length,
      hostWarning: entries.filter((e) => e.status === "host-warning").length,
    },
    schema: "docs/DATASET.md",
  };
  await writeFile(join(outDir, "entries.json"), JSON.stringify({ meta, entries }, null, 2) + "\n");
  await writeFile(join(outDir, "entries.csv"), toCsv(entries));
  return entries;
}
