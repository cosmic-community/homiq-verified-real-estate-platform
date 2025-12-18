import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { safeFindOne } from '@/lib/cosmic'
import { Property } from '@/types'
import { notFound } from 'next/navigation'

interface PropertyPageProps {
  params: Promise<{ slug: string }>
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params
  
  const property = await safeFindOne<Property>({
    type: 'properties',
    slug: slug,
  })

  if (!property) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-64 sm:h-96 lg:h-[500px]">
          <img
            src={`${property.metadata.main_image.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
            alt={property.title}
            className="w-full h-full object-cover"
            width="1200"
            height="600"
          />
          
          {/* Badges */}
          <div className="absolute top-6 left-6 flex flex-col gap-3">
            {property.metadata.verified && (
              <span className="bg-primary text-white text-sm sm:text-base px-5 py-2 rounded-full font-medium shadow-lg">
                ✓ Verified
              </span>
            )}
            {property.metadata.live_availability && (
              <span className="bg-accent text-white text-sm sm:text-base px-5 py-2 rounded-full font-medium shadow-lg">
                🔴 Available Now
              </span>
            )}
          </div>
        </div>
        
        {/* Property Details */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-clash font-bold text-text mb-3">
                  {property.metadata.property_name}
                </h1>
                <p className="text-lg sm:text-xl text-text-light">
                  📍 {property.metadata.address}
                </p>
                <p className="text-base text-text-light mt-1">
                  {property.metadata.location?.metadata?.city_name}, {property.metadata.location?.metadata?.state_region}
                </p>
              </div>
              <div className="mt-6 md:mt-0 text-4xl font-clash font-bold text-primary">
                ${property.metadata.price.toLocaleString()}
              </div>
            </div>
            
            {/* Property Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 p-6 bg-background-secondary rounded-xl">
              <div>
                <div className="text-sm text-text-light mb-2">Bedrooms</div>
                <div className="text-2xl font-clash font-bold text-text">
                  🛏️ {property.metadata.bedrooms}
                </div>
              </div>
              <div>
                <div className="text-sm text-text-light mb-2">Bathrooms</div>
                <div className="text-2xl font-clash font-bold text-text">
                  🚿 {property.metadata.bathrooms}
                </div>
              </div>
              {property.metadata.square_feet && (
                <div>
                  <div className="text-sm text-text-light mb-2">Square Feet</div>
                  <div className="text-2xl font-clash font-bold text-text">
                    📐 {property.metadata.square_feet.toLocaleString()}
                  </div>
                </div>
              )}
              <div>
                <div className="text-sm text-text-light mb-2">Type</div>
                <div className="text-2xl font-clash font-bold text-text capitalize">
                  {property.metadata.property_type?.value}
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-clash font-bold text-text mb-4">
                About This Property
              </h2>
              <p className="text-base sm:text-lg text-text-light leading-relaxed">
                {property.metadata.description}
              </p>
            </div>
            
            {/* Key Features */}
            {property.metadata.key_features && property.metadata.key_features.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-clash font-bold text-text mb-4">
                  Key Features
                </h2>
                <div className="flex flex-wrap gap-3">
                  {property.metadata.key_features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary px-5 py-3 rounded-full text-sm sm:text-base font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Agent Info */}
            {property.metadata.agent_name && (
              <div className="border-t pt-8 mb-12">
                <h2 className="text-2xl sm:text-3xl font-clash font-bold text-text mb-6">
                  Listed By
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-clash">
                    {property.metadata.agent_name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-lg font-clash font-bold text-text">
                      {property.metadata.agent_name}
                    </div>
                    {property.metadata.agent_verified && (
                      <div className="text-base text-primary">✓ Verified Agent</div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-accent hover:bg-accent-dark text-white px-8 py-5 rounded-lg font-clash text-lg transition-colors duration-200">
                Schedule Viewing
              </button>
              <button className="flex-1 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-5 rounded-lg font-clash text-lg transition-colors duration-200">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}