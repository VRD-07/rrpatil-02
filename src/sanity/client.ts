import { createClient } from '@sanity/client';

export interface AnnouncementImage {
  url: string;
  alt: string;
  lqip?: string;
}

export interface AnnouncementData {
  _id?: string;
  title: string;
  description: string;
  images: AnnouncementImage[];
  publishedAt?: string;
  isActive?: boolean;
}

export const ANNOUNCEMENT_QUERY = `*[_type == "announcement" && isActive == true] | order(publishedAt desc)[0] {
  _id,
  title,
  description,
  publishedAt,
  isActive,
  "images": images[]{
    "url": asset->url,
    "alt": alt,
    "lqip": asset->metadata.lqip
  }
}`;

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-03-01';

export const sanityClient = createClient({
  projectId: projectId || 'unconfigured',
  dataset,
  apiVersion,
  useCdn: true,
});

/**
 * Reusable fetch function to retrieve the latest active announcement document from Sanity CMS.
 * Resolves each image to its asset URL, alt text, and LQIP placeholder.
 * If credentials are not configured or no active announcement exists, returns null.
 */
export async function fetchLatestAnnouncement(): Promise<AnnouncementData | null> {
  if (!projectId) {
    // Return null gracefully when VITE_SANITY_PROJECT_ID is not configured
    return null;
  }

  try {
    const data = await sanityClient.fetch<AnnouncementData | null>(ANNOUNCEMENT_QUERY);
    if (!data || !data.images || data.images.length === 0) {
      return null;
    }
    return data;
  } catch (error) {
    console.warn('[Sanity CMS] Could not fetch announcement:', error);
    return null;
  }
}
