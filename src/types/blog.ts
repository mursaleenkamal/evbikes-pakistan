export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  updatedAt: string
  author: string
  readTime: string
  category: 'PAVE Scheme' | 'Battery Tech' | 'Buyer Guides' | 'Fuel Savings' | 'Bike Reviews'
  tags: string[]
  content: string
  faqs?: { question: string; answer: string }[]
}
