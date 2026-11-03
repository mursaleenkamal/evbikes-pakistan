import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllBikes, getBikeBySlug } from '@/data/bikes'
import { ShieldCheck, Zap, ArrowLeft, Scale, Calculator, CheckCircle2, AlertTriangle, BatteryCharging, Gauge, Wrench, ExternalLink } from 'lucide-react'

export async function generateStaticParams() {
  const bikes = getAllBikes()
  return bikes.map((bike) => ({
    slug: bike.slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const bike = getBikeBySlug(params.slug)
  if (!bike) return { title: 'Bike Not Found — PakEV' }

  return {
    title: `${bike.model_name} Price in Pakistan 2026, Specs & PAVE Subsidy | PakEV`,
    description: `Official ex-factory price Rs ${bike.ex_factory_price.toLocaleString()} vs PAVE Phase 2 net price Rs ${bike.pave_net_price.toLocaleString()}. Real road range: ${bike.real_road_range_km} km. Battery: ${bike.battery_type}.`,
    openGraph: {
      title: `${bike.model_name} Electric Bike — Price, Real Range & Specs`,
      description: `${bike.brand} ${bike.model_name} review. Real city range ${bike.real_road_range_km} km with pillion. PAVE subsidy -Rs 80,000.`,
      images: [bike.image_url],
    },
  }
}

export default async function BikeDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const bike = getBikeBySlug(params.slug)

  if (!bike) {
    notFound()
  }

  // JSON-LD Product & Breadcrumb Schema
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: `${bike.brand} ${bike.model_name}`,
    image: [bike.image_url],
    description: bike.description,
    brand: {
      '@type': 'Brand',
      name: bike.brand,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PKR',
      price: bike.pave_net_price,
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main style={{ maxWidth: '1180px', margin: '0 auto', padding: '2.5rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Breadcrumb Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#64748B' }}>
          <Link href="/bikes" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#059669', fontWeight: 700 }}>
            <ArrowLeft size={16} /> All Bikes
          </Link>
          <span>/</span>
          <span>{bike.brand}</span>
          <span>/</span>
          <span style={{ color: '#0F172A', fontWeight: 800 }}>{bike.model_name}</span>
        </div>

        {/* Hero Card: Image Left, Main Specs Right */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '24px',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            boxShadow: '0 4px 25px rgba(0, 0, 0, 0.05)',
            alignItems: 'center',
          }}
        >
          {/* Left Photo */}
          <div style={{ position: 'relative', width: '100%', height: '340px', backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
            <Image
              src={bike.image_url}
              alt={bike.model_name}
              fill
              priority
              style={{ objectFit: 'contain', padding: '1.5rem' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: '#FFFFFF',
                color: '#0F172A',
                fontSize: '0.82rem',
                fontWeight: 800,
                padding: '6px 14px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
              }}
            >
              {bike.brand} • {bike.body_type}
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                background: '#FEF2F2',
                color: '#DC2626',
                border: '1px solid #FECACA',
                fontSize: '0.82rem',
                fontWeight: 800,
                padding: '6px 14px',
                borderRadius: '8px',
              }}
            >
              PAVE Subsidy: -Rs 80,000
            </div>
          </div>

          {/* Right Header Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.3rem' }}>
                <ShieldCheck size={16} /> Official Verified Model (2026)
              </div>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.5px' }}>
                {bike.model_name}
              </h1>
              <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.6, marginTop: '0.4rem' }}>
                {bike.description}
              </p>
            </div>

            {/* Price Box */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '16px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748B', textDecoration: 'line-through' }} className="tabular-nums">
                  Official Ex-Factory: Rs {bike.ex_factory_price.toLocaleString()}
                </span>
                <span style={{ fontSize: '0.78rem', color: '#DC2626', fontWeight: 800 }}>
                  PAVE Phase 2 Net Discount
                </span>
              </div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#059669', margin: '0.3rem 0' }} className="tabular-nums">
                Rs. {bike.pave_net_price.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#2563EB', fontWeight: 700 }}>
                Eligible for 0% Bank Markup Installments (from ~Rs 4,800/month)
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/923002485885?text=${encodeURIComponent(`Salam, I want to book a showroom test-drive and quotation for ${bike.brand} ${bike.model_name} under PAVE Phase 2.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#059669',
                  color: '#FFFFFF',
                  padding: '0.9rem 1.6rem',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(5, 150, 105, 0.3)',
                }}
              >
                <span>Book Test Drive / Quote</span>
                <ExternalLink size={16} />
              </a>

              <Link
                href={`/compare?b1=${bike.slug}&b2=yadea-t5`}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0F172A',
                  border: '1.5px solid #CBD5E1',
                  padding: '0.9rem 1.4rem',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Scale size={16} color="#059669" />
                <span>Compare with Other Bikes</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Spec Sheet Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Card 1: Range & Battery Reality */}
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontWeight: 800 }}>
              <BatteryCharging size={22} />
              <h2 style={{ fontSize: '1.25rem', color: '#0F172A' }}>Battery &amp; Real Range Reality</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Real Road Range (Dual Rider):</span>
                <strong style={{ color: '#059669', fontSize: '1.1rem' }} className="tabular-nums">{bike.real_road_range_km} km</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Brochure Claimed Range:</span>
                <span style={{ color: '#0F172A' }} className="tabular-nums">{bike.claimed_range_km} km (Lab)</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Battery Chemistry:</span>
                <strong style={{ color: bike.battery_type.includes('Lithium') ? '#059669' : '#D97706' }}>
                  {bike.battery_type}
                </strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Pack Voltage &amp; Capacity:</span>
                <span style={{ color: '#0F172A' }} className="tabular-nums">{bike.battery_voltage}V {bike.battery_amp_hours}Ah ({bike.battery_kwh} kWh)</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748B' }}>Est. Replacement Cost:</span>
                <strong style={{ color: '#DC2626' }} className="tabular-nums">~Rs {bike.battery_replacement_cost_estimate.toLocaleString()}</strong>
              </div>
            </div>

            {/* Warning / Advantage Pill */}
            {bike.battery_type.includes('Lithium') ? (
              <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '12px', padding: '0.85rem', fontSize: '0.85rem', color: '#065F46', display: 'flex', gap: '0.5rem' }}>
                <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>5+ Year Lithium Lifespan:</strong> 2,000+ charge cycles with minimal degradation and fast 3.5-hr charging.</span>
              </div>
            ) : (
              <div style={{ backgroundColor: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '12px', padding: '0.85rem', fontSize: '0.85rem', color: '#92400E', display: 'flex', gap: '0.5rem' }}>
                <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Graphene Replacement Notice:</strong> Expect cycle degradation in 18–24 months (~Rs 45k new pack cost).</span>
              </div>
            )}
          </div>

          {/* Card 2: Motor & Charging Physics */}
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563EB', fontWeight: 800 }}>
              <Gauge size={22} />
              <h2 style={{ fontSize: '1.25rem', color: '#0F172A' }}>Performance &amp; Charging</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Motor Power:</span>
                <strong style={{ color: '#0F172A' }} className="tabular-nums">{bike.motor_wattage} Watts BLDC</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Top Speed:</span>
                <strong style={{ color: '#2563EB' }} className="tabular-nums">{bike.top_speed_kmh} km/h</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>0 to 100% Charge Time:</span>
                <span style={{ color: '#0F172A' }} className="tabular-nums">{bike.charge_time_hours} Hours</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Electricity Per Full Charge:</span>
                <span style={{ color: '#0F172A' }} className="tabular-nums">{bike.charging_units_kwh} Units (kWh)</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748B' }}>Cost Per Full Charge:</span>
                <strong style={{ color: '#059669' }} className="tabular-nums">~Rs {bike.cost_per_charge_pkr} PKR</strong>
              </div>
            </div>

            <div style={{ backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '0.85rem', fontSize: '0.85rem', color: '#1E40AF', display: 'flex', gap: '0.5rem' }}>
              <Wrench size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Official Warranty:</strong> {bike.battery_warranty_months} months on battery pack • {bike.motor_warranty_months} months on motor controller.</span>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}
