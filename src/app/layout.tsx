import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PakEV — Compare Every Electric Bike in Pakistan (2026)',
  description: 'Unbiased side-by-side electric bike comparison, PAVE Phase 2 subsidy net pricing (-Rs 80,000), real-world range tests, and Honda CD70 fuel savings.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#059669" />
      </head>
      <body>{children}</body>
    </html>
  )
}
