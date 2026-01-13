import { getSiteSettings } from "@/sanity/lib/api";
import NotFoundPage from "@/components/shared/NotFoundPage";
import FluidContainer from "@/components/layout/FluidContainer";

export default async function NotFound() {
  const siteSettings = await getSiteSettings();
  const notFoundPage = siteSettings?.notFoundPage;

  return (
    <div className="font-inter">
      <FluidContainer>
        <main className="pb-12">
          <NotFoundPage notFoundPage={notFoundPage} />
        </main>
      </FluidContainer>
    </div>
  );
}
