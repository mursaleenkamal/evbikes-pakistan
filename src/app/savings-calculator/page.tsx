import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SavingsSlider from '@/components/SavingsSlider'
import Link from 'next/link'
import { Flame, PiggyBank, ArrowRight, Zap, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Honda CD70 vs Electric Bike Fuel Savings Calculator 2026 | PakEV',
  description:
    'Calculate how much money you save every month by replacing a Honda CD70 (Rs 285/L petrol) with an electric bike in Pakistan. Real payback period and ROI simulator.',
  keywords: [
    'honda cd70 petrol cost calculator',
    'electric bike vs 70cc savings',
    'electric bike monthly electricity bill pakistan',
    'cd70 mileage vs electric bike',
  ],
}

export default function SavingsCalculatorPage() {
  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '1180px', margin: '0 auto', padding: '3.5rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          <div
            style={{
              background: '#FFF7ED',
              border: '1px solid #FFEDD5',
              color: '#EA580C',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Flame size={16} /> Commuter Fuel Inflation Relief
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px', lineHeight: 1.2 }}>
            Honda CD70 vs Electric Bike: Fuel Savings Simulator
          </h1>

          <p style={{ color: '#64748B', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '780px' }}>
            Calculate your actual monthly petrol expense at Rs. 285/L and see how fast an electric two-wheeler completely pays for itself strictly from fuel and engine oil savings.
          </p>
        </div>

        {/* The Savings Calculator Component */}
        <section>
          <SavingsSlider />
        </section>

        {/* Mathematical Breakdown Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
              ⛽ Petrol Bike Formula (CD70 Baseline)
            </h2>
            <div style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p>• <strong>Fuel Economy:</strong> 45 km / Liter (authentic urban average in congested Karachi/Lahore traffic).</p>
              <p>• <strong>Petrol Price:</strong> Rs. 285 per Liter.</p>
              <p>• <strong>Engine Oil &amp; Tuning:</strong> ~Rs. 1,200 per 1,000 km (oil changes, spark plug replacements, chain lube).</p>
              <p>• <strong>Cost per Kilometer:</strong> ~Rs. 7.50 / km.</p>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
              ⚡ Electric Bike Formula (72V 26Ah Pack)
            </h2>
            <div style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p>• <strong>Wall Power Drawn:</strong> ~2.0 kWh (units) for a full 0–100% recharge.</p>
              <p>• <strong>Electricity Rate:</strong> Rs. 38 per unit (national average residential slab).</p>
              <p>• <strong>Cost per Full Charge:</strong> ~Rs. 76 PKR for 75 km real road range.</p>
              <p>• <strong>Cost per Kilometer:</strong> ~Rs. 1.01 / km (over 85% cheaper than petrol!).</p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
