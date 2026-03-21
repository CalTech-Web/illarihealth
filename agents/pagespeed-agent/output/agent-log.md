[2026-03-20 16:59:36] ==========================================
[2026-03-20 16:59:36] Agent: Pagespeed Agent
[2026-03-20 16:59:36] Model: sonnet
[2026-03-20 16:59:36] Workspace: /Users/brandonhopkins/Projects/illarihealth/agents/pagespeed-agent
[2026-03-20 16:59:36] Stop on complete: false
[2026-03-20 16:59:36] Max loops: 2 (0=infinite)
[2026-03-20 16:59:36] ==========================================
[2026-03-20 16:59:36] Run #1 starting (model: sonnet)

## Run #1 — 2026-03-20

### Baseline Score (Mobile)
- **Performance: 86**
- FCP: 0.9s | LCP: 2.9s | TBT: 380ms | CLS: 0 | SI: 2.3s
- Accessibility: 91 | Best Practices: 96 | SEO: 100

### Top Issues Identified
1. Total Blocking Time 380ms (main thread work 2.3s, JS execution 1.3s)
2. Reduce unused JavaScript — 60 KiB
3. Reduce unused CSS — 39 KiB
4. 7 long main-thread tasks

### Fix Attempted: Switch Google Fonts @import to next/font (self-hosted)
- **Attempt 1** — `next/font` with `preload: true` (default): Score dropped to **68**
  - LCP jumped: 2.9s → 6.7s (self-hosted font preloads competed with hero image for Vercel CDN bandwidth on slow 4G)
  - TBT improved: 380ms → 180ms (eliminated external DNS round trip)
  - Reverted

- **Attempt 2** — `next/font` with `preload: false`: Score dropped to **60**
  - LCP still bad: 6.7s (fonts from same Vercel origin still competed for bandwidth)
  - TBT stayed high: 400ms
  - Reverted

### Key Finding
Google Fonts CDN (fonts.googleapis.com + fonts.gstatic.com) uses separate TCP connections from the Vercel CDN serving the hero image. On the PSI slow 4G simulation, this separation effectively provides more total bandwidth than self-hosting from a single origin. The @import render-block is fast enough (~100ms) that the benefit of parallel CDN connections outweighs the cost of the external request for this site.

### Final Score: 86 (unchanged — both fixes reverted)
No net improvement this run. The font approach that is currently in place (Google Fonts @import) is optimal for this CDN configuration.

### Next Recommended Fixes
- Reduce JS bundle: add `prefetch={false}` to `<Link>` components to eliminate prefetched page JS
- Investigate TBT sources: profile the 7 long main-thread tasks to find reducible JS work
- Avoid non-composited animations: identify the 1 flagged animated element and fix
**Run #1 complete. No net improvement.**

---

**Baseline score: 86 (Mobile)**

| Metric | Value |
|--------|-------|
| Performance | 86 |
| FCP | 0.9s |
| LCP | 2.9s |
| TBT | 380ms |
| CLS | 0 |

**What was tried:**

Two variants of switching Google Fonts `@import` → `next/font` (self-hosted):
- With `preload: true` → score **68** (LCP regressed 2.9s → 6.7s)
- With `preload: false` → score **60** (same LCP regression)

Both were reverted.

**Key finding:** Google Fonts serves fonts from `fonts.gstatic.com`, a separate domain from the Vercel CDN hosting the hero image. On PSI's slow 4G simulation, those separate TCP connections effectively provide parallel bandwidth. Self-hosting fonts on the same Vercel origin forces fonts and the hero image to compete for the same connection, tanking LCP by ~4 seconds.

**Final state: 86 (unchanged).** Logged in `output/agent-log.md`.
[2026-03-20 17:18:20] Run #1 finished
[2026-03-20 17:18:25] Run #2 starting (model: sonnet)

## Run #2 — 2026-03-20

### Baseline Score (Mobile)
- **Performance: 50**
- FCP: 2.2s | LCP: 6.1s | TBT: 1,080ms | CLS: 0 | SI: 4.3s
- Accessibility: 91 | Best Practices: 96 | SEO: 100

**Note:** Score regressed significantly from Run #1's 86. Root cause identified: SEO agent added 4+ new pages (about, contact, concierge-medicine, direct-primary-care, one-time-visit) and 20+ `<Link>` components in nav/footer. Next.js App Router prefetches JS bundles for all linked pages when they enter the viewport, causing massive TBT spike (380ms → 1,080ms). Main-thread work: 4.2s, JS execution: 2.7s.

### Top Issues Identified
1. Total Blocking Time 1,080ms — JS bundle prefetching from 10+ linked pages
2. Minimize main-thread work — 4.2s
3. Reduce JS execution time — 2.7s
4. LCP 6.1s (hero image discovery)
5. Reduce unused JS — 60 KiB / unused CSS — 39 KiB

### Fix Applied: Disable Link Prefetching
Added `prefetch={false}` to all 21 `<Link>` components in:
- `site/app/components/Header.tsx` (desktop + mobile nav, 11 links)
- `site/app/components/Footer.tsx` (6 links)
- `site/app/page.tsx` (4 links: concierge-medicine, direct-primary-care, one-time-visit, about)

**Why it works:** Next.js App Router prefetches page JS bundles when links enter the viewport. With `prefetch={false}`, bundles are only fetched on hover — eliminating the initial-load JS execution storm.

### After Score (Mobile)
- **Performance: 65** (+15 points)
- FCP: 2.3s | LCP: 6.7s | **TBT: 250ms** | CLS: 0 | SI: 5.4s

### Key Metrics Change
| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Performance | 50 | 65 | **+15** |
| TBT | 1,080ms | 250ms | **-77%** |
| Main-thread work | 4.2s | 2.2s | **-48%** |
| Long tasks | 17 | 8 | **-53%** |

### Remaining Issues
- LCP: 6.1–6.7s — hero image is still the bottleneck; "LCP request discovery" flagged
- Reduce unused JS — 60 KiB (likely Tailwind or React overhead)
- Reduce unused CSS — 39 KiB
- Avoid non-composited animations — 2 elements flagged (scroll reveal)

### Next Recommended Fixes
- Investigate LCP: add `fetchpriority="high"` directly to hero image `<img>` tag or add a `<link rel="preload">` in `<head>` for the hero JPEG
- Look into removing or deferring the AnimateOnScroll scroll-reveal for above-fold elements (currently hidden until JS runs, which delays visual completion)

**Run #2 complete. Score improved 50 → 65 (+15 points). TBT cut by 77%.**

---

**Before fix: 50 (Mobile)**

| Metric | Value |
|--------|-------|
| Performance | 50 |
| FCP | 2.2s |
| LCP | 6.1s |
| TBT | 1,080ms |
| CLS | 0 |

**After fix: 65 (Mobile)**

| Metric | Value |
|--------|-------|
| Performance | 65 |
| FCP | 2.3s |
| LCP | 6.7s |
| TBT | 250ms |
| CLS | 0 |

**What was changed:** Added `prefetch={false}` to all 21 `<Link>` components in Header, Footer, and homepage. Eliminated on-viewport JS bundle prefetching for 10+ pages.

[2026-03-20 17:55:00] Run #2 finished
**Run #2 complete.**

| Metric | Before | After |
|--------|--------|-------|
| Performance | 50 | **65** (+15) |
| TBT | 1,080ms | **250ms** (-77%) |
| Main-thread work | 4.2s | 2.2s (-48%) |
| Long tasks | 17 | **8** (-53%) |

**Fix:** Added `prefetch={false}` to all 21 `<Link>` components across Header, Footer, and homepage. The SEO agent had added 10+ new pages, and Next.js was downloading JS bundles for every linked page when they entered the viewport — causing the TBT to spike from 380ms to 1,080ms.

The remaining bottleneck is LCP (~6.5s). The hero image is being discovered late — a `<link rel="preload">` in the document `<head>` would be the next fix to try.
[2026-03-20 17:29:40] Run #2 finished
[2026-03-20 17:29:40] Reached max loops (2). Stopping.
