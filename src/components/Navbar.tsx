'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Zap, Scale, Calculator, Flame, BookOpen, MapPin, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      style={{
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E2E8F0',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
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
              background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)',
            }}
          >
            <Zap size={22} color="#FFFFFF" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.5px', color: '#0F172A' }}>
              Pak<span style={{ color: '#059669' }}>EV</span>
            </div>
            <span style={{ fontSize: '0.68rem', color: '#64748B', letterSpacing: '0.5px', textTransform: 'uppercase', fontWeight: 700 }}>
              Electric Bike Portal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <Link
            href="/bikes"
            style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155', transition: 'color 0.2s' }}
          >
            Bikes Catalog
          </Link>
          <Link
            href="/compare"
            style={{
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#059669',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Scale size={16} /> Compare Matrix
          </Link>
          <Link
            href="/subsidy-calculator"
            style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#334155',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Calculator size={16} color="#2563EB" /> PAVE Subsidy
          </Link>
          <Link
            href="/savings-calculator"
            style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#334155',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Flame size={16} color="#EA580C" /> Fuel Savings
          </Link>
          <Link
            href="/blog"
            style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#334155',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <BookOpen size={16} color="#059669" /> Blog &amp; Guides
          </Link>
          <Link
            href="/dealers"
            style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#334155',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <MapPin size={16} color="#64748B" /> Dealers
          </Link>
        </nav>

        {/* Top Right Action Badge & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              color: '#DC2626',
              padding: '5px 12px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#DC2626' }} />
            PAVE -Rs 80,000 Live
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#0F172A',
              display: 'none',
            }}
            className="mobile-nav-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
            padding: '1rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
          }}
        >
          <Link href="/bikes" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0F172A', fontWeight: 600 }}>
            🏍️ Bikes Catalog
          </Link>
          <Link href="/compare" onClick={() => setMobileMenuOpen(false)} style={{ color: '#059669', fontWeight: 700 }}>
            ⚖️ Compare Matrix
          </Link>
          <Link href="/subsidy-calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0F172A', fontWeight: 600 }}>
            🧮 PAVE Subsidy Calculator (-Rs 80k)
          </Link>
          <Link href="/savings-calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0F172A', fontWeight: 600 }}>
            🔥 Petrol vs EV Savings (CD70)
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0F172A', fontWeight: 600 }}>
            📖 Blog &amp; Guides
          </Link>
          <Link href="/dealers" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0F172A', fontWeight: 600 }}>
            📍 Showroom Hubs
          </Link>
        </div>
      )}
    </header>
  )
}
