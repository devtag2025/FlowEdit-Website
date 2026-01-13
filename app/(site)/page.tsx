import { draftMode } from "next/headers";
import { unstable_noStore } from "next/cache";
import { getHomePage } from "@/sanity/lib/api";
import PageBuilder from "./components/PageBuilder";
import Faq from "./components/Faq";
import Banner from "./components/Banner";

export default async function HomePage() {
  // Bypass cache when draft mode is enabled for visual editing
  const draft = await draftMode();
  if (draft.isEnabled) {
    unstable_noStore();
  }
  
  const homePage = await getHomePage();
  const contentBlocks = homePage?.contentBlocks || [];

  // If contentBlocks exist, use PageBuilder, otherwise fallback to static components
  const hasContentBlocks = contentBlocks.length > 0;

  return (
    <div className="w-full relative">
      <div className="flex flex-col">
        {hasContentBlocks ? <PageBuilder blocks={contentBlocks} /> : ""}
      </div>
    </div>
  );
}
