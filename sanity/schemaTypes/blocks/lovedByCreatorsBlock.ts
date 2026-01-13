import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'lovedByCreatorsBlock',
  title: 'Loved by Creators Block',
  type: 'object',
  fields: [
    defineField({
      name: 'headerButtonText',
      title: 'Header Button Text',
      type: 'string',
      description: 'Text displayed in the header button',
      initialValue: 'Testimonials',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the section',
      initialValue: 'Loved by creators',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Background image for the section',
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
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      description: 'Select testimonials to display',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
      validation: (Rule) => Rule.min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      headerButtonText: 'headerButtonText',
    },
    prepare({ title, headerButtonText }) {
      return {
        title: title || 'Loved by Creators Block',
        subtitle: headerButtonText ? `Header: ${headerButtonText}` : 'Testimonials section',
      };
    },
  },
});
