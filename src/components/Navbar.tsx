'use client'

import React from 'react'
import Link from 'next/link'
import { Zap, Scale, Calculator, ShieldCheck, Flame } from 'lucide-react'

export default function Navbar() {
  return (
    <header
      style={{
        width: '100%',
        backgroundColor: 'rgba(9, 13, 22, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #1F2937',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00F299 0%, #00B87A 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 242, 153, 0.4)',
            }}
          >
            <Zap size={22} color="#090D16" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.5px', color: '#FFFFFF' }}>
              Pak<span style={{ color: '#00F299' }}>EV</span>
            </div>
            <span style={{ fontSize: '0.68rem', color: '#9CA3AF', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Electric Bike Comparator
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <Link
            href="/#bikes-catalog"
            style={{ fontSize: '0.88rem', fontWeight: 600, color: '#D1D5DB', transition: 'color 0.2s' }}
          >
            All Bikes (11)
          </Link>
          <Link
            href="/compare"
            style={{
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#00F299',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Scale size={16} /> Compare Matrix
          </Link>
          <Link
            href="/pave-calculator"
            style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#D1D5DB',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Calculator size={16} /> PAVE 2 Subsidy
          </Link>
          <Link
            href="/#savings-calculator"
            style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#D1D5DB',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Flame size={16} color="#F59E0B" /> Petrol vs EV
          </Link>
        </nav>

        {/* Top Right Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              color: '#F87171',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }} />
            PAVE -Rs 80,000 Live
          </div>
        </div>
      </div>
    </header>
  )
}
