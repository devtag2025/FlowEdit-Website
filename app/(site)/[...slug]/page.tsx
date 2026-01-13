import { notFound } from "next/navigation";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { unstable_noStore } from "next/cache";
import { getPageBySlug, getSiteSettings, getAllPageSlugs } from "@/sanity/lib/api";
import PageBuilder from "../components/PageBuilder";
import PricingPage from "@/components/pricing/page";
import { generatePageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

// Generate static params for all pages at build time
// Note: Pages will be dynamically rendered when draft mode is enabled
export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  // Filter out homepage slug if it exists (homepage is handled by root page.tsx)
  const filteredSlugs = slugs.filter((slug) => slug !== "home");
  
  // Return array of params objects for Next.js static generation
  return filteredSlugs.map((slug) => ({
    slug: [slug],
  }));
}

// Control how Next.js handles pages not generated at build time
// Set to false to return 404 for pages not pre-rendered
// Set to true (default) to generate them on-demand
export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Handle home page - metadata is handled by root layout
  if (!slug || slug.length === 0 || (slug.length === 1 && slug[0] === "home")) {
    return {};
  }

  const pageSlug = slug[slug.length - 1];
  const [page, siteSettings] = await Promise.all([
    getPageBySlug(pageSlug),
    getSiteSettings(),
  ]);

  if (!page) {
    return {};
  }

  return generatePageMetadata({
    pageSeo: page.seo,
    globalSeo: siteSettings?.globalSeo,
    pageTitle: page.title,
    path: `/${pageSlug}`,
    siteTitle: siteSettings?.title,
  });
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Handle home page - redirect to root
  if (!slug || slug.length === 0 || (slug.length === 1 && slug[0] === "home")) {
    // Home page is handled by the root page.tsx
    notFound();
  }

  // Bypass cache when draft mode is enabled for visual editing
  const draft = await draftMode();
  if (draft.isEnabled) {
    unstable_noStore();
  }

  // Get the page slug
  const pageSlug = slug[slug.length - 1];
  
  // Fetch page from Sanity
  const page = await getPageBySlug(pageSlug);

  if (!page) {
    console.error(`Page not found for slug: "${pageSlug}"`);
    console.error(`Please verify:`);
    console.error(`1. The page exists in Sanity with slug: "${pageSlug}"`);
    console.error(`2. The page is PUBLISHED (not draft)`);
    console.error(`3. The slug matches exactly (case-sensitive)`);
    notFound();
  }

  // Render based on page template
  if (page.pageTemplate === "Pricing") {
    return <PricingPage pageData={page} />;
  }

  // For other page templates, use PageBuilder with content blocks
  const contentBlocks = page?.contentBlocks || [];
  
  return (
    <div className="w-full relative">
      <div className="flex flex-col">
        {contentBlocks.length > 0 ? (
          <PageBuilder blocks={contentBlocks} />
        ) : (
          <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold">{page.title}</h1>
            <p className="mt-4 text-gray-600">No content blocks configured for this page.</p>
          </div>
        )}
      </div>
    </div>
  );
}
