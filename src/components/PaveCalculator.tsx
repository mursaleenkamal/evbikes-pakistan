'use client'

import React, { useState, useMemo } from 'react'
import { EV_BIKES } from '@/data/bikes'
import { Calculator, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react'

export default function PaveCalculator() {
  const [selectedModelId, setSelectedModelId] = useState<string>('yadea-t5')
  const [downPayment, setDownPayment] = useState<number>(25000)
  const [tenureMonths, setTenureMonths] = useState<number>(24)

  const selectedBike = useMemo(() => {
    return EV_BIKES.find((b) => b.id === selectedModelId) || EV_BIKES[0]
  }, [selectedModelId])

  const calc = useMemo(() => {
    const subsidy = selectedBike.pave_subsidy_amount // Rs 80,000
    const netPrice = Math.max(0, selectedBike.ex_factory_price - subsidy)
    const financedAmount = Math.max(0, netPrice - downPayment)
    // 0% markup scheme under PAVE Phase 2 bank partner agreement
    const monthlyInstallment = Math.round(financedAmount / tenureMonths)

    return {
      subsidy,
      netPrice,
      financedAmount,
      monthlyInstallment,
    }
  }, [selectedBike, downPayment, tenureMonths])

  return (
    <div
      id="pave-calculator"
      style={{
        backgroundColor: '#111827',
        border: '1.5px solid #1F2937',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#00D2FF', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
        <Calculator size={18} />
        <span>Official Government Scheme Engine</span>
      </div>

      <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#FFFFFF', margin: '0.5rem 0 0.8rem', letterSpacing: '-0.5px' }}>
        PAVE Phase 2 Subsidy &amp; <span style={{ color: '#00D2FF' }}>0% Bank Installment Calculator</span>
      </h2>
      <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '780px' }}>
        Under the Prime Minister&apos;s National EV Policy (PAVE Phase 2), eligible Pakistani citizens receive a flat <strong style={{ color: '#FFFFFF' }}>Rs. 80,000 subsidy</strong> deducted directly from the ex-factory price. Balloting has been scrapped in favor of <strong style={{ color: '#00F299' }}>First-Come, First-Served</strong>.
      </p>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginTop: '2rem',
          alignItems: 'start',
        }}
      >
        {/* Left Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Select Bike Model */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#E5E7EB' }}>
              Select Electric Bike Model:
            </label>
            <select
              value={selectedModelId}
              onChange={(e) => setSelectedModelId(e.target.value)}
              style={{
                backgroundColor: '#090D16',
                border: '1.5px solid #374151',
                borderRadius: '12px',
                padding: '0.85rem 1rem',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 700,
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              {EV_BIKES.map((bike) => (
                <option key={bike.id} value={bike.id}>
                  {bike.brand} {bike.model_name} — Rs. {bike.ex_factory_price.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          {/* Down Payment Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#E5E7EB' }}>
                Upfront Down Payment:
              </label>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#00D2FF' }} className="tabular-nums">
                Rs. {downPayment.toLocaleString()}
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
              {[10000, 25000, 50000].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setDownPayment(amount)}
                  style={{
                    background: downPayment === amount ? '#00D2FF' : '#090D16',
                    color: downPayment === amount ? '#090D16' : '#D1D5DB',
                    border: `1px solid ${downPayment === amount ? '#00D2FF' : '#1F2937'}`,
                    borderRadius: '10px',
                    padding: '0.65rem 0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  Rs. {amount / 1000}k
                </button>
              ))}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
              *Minimum upfront token for Federal Phase 2 allocation is Rs 10,000.
            </span>
          </div>

          {/* Financing Tenure */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#E5E7EB' }}>
              Bank Installment Tenure (0% Markup Scheme):
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
              {[12, 24, 36].map((months) => (
                <button
                  key={months}
                  type="button"
                  onClick={() => setTenureMonths(months)}
                  style={{
                    background: tenureMonths === months ? '#00F299' : '#090D16',
                    color: tenureMonths === months ? '#090D16' : '#D1D5DB',
                    border: `1px solid ${tenureMonths === months ? '#00F299' : '#1F2937'}`,
                    borderRadius: '10px',
                    padding: '0.65rem 0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {months} Months ({months / 12} Yr)
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Cockpit Summary Card */}
        <div
          style={{
            background: 'linear-gradient(145deg, #162032 0%, #0C121E 100%)',
            border: '2px solid #00D2FF',
            borderRadius: '20px',
            padding: '2rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 0 35px rgba(0, 210, 255, 0.15)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#00D2FF', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Estimated Monthly Installment
            </span>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1, margin: '0.3rem 0' }} className="tabular-nums">
              Rs. {calc.monthlyInstallment.toLocaleString()}
              <span style={{ fontSize: '1rem', color: '#9CA3AF', fontWeight: 600 }}> / month</span>
            </div>
            <span style={{ fontSize: '0.82rem', color: '#00F299', fontWeight: 700 }}>
              0% Bank Markup • {tenureMonths} Monthly Payments
            </span>
          </div>

          {/* Breakdown Table */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#9CA3AF' }}>Official Ex-Factory Price:</span>
              <strong style={{ color: '#FFFFFF' }} className="tabular-nums">Rs. {selectedBike.ex_factory_price.toLocaleString()}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#EF4444' }}>
              <span>PAVE Phase 2 Subsidy:</span>
              <strong className="tabular-nums">- Rs. {calc.subsidy.toLocaleString()}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed #374151', paddingTop: '0.5rem' }}>
              <span style={{ color: '#E5E7EB', fontWeight: 700 }}>Net Subsidized Price:</span>
              <strong style={{ color: '#00F299', fontSize: '1.05rem' }} className="tabular-nums">
                Rs. {calc.netPrice.toLocaleString()}
              </strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9CA3AF' }}>
              <span>Upfront Paid by You:</span>
              <span className="tabular-nums">Rs. {downPayment.toLocaleString()}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9CA3AF' }}>
              <span>Remaining Financed:</span>
              <span className="tabular-nums">Rs. {calc.financedAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* CTA Link to PAVE Portal */}
          <a
            href="https://pave.gov.pk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#00D2FF',
              color: '#090D16',
              padding: '0.85rem',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem',
              boxShadow: '0 4px 15px rgba(0, 210, 255, 0.3)',
              textDecoration: 'none',
              transition: 'transform 0.15s',
            }}
          >
            <span>Apply on Official Portal (pave.gov.pk)</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
