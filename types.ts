// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Location object type
export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    city_name: string;
    state_region: string;
    available_homes_count: number;
    city_image?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
    average_price?: number;
  };
}

// Property object type
export interface Property extends CosmicObject {
  type: 'properties';
  metadata: {
    property_name: string;
    price: number;
    location: Location;
    address: string;
    property_type: {
      key: 'apartment' | 'house' | 'villa' | 'condo';
      value: string;
    };
    bedrooms: number;
    bathrooms: number;
    square_feet?: number;
    description: string;
    main_image: {
      url: string;
      imgix_url: string;
    };
    gallery_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    live_availability: boolean;
    verified: boolean;
    verification_date?: string;
    ai_match_score?: number;
    key_features?: string[];
    agent_name?: string;
    agent_verified?: boolean;
  };
}

// Feature object type
export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    feature_title: string;
    description: string;
    icon_image?: {
      url: string;
      imgix_url: string;
    };
    feature_type: {
      key: 'verification' | 'benefit' | 'process';
      value: string;
    };
    order?: number;
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name: string;
    role_title?: string;
    testimonial_text: string;
    customer_photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: number;
    verified?: boolean;
  };
}

// Trust Metric object type (singleton)
export interface TrustMetric extends CosmicObject {
  type: 'trust-metrics';
  metadata: {
    homes_verified: number;
    cities_covered: number;
    users_helped: number;
    verified_agents?: number;
    average_response_time?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

export interface CosmicSingleResponse<T> {
  object: T;
}