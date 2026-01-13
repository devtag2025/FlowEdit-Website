import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footerNavigationColumn',
  title: 'Footer Navigation Column',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Column Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Title for this footer column (e.g., "Company", "Resources")',
    }),
    defineField({
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [{ type: 'navigationItem' }],
      description: 'Links within this column',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      itemCount: 'items.length',
    },
    prepare({ title, itemCount }) {
      return {
        title: title || 'Untitled Column',
        subtitle: itemCount ? `${itemCount} item${itemCount === 1 ? '' : 's'}` : 'No items',
      };
    },
  },
});
