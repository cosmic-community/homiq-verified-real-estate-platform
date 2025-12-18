'use client'

import { useState } from 'react'
import { Property } from '@/types'
import PropertyCard from './PropertyCard'
import PropertyModal from './PropertyModal'

interface PropertyShowcaseProps {
  properties: Property[]
}

export default function PropertyShowcase({ properties }: PropertyShowcaseProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [filterType, setFilterType] = useState<string>('all')

  if (!properties || properties.length === 0) {
    return null
  }

  // Filter properties by type
  const filteredProperties = filterType === 'all' 
    ? properties 
    : properties.filter(p => p.metadata.property_type?.key === filterType)

  // Get unique property types for filters
  const propertyTypes = Array.from(
    new Set(properties.map(p => p.metadata.property_type?.key).filter(Boolean))
  )

  return (
    <section id="properties" className="py-16 sm:py-24 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-clash font-bold text-text mb-4">
            Property Showcase
          </h2>
          <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto">
            Browse verified homes with AI-powered recommendations
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 sm:px-6 py-2 rounded-full font-clash transition-colors duration-200 ${
              filterType === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-text hover:bg-gray-100'
            }`}
          >
            All Properties
          </button>
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 sm:px-6 py-2 rounded-full font-clash transition-colors duration-200 capitalize ${
                filterType === type
                  ? 'bg-primary text-white'
                  : 'bg-white text-text hover:bg-gray-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        
        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={() => setSelectedProperty(property)}
            />
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-light text-lg">No properties found matching your filters.</p>
          </div>
        )}
      </div>
      
      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  )
}