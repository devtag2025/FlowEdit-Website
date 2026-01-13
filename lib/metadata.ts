import { Metadata } from 'next';
import { AdvancedSeo } from '@/types/siteSettings';
import { urlFor } from '@/sanity/lib/image';

interface GenerateMetadataOptions {
  /** Page-specific SEO (takes precedence over global SEO) */
  pageSeo?: AdvancedSeo;
  /** Global SEO from site settings (used as fallback) */
  globalSeo?: AdvancedSeo;
  /** Fallback title if no SEO is provided */
  fallbackTitle?: string;
  /** Fallback description if no SEO is provided */
  fallbackDescription?: string;
  /** Base URL for canonical URLs (e.g., 'https://example.com') */
  baseUrl?: string;
  /** Current path for canonical URL (e.g., '/pricing') */
  path?: string;
  /** Site title from site settings */
  siteTitle?: string;
}

/**
 * Generates Next.js Metadata from SEO data
 * Merges page-specific SEO with global SEO, with page SEO taking precedence
 */
export function generateMetadata({
  pageSeo,
  globalSeo,
  fallbackTitle = 'FlowEdit',
  fallbackDescription = 'Professional video editing made simple',
  baseUrl,
  path,
  siteTitle,
}: GenerateMetadataOptions): Metadata {
  // Merge SEO: page-specific takes precedence over global
  const seo: Partial<AdvancedSeo> = {
    ...globalSeo,
    ...pageSeo,
    // Merge keywords arrays
    keywords: [
      ...(globalSeo?.keywords || []),
      ...(pageSeo?.keywords || []),
    ].filter((v, i, a) => a.indexOf(v) === i), // Remove duplicates
    // For images, prefer page-specific, fallback to global
    ogImage: pageSeo?.ogImage || globalSeo?.ogImage,
    twitterImage: pageSeo?.twitterImage || globalSeo?.twitterImage,
  };

  // Determine final values with fallbacks
  const title = seo.title || globalSeo?.title || fallbackTitle;
  const description = seo.description || globalSeo?.description || fallbackDescription;
  
  // Build full title with site title if provided
  const fullTitle = siteTitle && title !== siteTitle 
    ? `${title} | ${siteTitle}` 
    : title;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: seo.keywords && seo.keywords.length > 0 ? seo.keywords : undefined,
    robots: {
      index: !(seo.noIndex ?? false),
      follow: !(seo.noFollow ?? false),
    },
  };

  // Open Graph
  const ogTitle = seo.ogTitle || seo.title || globalSeo?.ogTitle || globalSeo?.title || title;
  const ogDescription = seo.ogDescription || seo.description || globalSeo?.ogDescription || globalSeo?.description || description;
  const ogImage = seo.ogImage || globalSeo?.ogImage;

  if (ogTitle || ogDescription || ogImage) {
    metadata.openGraph = {
      type: 'website',
      title: ogTitle,
      description: ogDescription,
      siteName: siteTitle || fallbackTitle,
      images: ogImage
        ? [
            {
              url: urlFor(ogImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: (ogImage as any)?.alt || ogTitle,
            },
          ]
        : undefined,
    };
  }

  // Twitter Card
  const twitterTitle = seo.twitterTitle || seo.ogTitle || seo.title || globalSeo?.twitterTitle || globalSeo?.ogTitle || globalSeo?.title || title;
  const twitterDescription = seo.twitterDescription || seo.ogDescription || seo.description || globalSeo?.twitterDescription || globalSeo?.ogDescription || globalSeo?.description || description;
  const twitterImage = seo.twitterImage || seo.ogImage || globalSeo?.twitterImage || globalSeo?.ogImage;

  if (twitterTitle || twitterDescription || twitterImage) {
    metadata.twitter = {
      card: seo.twitterCard || globalSeo?.twitterCard || 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
      images: twitterImage
        ? [urlFor(twitterImage).width(1200).height(630).url()]
        : undefined,
    };
  }

  // Canonical URL
  const canonicalUrl = seo.canonical || globalSeo?.canonical;
  if (canonicalUrl || (baseUrl && path)) {
    metadata.alternates = {
      canonical: canonicalUrl || (baseUrl ? `${baseUrl}${path || ''}` : undefined),
    };
  }

  return metadata;
}

/**
 * Helper function to generate metadata for a page
 * Fetches both site settings and page data, then merges SEO
 * 
 * @example
 * ```tsx
 * // In a page component
 * export async function generateMetadata({ params }): Promise<Metadata> {
 *   const siteSettings = await getSiteSettings();
 *   const page = await getPageBySlug(params.slug);
 *   
 *   return generatePageMetadata({
 *     pageSeo: page?.seo,
 *     globalSeo: siteSettings?.globalSeo,
 *     pageTitle: page?.title,
 *     path: `/${params.slug}`,
 *     siteTitle: siteSettings?.title,
 *   });
 * }
 * ```
 */
export function generatePageMetadata({
  pageSeo,
  globalSeo,
  pageTitle,
  path = '/',
  siteTitle,
  baseUrl,
}: {
  pageSeo?: AdvancedSeo;
  globalSeo?: AdvancedSeo;
  pageTitle?: string;
  path?: string;
  siteTitle?: string;
  baseUrl?: string;
}): Metadata {
  const url = baseUrl || process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : undefined);

  return generateMetadata({
    pageSeo,
    globalSeo,
    fallbackTitle: pageTitle || 'FlowEdit',
    fallbackDescription: 'Professional video editing made simple',
    baseUrl: url,
    path,
    siteTitle,
  });
}

/**
 * Legacy function for backward compatibility
 * @deprecated Use generateMetadata or generatePageMetadata instead
 */
export function generateMetadataFromSeo(
  seo?: AdvancedSeo,
  fallbackTitle?: string,
  fallbackDescription?: string
): Metadata {
  return generateMetadata({
    pageSeo: seo,
    fallbackTitle,
    fallbackDescription,
  });
}
