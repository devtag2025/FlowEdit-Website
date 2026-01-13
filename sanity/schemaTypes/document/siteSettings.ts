import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "general", title: "General", default: true },
    { name: "header", title: "Header" },
    { name: "footer", title: "Footer" },
    { name: "social", title: "Social Media" },
    { name: "seo", title: "Global SEO" },
    { name: "notFound", title: "404 Page" },
  ],
  fields: [
    // General
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "general",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
      group: "general",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alternative Text" }],
      group: "general",
    }),

    // Header
    defineField({
      name: "headerNavigation",
      title: "Header Navigation",
      type: "array",
      of: [{ type: "navigationItem" }],
      group: "header",
    }),
    defineField({
      name: "headerCTA",
      title: "Header CTA Button",
      type: "button",
      group: "header",
    }),
    defineField({
      name: "mobileMenuBackground",
      title: "Mobile Menu Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alternative Text" }],
      group: "header",
      description: "Background image displayed in the mobile menu (optional - will use default if not set)",
    }),

    // Footer
    defineField({
      name: "footerLogo",
      title: "Footer Logo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alternative Text" }],
      group: "footer",
      description: "Logo displayed in the footer (optional - will use main logo if not set)",
    }),
    defineField({
      name: "footerColumns",
      title: "Footer Navigation",
      type: "array",
      of: [{ type: "footerNavigationColumn" }],
      group: "footer",
    }),
    defineField({
      name: "legalPages",
      title: "Legal Pages (Privacy, Terms, etc.)",
      type: "array",
      group: "footer",
      description: "Add privacy policy, terms & conditions, and other legal pages",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Link Title",
              type: "string",
              description: "Text displayed for the link (e.g., 'Privacy Policy', 'Terms & Conditions')",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "page",
              title: "Page",
              type: "reference",
              to: [{ type: "page" }],
              description: "Select the page to link to",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              pageTitle: "page.title",
            },
            prepare({ title, pageTitle }) {
              return {
                title: title || "Untitled",
                subtitle: pageTitle ? `→ ${pageTitle}` : "No page selected",
              };
            },
          },
        },
      ],
    }),

    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [{ type: "socialLink" }],
      group: "social",
    }),

    // 404 Page
    defineField({
      name: "notFoundPage",
      title: "404 Page Settings",
      type: "object",
      group: "notFound",
      fields: [
        defineField({
          name: "errorCode",
          title: "Error Code",
          type: "string",
          description: "The error code displayed (e.g., 404)",
          initialValue: "404",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          description: "Main Title text (e.g., 'Page Not Found')",
          initialValue: "Page Not Found",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          description: "Error message description",
          rows: 3,
          initialValue: "Oops! The page you're looking for seems to have wandered off into the digital void. Let's get you back on track.",
        }),
        defineField({
          name: "cta",
          title: "Call to Action Buttons",
          type: "array",
          of: [{ type: "button" }],
          description: "CTA buttons to display on the 404 page (e.g., 'Go Back Home', 'Contact Support')",
        }),
      ],
    }),

    // Global SEO
    defineField({
      name: "globalSeo",
      title: "Global SEO Settings",
      type: "advancedSeo",
      description:
        "Default SEO settings used when page-specific SEO is not set",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
});
