import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Helper to safely fetch objects
export async function safeFind<T>(query: Record<string, any>): Promise<T[]> {
  try {
    const response = await cosmic.objects
      .find(query)
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as T[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw error;
  }
}

// Helper to safely fetch a single object
export async function safeFindOne<T>(query: Record<string, any>): Promise<T | null> {
  try {
    const response = await cosmic.objects
      .findOne(query)
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as T;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}