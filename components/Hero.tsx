import { Property } from '@/types'

interface HeroProps {
  properties: Property[]
}

export default function Hero({ properties }: HeroProps) {
  // Get total verified properties count
  const verifiedCount = properties.filter(p => p.metadata.verified).length
  
  // Get featured property (first one with high AI score)
  const featuredProperty = properties.find(p => (p.metadata.ai_match_score || 0) > 90)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background-secondary to-white pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary">
                ✓ {verifiedCount} Verified Homes
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-accent/10 text-accent">
                🤖 AI-Powered
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-clash font-bold text-text mb-4 sm:mb-6 leading-tight">
              Stop Waiting. Find Verified Homes Instantly
            </h1>
            
            <p className="text-lg sm:text-xl text-text-light mb-6 sm:mb-8 leading-relaxed">
              AI-powered recommendations with real-time updates and verified listings. No expired properties, no confusing pricing, no unverified agents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#properties"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-clash text-lg transition-colors duration-200 text-center"
              >
                Browse Homes Now
              </a>
              <a
                href="#how-it-works"
                className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-clash text-lg transition-colors duration-200 text-center"
              >
                How It Works
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-text-light">Owner Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-text-light">Price Confirmed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-text-light">Live Availability</span>
              </div>
            </div>
          </div>
          
          {/* Right: Featured Property Image */}
          <div className="animate-fade-in">
            {featuredProperty && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`${featuredProperty.metadata.main_image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                  alt={featuredProperty.title}
                  className="w-full h-auto"
                  width="600"
                  height="400"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-medium text-primary">✓ Verified</span>
                </div>
                {featuredProperty.metadata.live_availability && (
                  <div className="absolute top-4 left-4 bg-accent px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-medium text-white">🔴 Available Now</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}