import { TrustMetric } from '@/types'

interface TrustMetricsProps {
  metrics: TrustMetric
}

export default function TrustMetrics({ metrics }: TrustMetricsProps) {
  return (
    <section className="py-16 sm:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-clash font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Real numbers, real impact
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-clash font-bold mb-2">
              {metrics.metadata.homes_verified.toLocaleString()}
            </div>
            <div className="text-base sm:text-lg opacity-90">
              Homes Verified
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-clash font-bold mb-2">
              {metrics.metadata.cities_covered}
            </div>
            <div className="text-base sm:text-lg opacity-90">
              Cities Covered
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-clash font-bold mb-2">
              {metrics.metadata.users_helped.toLocaleString()}
            </div>
            <div className="text-base sm:text-lg opacity-90">
              Users Helped
            </div>
          </div>
          
          {metrics.metadata.verified_agents && (
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-clash font-bold mb-2">
                {metrics.metadata.verified_agents}
              </div>
              <div className="text-base sm:text-lg opacity-90">
                Verified Agents
              </div>
            </div>
          )}
        </div>
        
        {metrics.metadata.average_response_time && (
          <div className="mt-12 text-center">
            <p className="text-base sm:text-lg opacity-90">
              Average Response Time: <span className="font-clash font-bold">{metrics.metadata.average_response_time}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}