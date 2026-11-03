import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AlertTriangle, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Range, Battery & Subsidy Disclaimer — PakEV Pakistan',
  description: 'Official consumer disclaimer regarding PAVE Phase 2 subsidy eligibility, real-world road range calculations, and battery replacement estimates.',
}

export default function DisclaimerPage() {
  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '3.5rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '1.5rem' }}>
          <div style={{ color: '#D97706', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Consumer Advisory
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0F172A', marginTop: '0.3rem' }}>
            Range, Battery &amp; Subsidy Disclaimer
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '0.3rem' }}>
            Important consumer protection advisory for electric two-wheeler buyers in Pakistan.
          </p>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.75rem', lineHeight: 1.7, color: '#334155' }}>
          
          <div style={{ backgroundColor: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '12px', padding: '1rem 1.25rem', display: 'flex', gap: '0.75rem', color: '#92400E' }}>
            <AlertTriangle size={24} style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Official Government Scheme Attribution</strong>
              <span>
                PakEV is an independent consumer analytics platform. We are <strong>not affiliated with or endorsed by</strong> the Government of Pakistan, the Prime Minister&apos;s Office, or the Engineering Development Board (EDB). Official applications must be submitted directly through <strong>pave.gov.pk</strong>.
              </span>
            </div>
          </div>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>1. Real-World Road Range vs. Brochure Claims</h2>
          <p>
            Manufacturers in Pakistan frequently publish lab-measured &quot;ideal&quot; range figures (e.g., 100 km to 120 km) obtained under controlled factory dyno conditions at constant 25 km/h speeds with no pillion. PakEV calculates <strong>Real Road Range</strong> based on realistic urban transit:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>Carrying a dual rider / pillion passenger (~130 kg total payload).</li>
            <li>Stop-and-go urban traffic with frequent braking and acceleration.</li>
            <li>High ambient Pakistani summer temperatures (35°C–45°C), which increase battery internal resistance.</li>
            <li>Headwinds and standard road surface friction.</li>
          </ul>
          <p>
            Consequently, actual mileage may vary by ±10% depending on riding style and throttle aggression.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>2. Graphene vs. Lithium Battery Longevity</h2>
          <p>
            Vehicles marketed as &quot;Graphene&quot; in Pakistan utilize lead-acid chemistry enriched with graphene additives. While cheaper upfront, their typical lifecycle is between <strong>350 and 450 deep discharge cycles (approximately 18 to 24 months of daily use)</strong>, after which battery replacement costs between Rs. 40,000 and Rs. 55,000 must be budgeted.
          </p>
          <p>
            Conversely, Lithium Iron Phosphate (LiFePO4) models offer <strong>2,000+ deep cycles (5+ years of operational life)</strong> with minimal capacity degradation, justifying their higher initial ex-factory acquisition cost.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>3. PAVE Phase 2 Net Subsidy Pricing</h2>
          <p>
            The Rs. 80,000 flat subsidy is subject to quotas allocated by the Federal Government and the Engineering Development Board. Dealership documentation fees, local vehicle registration taxes, and commercial bank processing charges may apply and are not included in the net subsidized ex-factory price.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
