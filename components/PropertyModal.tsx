'use client'

import { useEffect } from 'react'
import { Property } from '@/types'

interface PropertyModalProps {
  property: Property
  onClose: () => void
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Image Gallery */}
        <div className="relative h-64 sm:h-96">
          <img
            src={`${property.metadata.main_image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={property.title}
            className="w-full h-full object-cover"
            width="800"
            height="450"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {property.metadata.verified && (
              <span className="bg-primary text-white text-sm px-4 py-2 rounded-full font-medium">
                ✓ Verified
              </span>
            )}
            {property.metadata.live_availability && (
              <span className="bg-accent text-white text-sm px-4 py-2 rounded-full font-medium">
                🔴 Available Now
              </span>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-clash font-bold text-text mb-2">
                {property.metadata.property_name}
              </h2>
              <p className="text-base sm:text-lg text-text-light">
                📍 {property.metadata.address}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-3xl font-clash font-bold text-primary">
              ${property.metadata.price.toLocaleString()}
            </div>
          </div>
          
          {/* Property Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 bg-background-secondary rounded-lg">
            <div>
              <div className="text-sm text-text-light mb-1">Bedrooms</div>
              <div className="text-xl font-clash font-bold text-text">
                🛏️ {property.metadata.bedrooms}
              </div>
            </div>
            <div>
              <div className="text-sm text-text-light mb-1">Bathrooms</div>
              <div className="text-xl font-clash font-bold text-text">
                🚿 {property.metadata.bathrooms}
              </div>
            </div>
            {property.metadata.square_feet && (
              <div>
                <div className="text-sm text-text-light mb-1">Square Feet</div>
                <div className="text-xl font-clash font-bold text-text">
                  📐 {property.metadata.square_feet.toLocaleString()}
                </div>
              </div>
            )}
            <div>
              <div className="text-sm text-text-light mb-1">Type</div>
              <div className="text-xl font-clash font-bold text-text capitalize">
                {property.metadata.property_type?.value}
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-clash font-bold text-text mb-3">Description</h3>
            <p className="text-text-light leading-relaxed">
              {property.metadata.description}
            </p>
          </div>
          
          {/* Key Features */}
          {property.metadata.key_features && property.metadata.key_features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-clash font-bold text-text mb-3">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {property.metadata.key_features.map((feature, index) => (
                  <span 
                    key={index}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Agent Info */}
          {property.metadata.agent_name && (
            <div className="border-t pt-6">
              <h3 className="text-xl font-clash font-bold text-text mb-3">Listed By</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-clash">
                  {property.metadata.agent_name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-text">{property.metadata.agent_name}</div>
                  {property.metadata.agent_verified && (
                    <div className="text-sm text-primary">✓ Verified Agent</div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-accent hover:bg-accent-dark text-white px-6 py-4 rounded-lg font-clash text-lg transition-colors duration-200">
              Schedule Viewing
            </button>
            <button className="flex-1 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-4 rounded-lg font-clash text-lg transition-colors duration-200">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}