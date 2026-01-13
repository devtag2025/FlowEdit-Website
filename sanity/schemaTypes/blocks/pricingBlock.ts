import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pricingBlock',
  title: 'Pricing Block',
  type: 'object',
  fields: [
    defineField({
      name: 'banner',
      title: 'Banner Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headerButtonText',
          title: 'Header Button Text',
          type: 'string',
          description: 'Text displayed in the header button (e.g., "Pricing")',
          initialValue: 'Pricing',
        }),
        defineField({
          name: 'title',
          title: 'Main Title',
          type: 'string',
          description: 'Main hero title',
          validation: (Rule) =>
            Rule.custom((value, context) => {
              // Access the document context - traverse up to find the document
              const document = (context as any).document;
              const pageTemplate = document?.pageTemplate;
              // Only require if this is a Pricing page
              if (pageTemplate === 'Pricing' && !value) {
                return 'Main Title is required';
              }
              return true;
            }),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          description: 'Description text below the main title',
        }),
        defineField({
          name: 'toggleLabel',
          title: 'Toggle Label',
          type: 'string',
          description: 'Text displayed next to the toggle switch',
          initialValue: 'Unlock',
        }),
        defineField({
          name: 'toggleSavingsText',
          title: 'Toggle Savings Text',
          type: 'string',
          description: 'Text displayed after the toggle (e.g., "35% savings")',
          initialValue: '35% savings',
        }),
      ],
    }),
    defineField({
      name: 'pricingPlans',
      title: 'Pricing Plans',
      type: 'array',
      description: 'List of pricing plans',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Plan Title',
              type: 'string',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const document = (context as any).document;
                  const pageTemplate = document?.pageTemplate;
                  if (pageTemplate === 'Pricing' && !value) {
                    return 'Plan Title is required';
                  }
                  return true;
                }),
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'number',
              description: 'Original price (before discount)',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const document = (context as any).document;
                  const pageTemplate = document?.pageTemplate;
                  if (pageTemplate === 'Pricing') {
                    if (value === undefined || value === null) {
                      return 'Price is required';
                    }
                    if (value < 0) {
                      return 'Price must be 0 or greater';
                    }
                  }
                  return true;
                }),
            }),
            defineField({
              name: 'glow',
              title: 'Show Glow Effect',
              type: 'boolean',
              description: 'Enable glow effect for this plan (usually for featured plan)',
              initialValue: false,
            }),
            defineField({
              name: 'priceLabel',
              title: 'Price Label',
              type: 'string',
              description: 'Text displayed below the price (e.g., "Per video", "Per month")',
              initialValue: 'Per video',
            }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Feature Text',
                      type: 'string',
                      validation: (Rule) =>
                        Rule.custom((value, context) => {
                          const document = (context as any).document;
                          const pageTemplate = document?.pageTemplate;
                          if (pageTemplate === 'Pricing' && !value) {
                            return 'Feature Text is required';
                          }
                          return true;
                        }),
                    }),
                    defineField({
                      name: 'type',
                      title: 'Feature Type',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Included', value: 'check' },
                          { title: 'Not Included', value: 'minus' },
                        ],
                        layout: 'radio',
                      },
                      initialValue: 'check',
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'text',
                      subtitle: 'type',
                    },
                    prepare({ title, subtitle }) {
                      return {
                        title: title,
                        subtitle: subtitle === 'check' ? '✓ Included' : '✗ Not Included',
                      };
                    },
                  },
                },
              ],
            }),
            defineField({
              name: 'cta',
              title: 'CTA Button',
              type: 'button',
              description: 'Call-to-action button for this pricing plan',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              price: 'price',
              glow: 'glow',
            },
            prepare({ title, price, glow }) {
              return {
                title: title || 'Untitled Plan',
                subtitle: `$${price}${glow ? ' (Featured)' : ''}`,
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const document = (context as any).document;
          const pageTemplate = document?.pageTemplate;
          // Only require if this is a Pricing page
          if (pageTemplate === 'Pricing') {
            if (!value || value.length === 0) {
              return 'At least one pricing plan is required';
            }
          }
          return true;
        }),
    }),
    defineField({
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      description: 'Discount percentage to apply (e.g., 35 for 35% off)',
      initialValue: 35,
      validation: (Rule) => Rule.min(0).max(100),
    }),
  ],
  preview: {
    select: {
      title: 'banner.title',
      plansCount: 'pricingPlans',
    },
    prepare({ title, plansCount }) {
      const count = Array.isArray(plansCount) ? plansCount.length : 0;
      return {
        title: title || 'Pricing Block',
        subtitle: `${count} pricing plan${count !== 1 ? 's' : ''}`,
      };
    },
  },
});
