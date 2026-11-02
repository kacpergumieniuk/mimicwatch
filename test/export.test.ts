import { describe, expect, it } from "vitest";
import { buildDataset, toCsv, type ReviewDecision } from "../src/export.ts";
import type { ScanResult } from "../src/scan.ts";

const dom = (host: string, severity: string, alreadyBlocked: boolean, listedOn: string[] = []) => ({
  kind: "domain",
  host,
  sources: ["ct"],
  listedOn,
  alreadyBlocked,
  score: severity === "critical" ? 90 : severity === "high" ? 65 : 45,
  severity,
  label: "phishing-likely",
  evidence: [`evidence for ${host}`],
  action: "",
});

const scan = (startedAt: string, domains: unknown[]): ScanResult =>
  ({
    brand: { name: "Example", officialDomains: ["example.fi"], officialTokens: [], officialSocials: {}, keywords: ["example"] },
    startedAt,
    finishedAt: startedAt,
    periodDays: 30,
    domains,
    tokens: [],
  }) as unknown as ScanResult;

const decisions: ReviewDecision[] = [
  { host: "app-example.xyz", brand: "Example", decision: "approved", reason: "clone", reviewer: "r", reviewedAt: "2026-11-01", reportedTo: ["https://github.com/MetaMask/eth-phishing-detect/issues/1"] },
  { host: "example-review.pages.dev", brand: "Example", decision: "rejected", reason: "review site", reviewer: "r", reviewedAt: "2026-11-01" },
  { host: "exampel.fi", brand: "Example", decision: "watch", reason: "unclear", reviewer: "r", reviewedAt: "2026-11-01" },
];

describe("buildDataset", () => {
  it("exports approved and independently listed high/critical findings only", () => {
    const s = scan("2026-11-01T10:00:00Z", [
      dom("app-example.xyz", "critical", false),
      dom("example-review.pages.dev", "high", false),
      dom("exampel.fi", "high", false),
      dom("example-claim.xyz", "high", true, ["metamask"]),
      dom("example-unreviewed.xyz", "high", false),
      dom("example-medium.xyz", "medium", true, ["scamsniffer"]),
    ]);
    const out = buildDataset([s], decisions);
    expect(out.map((e) => [e.id, e.status])).toEqual([
      ["app-example.xyz", "reviewed-approved"],
      ["example-claim.xyz", "listed-elsewhere"],
    ]);
    expect(out[0].reportedTo).toHaveLength(1);
  });

  it("keeps the newest observation of a host seen in two scans", () => {
    const a = scan("2026-11-01T10:00:00Z", [dom("app-example.xyz", "high", false)]);
    const b = scan("2026-11-08T10:00:00Z", [dom("app-example.xyz", "critical", false)]);
    const out = buildDataset([a, b], decisions);
    expect(out).toHaveLength(1);
    expect(out[0].severity).toBe("critical");
  });

  it("writes CSV with a header and quoted cells", () => {
    const csv = toCsv(buildDataset([scan("2026-11-01T10:00:00Z", [dom("app-example.xyz", "critical", false)])], decisions));
    const lines = csv.trim().split("\n");
    expect(lines[0]).toMatch(/^type,id,brand,label/);
    expect(lines[1]).toContain("app-example.xyz");
  });
});
