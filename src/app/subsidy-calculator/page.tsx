import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PaveCalculator from '@/components/PaveCalculator'
import Link from 'next/link'
import { Calculator, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PAVE Phase 2 Subsidy & 0% Bank Installment Calculator 2026 | PakEV',
  description:
    'Calculate your net electric bike price after the official Rs 80,000 PAVE Phase 2 government subsidy. Calculate 12, 24, and 36-month 0% markup bank installments for Yadea, Metro, Evee & Jolta.',
  keywords: [
    'pave phase 2 calculator',
    'pave subsidy 80000',
    'electric bike installment 0 percent',
    'pave.gov.pk loan calculator',
    'electric bike installment pakistan',
  ],
}

export default function SubsidyCalculatorPage() {
  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '1180px', margin: '0 auto', padding: '3.5rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          <div
            style={{
              background: '#ECFDF5',
              border: '1px solid #A7F3D0',
              color: '#059669',
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
            <ShieldCheck size={16} /> Prime Minister&apos;s National EV Policy (PAVE Phase 2)
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px', lineHeight: 1.2 }}>
            PAVE Phase 2 Subsidy &amp; 0% Bank Installment Calculator
          </h1>

          <p style={{ color: '#64748B', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '780px' }}>
            Check your exact net price after the federal <strong style={{ color: '#059669' }}>Rs. 80,000 flat relief</strong>. Select your preferred down payment and tenure to see monthly 0% markup bank installments across all 11 approved models.
          </p>
        </div>

        {/* The Calculator Component */}
        <section>
          <PaveCalculator />
        </section>

        {/* Eligibility & Documents Guide */}
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
              📋 Citizen Eligibility Checklist
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#334155', fontSize: '0.92rem', paddingLeft: '1.25rem' }}>
              <li><strong>Pakistani CNIC:</strong> Citizen must hold a valid NADRA CNIC.</li>
              <li><strong>Age Requirement:</strong> Minimum 18 years old.</li>
              <li><strong>Driving License:</strong> Valid permanent motorcycle license or verified learner permit.</li>
              <li><strong>Clean Credit History:</strong> Clear e-CIB report from State Bank of Pakistan for 0% bank leasing.</li>
              <li><strong>Income Proof:</strong> 3-month salary slip, business letterhead, or verified student enrollment ID.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
              🏛️ How the 0% Financing Scheme Operates
            </h2>
            <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7 }}>
              Under the Federal Government agreement, partner commercial banks charge <strong>zero profit markup</strong> to the citizen. The markup cost is subsidized directly by the federal treasury to accelerate national carbon reduction and lower oil import bills.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <a
                href="https://pave.gov.pk"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#059669',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>Read Full Circular on Official Portal (pave.gov.pk)</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
