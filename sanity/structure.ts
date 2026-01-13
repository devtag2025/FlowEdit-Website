import { DocumentIcon } from "@sanity/icons";
import { HomeIcon } from "lucide-react";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Content Documents

      S.listItem()
        .title("Pages")
        .icon(DocumentIcon)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Homepage")
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType("page")
                    .documentId("home")
                    .title("Homepage")
                ),
              S.divider(),
              S.listItem()
                .title("All Pages")
                .icon(DocumentIcon)
                .child(
                  S.documentTypeList("page")
                    .title("All Pages")
                    .filter('_type == "page" && _id != "home"')
                ),
            ])
        ),

      // Divider
      S.divider(),
      S.listItem()
        .title("Portfolio")
        .schemaType("portfolio")
        .child(S.documentTypeList("portfolio").title("Portfolio Items")),

      S.listItem()
        .title("Testimonials")
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("Testimonials")),

      S.listItem()
        .title("FAQs")
        .schemaType("faq")
        .child(S.documentTypeList("faq").title("FAQs")),

      // Divider
      S.divider(),
      // Site Settings as a singleton (single document)
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),

      // Divider
      S.divider(),
    ]);
