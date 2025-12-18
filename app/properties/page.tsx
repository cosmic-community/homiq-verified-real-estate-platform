import Header from '@/components/Header'
import PropertyShowcase from '@/components/PropertyShowcase'
import Footer from '@/components/Footer'
import { safeFind } from '@/lib/cosmic'
import { Property } from '@/types'

export const metadata = {
  title: 'Properties - Homiq',
  description: 'Browse verified properties with AI-powered recommendations',
}

export default async function PropertiesPage() {
  const properties = await safeFind<Property>({ type: 'properties' })

  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-primary text-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-clash font-bold mb-4">
              Verified Properties
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Browse our collection of verified homes with transparent pricing and real-time availability
            </p>
          </div>
        </div>
        <PropertyShowcase properties={properties} />
      </main>
      <Footer />
    </>
  )
}