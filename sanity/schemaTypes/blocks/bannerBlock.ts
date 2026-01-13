import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'bannerBlock',
  title: 'Banner Block',
  type: 'object',
  fields: [
    defineField({
      name: 'headerButtonText',
      title: 'Header Button Text',
      type: 'string',
      description: 'Text displayed in the header button (e.g., "Loved by 4.5 out of 5 Creators")',
      initialValue: 'Loved by 4.5 out of 5 Creators',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating value (0-5, e.g., 4.5 for 4.5 stars)',
      initialValue: 4.5,
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'Main hero title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      description: 'Subtitle/description text below the main title',
    }),
    defineField({
      name: 'cta',
      title: 'CTA Button',
      type: 'button',
      description: 'Call-to-action button',
    }),
    defineField({
      name: 'bottomText',
      title: 'Bottom Text',
      type: 'text',
      rows: 2,
      description: 'Text displayed below the CTA button',
    }),
    defineField({
      name: 'secondSectionTitle',
      title: 'Second Section Title',
      type: 'string',
      description: 'Title for the second section (e.g., "Effortless Video")',
    }),
    defineField({
      name: 'secondSectionSubtitle',
      title: 'Second Section Subtitle',
      type: 'string',
      description: 'Subtitle for the second section',
    }),
    defineField({
      name: 'secondSectionDescription',
      title: 'Second Section Description',
      type: 'text',
      rows: 3,
      description: 'Description text for the second section',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Main image displayed in the banner (e.g., laptop image)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topBannerImage',
      title: 'Top Banner Decoration Image',
      type: 'image',
      description: 'Optional decorative image at the top of the banner',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'bottomBannerImage',
      title: 'Bottom Banner Decoration Image',
      type: 'image',
      description: 'Optional decorative image at the bottom of the banner',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Banner Block',
        subtitle: subtitle || 'No subtitle',
        media: media,
      };
    },
  },
});
