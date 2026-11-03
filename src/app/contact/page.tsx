'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('PAVE Phase 2 Inquiry')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `📬 *PakEV Web Inquiry*\n\n• *Name:* ${name}\n• *Email:* ${email}\n• *Topic:* ${topic}\n• *Message:* ${message}`
    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/923002485885?text=${encoded}`, '_blank')
    setSent(true)
  }

  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '1040px', margin: '0 auto', padding: '3.5rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
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
            <MessageSquare size={16} /> Get In Touch
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px', lineHeight: 1.2 }}>
            Contact Pak<span style={{ color: '#059669' }}>EV</span>
          </h1>

          <p style={{ color: '#64748B', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '720px' }}>
            Have questions about the PAVE Phase 2 subsidy, want to verify dealership pricing, or list your authorized EV showroom? Reach out to our team.
          </p>
        </div>

        {/* Grid: Contact Info Left, Form Right */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Left Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', flexShrink: 0 }}>
                <Phone size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>WhatsApp &amp; Helpline</h3>
                <p style={{ color: '#64748B', fontSize: '0.88rem', margin: '0.2rem 0 0.4rem' }}>
                  Monday to Saturday, 9:00 AM – 7:00 PM PKT
                </p>
                <a href="https://wa.me/923002485885" target="_blank" rel="noopener noreferrer" style={{ color: '#059669', fontWeight: 700, fontSize: '0.95rem' }}>
                  +92 300 2485885 (Direct WhatsApp)
                </a>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB', flexShrink: 0 }}>
                <Mail size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>Official Email</h3>
                <p style={{ color: '#64748B', fontSize: '0.88rem', margin: '0.2rem 0 0.4rem' }}>
                  For editorial feedback, showroom listings, and partnerships:
                </p>
                <a href="mailto:support@pakev.pk" style={{ color: '#2563EB', fontWeight: 700, fontSize: '0.95rem' }}>
                  support@pakev.pk
                </a>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#FFFBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706', flexShrink: 0 }}>
                <MapPin size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>Testing Headquarters</h3>
                <p style={{ color: '#64748B', fontSize: '0.88rem', margin: '0.2rem 0' }}>
                  Karachi &amp; Lahore Field Test Hubs, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.25rem' }}>
              Send Us a Direct Message
            </h2>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="#059669" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>Message Received!</h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '0.4rem' }}>
                  Opening WhatsApp dispatch helpline. Our team responds within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asad Ali"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#F8FAFC',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '10px',
                      padding: '0.75rem 1rem',
                      color: '#0F172A',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Email Address:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. asad@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#F8FAFC',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '10px',
                      padding: '0.75rem 1rem',
                      color: '#0F172A',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Inquiry Topic:
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#F8FAFC',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '10px',
                      padding: '0.75rem',
                      color: '#0F172A',
                      fontSize: '0.88rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="PAVE Phase 2 Inquiry">PAVE Phase 2 Subsidy &amp; Eligibility</option>
                    <option value="Dealer Quotation & Test Drive">Dealer Quotation &amp; Test Drive</option>
                    <option value="Showroom Partnership">Dealer / Showroom Partnership</option>
                    <option value="Data Correction">Data / Specification Correction</option>
                    <option value="General Inquiry">General Feedback</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Message:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you regarding EV bikes in Pakistan?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#F8FAFC',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '10px',
                      padding: '0.75rem 1rem',
                      color: '#0F172A',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#059669',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.9rem',
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(5, 150, 105, 0.3)',
                    marginTop: '0.5rem',
                  }}
                >
                  <span>Submit Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}
