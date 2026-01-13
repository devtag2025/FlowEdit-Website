import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faqBlock',
  title: 'FAQ Block',
  type: 'object',
  fields: [
    defineField({
      name: 'headerButtonText',
      title: 'Header Button Text',
      type: 'string',
      description: 'Text displayed in the header button (e.g., "FAQs")',
      initialValue: 'FAQs',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the FAQ section',
      initialValue: 'Frequently asked questions',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Description text below the main title',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      description: 'List of FAQ items to display',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faq' }],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'getStartedTitle',
      title: 'Get Started Title',
      type: 'string',
      description: 'Title for the "Get Started" section',
      initialValue: 'Ready to get started?',
    }),
    defineField({
      name: 'getStartedCta',
      title: 'Get Started CTA Button',
      type: 'button',
      description: 'Call-to-action button for the Get Started section',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'headerButtonText',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'FAQ Block',
        subtitle: subtitle || 'No header button text',
      };
    },
  },
});
