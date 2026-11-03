'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { EvBike } from '@/types'
import { EV_BIKES } from '@/data/bikes'
import LeadModal from './LeadModal'
import { Scale, Zap, ShieldAlert, ShieldCheck, BatteryCharging, Gauge, Wrench, Check, Plus, Trash2 } from 'lucide-react'

interface ComparisonMatrixProps {
  initialBikeIds?: string[]
}

export default function ComparisonMatrix({ initialBikeIds = ['yadea-t5', 'metro-t9-pro', 'evee-c1-pro'] }: ComparisonMatrixProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialBikeIds)
  const [activeModalBike, setActiveModalBike] = useState<EvBike | null>(null)

  const selectedBikes = selectedIds
    .map((id) => EV_BIKES.find((b) => b.id === id))
    .filter((b): b is EvBike => b !== undefined)

  const handleAddBike = (id: string) => {
    if (selectedIds.length < 3 && !selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id])
    }
  }

  const handleRemoveBike = (id: string) => {
    if (selectedIds.length > 1) {
      setSelectedIds(selectedIds.filter((item) => item !== id))
    }
  }

  const handleSwapBike = (index: number, newId: string) => {
    const updated = [...selectedIds]
    updated[index] = newId
    setSelectedIds(updated)
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        backgroundColor: '#111827',
        border: '1.5px solid #1F2937',
        borderRadius: '24px',
        padding: '2rem 1.25rem',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
      }}
    >
      {/* Matrix Controls & Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #1F2937', paddingBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00F299', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            <Scale size={16} />
            <span>Interactive Side-by-Side Matrix</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', marginTop: '0.2rem' }}>
            Compare Specifications, <span style={{ color: '#00F299' }}>Real Range &amp; PAVE Pricing</span>
          </h2>
        </div>

        {/* Quick Comparison Presets */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.78rem', color: '#6B7280', fontWeight: 600 }}>Quick Combos:</span>
          <button
            type="button"
            onClick={() => setSelectedIds(['yadea-t5', 'metro-t9-pro'])}
            style={{
              background: '#1F2937',
              color: '#D1D5DB',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 10px',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            T5 vs T9 Pro
          </button>
          <button
            type="button"
            onClick={() => setSelectedIds(['evee-s1-air-lithium', 'vlektra-retro'])}
            style={{
              background: '#1F2937',
              color: '#D1D5DB',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 10px',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Lithium Showdown
          </button>
          <button
            type="button"
            onClick={() => setSelectedIds(['jolta-je-70g-fury', 'yadea-ruibin', 'evee-c1-pro'])}
            style={{
              background: '#1F2937',
              color: '#D1D5DB',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 10px',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Under Rs 150k PAVE
          </button>
        </div>
      </div>

      {/* Comparison Grid Table */}
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', maxWidth: '100%' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
          <thead>
            <tr>
              <th style={{ width: '22%', padding: '1rem', color: '#9CA3AF', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', verticalAlign: 'bottom' }}>
                Specification
              </th>
              {selectedBikes.map((bike, idx) => (
                <th key={bike.id} style={{ width: `${78 / selectedBikes.length}%`, padding: '1rem', verticalAlign: 'top', borderLeft: '1px solid #1F2937' }}>
                  {/* Bike Selector Dropdown */}
                  <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <select
                      value={bike.id}
                      onChange={(e) => handleSwapBike(idx, e.target.value)}
                      style={{
                        background: '#090D16',
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#00F299',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        padding: '5px 8px',
                        cursor: 'pointer',
                        width: '85%',
                      }}
                    >
                      {EV_BIKES.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.brand} {b.model_name}
                        </option>
                      ))}
                    </select>
                    {selectedBikes.length > 2 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveBike(bike.id)}
                        style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer' }}
                        title="Remove bike from comparison"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>

                  {/* Thumbnail */}
                  <div style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', position: 'relative', marginBottom: '0.75rem', backgroundColor: '#090D16' }}>
                    <Image
                      src={bike.image_url}
                      alt={bike.model_name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Model & PAVE Net Price Tag */}
                  <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#FFFFFF' }}>{bike.model_name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#9CA3AF', textDecoration: 'line-through' }} className="tabular-nums">
                    Ex-Factory: Rs {bike.ex_factory_price.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#00F299', marginTop: '2px' }} className="tabular-nums">
                    Rs {bike.pave_net_price.toLocaleString()}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#EF4444', fontWeight: 700 }}>
                    (-Rs 80,000 PAVE Subsidy Applied)
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveModalBike(bike)}
                    style={{
                      width: '100%',
                      background: '#00F299',
                      color: '#090D16',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 10px',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      marginTop: '0.75rem',
                      boxShadow: '0 0 15px rgba(0, 242, 153, 0.25)',
                    }}
                  >
                    Get Dealer Quote / Test Drive
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody style={{ fontSize: '0.9rem' }}>
            {/* ROW 1: Real-World Road Range */}
            <tr style={{ borderTop: '1px solid #1F2937', backgroundColor: 'rgba(0, 242, 153, 0.04)' }}>
              <td style={{ padding: '0.9rem 1rem', color: '#E5E7EB', fontWeight: 700 }}>
                🛣️ Real Road Range (Pillion + City)
              </td>
              {selectedBikes.map((bike) => (
                <td key={bike.id} style={{ padding: '0.9rem 1rem', borderLeft: '1px solid #1F2937' }}>
                  <strong style={{ color: '#00F299', fontSize: '1.15rem' }} className="tabular-nums">
                    {bike.real_road_range_km} km
                  </strong>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Tested in city traffic</div>
                </td>
              ))}
            </tr>

            {/* ROW 2: Claimed Brochure Range */}
            <tr style={{ borderTop: '1px solid #1F2937' }}>
              <td style={{ padding: '0.9rem 1rem', color: '#9CA3AF' }}>
                📄 Claimed Brochure Range
              </td>
              {selectedBikes.map((bike) => (
                <td key={bike.id} style={{ padding: '0.9rem 1rem', borderLeft: '1px solid #1F2937', color: '#D1D5DB' }} className="tabular-nums">
                  {bike.claimed_range_km} km (Ideal lab test)
                </td>
              ))}
            </tr>

            {/* ROW 3: Battery Chemistry & Decrypter */}
            <tr style={{ borderTop: '1px solid #1F2937', backgroundColor: 'rgba(17, 24, 39, 0.6)' }}>
              <td style={{ padding: '0.9rem 1rem', color: '#E5E7EB', fontWeight: 700 }}>
                🔋 Battery Technology
              </td>
              {selectedBikes.map((bike) => (
                <td key={bike.id} style={{ padding: '0.9rem 1rem', borderLeft: '1px solid #1F2937' }}>
                  {bike.battery_type.includes('Lithium') ? (
                    <div style={{ color: '#10B981', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontWeight: 800 }}>🟢 {bike.battery_type}</span>
                      <span style={{ fontSize: '0.75rem', color: '#6EE7B7' }}>2,000+ Cycles (4-5 Yrs Life)</span>
                    </div>
                  ) : (
                    <div style={{ color: '#F59E0B', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontWeight: 800 }}>⚠️ {bike.battery_type}</span>
                      <span style={{ fontSize: '0.75rem', color: '#FCD34D' }}>Heavy Lead-Acid (1.5-2 Yrs Life)</span>
                    </div>
                  )}
                  <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginTop: '4px' }}>
                    Pack: {bike.battery_voltage}V {bike.battery_amp_hours}Ah ({bike.battery_kwh} kWh)
                  </div>
                </td>
              ))}
            </tr>

            {/* ROW 4: Battery Replacement Cost */}
            <tr style={{ borderTop: '1px solid #1F2937' }}>
              <td style={{ padding: '0.9rem 1rem', color: '#9CA3AF' }}>
                💸 Est. Battery Replacement Cost
              </td>
              {selectedBikes.map((bike) => (
                <td key={bike.id} style={{ padding: '0.9rem 1rem', borderLeft: '1px solid #1F2937' }}>
                  <strong style={{ color: '#F87171' }} className="tabular-nums">
                    ~Rs. {bike.battery_replacement_cost_estimate.toLocaleString()}
                  </strong>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>After cycle degradation</div>
                </td>
              ))}
            </tr>

            {/* ROW 5: Motor Wattage & Top Speed */}
            <tr style={{ borderTop: '1px solid #1F2937' }}>
              <td style={{ padding: '0.9rem 1rem', color: '#E5E7EB', fontWeight: 700 }}>
                ⚡ Motor Power &amp; Top Speed
              </td>
              {selectedBikes.map((bike) => (
                <td key={bike.id} style={{ padding: '0.9rem 1rem', borderLeft: '1px solid #1F2937' }}>
                  <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{bike.motor_wattage} Watts BLDC</span>
                  <div style={{ color: '#00D2FF', fontWeight: 800 }} className="tabular-nums">
                    Top Speed: {bike.top_speed_kmh} km/h
                  </div>
                </td>
              ))}
            </tr>

            {/* ROW 6: Charge Time & Electricity Units */}
            <tr style={{ borderTop: '1px solid #1F2937' }}>
              <td style={{ padding: '0.9rem 1rem', color: '#9CA3AF' }}>
                ⏱️ Full Charge Units &amp; Cost
              </td>
              {selectedBikes.map((bike) => (
                <td key={bike.id} style={{ padding: '0.9rem 1rem', borderLeft: '1px solid #1F2937' }}>
                  <div style={{ color: '#FFFFFF' }} className="tabular-nums">
                    {bike.charge_time_hours} Hours ({bike.charging_units_kwh} kWh)
                  </div>
                  <strong style={{ color: '#00F299', fontSize: '0.85rem' }} className="tabular-nums">
                    ~Rs. {bike.cost_per_charge_pkr} per full charge
                  </strong>
                </td>
              ))}
            </tr>

            {/* ROW 7: Warranties */}
            <tr style={{ borderTop: '1px solid #1F2937' }}>
              <td style={{ padding: '0.9rem 1rem', color: '#9CA3AF' }}>
                🛡️ Official Warranty
              </td>
              {selectedBikes.map((bike) => (
                <td key={bike.id} style={{ padding: '0.9rem 1rem', borderLeft: '1px solid #1F2937', color: '#D1D5DB' }}>
                  <div>Battery: {bike.battery_warranty_months} Months</div>
                  <div>Motor: {bike.motor_warranty_months} Months</div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Lead Capture Modal Hook */}
      <LeadModal bike={activeModalBike} onClose={() => setActiveModalBike(null)} />
    </div>
  )
}
