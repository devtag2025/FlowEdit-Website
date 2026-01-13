import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioShowcaseBlock',
  title: 'Portfolio Showcase Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title for the showcase section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Description text below the title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Showcase Image',
      type: 'image',
      description: 'Main image displayed in the showcase',
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
      name: 'cta',
      title: 'CTA Button',
      type: 'button',
      description: 'Call-to-action button',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Portfolio Showcase Block',
        subtitle: 'Showcase section',
        media: media,
      };
    },
  },
});
