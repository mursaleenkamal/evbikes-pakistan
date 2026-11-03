# EVBikes Pakistan (PakEV) — Design System & Component Specifications
Theme: Premium Automotive Cockpit & High-Velocity EV UI/UX

================================================================================
1. DESIGN SYSTEM & PALETTE TOKENS
================================================================================

CSS Custom Properties / Tailwind Theme Mapping:

:root {
  /* Canvas & Structural Backgrounds */
  --bg-carbon: #090D16;          /* Deep Carbon Canvas */
  --card-graphite: #111827;      /* Graphite Card Surfaces */
  --card-elevated: #162032;      /* Elevated Surfaces & Dropdowns */
  --border-titanium: #1F2937;    /* Subtle Structural Borders */
  --border-active: #374151;      /* Interactive Border States */

  /* High-Velocity Accents */
  --neon-mint: #00F299;          /* Electric Racing Neon Mint (Hero Accent / CTAs) */
  --neon-mint-glow: rgba(0, 242, 153, 0.25);
  --speed-cyan: #00D2FF;         /* High-Speed Cyan (Secondary Highlights / Tech) */
  --speed-cyan-glow: rgba(0, 210, 255, 0.25);

  /* Functional & Alert Signals */
  --danger-subsidy: #EF4444;     /* Warning / Graphene Alert / Subsidy Tag */
  --danger-glow: rgba(239, 68, 68, 0.25);
  --warning-amber: #F59E0B;      /* Medium Warning / Cycle Degradation */

  /* Typography Colors */
  --text-white: #FFFFFF;         /* Primary Headlines & Numbers */
  --text-slate: #9CA3AF;         /* Secondary Labels & Spec Names */
  --text-muted: #6B7280;         /* Footers, Captions & Disclaimers */

  /* Font Families */
  --font-display: 'Sora', -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', monospace;
}

Tailwind v4 Configuration Snippet:
theme: {
  extend: {
    colors: {
      carbon: '#090D16',
      graphite: '#111827',
      titanium: '#1F2937',
      'neon-mint': '#00F299',
      'speed-cyan': '#00D2FF',
      'danger-subsidy': '#EF4444',
    },
    boxShadow: {
      'mint-glow': '0 0 25px rgba(0, 242, 153, 0.2)',
      'cyan-glow': '0 0 25px rgba(0, 210, 255, 0.2)',
      'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.6)',
    }
  }
}

================================================================================
2. COMPONENT SPECIFICATIONS & LAYOUT HIERARCHIES
================================================================================

A. 3-COLUMN SIDE-BY-SIDE COMPARISON MATRIX (/compare)
--------------------------------------------------------------------------------
Purpose: Direct technical & economic face-off across up to 3 EV bikes.
Layout:
- Grid: 3-column desktop (1fr 1fr 1fr) with fixed left sticky spec-label column on wide screens, or horizontal snap swipe on mobile.
- Header Block (Sticky during scroll):
  * Bike thumbnail photo (Aspect ratio 16:10, transparent PNG or clean cutout).
  * Brand & Model Title (22px bold white).
  * Dual Price Row: Strikethrough Ex-Factory vs Bold PAVE Net Price (-Rs 80,000).
  * Quick Remove / Swap Dropdown button.
- Specification Rows (Zebra striped with hover state):
  1. Real Road Range (km): Highlighted in Neon Mint bold text (Pillion rider condition).
  2. Claimed Range (km): Shown with "Company Claim" pill in muted slate.
  3. Battery Chemistry & Replacement Cost: Direct side-by-side indicator (see Component C).
  4. Top Speed & Motor Power: Real-world GPS km/h + BLDC Wattage.
  5. Charge Time & Units Consumed: e.g. 6.5 hrs (2.1 kWh) vs 3.5 hrs (1.8 kWh).
  6. Recharge Cost per 100 km: Tabular calculation based on home electricity tariff.
  7. Warranty: Battery months vs Motor months side-by-side.
- Visual Winner Highlight:
  * For each spec row (e.g. higher range, lower price, better battery), the winning cell receives a subtle 1px border highlight (`#00F299`) and a tiny green dot tag.

B. VEHICLE CARD WITH PAVE PHASE 2 NET PRICE TAG
--------------------------------------------------------------------------------
Purpose: High-converting catalogue card on homepage, brand pages, and search filters.
Layout Anatomy:
1. Media Top:
   - Vehicle cutout image on deep carbon background with subtle radial gradient.
   - Top-right corner badge: "PAVE ELIGIBLE • 0% FINANCING" in Neon Mint on dark chip.
2. Title & Body Type:
   - Brand (12px uppercase slate `#9CA3AF`).
   - Model Name (20px bold white `#FFFFFF`).
3. Dual Price Architecture (Anchor & Net):
   - Row 1: Original Ex-Factory Price `<s>Rs 253,500</s>` in `#9CA3AF` with thin red strikethrough.
   - Row 2: Subsidy Tag: `PAVE Subsidy: -Rs 80,000` (Pill: `#EF4444` background @ 15%, `#EF4444` border, `#F87171` text).
   - Row 3: Net Price Hero: `Rs 173,500` (32px bold white font-mono with tabular-nums).
   - Subtext: "or from Rs 4,850/mo with 0% bank markup".
4. Cockpit Telemetry Mini-Pills (3 Columns):
   - Pill 1: `⚡ 75 km Real Range`
   - Pill 2: `🚀 55 km/h Top Speed`
   - Pill 3: `🔋 Graphene 72V` or `🛡️ Lithium LFP`
5. Action Buttons (Dual):
   - Button 1: "Compare" (Secondary outline `#1F2937`, hover `#00D2FF`).
   - Button 2: "Calculate Installment" (Primary Solid Neon Mint `#00F299` with `#090D16` text).

C. BATTERY TECH INDICATOR: [GRAPHENE WARNING] VS [LITHIUM LFP 5-YR LIFE]
--------------------------------------------------------------------------------
Purpose: Educate buyers and eliminate deceptive dealer marketing.
1. Graphene Battery Component:
   - Visual Pill:
     * Background: `rgba(239, 68, 68, 0.12)`
     * Border: `1px solid #EF4444`
     * Text: `#F87171` (Bold 12px)
     * Icon: `<AlertTriangle size={14} color="#EF4444" />`
     * Label: `Graphene (Lead-Acid Base) • 1.5–2 Yr Life`
   - Hover / Info Tooltip:
     * "Heavy lead-acid plates with graphene additive. Lifespan is limited to 350-450 recharge cycles. Expected battery replacement cost in 18-24 months: Rs 40,000 - 55,000."
2. Lithium LFP Battery Component:
   - Visual Pill:
     * Background: `rgba(0, 242, 153, 0.12)`
     * Border: `1px solid #00F299`
     * Text: `#00F299` (Bold 12px)
     * Icon: `<ShieldCheck size={14} color="#00F299" />`
     * Label: `Lithium LFP (LiFePO4) • 5+ Yr Lifespan`
   - Hover / Info Tooltip:
     * "True Lithium Iron Phosphate chemistry. Offers 2,000+ deep discharge cycles, zero fire risk, and 3.5-hour fast charging. Expected 5-year operating life with minimal degradation."

D. FUEL SAVINGS INTERACTIVE SLIDER VS HONDA CD70
--------------------------------------------------------------------------------
Purpose: Immediate commercial conviction for petrol commuters.
Layout Anatomy:
1. Input Slider Zone:
   - Label: "Your Daily Commute Distance" (15px bold white).
   - Display: Dynamic readout `45 km / day` (28px font-mono Neon Mint).
   - Slider Track: 10 km to 100 km, step 5 km.
   - Interactive Thumb: Neon Mint 24px circular grip with `#00F299` glow.
2. Side-by-Side Reality Comparison Cards (2 Columns):
   - Left Card (Petrol Bike: Honda CD70):
     * Surface: `#111827` with 1px border `#EF4444` (15% opacity).
     * Header: `⛽ Honda CD70 (Petrol)`
     * Formula: 45 km/L @ Rs 280/L = Rs 6.22 per km.
     * Monthly Spend: `Rs 8,400 / month` (30 days).
     * Annual Spend: `Rs 100,800 / year` in petrol alone!
   - Right Card (Electric Bike):
     * Surface: `#111827` with 1px border `#00F299` (30% opacity) + subtle mint glow.
     * Header: `⚡ Electric Bike (e.g. Yadea T5)`
     * Formula: 2.1 kWh per charge (75 km) @ Rs 35/kWh = Rs 0.98 per km.
     * Monthly Spend: `Rs 1,320 / month` in home electricity.
     * Annual Spend: `Rs 15,840 / year`.
3. Savings Verdict Banner (Cockpit Hero Output):
   - Large banner at bottom:
     * Background: `linear-gradient(135deg, rgba(0, 242, 153, 0.15) 0%, rgba(0, 210, 255, 0.1) 100%)`
     * Border: `1.5px solid #00F299`
     * Headline: `You Save Rs 7,080 Every Single Month!`
     * Payback Calculation: `Your EV Bike pays for itself in just 24 months (or 14 months with PAVE subsidy).`
     * Action Link: "Browse PAVE Eligible Bikes Under Rs 150k →"

================================================================================
3. ACCESSIBILITY & WCAG COMPLIANCE CHECKS
================================================================================
- Contrast Ratios:
  * Neon Mint (`#00F299`) on Deep Carbon (`#090D16`): Ratio 12.8:1 (Passes WCAG AAA).
  * High-Speed Cyan (`#00D2FF`) on Graphite (`#111827`): Ratio 9.6:1 (Passes WCAG AAA).
  * White Text (`#FFFFFF`) on Graphite Card (`#111827`): Ratio 15.2:1 (Passes WCAG AAA).
  * Danger Red (`#EF4444`) on Carbon (`#090D16`): Used for badges with light tint text `#F87171` (Ratio 5.4:1, Passes WCAG AA).
- Number Readouts: All financial, speed, and mileage counters must enforce `font-variant-numeric: tabular-nums` to eliminate layout jitter.
- Mobile Touch Targets: All slider thumbs, dropdowns, and comparison pills must maintain a minimum 48px hit area.
