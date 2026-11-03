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
import { getAllPosts } from '@/data/blogPosts'
import { Zap, Scale, Calculator, Flame, ShieldAlert, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, BookOpen, Clock, Calendar } from 'lucide-react'

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
  const latestPosts = getAllPosts().slice(0, 3)

  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '1240px', margin: '0 auto', padding: '2.5rem 1.25rem', width: '100%', minWidth: 0, overflowX: 'hidden', display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
        
        {/* HERO SECTION */}
        <section style={{ textAlign: 'center', margin: '1rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          {/* PAVE 2 Alert Badge */}
          <div
            style={{
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              color: '#DC2626',
              padding: '8px 22px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#DC2626' }} />
            <span>PAVE Phase 2 Live: Balloting Removed • First-Come, First-Served</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-1.5px', color: '#0F172A', maxWidth: '980px' }}>
            Compare Every Electric Bike in Pakistan. <br />
            <span style={{ color: '#059669' }}>Real Range, Sahi Price &amp; PAVE 2 Subsidy.</span>
          </h1>

          <p style={{ color: '#64748B', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '780px' }}>
            Don&apos;t get tricked by inflated brochure claims. We test and compare real-world road range with pillions, reveal Graphene vs. Lithium battery replacement costs, and compute exact monthly fuel savings vs. Honda CD70.
          </p>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
            <Link
              href="/compare"
              style={{
                backgroundColor: '#059669',
                color: '#FFFFFF',
                padding: '0.9rem 1.8rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 900,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 4px 15px rgba(5, 150, 105, 0.3)',
              }}
            >
              <Scale size={20} />
              <span>Launch Comparison Matrix</span>
            </Link>

            <Link
              href="/subsidy-calculator"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0F172A',
                border: '1.5px solid #CBD5E1',
                padding: '0.9rem 1.8rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
              }}
            >
              <Calculator size={20} color="#2563EB" />
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
        <section id="bikes-catalog" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ color: '#059669', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Automotive Showroom Catalog
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginTop: '0.2rem' }}>
                All Verified Electric Bikes in Pakistan (2026)
              </h2>
            </div>

            <Link
              href="/bikes"
              style={{
                color: '#059669',
                fontWeight: 800,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span>View Filterable Catalog</span>
              <ArrowRight size={16} />
            </Link>
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
                className="card-interactive"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '190px', backgroundColor: '#F8FAFC', borderBottom: '1px solid #F1F5F9' }}>
                  <Image
                    src={bike.image_url}
                    alt={bike.model_name}
                    fill
                    style={{ objectFit: 'contain', padding: '12px' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: '#FFFFFF',
                      color: '#0F172A',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                    }}
                  >
                    {bike.brand}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: '#FEF2F2',
                      color: '#DC2626',
                      border: '1px solid #FECACA',
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
                    <Link href={`/bikes/${bike.slug}`}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A' }}>{bike.model_name}</h3>
                    </Link>
                    <p style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.2rem', lineHeight: 1.4 }}>
                      {bike.description}
                    </p>
                  </div>

                  {/* Dual Price Display */}
                  <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '0.85rem 1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.78rem', color: '#64748B', textDecoration: 'line-through' }} className="tabular-nums">
                        Rs. {bike.ex_factory_price.toLocaleString()}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#DC2626', fontWeight: 800 }}>
                        PAVE Net Subsidized
                      </span>
                    </div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#059669' }} className="tabular-nums">
                      Rs. {bike.pave_net_price.toLocaleString()}
                    </div>
                  </div>

                  {/* Key Quick Specs */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.82rem' }}>
                    <div style={{ color: '#64748B' }}>
                      Real Range:{' '}
                      <strong style={{ color: '#059669', fontSize: '0.9rem' }} className="tabular-nums">
                        {bike.real_road_range_km} km
                      </strong>
                    </div>
                    <div style={{ color: '#64748B' }}>
                      Top Speed:{' '}
                      <strong style={{ color: '#2563EB' }} className="tabular-nums">
                        {bike.top_speed_kmh} km/h
                      </strong>
                    </div>
                    <div style={{ color: '#64748B' }}>
                      Battery:{' '}
                      <strong style={{ color: bike.battery_type.includes('Lithium') ? '#059669' : '#D97706' }}>
                        {bike.battery_type.split(' ')[0]}
                      </strong>
                    </div>
                    <div style={{ color: '#64748B' }}>
                      Motor:{' '}
                      <strong style={{ color: '#0F172A' }} className="tabular-nums">
                        {bike.motor_wattage}W
                      </strong>
                    </div>
                  </div>

                  {/* Action Link to Compare */}
                  <Link
                    href={`/bikes/${bike.slug}`}
                    style={{
                      marginTop: 'auto',
                      backgroundColor: '#F1F5F9',
                      color: '#0F172A',
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
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <span>View Specifications &amp; Range Test</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: LATEST GUIDES & ARTICLES */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ color: '#059669', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Consumer Protection &amp; Policy
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginTop: '0.2rem' }}>
                Latest Guides &amp; Battery Reports
              </h2>
            </div>

            <Link
              href="/blog"
              style={{
                color: '#059669',
                fontWeight: 800,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span>Explore All Guides</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="card-interactive"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      background: '#ECFDF5',
                      color: '#059669',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '6px',
                    }}
                  >
                    {post.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#64748B', fontSize: '0.78rem' }}>
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.4 }}>
                    {post.title}
                  </h3>
                </Link>

                <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6, flex: 1 }}>
                  {post.excerpt}
                </p>

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748B', fontSize: '0.78rem' }}>{post.publishedAt}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ color: '#059669', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
