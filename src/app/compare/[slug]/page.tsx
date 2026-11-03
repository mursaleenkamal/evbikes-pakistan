import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComparisonMatrix from '@/components/ComparisonMatrix'
import PaveCalculator from '@/components/PaveCalculator'
import { getAllBikes, getBikeBySlug } from '@/data/bikes'
import { Scale, ArrowLeft, Trophy, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

// Pre-render top 10 most popular head-to-head pairs
export async function generateStaticParams() {
  const topPairs = [
    'yadea-t5-vs-metro-t9-pro',
    'evee-c1-pro-vs-yadea-ruibin',
    'vlektra-retro-vs-vlektra-velocity-180',
    'evee-s1-air-lithium-vs-metro-m6-empower',
    'jolta-je-70g-fury-vs-yadea-ruibin',
    'yadea-t5-vs-evee-c1-pro',
    'metro-t9-pro-vs-metro-m6-empower',
    'vlektra-bolt-vs-vlektra-velocity-180',
    'jolta-je-70g-fury-vs-crown-ezee',
    'yadea-t5-vs-vlektra-retro',
  ]

  return topPairs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const parts = params.slug.split('-vs-')
  if (parts.length !== 2) return { title: 'Comparison | PakEV' }

  const bike1 = getBikeBySlug(parts[0])
  const bike2 = getBikeBySlug(parts[1])

  if (!bike1 || !bike2) return { title: 'Comparison | PakEV' }

  return {
    title: `${bike1.model_name} vs ${bike2.model_name}: Price & Specs Comparison in Pakistan | PakEV`,
    description: `Detailed comparison of ${bike1.model_name} (Rs ${bike1.pave_net_price.toLocaleString()}) vs ${bike2.model_name} (Rs ${bike2.pave_net_price.toLocaleString()}). Compare real-world road range, PAVE Phase 2 subsidies, and battery replacement costs.`,
    openGraph: {
      title: `${bike1.model_name} vs ${bike2.model_name} — Real Range & Subsidy Price`,
      description: `Which is better: ${bike1.model_name} or ${bike2.model_name}? See dual-pillion road range, battery longevity, and 0% markup installments.`,
    },
  }
}

export default async function ProgrammaticComparePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const parts = params.slug.split('-vs-')
  if (parts.length !== 2) notFound()

  const bike1 = getBikeBySlug(parts[0])
  const bike2 = getBikeBySlug(parts[1])

  if (!bike1 || !bike2) notFound()

  // Determine key winner insights
  const rangeWinner = bike1.real_road_range_km >= bike2.real_road_range_km ? bike1 : bike2
  const priceWinner = bike1.pave_net_price <= bike2.pave_net_price ? bike1 : bike2

  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '1240px', margin: '0 auto', padding: '2.5rem 1.25rem', width: '100%', minWidth: 0, overflowX: 'hidden', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Breadcrumb Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            href="/compare"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#64748B',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            <ArrowLeft size={16} /> Open Flexible 3-Bike Matrix
          </Link>

          <div
            style={{
              background: '#ECFDF5',
              border: '1px solid #A7F3D0',
              color: '#059669',
              padding: '4px 14px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 800,
            }}
          >
            ⚡ Programmatic Head-to-Head Report
          </div>
        </div>

        {/* Comparison Hero Title */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px', lineHeight: 1.2 }}>
            {bike1.model_name} <span style={{ color: '#64748B', fontWeight: 600, fontSize: '0.75em' }}>vs</span> {bike2.model_name}
          </h1>
          <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '780px' }}>
            Direct side-by-side evaluation of ex-factory prices, PAVE Phase 2 flat subsidies (-Rs 80,000), real urban road range with dual riders, and battery chemistry lifecycles.
          </p>
        </div>

        {/* Quick Verdict Highlights Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '20px',
            padding: '1.75rem 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', flexShrink: 0 }}>
              <Trophy size={20} />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Range Leader</span>
              <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0F172A' }}>
                {rangeWinner.model_name} ({rangeWinner.real_road_range_km} km real)
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB', flexShrink: 0 }}>
              <Zap size={20} />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>More Affordable (PAVE)</span>
              <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#059669' }}>
                {priceWinner.model_name} (Rs {priceWinner.pave_net_price.toLocaleString()})
              </div>
            </div>
          </div>
        </div>

        {/* The Matrix Pre-loaded with Bike 1 & Bike 2 */}
        <section>
          <ComparisonMatrix initialBikeIds={[bike1.id, bike2.id]} />
        </section>

        {/* PAVE 2 Calculator */}
        <section>
          <PaveCalculator />
        </section>

      </main>

      <Footer />
    </div>
  )
}
