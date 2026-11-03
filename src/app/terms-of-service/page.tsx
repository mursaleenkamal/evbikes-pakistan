import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — PakEV Pakistan',
  description: 'Terms of Service governing the use of PakEV electric bike comparison tools and PAVE subsidy calculators.',
}

export default function TermsOfServicePage() {
  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '3.5rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '1.5rem' }}>
          <div style={{ color: '#059669', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Legal &amp; Compliance
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0F172A', marginTop: '0.3rem' }}>
            Terms of Service
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '0.3rem' }}>
            Last updated: January 2026
          </p>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7, color: '#334155' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>1. Acceptance of Terms</h2>
          <p>
            By accessing or using PakEV (evbikes.online / pakev.pk), you acknowledge and agree to comply with these Terms of Service. If you disagree with any portion of these terms, you should refrain from using our comparison engines and calculators.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>2. Informational Purpose Only</h2>
          <p>
            The content, vehicle specifications, battery chemistry breakdowns, and financial estimates presented on PakEV are provided for general educational and comparative purposes. While we strive to maintain 100% data authenticity, ex-factory prices, dealer freight charges, and government subsidy policies are subject to unilateral changes by manufacturers and the Ministry of Industries &amp; Production.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>3. Intellectual Property</h2>
          <p>
            All brand logos, vehicle trademarks, and model photography belong to their respective original equipment manufacturers (including Yadea Technology Group, Metro E-Vehicles, Evee Electric, Vlektra Motorcycles, and Jolta Electric). PakEV claims no ownership over proprietary OEM branding.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>4. Disclaimer of Warranties</h2>
          <p>
            All road range estimates are calculated based on dual-pillion urban driving in Pakistan. Actual battery range may vary based on ambient temperature, tire pressure, riding speed, road incline, and battery health degradation.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
