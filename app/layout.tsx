import type { Metadata } from 'next'
import { Clash_Display, Public_Sans } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const clashDisplay = Clash_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-clash-display',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-public-sans',
})

export const metadata: Metadata = {
  title: 'Homiq - Find Verified Homes Instantly',
  description: 'AI-powered real estate platform with verified listings, real-time availability, and transparent pricing. Stop waiting, find your dream home today.',
  keywords: 'real estate, verified homes, AI recommendations, property search, trusted listings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" className={`${clashDisplay.variable} ${publicSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
        <script src="/dashboard-console-capture.js"></script>
      </body>
    </html>
  )
}