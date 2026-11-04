'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadModal from '@/components/LeadModal'
import CompareTray from '@/components/CompareTray'
import { EV_BIKES } from '@/data/bikes'
import { EvBike } from '@/types'
import { Search, Filter, Scale, ArrowRight, Zap, ShieldCheck, CheckCircle2, Check, Plus } from 'lucide-react'

export default function BikesCatalogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [selectedBattery, setSelectedBattery] = useState('All')
  const [activeModalBike, setActiveModalBike] = useState<EvBike | null>(null)
  const [compareIds, setCompareIds] = useState<string[]>([])

  const brands = useMemo(() => {
    return ['All', ...Array.from(new Set(EV_BIKES.map((b) => b.brand)))]
  }, [])

  const toggleCompare = (id: string) => {
    if (compareIds.includes(id)) {
      setCompareIds(compareIds.filter((item) => item !== id))
    } else {
      if (compareIds.length >= 3) {
        alert('You can compare a maximum of 3 bikes at a time.')
        return
      }
      setCompareIds([...compareIds, id])
    }
  }

  const selectedCompareBikes = useMemo(() => {
    return compareIds
      .map((id) => EV_BIKES.find((b) => b.id === id))
      .filter((b): b is EvBike => b !== undefined)
  }, [compareIds])

  const filteredBikes = useMemo(() => {
    return EV_BIKES.filter((bike) => {
      const matchSearch =
        bike.model_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bike.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bike.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchBrand = selectedBrand === 'All' || bike.brand === selectedBrand

      const matchBattery =
        selectedBattery === 'All' ||
        (selectedBattery === 'Lithium' && bike.battery_type.includes('Lithium')) ||
        (selectedBattery === 'Graphene' && !bike.battery_type.includes('Lithium'))

      return matchSearch && matchBrand && matchBattery
    })
  }, [searchTerm, selectedBrand, selectedBattery])

  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '1240px', margin: '0 auto', padding: '3rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ color: '#059669', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Official Pakistani EV Catalog (2026)
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.5px' }}>
            All Electric Bikes &amp; Scooters in Pakistan
          </h1>
          <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '780px' }}>
            Explore verified specifications, authentic showroom prices, PAVE Phase 2 flat subsidies (-Rs 80,000), and real-world road range derated for dual-pillion urban traffic.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
          }}
        >
          {/* Search Input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '0.65rem 0.9rem', flex: '1 1 240px' }}>
            <Search size={18} color="#64748B" />
            <input
              type="text"
              placeholder="Search by model (e.g. T5, C1 Pro, Bolt)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', width: '100%', color: '#0F172A' }}
            />
          </div>

          {/* Brand Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 700 }}>Brand:</span>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              style={{
                background: '#F8FAFC',
                border: '1.5px solid #CBD5E1',
                borderRadius: '10px',
                padding: '0.65rem 0.85rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#0F172A',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Battery Chemistry Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 700 }}>Battery:</span>
            <select
              value={selectedBattery}
              onChange={(e) => setSelectedBattery(e.target.value)}
              style={{
                background: '#F8FAFC',
                border: '1.5px solid #CBD5E1',
                borderRadius: '10px',
                padding: '0.65rem 0.85rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#0F172A',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="All">All Chemistries</option>
              <option value="Lithium">Lithium LiFePO4 (5-Yr Life)</option>
              <option value="Graphene">Graphene / Lead-Acid</option>
            </select>
          </div>

          <div style={{ marginLeft: 'auto', fontSize: '0.85rem', color: '#64748B', fontWeight: 700 }}>
            Showing {filteredBikes.length} of {EV_BIKES.length} Models
          </div>
        </div>

        {/* Vehicles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredBikes.map((bike) => (
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
              {/* Image Container */}
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

              {/* Content Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                <div>
                  <Link href={`/bikes/${bike.slug}`}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A', transition: 'color 0.2s' }}>
                      {bike.model_name}
                    </h3>
                  </Link>
                  <p style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.25rem', lineHeight: 1.4 }}>
                    {bike.description}
                  </p>
                </div>

                {/* Price Box */}
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '0.85rem 1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: '#64748B', textDecoration: 'line-through' }} className="tabular-nums">
                      Rs. {bike.ex_factory_price.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#DC2626', fontWeight: 800 }}>
                      PAVE Net Subsidized
                    </span>
                  </div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#059669', marginTop: '2px' }} className="tabular-nums">
                    Rs. {bike.pave_net_price.toLocaleString()}
                  </div>
                </div>

                {/* Specs Pill Matrix */}
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

                {/* Dual Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
                  <Link
                    href={`/bikes/${bike.slug}`}
                    style={{
                      backgroundColor: '#F1F5F9',
                      color: '#0F172A',
                      borderRadius: '10px',
                      padding: '0.7rem',
                      textAlign: 'center',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    View Specs
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleCompare(bike.id)}
                    style={{
                      backgroundColor: compareIds.includes(bike.id) ? '#ECFDF5' : '#FFFFFF',
                      color: compareIds.includes(bike.id) ? '#059669' : '#0F172A',
                      border: `1.5px solid ${compareIds.includes(bike.id) ? '#059669' : '#CBD5E1'}`,
                      borderRadius: '10px',
                      padding: '0.7rem',
                      textAlign: 'center',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {compareIds.includes(bike.id) ? (
                      <>
                        <Check size={15} /> Added
                      </>
                    ) : (
                      <>
                        <Plus size={15} /> Compare
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Floating Bottom Comparison Tray */}
      <CompareTray
        selectedBikes={selectedCompareBikes}
        onRemove={(id) => setCompareIds(compareIds.filter((item) => item !== id))}
        onClear={() => setCompareIds([])}
      />

      <Footer />
      <LeadModal bike={activeModalBike} onClose={() => setActiveModalBike(null)} />
    </div>
  )
}
