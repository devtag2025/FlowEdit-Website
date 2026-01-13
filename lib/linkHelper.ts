import { NavigationItem, Button } from '@/types/siteSettings';

type LinkableItem = NavigationItem | Button;

export function getLinkUrl(item: LinkableItem): string {
  if (item.linkType === 'external' && item.externalUrl) {
    return item.externalUrl;
  }
  
  if (item.linkType === 'internal' && item.internalLink?.slug?.current) {
    // If slug is 'home', always redirect to root '/'
    if (item.internalLink.slug.current === 'home') {
      return '/';
    }
    return `/${item.internalLink.slug.current}`;
  }
  
  return '#';
}

export function shouldOpenInNewTab(item: LinkableItem): boolean {
  return item.linkType === 'external' && (item.openInNewTab ?? true);
}

export function getLinkProps(item: LinkableItem) {
  return {
    href: getLinkUrl(item),
    target: shouldOpenInNewTab(item) ? '_blank' : undefined,
    rel: shouldOpenInNewTab(item) ? 'noopener noreferrer' : undefined,
  };
}
