import React from 'react'
import Link from 'next/link'
import { Zap, ShieldCheck } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: '#070B12',
        borderTop: '1px solid #1F2937',
        padding: '3.5rem 1.25rem 2rem',
        marginTop: '5rem',
        color: '#9CA3AF',
        fontSize: '0.88rem',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {/* 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Col 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: '#00F299',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Zap size={18} color="#090D16" />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FFFFFF' }}>
                Pak<span style={{ color: '#00F299' }}>EV</span>
              </span>
            </div>
            <p style={{ color: '#6B7280', lineHeight: 1.6, margin: '0.4rem 0' }}>
              Pakistan&apos;s independent automotive electric bike comparator and PAVE Phase 2 subsidy calculator. Unbiased real-world road range, battery longevity truths, and transparent dealer quotations.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10B981', fontSize: '0.78rem', fontWeight: 700 }}>
              <ShieldCheck size={16} /> 100% Independent • Verified Specifications
            </div>
          </div>

          {/* Col 2: Top Comparisons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Popular Head-to-Head
            </div>
            <Link href="/compare?b1=yadea-t5&b2=metro-t9-pro" style={{ color: '#9CA3AF' }}>
              ⚡ Yadea T5 vs Metro T9 Pro
            </Link>
            <Link href="/compare?b1=evee-c1-pro&b2=yadea-ruibin" style={{ color: '#9CA3AF' }}>
              ⚡ Evee C1 Pro vs Yadea Ruibin
            </Link>
            <Link href="/compare?b1=vlektra-retro&b2=vlektra-velocity-180" style={{ color: '#9CA3AF' }}>
              ⚡ Vlektra Retro vs Velocity 180
            </Link>
            <Link href="/compare?b1=evee-s1-air-lithium&b2=metro-m6-empower" style={{ color: '#9CA3AF' }}>
              ⚡ Evee S1 Air (LFP) vs Metro M6
            </Link>
            <Link href="/compare?b1=jolta-je-70g-fury&b2=yadea-ruibin" style={{ color: '#9CA3AF' }}>
              ⚡ Jolta JE-70G vs Yadea Ruibin
            </Link>
          </div>

          {/* Col 3: PAVE Phase 2 Resources */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              PAVE Phase 2 Resources
            </div>
            <a href="https://pave.gov.pk" target="_blank" rel="noopener noreferrer" style={{ color: '#00F299', fontWeight: 600 }}>
              Official Portal (pave.gov.pk) ↗
            </a>
            <Link href="/#pave-calculator" style={{ color: '#9CA3AF' }}>
              PAVE Net Subsidy Calculator (-Rs 80,000)
            </Link>
            <Link href="/#savings-calculator" style={{ color: '#9CA3AF' }}>
              Honda CD70 vs EV Monthly Savings
            </Link>
            <span style={{ color: '#6B7280', fontSize: '0.8rem', lineHeight: 1.5, marginTop: '0.4rem' }}>
              Managed by Engineering Development Board (EDB) under National EV Policy 2025–30.
            </span>
          </div>

          {/* Col 4: Top Regional Hubs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Showroom Hubs
            </div>
            <div style={{ color: '#9CA3AF' }}>📍 Karachi: Akbar Road &amp; Clifton</div>
            <div style={{ color: '#9CA3AF' }}>📍 Lahore: McLeod Road &amp; DHA</div>
            <div style={{ color: '#9CA3AF' }}>📍 Islamabad: Blue Area &amp; Murree Rd</div>
            <div style={{ color: '#9CA3AF' }}>📍 Faisalabad &amp; Multan Showrooms</div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div
          style={{
            borderTop: '1px solid #1F2937',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8rem',
            color: '#6B7280',
            gap: '1rem',
          }}
        >
          <div>
            &copy; {currentYear} PakEV (EVBikes Pakistan). All trademarks, logos, and model names belong to their respective manufacturers.
          </div>
          <div>Field-tested range numbers measured under real Pakistani urban traffic conditions.</div>
        </div>
      </div>
    </footer>
  )
}
