import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — PakEV Pakistan',
  description: 'Privacy Policy for PakEV (EVBikes Pakistan). How we handle user inquiries, test-drive requests, and analytics data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '3.5rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '1.5rem' }}>
          <div style={{ color: '#059669', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Legal &amp; Privacy
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0F172A', marginTop: '0.3rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '0.3rem' }}>
            Last updated: January 2026
          </p>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.7, color: '#334155' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>1. Information We Collect</h2>
          <p>
            PakEV (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates as an independent automotive research and comparison platform. We collect personal information strictly when you voluntarily submit it via our test-drive booking or quotation request forms, including your full name, WhatsApp phone number, city, and model of interest.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>2. How We Use Your Information</h2>
          <p>
            When you request a test-drive or dealership quotation, your details are utilized to connect you directly with verified, authorized OEM showrooms (such as Yadea, Metro, Evee, Vlektra, and Jolta dealerships in Karachi, Lahore, and Islamabad/Rawalpindi). We do not sell, rent, or lease consumer personal records to third-party marketing brokers.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>3. PAVE Phase 2 Scheme Disclosures</h2>
          <p>
            PakEV provides independent calculators for the Prime Minister&apos;s Electric Bike Scheme (PAVE Phase 2). We do not collect CNIC or biometric documents on this platform. All official citizen registrations and subsidy allocations are managed directly through the government portal at <strong>pave.gov.pk</strong>.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>4. Cookies and Web Analytics</h2>
          <p>
            We use privacy-preserving web analytics and local cookies to store anonymous usage metrics, such as comparison model selections and fuel savings simulator parameters, to enhance user experience across page visits.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>5. Contact Our Privacy Officer</h2>
          <p>
            If you have questions regarding data privacy or wish to request removal of your inquiry data, contact us at <strong style={{ color: '#059669' }}>privacy@pakev.pk</strong> or WhatsApp <strong style={{ color: '#059669' }}>+92 300 2485885</strong>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
