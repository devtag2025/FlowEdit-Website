import { MetadataRoute } from 'next';
import { getAllPagesForSitemap } from '@/sanity/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'https://flowedit.com');

  // Get all pages with metadata from Sanity
  const pages = await getAllPagesForSitemap();

  // Homepage entry
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Add all dynamic pages
  pages.forEach((page) => {
    // Skip pages with noIndex set to true
    if (page.seo?.noIndex) {
      return;
    }

    // Determine priority based on page template
    let priority = 0.8;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

    if (page.pageTemplate === 'HomePage') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (page.pageTemplate === 'Pricing') {
      priority = 0.9;
      changeFrequency = 'weekly';
    }

    // Parse lastModified date from Sanity
    let lastModified: Date = new Date();
    if (page.lastModified) {
      lastModified = new Date(page.lastModified);
    }

    routes.push({
      url: `${baseUrl}/${page.slug}`,
      lastModified,
      changeFrequency,
      priority,
    });
  });

  return routes;
}
