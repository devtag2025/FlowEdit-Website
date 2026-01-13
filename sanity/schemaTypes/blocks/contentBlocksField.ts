import { defineField } from "sanity";

/**
 * Enhanced Content Blocks field with visual preview and grouping
 * Use this in all documents that need content blocks (page, product, solution, etc.)
 */
export const contentBlocksField = defineField({
  name: "contentBlocks",
  title: "Page Builder",
  type: "array",
  description:
    "Build your page by adding different sections like Banner, Hero, Features, Stats, etc.",
  of: [
    { type: "bannerBlock" },
    { type: "workflowBlock" },
    { type: "lovedByCreatorsBlock" },
    { type: "faqBlock" },
    { type: "portfolioBannerBlock" },
    { type: "portfolioShowcaseBlock" },
    // Add more block types here as you create them
    // { type: "heroBlock" },
    // { type: "featuresGridV1" },
    // { type: "statsBlock" },
    // etc.
  ],
  options: {
    insertMenu: {
      groups: [
        {
          name: "hero",
          title: "Hero & Banner",
          of: ["bannerBlock"],
        },
        {
          name: "content",
          title: "Content Sections",
          of: ["workflowBlock", "lovedByCreatorsBlock", "faqBlock", "portfolioBannerBlock", "portfolioShowcaseBlock"],
        },
        // Add more groups as you add more block types
        // {
        //   name: "features",
        //   title: "Features & Content",
        //   of: ["featuresGridV1", "featuresGridV2"],
        // },
      ],
      views: [
        {
          name: "grid",
          previewImageUrl: (schemaTypeName) =>
            `/sanity/preview/${schemaTypeName}.png`,
        },
        { name: "list" },
      ],
    },
  },
});
