/**
 * Centralized Site Configuration & Branding
 * 
 * Edit this configuration to update agency branding, contact details, social links,
 * and global SEO defaults across the entire application from a single location.
 */
export const siteConfig = {
  // Agency Branding Placeholder
  agencyName: "Digital Growth Agency",
  agencyTagline: "Data-Driven Performance Marketing & Scalable Growth Architecture",
  agencyShortDesc: "We help high-growth enterprises, B2B brands, and E-commerce leaders scale revenue predictably through data-backed SEO, PPC, and Conversion Rate Optimization.",
  
  // Domain & Deployment Info
  siteUrl: import.meta.env.VITE_SITE_URL || "https://digitalgrowthagency.github.io",
  defaultOgImage: "/og-default.jpg",
  
  // Contact Information (Editable Placeholders)
  contact: {
    email: "hello@digitalgrowthagency.example",
    phone: "+1 (800) 555-0199",
    address: {
      street: "100 Innovation Boulevard, Suite 400",
      city: "Chicago",
      state: "IL",
      zip: "60601",
      country: "United States"
    },
    operatingHours: "Mo-Fr 08:00-18:00 EST"
  },

  // Social Links
  socialLinks: {
    linkedin: "https://linkedin.com/company/digitalgrowthagency-example",
    twitter: "https://twitter.com/digitalgrowth_example",
    youtube: "https://youtube.com/@digitalgrowthagency-example",
    github: "https://github.com/digitalgrowthagency"
  },

  // E-E-A-T & Agency Statistics (Realistic, configurable sample data structures)
  credentials: {
    foundedYear: 2018,
    certifications: [
      "Google Premier Partner",
      "Meta Business Partner",
      "HubSpot Certified Agency",
      "GA4 & BigQuery Certified"
    ],
    verifiedMetrics: [
      { label: "Managed Ad Spend", value: "$45M+", highlight: "Optimized across Google & Meta" },
      { label: "Client Revenue Generated", value: "$180M+", highlight: "Attributable growth" },
      { label: "Average Organic Growth", value: "+148%", highlight: "Within 12 months" },
      { label: "Client Retention Rate", value: "94%", highlight: "Based on annual contracts" }
    ]
  },

  // Conversion / Contact API Endpoint Placeholder
  contactEndpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "https://formspree.io/f/placeholder_endpoint"
};
