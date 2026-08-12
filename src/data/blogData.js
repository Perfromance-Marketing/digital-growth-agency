/**
 * Blog Data Store - Topic Clusters & E-E-A-T Articles
 */
export const blogData = [
  {
    id: "aeo-geo-guide",
    slug: "aeo-geo-search-engine-optimization-guide",
    title: "Answer Engine Optimization (AEO) & GEO: Preparing Your Brand for AI Search",
    excerpt: "Learn how search engines and AI assistants (ChatGPT, Gemini, Google Search Overviews) extract and cite brand content, and how to structure your domain for maximum visibility.",
    category: "Search Strategy",
    readTime: "7 min read",
    publishDate: "2026-07-15",
    lastUpdated: "2026-08-01",
    author: {
      name: "Marcus Vance",
      role: "Head of Technical SEO & Search Architecture",
      bio: "Marcus has over 12 years of experience leading technical search strategy for enterprise SaaS and multi-location brands.",
      linkedin: "https://linkedin.com/in/example-marcus-vance"
    },
    content: `
      <h2>The Shift from Traditional Search to Generative Synthesis</h2>
      <p>Search engine algorithms have rapidly evolved from keyword frequency matching to entity-based semantic understanding. With the rise of AI Search Overviews and conversational answer engines, users increasingly receive direct answers rather than browsing multiple website links.</p>
      
      <h2>Core Principles of Answer Engine Optimization (AEO)</h2>
      <p>To ensure your business is cited as an authoritative answer source by search generative models, implement these key technical and structural practices:</p>
      <ul>
        <li><strong>Direct Question & Answer Formatting:</strong> Position clear, 40 to 60-word concise answer paragraphs directly beneath explicit H2 or H3 question headers.</li>
        <li><strong>JSON-LD Entity Schemas:</strong> Use structured data (Organization, FAQPage, Article) to define the explicit relationships between your brand, services, and topic concepts.</li>
        <li><strong>Original Subject Matter Data:</strong> AI answer engines prioritize unique primary data, proprietary case study statistics, and verified expert insights over generic rewritten text.</li>
      </ul>
      
      <h2>Building E-E-A-T Signals for AI Retrieval</h2>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) serve as critical filters for search quality evaluators. Always attribute articles to verified industry experts with transparent bio credentials and professional social links.</p>
    `
  },
  {
    id: "b2b-ppc-cac-reduction",
    slug: "b2b-ppc-customer-acquisition-cost-reduction",
    title: "5 Technical PPC Audit Tactics That Lower Customer Acquisition Cost (CAC)",
    excerpt: "Discover high-yield Google Search and Meta Ads optimization tactics that eliminate wasted ad spend and focus budgets on high-intent buyer keywords.",
    category: "Paid Media",
    readTime: "6 min read",
    publishDate: "2026-06-20",
    lastUpdated: "2026-07-28",
    author: {
      name: "Elena Rostova",
      role: "Director of Performance Media",
      bio: "Elena oversees performance media strategy across Google, Meta, and LinkedIn for enterprise B2B clients.",
      linkedin: "https://linkedin.com/in/example-elena-rostova"
    },
    content: `
      <h2>Why Most B2B Paid Media Campaigns Waste 30%+ of Budget</h2>
      <p>B2B paid search is notoriously competitive. Broad keyword match types combined with default automated bidding often direct ad budgets toward consumer or low-intent queries rather than executive decision-makers.</p>
      
      <h2>Tactics for Immediate CAC Reduction</h2>
      <ol>
        <li><strong>Implement First-Party Conversion API (CAPI):</strong> Feed qualified offline lead status back to ad engines rather than raw form fills.</li>
        <li><strong>Tighten Match Types & Negative Keyword Lists:</strong> Audit search terms weekly to exclude informational research queries.</li>
        <li><strong>Align Ad Copy with Landing Page Headers:</strong> Maintain precise message match between ad copy promise and landing page hero content to boost Quality Scores.</li>
      </ol>
    `
  },
  {
    id: "landing-page-cro-framework",
    slug: "landing-page-conversion-rate-optimization-framework",
    title: "The Enterprise CRO Framework: Converting High-Intent Traffic into Sales Leads",
    excerpt: "A step-by-step breakdown of user experience wireframing, friction reduction, and headline split testing that elevates baseline landing page conversions.",
    category: "Conversion Optimization",
    readTime: "8 min read",
    publishDate: "2026-05-10",
    lastUpdated: "2026-07-10",
    author: {
      name: "David Chen",
      role: "Lead Conversion Strategist",
      bio: "David specializes in quantitative UX testing, behavioral analytics, and landing page conversion architecture.",
      linkedin: "https://linkedin.com/in/example-david-chen"
    },
    content: `
      <h2>The Psychology of High-Converting Landing Pages</h2>
      <p>Converting a website visitor into a business inquiry requires instant visual clarity, logical information hierarchy, and low-friction action steps. Within 3 seconds, a prospective buyer must understand what you offer, why your solution is superior, and what specific action to take next.</p>
    `
  }
];
