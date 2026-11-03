'use client'

import React, { useState } from 'react'
import { EvBike } from '@/types'
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react'

interface LeadModalProps {
  bike: EvBike | null
  onClose: () => void
}

export default function LeadModal({ bike, onClose }: LeadModalProps) {
  const [fullName, setFullName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('Karachi')
  const [paymentMode, setPaymentMode] = useState('PAVE 0% Bank Lease')
  const [submitted, setSubmitted] = useState(false)

  if (!bike) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construct WhatsApp URL
    const message = `⚡ *PakEV Showroom Test Drive & Quotation Request* 🇵🇰\n\n• *Model:* ${bike.brand} ${bike.model_name}\n• *PAVE Net Price:* Rs. ${bike.pave_net_price.toLocaleString()}\n• *Buyer Name:* ${fullName}\n• *WhatsApp:* ${whatsapp}\n• *City:* ${city}\n• *Payment Mode:* ${paymentMode}\n\nPlease share authorized dealer address and test drive schedule.`
    const encoded = encodeURIComponent(message)
    const waUrl = `https://wa.me/923002485885?text=${encoded}`
    
    setSubmitted(true)
    setTimeout(() => {
      window.open(waUrl, '_blank')
      onClose()
    }, 1200)
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          backgroundColor: '#111827',
          border: '1.5px solid #00F299',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '520px',
          padding: '2rem',
          position: 'relative',
          boxShadow: '0 0 40px rgba(0, 242, 153, 0.25)',
          color: '#FFFFFF',
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: '#1F2937',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9CA3AF',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#00F299', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Official Showroom Connection
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', marginTop: '0.2rem' }}>
            Book Test Drive: {bike.brand} {bike.model_name}
          </h3>
          <div style={{ fontSize: '0.85rem', color: '#9CA3AF', marginTop: '0.25rem' }}>
            PAVE Subsidized Net Price: <strong style={{ color: '#00F299' }}>Rs. {bike.pave_net_price.toLocaleString()}</strong>
          </div>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle2 size={48} color="#00F299" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Connecting to Authorized Showroom!</h4>
            <p style={{ color: '#9CA3AF', fontSize: '0.88rem', marginTop: '0.5rem' }}>
              Redirecting you to official dealer dispatch via WhatsApp...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                Your Full Name:
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tariq Ahmed"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  width: '100%',
                  background: '#090D16',
                  border: '1px solid #374151',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                WhatsApp Number:
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 03001234567"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                style={{
                  width: '100%',
                  background: '#090D16',
                  border: '1px solid #374151',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                  Your City:
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{
                    width: '100%',
                    background: '#090D16',
                    border: '1px solid #374151',
                    borderRadius: '10px',
                    padding: '0.75rem',
                    color: '#FFFFFF',
                    fontSize: '0.88rem',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad / Rawalpindi">Islamabad / Pindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Other">Other Cities</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                  Payment Preference:
                </label>
                <select
                  value={paymentMode}
                  onChange={(e) => setPaymentMode(e.target.value)}
                  style={{
                    width: '100%',
                    background: '#090D16',
                    border: '1px solid #374151',
                    borderRadius: '10px',
                    padding: '0.75rem',
                    color: '#FFFFFF',
                    fontSize: '0.88rem',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="PAVE 0% Bank Lease">PAVE 0% Bank Lease</option>
                  <option value="Cash / Self-Finance">Cash / Self-Finance</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: '0.75rem',
                backgroundColor: '#00F299',
                color: '#090D16',
                border: 'none',
                borderRadius: '12px',
                padding: '0.9rem',
                fontSize: '0.95rem',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(0, 242, 153, 0.35)',
              }}
            >
              <span>Connect with Showroom Representative</span>
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
