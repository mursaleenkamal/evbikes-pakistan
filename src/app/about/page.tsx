import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ShieldCheck, Target, Zap, CheckCircle2, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About PakEV — Pakistan’s Independent Electric Two-Wheeler Portal',
  description:
    'Learn about PakEV, our real-world road range testing methodology, PAVE Phase 2 subsidy verification, and our mission to accelerate clean mobility in Pakistan.',
}

export default function AboutPage() {
  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '980px', margin: '0 auto', padding: '3.5rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
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
            <ShieldCheck size={16} /> 100% Independent Public Utility
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px', lineHeight: 1.2 }}>
            About Pak<span style={{ color: '#059669' }}>EV</span>: Unbiased Electric Mobility
          </h1>

          <p style={{ color: '#64748B', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '720px' }}>
            Empowering Pakistani commuters with ground-truth road range testing, transparent battery chemistry breakdowns, and authoritative PAVE Phase 2 subsidy guidance.
          </p>
        </div>

        {/* Mission Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#059669', fontWeight: 800 }}>
            <Target size={22} />
            <h2 style={{ fontSize: '1.4rem', color: '#0F172A' }}>Our Core Mission</h2>
          </div>
          <p style={{ color: '#334155', lineHeight: 1.7, fontSize: '0.98rem' }}>
            Pakistan is undergoing a rapid transition toward electric two-wheelers driven by escalating petrol prices and government initiatives like the <strong>PAVE Phase 2 (Rs 80,000 flat subsidy)</strong>. However, consumers face rampant misinformation: brochure ranges are measured on lab dynos with zero wind resistance and a single 55kg rider, leading to 30%–40% range disappointments in real traffic.
          </p>
          <p style={{ color: '#334155', lineHeight: 1.7, fontSize: '0.98rem' }}>
            <strong>PakEV exists to establish radical transparency.</strong> We field-test bikes in real Karachi, Lahore, and Rawalpindi urban conditions with dual pillion passengers, reveal the hidden replacement costs of Graphene vs. Lithium LiFePO4 batteries, and calculate verified payback periods down to the exact rupee.
          </p>
        </div>

        {/* 3 Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669' }}>
              <Award size={20} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Real-World Derating</h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
              We reject brochure numbers. Our real road range numbers factor in 45°C Karachi heat, AC charging loss, and authentic urban stop-and-go commuting.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
              <Zap size={20} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Battery Truths</h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
              We educate buyers that &quot;Graphene&quot; is heavy lead-acid requiring Rs 45,000+ replacement every 18 months, whereas Lithium LFP lasts 5+ years.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626' }}>
              <Users size={20} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>Zero OEM Bias</h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
              PakEV does not accept sponsored ratings. We compare Yadea, Metro, Evee, Vlektra, and Jolta on uniform, objective benchmarks.
            </p>
          </div>
        </div>

        {/* Editorial Standards & Contact Info */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>Editorial &amp; Data Verification Standards</h2>
          <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.7 }}>
            All vehicle specifications and prices are verified against official distributor portals (Yadea Pakistan, Metro E-Vehicles, Evee Electric, Vlektra Motorcycles, Jolta Electric) and the Engineering Development Board (EDB) PAVE Scheme registers. If you identify a specification discrepancy, please notify our editorial board at <strong style={{ color: '#059669' }}>editorial@pakev.pk</strong>.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  )
}
