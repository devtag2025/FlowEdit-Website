import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'workflowBlock',
  title: 'Workflow Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the workflow section',
      initialValue: 'A Simple Powerful Workflow',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Background image for the workflow section',
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
      name: 'workflowItems',
      title: 'Workflow Items',
      type: 'array',
      description: 'List of workflow steps (typically 3 items)',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
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
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(6),
    }),
    defineField({
      name: 'showcaseSections',
      title: 'Showcase Sections',
      type: 'array',
      description: 'Dual showcase sections below workflow items',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
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
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'cta',
              title: 'CTA Button',
              type: 'button',
              description: 'Call-to-action button',
            }),
            defineField({
              name: 'imagePosition',
              title: 'Image Position',
              type: 'string',
              description: 'Position of image relative to content',
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Right', value: 'right' },
                ],
                layout: 'radio',
              },
              initialValue: 'left',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
              position: 'imagePosition',
            },
            prepare({ title, media, position }) {
              return {
                title: title || 'Showcase Section',
                subtitle: `Image: ${position || 'left'}`,
                media: media,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(0).max(4),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Workflow Block',
        subtitle: 'Workflow section with items and showcases',
      };
    },
  },
});
