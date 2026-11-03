# Product Requirements Document (PRD): EVBikes Pakistan (PakEV)

## 1. Overview & Goal
With the launch of the Federal Government's **PAVE Phase 2 (Pakistan Accelerated Vehicle Electrification)** scheme offering a **Rs. 80,000 flat subsidy** and 0% markup bank financing for 76,000 electric bikes on a **First-Come, First-Served** basis, consumer interest has skyrocketed.
However, buyers face major market confusion:
- Deceptive dealer claims on "Graphene" vs "Lithium" battery longevity and replacement costs.
- Claimed vs. real-world road range (with pillion rider on Pakistani roads).
- True electricity bill impact vs. petrol fuel savings.
- Difficulty comparing specs across fragmented brands (Yadea, Metro, Evee, Vlektra, Jolta, Crown).

**Product Goal:** Build the definitive, independent automotive comparison portal and decision engine for Pakistani EV two-wheelers, driving high-intent organic traffic and dealer referral monetization.

---

## 2. Target Audience & Personas
1. **Daily Commuter (Office Goer / Delivery Rider):** Rides 40–70 km daily on Honda CD70/125, spending Rs 8,000–12,000/month on petrol. Needs to know exact monthly savings and reliable real-world battery range.
2. **Student / First-Time Buyer:** Seeking affordable urban transport under PAVE Phase 2 subsidy (net price under Rs 120,000 or monthly installment < Rs 4,500).
3. **Tech Enthusiast / Early Adopter:** Comparing premium performance models (Vlektra Bolt, Yadea G5, Metro E8S Pro) with high top speed and Lithium LFP fast charging.

---

## 3. Core Functional Modules

### A. Side-by-Side Comparison Matrix (`/compare`)
- Multi-select up to 3 bikes simultaneously.
- Direct row-by-row technical comparison:
  - Ex-Factory Price vs. **PAVE Phase 2 Net Discounted Price (-Rs 80,000)**
  - Battery Chemistry (Graphene Lead-Acid vs. Lithium LiFePO4 / NMC)
  - Battery Replacement Cost (estimated PKR after cycle lifespan)
  - Claimed Range vs. **Realistic Road Range (with pillion passenger)**
  - Top Speed (km/h) & Motor Power (Watts / Brushless DC)
  - Full Charge Time (Hours) & Units Consumed (kWh)
  - Full Recharge Cost (PKR per charge @ national tariff)
  - Warranty (Battery months vs Motor months)

### B. PAVE Phase 2 Subsidy & 0% Bank Installment Engine (`/pave-calculator`)
- Down payment selector (Rs 10,000, Rs 25,000, Rs 50,000).
- Tenure selection (12, 24, 36 months).
- Instant calculation of monthly installment amount with PAVE Rs 80k subsidy automatically factored in.
- "How to Apply on pave.gov.pk" first-come-first-served checklist and eligibility audit.

### C. Petrol vs. EV Monthly Savings Simulator
- Dynamic daily commute slider (10 km to 100 km/day).
- Formula:
  - Petrol Cost = (Daily KM / 45 km per liter) * Petrol Rate * 30 days
  - EV Cost = (Daily KM / Real Range per Charge) * (Battery kWh * Electricity Rate) * 30 days
  - Net Savings = Petrol Cost - EV Cost
  - Payback Timeline = Net Bike Price / Monthly Savings.

### D. Verified Dealership & Test Drive Directory (`/dealers`)
- City filter: Karachi, Lahore, Rawalpindi/Islamabad, Faisalabad, Multan, Peshawar.
- Dealer contact numbers, address, and "Request Official Test Drive / Quotation" lead capture modal.

---

## 4. User Stories & Acceptance Criteria

### User Story 1: Side-by-Side Comparison
**As a** prospective buyer,  
**I want to** select two or three electric bikes from a dropdown,  
**So that I can** immediately see which model offers better real-world battery range and lower PAVE net pricing.

#### Acceptance Criteria (Gherkin):
```gherkin
Scenario: Comparing two electric bikes
  Given the user navigates to the "/compare" route
  When the user selects "Yadea T5" and "Metro T9 Pro"
  Then a dual-column comparison table must render with identical specification rows
  And the PAVE Phase 2 net price must display as Ex-Factory Price minus 80,000 PKR
  And the battery chemistry must display transparent lifecycle warnings (e.g. Graphene vs Lithium LFP)
```

### User Story 2: Fuel Savings Calculation
**As a** CD70 rider spending Rs 9,000 on petrol,  
**I want to** drag a slider to my 45 km daily commute,  
**So that I can** see how many months it will take for the EV bike to pay for itself.

#### Acceptance Criteria (Gherkin):
```gherkin
Scenario: Calculating monthly fuel savings
  Given the user inputs a daily commute of 50 km
  When the user selects a 60 km real-range electric bike
  Then the monthly petrol cost must be calculated against current official petrol rate (Rs 280+/liter)
  And the electricity cost must be calculated at residential tariff rate
  And the system must show net monthly savings greater than Rs 6,000 PKR
```

---

## 5. Database Schema & Data Contracts (Supabase PostgreSQL)

```sql
-- 1. Brands Table
CREATE TABLE ev_brands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  country_origin TEXT DEFAULT 'Pakistan / China',
  logo_url TEXT,
  website TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Models & Specification Table
CREATE TABLE ev_bike_models (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id UUID REFERENCES ev_brands(id) ON DELETE CASCADE,
  model_name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  ex_factory_price INTEGER NOT NULL, -- PKR
  pave_subsidy_amount INTEGER DEFAULT 80000, -- PKR
  pave_eligible BOOLEAN DEFAULT TRUE,
  battery_type TEXT NOT NULL, -- 'Graphene (Lead-Acid)', 'Lithium LiFePO4', 'Lithium NMC'
  battery_voltage INTEGER NOT NULL, -- e.g. 72V, 60V, 48V
  battery_amp_hours NUMERIC(5,2) NOT NULL, -- e.g. 26Ah, 32Ah
  battery_kwh NUMERIC(4,2) NOT NULL, -- (V * Ah) / 1000
  claimed_range_km INTEGER NOT NULL,
  real_road_range_km INTEGER NOT NULL, -- Pillion + city driving condition
  top_speed_kmh INTEGER NOT NULL,
  motor_wattage INTEGER NOT NULL, -- e.g. 1200W, 2000W
  charge_time_hours NUMERIC(3,1) NOT NULL,
  battery_warranty_months INTEGER NOT NULL,
  motor_warranty_months INTEGER NOT NULL,
  battery_replacement_cost_estimate INTEGER, -- PKR
  image_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Lead Capture & Quotation Requests
CREATE TABLE ev_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  model_id UUID REFERENCES ev_bike_models(id),
  full_name TEXT NOT NULL,
  phone_whatsapp TEXT NOT NULL,
  city TEXT NOT NULL,
  payment_preference TEXT NOT NULL, -- 'Cash / Self-Finance', 'Bank Lease (PAVE)'
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 6. SQUAD Task Breakdown & Directives

### 🎨 Task Allocation for `@designer`:
1. Design Automotive Cockpit Dark Theme System (`#090D16` carbon canvas, `#111827` graphite cards, `#00F299` electric neon mint accents).
2. Author wireframes & CSS tokens for the **Side-by-Side Comparison Matrix** (desktop 3-column & mobile stacked view).
3. Create vehicle feature badges: `[⚡ 72V 2000W]`, `[🔋 LiFePO4 5-Yr Life]`, `[🏛️ PAVE Approved]`.

### 🛠️ Task Allocation for `@dev`:
1. Initialize Next.js 15 project in `D:\evbikes` with TypeScript and Tailwind CSS.
2. Seed initial catalog with 15 verified Pakistani models (Yadea, Metro, Evee, Vlektra, Jolta, Crown).
3. Build the core Comparison Matrix engine with dynamic URL query params (`/compare?b1=yadea-t5&b2=metro-t9-pro`).
4. Implement the PAVE Phase 2 Net Subsidy (-Rs 80,000) & Petrol vs EV Savings Calculator.

### 🛡️ Task Allocation for `@qa`:
1. Test mathematical accuracy of PAVE Phase 2 net deductions and 0% markup EMI formulas.
2. Verify comparison matrix responsiveness on mobile devices (`375px` to `768px`).
3. Ensure Graphene battery replacement cost warnings trigger accurately on selected models.

### 📈 Task Allocation for `@marketing`:
1. Structure programmatic SEO routes: `/compare/[model-1]-vs-[model-2]` to capture high-intent search volume.
2. Create PAVE Phase 2 first-come-first-served application guide.
3. Design WhatsApp lead routing to verified dealership partners.
