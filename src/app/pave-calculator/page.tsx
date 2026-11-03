import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PaveCalculator from '@/components/PaveCalculator'
import SavingsSlider from '@/components/SavingsSlider'
import { Calculator, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PAVE Phase 2 Subsidy & 0% Installment Calculator Pakistan | PakEV',
  description:
    'Calculate your net electric bike price after the official Federal Government Rs. 80,000 PAVE Phase 2 subsidy. Compute 0% markup monthly installments for 12, 24, and 36 months.',
  keywords: [
    'pave phase 2 subsidy calculator',
    'pave phase 2 electric bike installment',
    'electric bike 0 percent markup bank installment',
    'pave gov pk application eligibility',
    'pave phase 2 bike price list 2026',
  ],
}

export default function PaveCalculatorPage() {
  return (
    <div className="carbon-glow" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '2rem 1.25rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        {/* Breadcrumb Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#9CA3AF',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            <ArrowLeft size={16} /> Back to All Bikes &amp; Compare Matrix
          </Link>

          <div
            style={{
              background: 'rgba(0, 210, 255, 0.1)',
              border: '1px solid rgba(0, 210, 255, 0.3)',
              color: '#00D2FF',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 800,
            }}
          >
            PAVE Phase 2 Policy Calculator
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#00D2FF',
              fontSize: '0.82rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0.5rem',
            }}
          >
            <Calculator size={18} />
            <span>Federal PAVE Phase 2 Portal</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-1px' }}>
            PAVE Phase 2 <span style={{ color: '#00D2FF' }}>Subsidy &amp; 0% Installment Engine</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.05rem', lineHeight: 1.6, marginTop: '0.75rem' }}>
            Calculate exact net prices with the flat <strong style={{ color: '#FFFFFF' }}>Rs. 80,000 subsidy</strong> deducted. Compute 0% markup bank installments across 12, 24, and 36-month tenures with zero balloting waiting period.
          </p>
        </div>

        {/* PAVE Calculator Component */}
        <PaveCalculator />

        {/* Fuel Savings Simulator */}
        <SavingsSlider />
      </main>

      <Footer />
    </div>
  )
}
