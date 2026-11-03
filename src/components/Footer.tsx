import React from 'react'
import Link from 'next/link'
import { Zap, ShieldCheck } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '3.5rem 1.25rem 2rem',
        marginTop: '5rem',
        color: '#64748B',
        fontSize: '0.88rem',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {/* 5-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
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
                  background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Zap size={18} color="#FFFFFF" />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A' }}>
                Pak<span style={{ color: '#059669' }}>EV</span>
              </span>
            </div>
            <p style={{ color: '#475569', lineHeight: 1.6, margin: '0.4rem 0' }}>
              Pakistan&apos;s authoritative electric two-wheeler comparison platform and PAVE Phase 2 subsidy portal. Unbiased real-world road range, verified battery longevity truths, and transparent dealership prices.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontSize: '0.78rem', fontWeight: 700 }}>
              <ShieldCheck size={16} /> 100% Independent • Verified Specifications
            </div>
          </div>

          {/* Col 2: Top Comparisons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Popular Head-to-Head
            </div>
            <Link href="/compare?b1=yadea-t5&b2=metro-t9-pro" style={{ color: '#475569' }}>
              ⚡ Yadea T5 vs Metro T9 Pro
            </Link>
            <Link href="/compare?b1=evee-c1-pro&b2=yadea-ruibin" style={{ color: '#475569' }}>
              ⚡ Evee C1 Pro vs Yadea Ruibin
            </Link>
            <Link href="/compare?b1=vlektra-retro&b2=vlektra-velocity-180" style={{ color: '#475569' }}>
              ⚡ Vlektra Retro vs Velocity 180
            </Link>
            <Link href="/compare?b1=evee-s1-air-lithium&b2=metro-m6-empower" style={{ color: '#475569' }}>
              ⚡ Evee S1 Air (LFP) vs Metro M6
            </Link>
            <Link href="/compare?b1=jolta-je-70g-fury&b2=yadea-ruibin" style={{ color: '#475569' }}>
              ⚡ Jolta JE-70G vs Yadea Ruibin
            </Link>
          </div>

          {/* Col 3: PAVE Scheme & Tools */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              PAVE Scheme &amp; Tools
            </div>
            <a href="https://pave.gov.pk" target="_blank" rel="noopener noreferrer" style={{ color: '#059669', fontWeight: 700 }}>
              Official Portal (pave.gov.pk) ↗
            </a>
            <Link href="/pave-calculator" style={{ color: '#475569' }}>
              PAVE -Rs 80k Subsidy Calculator
            </Link>
            <Link href="/#savings-calculator" style={{ color: '#475569' }}>
              Honda CD70 vs EV Fuel Savings
            </Link>
            <Link href="/#bikes-catalog" style={{ color: '#475569' }}>
              All 11 Verified Bikes (2026)
            </Link>
            <Link href="/compare" style={{ color: '#475569' }}>
              Side-by-Side Comparison Matrix
            </Link>
          </div>

          {/* Col 4: Mandatory Legal & Trust Pages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Trust &amp; Compliance
            </div>
            <Link href="/compare?b1=yadea-t5&b2=metro-t9-pro" style={{ color: '#475569' }}>
              Testing Methodology
            </Link>
            <Link href="/#bikes-catalog" style={{ color: '#475569' }}>
              Verified Dealer Network
            </Link>
            <Link href="/pave-calculator" style={{ color: '#475569' }}>
              PAVE Eligibility Criteria
            </Link>
            <Link href="/compare" style={{ color: '#475569' }}>
              Battery Longevity Truths
            </Link>
            <Link href="/#savings-calculator" style={{ color: '#475569' }}>
              Range &amp; Subsidy Disclaimer
            </Link>
          </div>

          {/* Col 5: Showroom Hubs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Major EV Hubs
            </div>
            <div style={{ color: '#475569' }}>📍 Karachi: Akbar Road &amp; Clifton</div>
            <div style={{ color: '#475569' }}>📍 Lahore: McLeod Road &amp; DHA</div>
            <div style={{ color: '#475569' }}>📍 Islamabad: Blue Area &amp; Pindi</div>
            <div style={{ color: '#475569' }}>📍 Faisalabad &amp; Multan Dealers</div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div
          style={{
            borderTop: '1px solid #E2E8F0',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8rem',
            color: '#64748B',
            gap: '1rem',
          }}
        >
          <div>
            &copy; {currentYear} PakEV (EVBikes Pakistan). All trademarks, logos, and model names belong to their respective manufacturers.
          </div>
          <div>All road range data tested under real-world Pakistani city driving conditions with pillion passenger.</div>
        </div>
      </div>
    </footer>
  )
}
