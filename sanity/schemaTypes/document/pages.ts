import { defineField, defineType } from 'sanity'
import { contentBlocksField } from '../blocks/contentBlocksField'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTemplate',
      title: 'Page Template',
      type: 'string',
      options: {
        list: [
          { title: 'Home Page', value: 'HomePage' },
          { title: 'Pricing', value: 'Pricing' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
      // readOnly: ({ document }) => document?.pageTemplate === 'HomePage',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier for this page. For the home page, the slug must always be "home".',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // Content blocks - only show for non-pricing pages
    defineField({
      ...contentBlocksField,
      hidden: ({ document }) => document?.pageTemplate === 'Pricing',
    }),
    // Pricing-specific fields - only show for pricing pages
    defineField({
      name: 'pricingData',
      title: 'Pricing Data',
      type: 'pricingBlock',
      hidden: ({ document }) => document?.pageTemplate !== 'Pricing',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const pageTemplate = (context.document as any)?.pageTemplate
          // Skip validation if this is not a Pricing page
          if (pageTemplate !== 'Pricing') {
            return true
          }
          // Only require pricingData when pageTemplate is 'Pricing'
          if (!value) {
            return 'Pricing Data is required for Pricing pages'
          }
          return true
        }),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'advancedSeo',
      description: 'Leave empty to use global SEO settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      pageTemplate: 'pageTemplate',
    },
    prepare({ title, slug, pageTemplate }) {
      return {
        title: title,
        subtitle: `${pageTemplate} - /${slug || 'no-slug'}`,
      }
    },
  },
})
