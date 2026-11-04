'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EvBike } from '@/types'
import { Scale, X, ArrowRight, Trash2 } from 'lucide-react'

interface CompareTrayProps {
  selectedBikes: EvBike[]
  onRemove: (id: string) => void
  onClear: () => void
}

export default function CompareTray({ selectedBikes, onRemove, onClear }: CompareTrayProps) {
  if (selectedBikes.length === 0) return null

  // Construct URL with query parameters
  const params = new URLSearchParams()
  if (selectedBikes[0]) params.set('b1', selectedBikes[0].slug)
  if (selectedBikes[1]) params.set('b2', selectedBikes[1].slug)
  if (selectedBikes[2]) params.set('b3', selectedBikes[2].slug)

  const compareUrl = `/compare?${params.toString()}`

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 90,
        width: '92%',
        maxWidth: '820px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #059669',
        borderRadius: '20px',
        padding: '0.85rem 1.25rem',
        boxShadow: '0 20px 45px -10px rgba(5, 150, 105, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Selected Bikes List */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontWeight: 800, fontSize: '0.85rem' }}>
          <Scale size={18} />
          <span>Compare ({selectedBikes.length}/3):</span>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {selectedBikes.map((bike) => (
            <div
              key={bike.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '10px',
                padding: '4px 10px 4px 6px',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#0F172A',
              }}
            >
              <div style={{ width: '28px', height: '28px', position: 'relative', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
                <Image
                  src={bike.image_url}
                  alt={bike.model_name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span>{bike.model_name}</span>
              <button
                type="button"
                onClick={() => onRemove(bike.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#64748B',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '2px',
                }}
                title="Remove"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginLeft: 'auto' }}>
        <button
          type="button"
          onClick={onClear}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#64748B',
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer',
            padding: '6px 8px',
          }}
        >
          Clear
        </button>

        <Link
          href={compareUrl}
          style={{
            backgroundColor: '#059669',
            color: '#FFFFFF',
            padding: '0.65rem 1.25rem',
            borderRadius: '10px',
            fontSize: '0.88rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)',
          }}
        >
          <span>Compare Now</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
