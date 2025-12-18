import { Feature } from '@/types'

interface VerificationProcessProps {
  features: Feature[]
}

export default function VerificationProcess({ features }: VerificationProcessProps) {
  // Filter verification features and sort by order
  const verificationFeatures = features
    .filter(f => f.metadata.feature_type?.key === 'verification')
    .sort((a, b) => (a.metadata.order || 0) - (b.metadata.order || 0))

  if (!verificationFeatures || verificationFeatures.length === 0) {
    return null
  }

  return (
    <section id="verification" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-clash font-bold text-text mb-4">
            Proof Before Product
          </h2>
          <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto">
            Every property undergoes our comprehensive verification process before listing
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {verificationFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {feature.metadata.icon_image && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={`${feature.metadata.icon_image.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                    alt={feature.metadata.feature_title}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
                    width="80"
                    height="80"
                  />
                </div>
              )}
              
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white font-clash text-lg sm:text-xl mb-4">
                {index + 1}
              </div>
              
              <h3 className="text-lg sm:text-xl font-clash font-bold text-text mb-3">
                {feature.metadata.feature_title}
              </h3>
              
              <p className="text-sm sm:text-base text-text-light">
                {feature.metadata.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}