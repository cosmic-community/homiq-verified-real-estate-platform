import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LiveAvailability from '@/components/LiveAvailability'
import VerificationProcess from '@/components/VerificationProcess'
import PropertyShowcase from '@/components/PropertyShowcase'
import Testimonials from '@/components/Testimonials'
import TrustMetrics from '@/components/TrustMetrics'
import Footer from '@/components/Footer'
import { safeFind, safeFindOne } from '@/lib/cosmic'
import { Property, Location, Feature, Testimonial, TrustMetric } from '@/types'

export default async function HomePage() {
  // Fetch all content in parallel
  const [properties, locations, features, testimonials, trustMetrics] = await Promise.all([
    safeFind<Property>({ type: 'properties' }),
    safeFind<Location>({ type: 'locations' }),
    safeFind<Feature>({ type: 'features' }),
    safeFind<Testimonial>({ type: 'testimonials' }),
    safeFindOne<TrustMetric>({ type: 'trust-metrics', slug: 'platform-statistics' }),
  ])

  return (
    <>
      <Header />
      <main>
        <Hero properties={properties} />
        <LiveAvailability locations={locations} />
        <VerificationProcess features={features} />
        <PropertyShowcase properties={properties} />
        <Testimonials testimonials={testimonials} />
        {trustMetrics && <TrustMetrics metrics={trustMetrics} />}
      </main>
      <Footer />
    </>
  )
}