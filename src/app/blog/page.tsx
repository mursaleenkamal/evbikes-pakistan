'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BLOG_POSTS } from '@/data/blogPosts'
import { BookOpen, Calendar, Clock, User, ArrowRight, Tag, Search } from 'lucide-react'

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = ['All', 'PAVE Scheme', 'Battery Tech', 'Fuel Savings', 'Bike Reviews']

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchCategory = selectedCategory === 'All' || post.category === selectedCategory
      const matchSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchCategory && matchSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ maxWidth: '1180px', margin: '0 auto', padding: '3.5rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
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
            <BookOpen size={16} /> Knowledge Hub &amp; Policy Reports
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px', lineHeight: 1.2 }}>
            Electric Bike Guides, PAVE Updates &amp; Reviews
          </h1>

          <p style={{ color: '#64748B', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '720px' }}>
            In-depth guides on government EV subsidies, battery replacement economics, real road range test reports, and fuel savings calculators for Pakistani commuters.
          </p>
        </div>

        {/* Search & Category Pills */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? '#059669' : '#F8FAFC',
                  color: selectedCategory === cat ? '#FFFFFF' : '#334155',
                  border: `1px solid ${selectedCategory === cat ? '#059669' : '#CBD5E1'}`,
                  borderRadius: '10px',
                  padding: '7px 14px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '0.5rem 0.85rem', width: '260px' }}>
            <Search size={16} color="#64748B" />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', width: '100%', color: '#0F172A' }}
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="card-interactive"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
              }}
            >
              {/* Category & Read Time */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    background: '#ECFDF5',
                    color: '#059669',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '6px',
                  }}
                >
                  {post.category}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#64748B', fontSize: '0.78rem' }}>
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.4, transition: 'color 0.15s' }}>
                  {post.title}
                </h2>
              </Link>

              {/* Excerpt */}
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>
                {post.excerpt}
              </p>

              {/* Meta & Read More Link */}
              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748B', fontSize: '0.78rem' }}>
                  <Calendar size={14} />
                  <span>{post.publishedAt}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    color: '#059669',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <span>Read Full Guide</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  )
}
