import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, Phone, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Authorized Electric Bike Dealerships & Showrooms in Pakistan | PakEV',
  description:
    'Find authorized Yadea, Metro, Evee, Vlektra, and Jolta electric bike showrooms across Karachi (Akbar Road), Lahore (McLeod Road), and Islamabad (Blue Area). Book test drives and claim PAVE subsidies.',
}

interface Dealership {
  city: string
  name: string
  address: string
  brands: string[]
  phone: string
  paveAuthorized: boolean
}

const DEALERSHIPS: Dealership[] = [
  // Karachi
  {
    city: 'Karachi',
    name: 'Akbar Road Central EV Showroom',
    address: 'Shop # 12-14, Main Akbar Road, Saddar, Karachi',
    brands: ['Yadea', 'Metro', 'Jolta', 'Crown'],
    phone: '+92 300 2485885',
    paveAuthorized: true,
  },
  {
    city: 'Karachi',
    name: 'Vlektra Experience Center Clifton',
    address: 'Plot 4-C, Khayaban-e-Shahbaz, Phase 6, DHA / Clifton, Karachi',
    brands: ['Vlektra (Retro, Velocity, Bolt)'],
    phone: '+92 300 2485885',
    paveAuthorized: true,
  },
  {
    city: 'Karachi',
    name: 'Evee Electric & Metro Flagship Gulshan',
    address: 'Main University Road, Near Bait-ul-Mukarram, Gulshan-e-Iqbal, Karachi',
    brands: ['Evee (C1 Pro, S1 Air)', 'Metro T9 Pro'],
    phone: '+92 300 2485885',
    paveAuthorized: true,
  },
  // Lahore
  {
    city: 'Lahore',
    name: 'McLeod Road EV Hub',
    address: 'Main McLeod Road Motorcycle Market, Lahore',
    brands: ['Yadea', 'Metro', 'Jolta', 'Crown'],
    phone: '+92 300 2485885',
    paveAuthorized: true,
  },
  {
    city: 'Lahore',
    name: 'Evee & Vlektra Lounge DHA',
    address: 'Sector CCA, Phase 5 DHA, Lahore',
    brands: ['Evee', 'Vlektra'],
    phone: '+92 300 2485885',
    paveAuthorized: true,
  },
  // Islamabad / Rawalpindi
  {
    city: 'Islamabad / Rawalpindi',
    name: 'Blue Area EV Showroom',
    address: 'Jinnah Avenue, Blue Area, Islamabad',
    brands: ['Yadea', 'Metro', 'Vlektra'],
    phone: '+92 300 2485885',
    paveAuthorized: true,
  },
  {
    city: 'Islamabad / Rawalpindi',
    name: 'Murree Road Two-Wheeler Center',
    address: 'Near Committee Chowk, Murree Road, Rawalpindi',
    brands: ['Metro', 'Jolta', 'Crown'],
    phone: '+92 300 2485885',
    paveAuthorized: true,
  },
]

export default function DealersPage() {
  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '1180px', margin: '0 auto', padding: '3.5rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
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
            <MapPin size={16} /> Verified Showroom Directory
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px', lineHeight: 1.2 }}>
            Authorized EV Showrooms &amp; Test-Drive Hubs
          </h1>

          <p style={{ color: '#64748B', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '780px' }}>
            Locate authorized OEM dealerships in Karachi, Lahore, and Islamabad. Inspect physical bikes, book test drives, and process your official PAVE Phase 2 (-Rs 80,000) subsidy vouchers.
          </p>
        </div>

        {/* Showrooms Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {DEALERSHIPS.map((dealer, idx) => (
            <div
              key={idx}
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  style={{
                    background: '#F1F5F9',
                    color: '#0F172A',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '6px',
                  }}
                >
                  📍 {dealer.city}
                </span>

                {dealer.paveAuthorized && (
                  <span
                    style={{
                      background: '#ECFDF5',
                      color: '#059669',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <ShieldCheck size={14} /> PAVE Approved
                  </span>
                )}
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A' }}>
                  {dealer.name}
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
                  {dealer.address}
                </p>
              </div>

              {/* Brands Available */}
              <div>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                  Available Brands:
                </span>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {dealer.brands.map((b) => (
                    <span
                      key={b}
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        color: '#334155',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button to WhatsApp */}
              <a
                href={`https://wa.me/923002485885?text=${encodeURIComponent(`Salam, I want to visit ${dealer.name} in ${dealer.city} for a test drive and quotation.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 'auto',
                  backgroundColor: '#059669',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '0.75rem',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)',
                }}
              >
                <span>Connect via WhatsApp</span>
                <ExternalLink size={15} />
              </a>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  )
}
