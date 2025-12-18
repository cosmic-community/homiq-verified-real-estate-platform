import { Property } from '@/types'

interface PropertyCardProps {
  property: Property
  onClick: () => void
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={`${property.metadata.main_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          width="400"
          height="280"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {property.metadata.verified && (
            <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
              ✓ Verified
            </span>
          )}
          {property.metadata.live_availability && (
            <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-medium">
              🔴 Available
            </span>
          )}
        </div>
        
        {/* AI Score */}
        {property.metadata.ai_match_score && property.metadata.ai_match_score > 80 && (
          <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
            <span className="text-xs font-medium text-primary">
              🤖 {property.metadata.ai_match_score}% Match
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-clash font-bold text-text mb-2">
          {property.metadata.property_name}
        </h3>
        
        <p className="text-sm text-text-light mb-3">
          📍 {property.metadata.location?.metadata?.city_name}, {property.metadata.location?.metadata?.state_region}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-clash font-bold text-primary">
            ${property.metadata.price.toLocaleString()}
          </div>
          <div className="text-xs sm:text-sm text-text-light capitalize">
            {property.metadata.property_type?.value}
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-text-light border-t pt-4">
          <span>🛏️ {property.metadata.bedrooms} Beds</span>
          <span>🚿 {property.metadata.bathrooms} Baths</span>
          {property.metadata.square_feet && (
            <span>📐 {property.metadata.square_feet.toLocaleString()} sqft</span>
          )}
        </div>
      </div>
    </div>
  )
}