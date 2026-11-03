import { MetadataRoute } from 'next'
import { getAllBikes } from '@/data/bikes'
import { getAllPosts } from '@/data/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pakev.pk'
  const bikes = getAllBikes()
  const posts = getAllPosts()

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/bikes`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/subsidy-calculator`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/savings-calculator`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dealers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Dynamic bike routes
  const bikeRoutes: MetadataRoute.Sitemap = bikes.map((bike) => ({
    url: `${baseUrl}/bikes/${bike.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  // Dynamic blog routes
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Programmatic comparison routes
  const topPairs = [
    'yadea-t5-vs-metro-t9-pro',
    'evee-c1-pro-vs-yadea-ruibin',
    'vlektra-retro-vs-vlektra-velocity-180',
    'evee-s1-air-lithium-vs-metro-m6-empower',
    'jolta-je-70g-fury-vs-yadea-ruibin',
    'yadea-t5-vs-evee-c1-pro',
    'metro-t9-pro-vs-metro-m6-empower',
    'vlektra-bolt-vs-vlektra-velocity-180',
    'jolta-je-70g-fury-vs-crown-ezee',
    'yadea-t5-vs-vlektra-retro',
  ]

  const compareRoutes: MetadataRoute.Sitemap = topPairs.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  return [...staticRoutes, ...bikeRoutes, ...blogRoutes, ...compareRoutes]
}
