import React, { useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { formatPageTitle, getCanonicalUrl } from '../../utils/seoUtils';

/**
 * Dynamic SEO Head Manager
 * Updates document.title, meta descriptions, canonical URLs, and OpenGraph metadata.
 */
export const SEOHead = ({ title, description, canonicalPath, ogImage, ogType = 'website' }) => {
  const fullTitle = formatPageTitle(title);
  const metaDescription = description || siteConfig.agencyShortDesc;
  const canonicalUrl = getCanonicalUrl(canonicalPath || window.location.pathname);
  const image = ogImage || siteConfig.defaultOgImage;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (nameAttr, nameValue, contentValue) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // Helper for canonical link
    const setCanonicalLink = (url) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', url);
    };

    // Standard Meta
    setMetaTag('name', 'description', metaDescription);
    setMetaTag('name', 'robots', 'index, follow');

    // OpenGraph Meta
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:site_name', siteConfig.agencyName);

    // Twitter Card Meta
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDescription);
    setMetaTag('name', 'twitter:image', image);

    // Canonical Link
    setCanonicalLink(canonicalUrl);
  }, [fullTitle, metaDescription, canonicalUrl, image, ogType]);

  return null;
};
