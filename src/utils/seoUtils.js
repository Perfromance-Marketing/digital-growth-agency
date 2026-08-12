import { siteConfig } from '../config/siteConfig';

/**
 * Formats standard page titles with agency branding
 */
export function formatPageTitle(pageTitle) {
  if (!pageTitle) return `${siteConfig.agencyName} | ${siteConfig.agencyTagline}`;
  return `${pageTitle} | ${siteConfig.agencyName}`;
}

/**
 * Returns full canonical URL for a route path
 */
export function getCanonicalUrl(path = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.siteUrl}${cleanPath}`;
}

/**
 * Generates JSON-LD Organization & ProfessionalService schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.agencyName,
    "description": siteConfig.agencyShortDesc,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zip,
      "addressCountry": siteConfig.contact.address.country
    },
    "openingHours": siteConfig.contact.operatingHours,
    "sameAs": [
      siteConfig.socialLinks.linkedin,
      siteConfig.socialLinks.twitter,
      siteConfig.socialLinks.youtube
    ],
    "knowsAbout": [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Conversion Rate Optimization (CRO)",
      "Content Strategy",
      "Performance Web Development"
    ]
  };
}

/**
 * Generates JSON-LD Service schema
 */
export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "ProfessionalService",
      "name": siteConfig.agencyName,
      "url": siteConfig.siteUrl
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.title} Deliverables`,
      "itemListElement": service.deliverables?.map(item => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item
        }
      })) || []
    }
  };
}

/**
 * Generates JSON-LD FAQPage schema for search engine Answer Snippets (AEO)
 */
export function generateFaqSchema(faqList) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generates JSON-LD BreadcrumbList schema
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": getCanonicalUrl(item.path)
    }))
  };
}
