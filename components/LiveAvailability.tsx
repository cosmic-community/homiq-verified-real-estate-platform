'use client'

import { Location } from '@/types'

interface LiveAvailabilityProps {
  locations: Location[]
}

export default function LiveAvailability({ locations }: LiveAvailabilityProps) {
  if (!locations || locations.length === 0) {
    return null
  }

  return (
    <section className="bg-background-secondary py-8 sm:py-12 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-xl sm:text-2xl font-clash font-bold text-text mr-2">
            Live Availability
          </h2>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-clash font-bold text-text">
                    {location.metadata.city_name}
                  </h3>
                  <p className="text-sm text-text-light">
                    {location.metadata.state_region}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-clash font-bold text-primary">
                    {location.metadata.available_homes_count}
                  </div>
                  <p className="text-xs sm:text-sm text-text-light">
                    Homes Available
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}