import { createClient } from '@sanity/client';

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
 * Fetch function to retrieve the latest announcement from Sanity CMS.
 */
export async function fetchLatestAnnouncement() {
  if (!projectId) {
    return null;
  }

  try {
    const data = await sanityClient.fetch(ANNOUNCEMENT_QUERY);
    if (!data || !data.images || data.images.length === 0) {
      return null;
    }
    return data;
  } catch (error) {
    console.warn('[Sanity CMS] Could not fetch announcement:', error);
    return null;
  }
}
