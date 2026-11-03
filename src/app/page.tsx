import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComparisonMatrix from '@/components/ComparisonMatrix'
import PaveCalculator from '@/components/PaveCalculator'
import SavingsSlider from '@/components/SavingsSlider'
import { getAllBikes, getFeaturedBikes } from '@/data/bikes'
import { Zap, Scale, Calculator, Flame, ShieldAlert, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PakEV — Electric Bike Price & Comparison in Pakistan 2026 | PAVE Phase 2 Subsidy',
  description:
    'Compare all electric bikes in Pakistan side-by-side. Calculate PAVE Phase 2 net price (-Rs 80,000), 0% bank installments, real-world road range, and Honda CD70 monthly petrol savings.',
  keywords: [
    'electric bike price in pakistan',
    'pave phase 2 electric bike scheme',
    'pave phase 2 subsidy calculator',
    'yadea electric bike price pakistan',
    'metro electric bike models 2026',
    'evee electric scooter range',
    'vlektra electric motorcycle pakistan',
    'electric bike installment 0 percent markup',
    'graphene vs lithium battery electric bike',
  ],
}

export default function HomePage() {
  const allBikes = getAllBikes()
  const featuredBikes = getFeaturedBikes()

  return (
    <div className="carbon-glow" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '1240px', margin: '0 auto', padding: '2rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* HERO SECTION */}
        <section style={{ textAlign: 'center', margin: '1.5rem 0 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          {/* PAVE 2 Alert Badge */}
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              color: '#FCA5A5',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
            <span>PAVE Phase 2 Live: Balloting Removed • First-Come, First-Served</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-1.5px', maxWidth: '980px' }}>
            Compare Every Electric Bike in Pakistan. <br />
            <span style={{ color: '#00F299' }}>Real Range, Sahi Price &amp; PAVE 2 Subsidy.</span>
          </h1>

          <p style={{ color: '#9CA3AF', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '780px' }}>
            Don&apos;t get tricked by inflated brochure claims. We test and compare real-world road range with pillions, reveal Graphene vs. Lithium battery replacement costs, and compute exact monthly fuel savings vs. Honda CD70.
          </p>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
            <Link
              href="/compare"
              style={{
                backgroundColor: '#00F299',
                color: '#090D16',
                padding: '0.9rem 1.8rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 900,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 0 25px rgba(0, 242, 153, 0.35)',
              }}
            >
              <Scale size={20} />
              <span>Launch Comparison Matrix</span>
            </Link>

            <Link
              href="#pave-calculator"
              style={{
                backgroundColor: '#111827',
                color: '#FFFFFF',
                border: '1.5px solid #374151',
                padding: '0.9rem 1.8rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <Calculator size={20} color="#00D2FF" />
              <span>PAVE -Rs 80k Subsidy Calculator</span>
            </Link>
          </div>
        </section>

        {/* SECTION 1: EMBEDDED COMPARISON MATRIX */}
        <section id="compare-section">
          <ComparisonMatrix initialBikeIds={['yadea-t5', 'metro-t9-pro', 'evee-c1-pro']} />
        </section>

        {/* SECTION 2: PAVE PHASE 2 SUBSIDY CALCULATOR */}
        <section>
          <PaveCalculator />
        </section>

        {/* SECTION 3: PETROL VS EV SAVINGS SLIDER */}
        <section>
          <SavingsSlider />
        </section>

        {/* SECTION 4: FULL VEHICLE CATALOG */}
        <section id="bikes-catalog" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ color: '#00F299', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Automotive Showroom Catalog
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', marginTop: '0.2rem' }}>
                All Verified Electric Bikes in Pakistan (2026)
              </h2>
            </div>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {allBikes.map((bike) => (
              <div
                key={bike.id}
                style={{
                  backgroundColor: '#111827',
                  border: '1.5px solid #1F2937',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, border-color 0.2s',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '180px', backgroundColor: '#090D16' }}>
                  <Image
                    src={bike.image_url}
                    alt={bike.model_name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: '#00F299',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 242, 153, 0.3)',
                    }}
                  >
                    {bike.brand}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(239, 68, 68, 0.9)',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '8px',
                    }}
                  >
                    PAVE: -Rs 80k
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>{bike.model_name}</h3>
                    <p style={{ fontSize: '0.82rem', color: '#9CA3AF', marginTop: '0.2rem', lineHeight: 1.4 }}>
                      {bike.description}
                    </p>
                  </div>

                  {/* Dual Price Display */}
                  <div style={{ backgroundColor: '#090D16', border: '1px solid #1F2937', borderRadius: '12px', padding: '0.85rem 1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: '#6B7280', textDecoration: 'line-through' }} className="tabular-nums">
                        Rs. {bike.ex_factory_price.toLocaleString()}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#EF4444', fontWeight: 700 }}>
                        PAVE Discounted
                      </span>
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#00F299' }} className="tabular-nums">
                      Rs. {bike.pave_net_price.toLocaleString()}
                    </div>
                  </div>

                  {/* Key Quick Specs */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.82rem' }}>
                    <div style={{ color: '#9CA3AF' }}>
                      Real Range:{' '}
                      <strong style={{ color: '#FFFFFF' }} className="tabular-nums">
                        {bike.real_road_range_km} km
                      </strong>
                    </div>
                    <div style={{ color: '#9CA3AF' }}>
                      Top Speed:{' '}
                      <strong style={{ color: '#00D2FF' }} className="tabular-nums">
                        {bike.top_speed_kmh} km/h
                      </strong>
                    </div>
                    <div style={{ color: '#9CA3AF' }}>
                      Battery:{' '}
                      <strong style={{ color: bike.battery_type.includes('Lithium') ? '#10B981' : '#F59E0B' }}>
                        {bike.battery_type.split(' ')[0]}
                      </strong>
                    </div>
                    <div style={{ color: '#9CA3AF' }}>
                      Motor:{' '}
                      <strong style={{ color: '#FFFFFF' }} className="tabular-nums">
                        {bike.motor_wattage}W
                      </strong>
                    </div>
                  </div>

                  {/* Action Link to Compare */}
                  <Link
                    href={`/compare?b1=${bike.slug}&b2=yadea-t5`}
                    style={{
                      marginTop: 'auto',
                      backgroundColor: '#1F2937',
                      color: '#FFFFFF',
                      borderRadius: '10px',
                      padding: '0.75rem',
                      textAlign: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Compare with Yadea T5</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
