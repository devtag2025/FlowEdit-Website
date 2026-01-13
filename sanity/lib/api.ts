import { draftMode } from 'next/headers';
import { unstable_noStore } from 'next/cache';
import { getDraftClient, client } from './client';
import { SITE_SETTINGS_QUERY, HOME_PAGE_QUERY, PAGE_BY_SLUG_QUERY, ALL_PAGE_SLUGS_QUERY, ALL_PAGES_FOR_SITEMAP_QUERY } from './queries';
import { SiteSettings } from '@/types/siteSettings';

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const draft = await draftMode();
    // Bypass cache when draft mode is enabled for visual editing
    if (draft.isEnabled) {
      unstable_noStore();
    }
    
    const client = await getDraftClient();
    const settings = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY, {}, {
      next: draft.isEnabled ? { revalidate: 0 } : { revalidate: 60 }, // No cache in draft mode
    });
    return settings;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

export async function getHomePage() {
  try {
    const draft = await draftMode();
    // Bypass cache when draft mode is enabled for visual editing
    if (draft.isEnabled) {
      unstable_noStore();
    }
    
    const client = await getDraftClient();
    const page = await client.fetch(HOME_PAGE_QUERY, {}, {
      next: draft.isEnabled ? { revalidate: 0 } : { revalidate: 60 }, // No cache in draft mode
    });
    return page;
  } catch (error) {
    console.error('Error fetching home page:', error);
    return null;
  }
}

export async function getPageBySlug(slug: string) {
  try {
    const draft = await draftMode();
    // Bypass cache when draft mode is enabled for visual editing
    if (draft.isEnabled) {
      unstable_noStore();
    }
    
    const client = await getDraftClient();
    const page = await client.fetch(PAGE_BY_SLUG_QUERY, { slug }, {
      next: draft.isEnabled ? { revalidate: 0 } : { revalidate: 60 }, // No cache in draft mode
    });
    
    if (!page) {
      console.warn(`No page found with slug: "${slug}"`);
    }
    
    return page;
  } catch (error) {
    console.error('Error fetching page by slug:', error);
    return null;
  }
}

export async function getAllPageSlugs() {
  try {
    // Use regular client for static generation (generateStaticParams runs at build time)
    // Only use draft client if we're in a request context with draft mode enabled
    let clientToUse = client;
    try {
      const draft = await draftMode();
      if (draft.isEnabled) {
        clientToUse = await getDraftClient();
      }
    } catch {
      // draftMode() not available (e.g., during static generation)
      // Use regular client
      clientToUse = client;
    }
    
    const pages = await clientToUse.fetch<{ slug: string }[]>(ALL_PAGE_SLUGS_QUERY, {}, {
      next: { revalidate: 3600 }, // Revalidate every hour for static generation
    });
    return pages.map((page) => page.slug).filter(Boolean);
  } catch (error) {
    console.error('Error fetching all page slugs:', error);
    return [];
  }
}

export interface PageForSitemap {
  slug: string;
  lastModified?: string;
  pageTemplate?: string;
  seo?: {
    noIndex?: boolean;
  };
}

export async function getAllPagesForSitemap(): Promise<PageForSitemap[]> {
  try {
    // Use regular client for sitemap generation (runs at build time)
    // Only use draft client if we're in a request context with draft mode enabled
    let clientToUse = client;
    try {
      const draft = await draftMode();
      if (draft.isEnabled) {
        clientToUse = await getDraftClient();
      }
    } catch {
      // draftMode() not available (e.g., during static generation)
      // Use regular client
      clientToUse = client;
    }
    
    const pages = await clientToUse.fetch<PageForSitemap[]>(ALL_PAGES_FOR_SITEMAP_QUERY, {}, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    return pages.filter((page) => page.slug && page.slug !== 'home');
  } catch (error) {
    console.error('Error fetching pages for sitemap:', error);
    return [];
  }
}
