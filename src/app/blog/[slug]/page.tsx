import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts, getPostBySlug } from '@/data/blogPosts'
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Calculator, Scale, HelpCircle } from 'lucide-react'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Article Not Found — PakEV' }

  return {
    title: `${post.title} | PakEV Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Article & FAQ JSON-LD Schema
  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PakEV',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pakev.pk/logo.png',
      },
    },
  }

  return (
    <div className="portal-backdrop" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.25rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        {/* Breadcrumb Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#64748B' }}>
          <Link href="/blog" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#059669', fontWeight: 700 }}>
            <ArrowLeft size={16} /> All Guides
          </Link>
          <span>/</span>
          <span style={{ color: '#0F172A', fontWeight: 600 }}>{post.category}</span>
        </div>

        {/* Article Header */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1.75rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span
              style={{
                background: '#ECFDF5',
                color: '#059669',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '6px',
              }}
            >
              {post.category}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#64748B', fontSize: '0.82rem' }}>
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#64748B', fontSize: '0.82rem', marginLeft: 'auto' }}>
              <Calendar size={14} />
              <span>Updated: {post.updatedAt}</span>
            </div>
          </div>

          <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 900, color: '#0F172A', lineHeight: 1.25, letterSpacing: '-0.5px' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.9rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={16} color="#0F172A" />
            </div>
            <span>Written by <strong>{post.author}</strong></span>
          </div>
        </header>

        {/* Article Body Content */}
        <article
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 4px 25px rgba(0, 0, 0, 0.04)',
            color: '#334155',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Format markdown sections */}
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^## (.*$)/gim, '<h2 style="font-size: 1.55rem; font-weight: 800; color: #0F172A; margin: 1.75rem 0 0.75rem; letter-spacing: -0.3px;">$1</h2>')
                .replace(/^### (.*$)/gim, '<h3 style="font-size: 1.25rem; font-weight: 800; color: #0F172A; margin: 1.25rem 0 0.5rem;">$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #0F172A; font-weight: 800;">$1</strong>')
                .replace(/^- (.*$)/gim, '<li style="margin-left: 1.5rem; margin-bottom: 0.35rem;">$1</li>')
                .replace(/\n\n/g, '<p style="margin-bottom: 1rem;"></p>'),
            }}
          />

          {/* Interactive Tool Banner in Middle/Bottom */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid #CBD5E1',
              borderRadius: '16px',
              padding: '1.5rem',
              marginTop: '1rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div>
              <div style={{ color: '#059669', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Instant Calculation Tool
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginTop: '0.2rem' }}>
                Calculate Your PAVE Phase 2 Net Installment
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.85rem' }}>
                See exact 0% markup monthly payments for Yadea, Metro, Evee &amp; Jolta.
              </p>
            </div>

            <Link
              href="/subsidy-calculator"
              style={{
                backgroundColor: '#059669',
                color: '#FFFFFF',
                padding: '0.75rem 1.4rem',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.88rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)',
              }}
            >
              <Calculator size={16} /> Open Calculator
            </Link>
          </div>

          {/* FAQs section if present */}
          {post.faqs && post.faqs.length > 0 && (
            <div style={{ marginTop: '2rem', borderTop: '1px solid #E2E8F0', paddingTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontWeight: 800 }}>
                <HelpCircle size={20} />
                <h3 style={{ fontSize: '1.35rem', color: '#0F172A' }}>Frequently Asked Questions</h3>
              </div>

              {post.faqs.map((faq, i) => (
                <div key={i} style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>
                    {faq.question}
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tag Cloud */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Tag size={14} /> Topics:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: '#F1F5F9',
                  color: '#334155',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

      </main>

      <Footer />
    </div>
  )
}
