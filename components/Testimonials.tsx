import { Testimonial } from '@/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      )
    })
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-clash font-bold text-text mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto">
            Real stories from people who found their dream homes with Homiq
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background-secondary rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              {testimonial.metadata.rating && (
                <div className="flex text-yellow-400 mb-4">
                  {renderStars(testimonial.metadata.rating)}
                </div>
              )}
              
              {/* Testimonial Text */}
              <p className="text-text-light mb-6 leading-relaxed">
                "{testimonial.metadata.testimonial_text}"
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {testimonial.metadata.customer_photo ? (
                  <img
                    src={`${testimonial.metadata.customer_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.customer_name}
                    className="w-12 h-12 rounded-full object-cover"
                    width="48"
                    height="48"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-clash">
                    {testimonial.metadata.customer_name.charAt(0)}
                  </div>
                )}
                
                <div>
                  <div className="font-clash font-bold text-text flex items-center gap-2">
                    {testimonial.metadata.customer_name}
                    {testimonial.metadata.verified && (
                      <span className="text-primary text-sm">✓</span>
                    )}
                  </div>
                  {testimonial.metadata.role_title && (
                    <div className="text-sm text-text-light">
                      {testimonial.metadata.role_title}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}