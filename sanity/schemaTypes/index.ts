import { type SchemaTypeDefinition } from 'sanity'
import page from './document/pages'
import faq from './document/faq'
import testimonial from './document/testimonials'
import portfolio from './document/portfolio'
import siteSettings from './document/siteSettings'
import button from './objects/button'
import navigationItem from './objects/navigationItem'
import socialLink from './objects/socialLink'
import footerNavigationColumn from './objects/footerNavigationColumn'
import advancedSeo from './objects/advancedSeo'
import bannerBlock from './blocks/bannerBlock'
import workflowBlock from './blocks/workflowBlock'
import lovedByCreatorsBlock from './blocks/lovedByCreatorsBlock'
import faqBlock from './blocks/faqBlock'
import pricingBlock from './blocks/pricingBlock'
import portfolioBannerBlock from './blocks/portfolioBannerBlock'
import portfolioShowcaseBlock from './blocks/portfolioShowcaseBlock'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    faq,
    testimonial,
    portfolio,
    siteSettings,
    button,
    navigationItem,
    socialLink,
    footerNavigationColumn,
    advancedSeo,
    bannerBlock,
    workflowBlock,
    lovedByCreatorsBlock,
    faqBlock,
    pricingBlock,
    portfolioBannerBlock,
    portfolioShowcaseBlock,
  ],
}
