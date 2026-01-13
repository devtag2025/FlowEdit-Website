import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioBannerBlock',
  title: 'Portfolio Banner Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title for the portfolio banner',
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
      name: 'cta',
      title: 'CTA Button',
      type: 'button',
      description: 'Call-to-action button (e.g., "View Projects")',
    }),
    defineField({
      name: 'projects',
      title: 'Portfolio Projects',
      type: 'array',
      description: 'Select portfolio items to display',
      of: [
        {
          type: 'reference',
          to: [{ type: 'portfolio' }],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      projectCount: 'projects',
    },
    prepare({ title, projectCount }) {
      const count = projectCount?.length || 0;
      return {
        title: title || 'Portfolio Banner Block',
        subtitle: `${count} project${count !== 1 ? 's' : ''}`,
      };
    },
  },
});
