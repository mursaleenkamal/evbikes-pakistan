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
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '24px',
        padding: '2.5rem 1.75rem',
        boxShadow: '0 4px 25px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#2563EB', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
        <Calculator size={18} />
        <span>Official Government Scheme Engine</span>
      </div>

      <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0F172A', margin: '0.5rem 0 0.8rem', letterSpacing: '-0.5px' }}>
        PAVE Phase 2 Subsidy &amp; <span style={{ color: '#059669' }}>0% Bank Installment Calculator</span>
      </h2>
      <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '780px' }}>
        Under the Prime Minister&apos;s National EV Policy (PAVE Phase 2), eligible Pakistani citizens receive a flat <strong style={{ color: '#059669' }}>Rs. 80,000 subsidy</strong> deducted directly from the ex-factory price. Balloting has been scrapped in favor of <strong style={{ color: '#059669' }}>First-Come, First-Served</strong>.
      </p>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2.5rem',
          marginTop: '2rem',
          alignItems: 'start',
        }}
      >
        {/* Left Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Select Bike Model */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>
              Select Electric Bike Model:
            </label>
            <select
              value={selectedModelId}
              onChange={(e) => setSelectedModelId(e.target.value)}
              style={{
                backgroundColor: '#F8FAFC',
                border: '1.5px solid #CBD5E1',
                borderRadius: '12px',
                padding: '0.85rem 1rem',
                color: '#0F172A',
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
              <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>
                Upfront Down Payment:
              </label>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2563EB' }} className="tabular-nums">
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
                    background: downPayment === amount ? '#2563EB' : '#F1F5F9',
                    color: downPayment === amount ? '#FFFFFF' : '#334155',
                    border: `1px solid ${downPayment === amount ? '#2563EB' : '#E2E8F0'}`,
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
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
              *Minimum upfront token for Federal Phase 2 allocation is Rs 10,000.
            </span>
          </div>

          {/* Financing Tenure */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>
              Bank Installment Tenure (0% Markup Scheme):
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
              {[12, 24, 36].map((months) => (
                <button
                  key={months}
                  type="button"
                  onClick={() => setTenureMonths(months)}
                  style={{
                    background: tenureMonths === months ? '#059669' : '#F1F5F9',
                    color: tenureMonths === months ? '#FFFFFF' : '#334155',
                    border: `1px solid ${tenureMonths === months ? '#059669' : '#E2E8F0'}`,
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
            background: 'linear-gradient(145deg, #ECFDF5 0%, #FFFFFF 100%)',
            border: '2px solid #059669',
            borderRadius: '20px',
            padding: '2rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 8px 30px rgba(5, 150, 105, 0.12)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Estimated Monthly Installment
            </span>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.1, margin: '0.3rem 0' }} className="tabular-nums">
              Rs. {calc.monthlyInstallment.toLocaleString()}
              <span style={{ fontSize: '1rem', color: '#64748B', fontWeight: 600 }}> / month</span>
            </div>
            <span style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 700 }}>
              0% Bank Markup • {tenureMonths} Monthly Payments
            </span>
          </div>

          {/* Breakdown Table */}
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Official Ex-Factory Price:</span>
              <strong style={{ color: '#0F172A' }} className="tabular-nums">Rs. {selectedBike.ex_factory_price.toLocaleString()}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#DC2626' }}>
              <span>PAVE Phase 2 Subsidy:</span>
              <strong className="tabular-nums">- Rs. {calc.subsidy.toLocaleString()}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed #CBD5E1', paddingTop: '0.5rem' }}>
              <span style={{ color: '#0F172A', fontWeight: 700 }}>Net Subsidized Price:</span>
              <strong style={{ color: '#059669', fontSize: '1.15rem' }} className="tabular-nums">
                Rs. {calc.netPrice.toLocaleString()}
              </strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B' }}>
              <span>Upfront Paid by You:</span>
              <span className="tabular-nums">Rs. {downPayment.toLocaleString()}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B' }}>
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
              backgroundColor: '#059669',
              color: '#FFFFFF',
              padding: '0.85rem',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem',
              boxShadow: '0 4px 15px rgba(5, 150, 105, 0.3)',
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
