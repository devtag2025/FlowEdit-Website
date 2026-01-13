import { groq } from "next-sanity";

const Button = groq`
  {
        _key,
        text,
        linkType,
        internalLink-> {
          _id,
          title,
          slug
        },
        externalUrl,
        openInNewTab,
        variant
      }
`;

// Individual block query fragments
const BANNER_BLOCK = groq`
  _type == "bannerBlock" => {
    headerButtonText,
    rating,
    title,
    subtitle,
    bottomText,
    secondSectionTitle,
    secondSectionSubtitle,
    secondSectionDescription,
    cta ${Button},
    mainImage {
      ...,
      asset->
    },
    topBannerImage {
      ...,
      asset->
    },
    bottomBannerImage {
      ...,
      asset->
    }
  }
`;

const WORKFLOW_BLOCK = groq`
  _type == "workflowBlock" => {
    title,
    backgroundImage {
      ...,
      asset->
    },
    workflowItems[] {
      _key,
      title,
      description,
      image {
        ...,
        asset->
      }
    },
    showcaseSections[] {
      _key,
      title,
      description,
      image {
        ...,
        asset->
      },
      cta ${Button},
      imagePosition
    }
  }
`;

const LOVED_BY_CREATORS_BLOCK = groq`
  _type == "lovedByCreatorsBlock" => {
    headerButtonText,
    title,
    backgroundImage {
      ...,
      asset->
    },
    testimonials[]-> {
      _id,
      quote,
      description,
      name,
      address
    }
  }
`;

const FAQ_BLOCK = groq`
  _type == "faqBlock" => {
    headerButtonText,
    title,
    description,
    faqs[]-> {
      _id,
      question,
      answer
    },
    getStartedTitle,
    getStartedCta ${Button}
  }
`;

const PORTFOLIO_BANNER_BLOCK = groq`
  _type == "portfolioBannerBlock" => {
    title,
    description,
    cta ${Button},
    projects[]-> {
      _id,
      title,
      shortDescription,
      thumbnail {
        ...,
        asset->
      }
    }
  }
`;

const PORTFOLIO_SHOWCASE_BLOCK = groq`
  _type == "portfolioShowcaseBlock" => {
    title,
    description,
    image {
      ...,
      asset->
    },
    cta ${Button}
  }
`;

// Reusable Content Blocks query using select pattern
const CONTENT_BLOCKS = groq`
  contentBlocks[] {
    _type,
    _key,
    ...select(
      ${BANNER_BLOCK},
      ${WORKFLOW_BLOCK},
      ${LOVED_BY_CREATORS_BLOCK},
      ${FAQ_BLOCK},
      ${PORTFOLIO_BANNER_BLOCK},
      ${PORTFOLIO_SHOWCASE_BLOCK}
    )
  }
`;

// Site Settings Query
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    _id,
    _type,
    title,
    description,
    logo {
      ...,
      asset->
    },
    headerNavigation[] {
      _key,
      title,
      linkType,
      internalLink-> {
        _id,
        title,
        slug,
        pageTemplate
      },
      externalUrl,
      openInNewTab
    },
    headerCTA ${Button},
    mobileMenuBackground {
      ...,
      asset->
    },
    footerLogo {
      ...,
      asset->
    },
    footerColumns[] {
      _key,
      title,
      items[] {
        _key,
        title,
        linkType,
        internalLink-> {
          _id,
          title,
          slug,
          pageTemplate
        },
        externalUrl,
        openInNewTab
      }
    },
    legalPages[] {
      _key,
      title,
      page-> {
        _id,
        title,
        slug
      }
    },
    socialLinks[] {
      _key,
      platform,
      url
    },
    globalSeo {
      title,
      description,
      ogTitle,
      ogDescription,
      ogImage {
        ...,
        asset->
      },
      twitterCard,
      twitterTitle,
      twitterDescription,
      twitterImage {
        ...,
        asset->
      },
      canonical,
      noIndex,
      noFollow,
      keywords
    },
    notFoundPage {
      errorCode,
      title,
      description,
      cta[] ${Button}
    }
  }
`;

// Home Page Query
export const HOME_PAGE_QUERY = groq`
  *[_type == "page" && slug.current == "home" && pageTemplate == "HomePage"][0] {
    _id,
    _type,
    title,
    slug,
    pageTemplate,
    ${CONTENT_BLOCKS}
  }
`;

// Page by Slug Query (for dynamic routes)
export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    pageTemplate,
    ${CONTENT_BLOCKS},
    // Pricing data for pricing pages
    pricingData {
      banner {
        headerButtonText,
        title,
        description,
        toggleLabel,
        toggleSavingsText
      },
      pricingPlans[] {
        _key,
        title,
        price,
        priceLabel,
        glow,
        features[] {
          _key,
          text,
          type
        },
        cta ${Button}
      },
      discountPercentage
    },
    seo {
      title,
      description,
      ogTitle,
      ogDescription,
      ogImage {
        ...,
        asset->
      },
      twitterCard,
      twitterTitle,
      twitterDescription,
      twitterImage {
        ...,
        asset->
      },
      canonical,
      noIndex,
      noFollow,
      keywords
    }
  }
`;

// All Page Slugs Query (for static generation)
export const ALL_PAGE_SLUGS_QUERY = groq`
  *[_type == "page" && defined(slug.current) && slug.current != null] {
    "slug": slug.current
  }
`;

// Enhanced query for sitemap generation with metadata
export const ALL_PAGES_FOR_SITEMAP_QUERY = groq`
  *[_type == "page" && defined(slug.current) && slug.current != null] {
    "slug": slug.current,
    "lastModified": _updatedAt,
    pageTemplate,
    seo {
      noIndex
    }
  }
`;
