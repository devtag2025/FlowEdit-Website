import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface NavigationItem {
  _key: string;
  title: string;
  linkType: 'internal' | 'external';
  internalLink?: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    pageTemplate?: string;
  };
  externalUrl?: string;
  openInNewTab?: boolean;
}

export interface Button {
  _key?: string; // Optional because single button objects don't have _key
  text: string;
  linkType: 'internal' | 'external';
  internalLink?: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
  externalUrl?: string;
  openInNewTab?: boolean;
  variant: string;
}

export interface FooterNavigationColumn {
  _key: string;
  title: string;
  items: NavigationItem[];
}

export interface SocialLink {
  _key: string;
  platform: 'twitter' | 'linkedin' | 'facebook' | 'youtube' | 'instagram' | 'github';
  url: string;
}

export interface LegalPage {
  _key: string;
  title: string;
  page: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
}

export interface AdvancedSeo {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SanityImageSource;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: SanityImageSource;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  keywords?: string[];
}

export interface NotFoundPage {
  errorCode?: string;
  title?: string;
  description?: string;
  cta?: Button[];
}

export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  title: string;
  description?: string;
  logo?: SanityImageSource & {
    alt?: string;
  };
  headerNavigation?: NavigationItem[];
  headerCTA?: Button;
  mobileMenuBackground?: SanityImageSource & {
    alt?: string;
  };
  footerLogo?: SanityImageSource & {
    alt?: string;
  };
  footerColumns?: FooterNavigationColumn[];
  legalPages?: LegalPage[];
  socialLinks?: SocialLink[];
  globalSeo?: AdvancedSeo;
  notFoundPage?: NotFoundPage;
}
