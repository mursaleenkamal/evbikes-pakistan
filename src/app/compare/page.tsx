import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComparisonMatrix from '@/components/ComparisonMatrix'
import PaveCalculator from '@/components/PaveCalculator'
import { Scale, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Side-by-Side EV Bike Comparison Matrix Pakistan 2026 | PakEV',
  description:
    'Compare up to 3 electric bikes in Pakistan side-by-side. Analyze real-world road range, PAVE Phase 2 net subsidy prices, battery replacement costs, and top speed.',
}

function MatrixWrapper({ searchParams }: { searchParams: Promise<{ b1?: string; b2?: string; b3?: string }> }) {
  return (
    <Suspense fallback={<div style={{ color: '#00F299', padding: '3rem', textAlign: 'center' }}>Loading Comparison Matrix...</div>}>
      <MatrixLoader searchParams={searchParams} />
    </Suspense>
  )
}

async function MatrixLoader({ searchParams }: { searchParams: Promise<{ b1?: string; b2?: string; b3?: string }> }) {
  const params = await searchParams
  const b1 = params.b1 || 'yadea-t5'
  const b2 = params.b2 || 'metro-t9-pro'
  const b3 = params.b3

  const initialIds = b3 ? [b1, b2, b3] : [b1, b2]

  return <ComparisonMatrix initialBikeIds={initialIds} />
}

export default async function ComparePage(props: {
  searchParams: Promise<{ b1?: string; b2?: string; b3?: string }>
}) {
  return (
    <div className="carbon-glow" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '1240px', margin: '0 auto', padding: '2rem 1.25rem', width: '100%', minWidth: 0, overflowX: 'hidden', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
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
            <ArrowLeft size={16} /> Back to All Bikes &amp; Calculators
          </Link>

          <div
            style={{
              background: 'rgba(0, 242, 153, 0.1)',
              border: '1px solid rgba(0, 242, 153, 0.3)',
              color: '#00F299',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 800,
            }}
          >
            ⚡ Automotive Head-to-Head Mode
          </div>
        </div>

        {/* The Matrix */}
        <section>
          <MatrixWrapper searchParams={props.searchParams} />
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
