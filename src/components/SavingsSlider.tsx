'use client'

import React, { useState, useMemo } from 'react'
import { Flame, Zap, TrendingUp, PiggyBank, CheckCircle2 } from 'lucide-react'

export default function SavingsSlider() {
  const [dailyKm, setDailyKm] = useState<number>(45)
  const [petrolPrice, setPetrolPrice] = useState<number>(285)
  const [elecRate, setElecRate] = useState<number>(38)

  const stats = useMemo(() => {
    // CD70 Petrol Math
    const litersPerDay = dailyKm / 45 // 45 km/l real average for 70cc in city traffic
    const monthlyPetrolCost = Math.round(litersPerDay * petrolPrice * 30)

    // EV Electricity Math
    // 70 km real range on 1.8 kWh battery (typical 72V 26Ah)
    const chargesPerMonth = (dailyKm * 30) / 70
    const monthlyUnits = chargesPerMonth * 1.9 // ~1.9 kWh from wall per charge
    const monthlyEvCost = Math.round(monthlyUnits * elecRate)

    const monthlySavings = Math.max(0, monthlyPetrolCost - monthlyEvCost)
    const annualSavings = monthlySavings * 12
    const averageNetBikeCost = 165000 // Average net price after PAVE 80k subsidy
    const paybackMonths = monthlySavings > 0 ? (averageNetBikeCost / monthlySavings).toFixed(1) : '—'

    return {
      monthlyPetrolCost,
      monthlyEvCost,
      monthlySavings,
      annualSavings,
      paybackMonths,
    }
  }, [dailyKm, petrolPrice, elecRate])

  return (
    <div
      id="savings-calculator"
      style={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '24px',
        padding: '2.5rem 1.75rem',
        boxShadow: '0 4px 25px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#059669', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
        <PiggyBank size={18} />
        <span>Commute ROI &amp; Fuel Savings Engine</span>
      </div>

      <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0F172A', margin: '0.5rem 0 0.8rem', letterSpacing: '-0.5px' }}>
        Honda CD70 vs Electric Bike: <span style={{ color: '#059669' }}>How Much Do You Save?</span>
      </h2>
      <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '780px' }}>
        Compare your real monthly petrol expenses against electric charging. Factor in rising petrol prices and discover how fast an electric bike pays for itself under the PAVE Phase 2 subsidy.
      </p>

      {/* Main Grid: Controls Left, Big Outputs Right */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2.5rem',
          marginTop: '2rem',
          alignItems: 'center',
        }}
      >
        {/* Left Form: Sliders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Slider 1: Daily KM */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A' }}>
                Your Daily Commute Distance:
              </label>
              <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#059669' }} className="tabular-nums">
                {dailyKm} km / day
              </span>
            </div>
            <input
              type="range"
              min={15}
              max={110}
              step={5}
              value={dailyKm}
              onChange={(e) => setDailyKm(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#059669', cursor: 'pointer', height: '8px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B' }}>
              <span>15 km (Short City Trip)</span>
              <span>60 km (Typical Clifton / DHA / Korangi)</span>
              <span>110 km (Intercity)</span>
            </div>
          </div>

          {/* Quick presets */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[30, 45, 60, 80].map((km) => (
              <button
                key={km}
                type="button"
                onClick={() => setDailyKm(km)}
                style={{
                  background: dailyKm === km ? '#059669' : '#F1F5F9',
                  color: dailyKm === km ? '#FFFFFF' : '#334155',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {km} km/day
              </button>
            ))}
          </div>

          {/* Cost Benchmarks Info */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '14px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '0.82rem',
              color: '#64748B',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Petrol Price Baseline:</span>
              <strong style={{ color: '#DC2626' }}>Rs {petrolPrice} / Liter</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Electricity Tariff Rate:</span>
              <strong style={{ color: '#2563EB' }}>Rs {elecRate} / Unit (kWh)</strong>
            </div>
          </div>
        </div>

        {/* Right Output: Side-by-Side Savings Cockpit */}
        <div
          style={{
            background: 'linear-gradient(145deg, #ECFDF5 0%, #FFFFFF 100%)',
            border: '2px solid #059669',
            borderRadius: '20px',
            padding: '2rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '0 8px 30px rgba(5, 150, 105, 0.12)',
          }}
        >
          {/* Big Savings Number */}
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Net Monthly Money Saved
            </span>
            <div style={{ fontSize: '3.2rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.1, margin: '0.4rem 0' }} className="tabular-nums">
              Rs. {stats.monthlySavings.toLocaleString()}
            </div>
            <span style={{ fontSize: '0.88rem', color: '#64748B' }}>
              Annual Savings: <strong style={{ color: '#059669' }}>Rs. {stats.annualSavings.toLocaleString()} / year</strong>
            </span>
          </div>

          {/* Breakdown Rows */}
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#DC2626', fontSize: '0.9rem', fontWeight: 700 }}>
                <Flame size={16} /> 70cc Petrol Monthly Cost:
              </div>
              <strong style={{ fontSize: '1.1rem', color: '#DC2626' }} className="tabular-nums">
                Rs. {stats.monthlyPetrolCost.toLocaleString()}
              </strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontSize: '0.9rem', fontWeight: 700 }}>
                <Zap size={16} /> EV Bike Monthly Electricity:
              </div>
              <strong style={{ fontSize: '1.1rem', color: '#059669' }} className="tabular-nums">
                Rs. {stats.monthlyEvCost.toLocaleString()}
              </strong>
            </div>
          </div>

          {/* Payback Banner */}
          <div
            style={{
              backgroundColor: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: '12px',
              padding: '0.85rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontSize: '0.85rem',
              color: '#1E3A8A',
            }}
          >
            <CheckCircle2 size={20} color="#059669" style={{ flexShrink: 0 }} />
            <span>
              Your new EV bike completely <strong style={{ color: '#059669' }}>pays for itself in {stats.paybackMonths} months</strong> strictly from petrol savings!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
