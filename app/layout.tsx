import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import VisualEditingComponent from "@/components/VisualEditing";
import ExitDraftMode from "@/components/ExitDraftMode";
import { getSiteSettings } from "@/sanity/lib/api";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Generate metadata from global SEO settings
export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || undefined;

  return generateSeoMetadata({
    globalSeo: siteSettings?.globalSeo,
    fallbackTitle: siteSettings?.title || "FlowEdit",
    fallbackDescription: siteSettings?.description || "Professional video editing made simple",
    baseUrl,
    path: "/",
    siteTitle: siteSettings?.title,
  });
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const draft = await draftMode();
  const isDraftMode = draft.isEnabled;

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
        {isDraftMode && (
          <>
            <VisualEditingComponent />
            <ExitDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
