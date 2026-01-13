import { defineField, defineType } from 'sanity';
// import { QuoteIcon } from '@sanity/icons';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  // icon: QuoteIcon,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
      description: 'Short testimonial headline/quote (e.g., "Finance is now easy!")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed testimonial content',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the person giving the testimonial',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Address of the person giving the testimonial (e.g., "58, California, USA")',
    }),
  ],
  preview: {
    select: {
      quote: 'quote',
      name: 'name',
      location: 'location',
    },
    prepare({ quote, name, location }) {
      return {
        title: quote || name || 'Untitled',
        subtitle: name ? `${name}${location ? ` • ${location}` : ''}` : location || 'No details',
      };
    },
  },
});
