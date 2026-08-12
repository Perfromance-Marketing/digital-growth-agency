/**
 * Central Data Store for Agency Services
 * Scalable architecture allowing instant service addition and expansion.
 */
export const servicesData = [
  {
    id: "seo",
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Drive high-intent organic traffic through technical architecture, topic clusters, and entity-based content optimization.",
    description: "Our enterprise SEO strategy combines technical audit compliance, semantic entity building, link authority acquisition, and Answer Engine Optimization (AEO) to establish category dominance in organic search results.",
    iconName: "Search",
    featured: true,
    keyMetrics: "Average +148% organic traffic lift within 12 months",
    deliverables: [
      "Technical Infrastructure & Core Web Vitals Audit",
      "Semantic Keyword Mapping & Topic Cluster Architecture",
      "Entity & Schema.org Structured Data Implementation",
      "High-Authority Backlink Acquisition & Digital PR",
      "Monthly Conversion & Keyword Attribution Reporting"
    ],
    process: [
      { step: "01", title: "Technical Baseline & Entity Audit", desc: "Evaluating indexing bottlenecks, crawl budget efficiency, and semantic graph representation." },
      { step: "02", title: "Topic Cluster Architecture", desc: "Mapping core pillar pages and supporting cluster content to capture complete search intent." },
      { step: "03", title: "On-Page & Schema Deployment", desc: "Optimizing header hierarchies, JSON-LD schemas, and internal link equity distribution." },
      { step: "04", title: "Authority & Performance Scaling", desc: "Executing high-tier link building and ongoing Core Web Vitals performance tuning." }
    ],
    faqs: [
      {
        question: "How long does enterprise SEO take to generate measurable revenue results?",
        answer: "Initial technical and structural improvements often show crawling and ranking movement within 45–90 days. Significant revenue-impacting organic growth typically compounds between 6 and 12 months."
      },
      {
        question: "What is the difference between traditional SEO and Answer Engine Optimization (AEO)?",
        answer: "Traditional SEO focuses on ranking in standard blue search links. AEO optimizes content structure, FAQs, and direct answer blocks so your brand is directly cited by AI engines like ChatGPT, Gemini, and Google Search Overviews."
      }
    ]
  },
  {
    id: "ppc",
    slug: "ppc",
    title: "Performance PPC & Paid Media",
    shortDesc: "Maximize ROAS across Google Search, Meta Ads, and LinkedIn with precision audience targeting and conversion tracking.",
    description: "We design, manage, and continuously test hyper-targeted paid acquisition campaigns that lower your Customer Acquisition Cost (CAC) and scale pipeline revenue predictably.",
    iconName: "Target",
    featured: true,
    keyMetrics: "Average 3.4x ROAS delivered across multi-channel campaigns",
    deliverables: [
      "Paid Search & Social Campaign Architecture",
      "Ad Copywriting & Modular Creative Asset Production",
      "First-Party Conversion API & GA4 Tracking Setup",
      "Continuous A/B Bid & Audience Split Testing",
      "Real-Time Executive Dashboard & Cost-per-Lead Optimization"
    ],
    process: [
      { step: "01", title: "Audience & Intent Research", desc: "Analyzing high-converting search keywords, buyer personas, and competitor bid gaps." },
      { step: "02", title: "Campaign & Attribution Setup", desc: "Building conversion tracking pixels, CAPI server side triggers, and granular ad structures." },
      { step: "03", title: "Creative & Copy Launch", desc: "Deploying high-converting ad variations tailored to specific buyer stages." },
      { step: "04", title: "Bid & Placement Optimization", desc: "Daily bid management, negative keyword pruning, and budget reallocation." }
    ],
    faqs: [
      {
        question: "Which ad platforms provide the highest ROI for B2B vs E-commerce?",
        answer: "For B2B brands, Google Search and LinkedIn Ads yield the highest decision-maker intent. For E-commerce, Google Shopping (PMax) combined with Meta (Instagram/Facebook) and TikTok Ads drives the highest immediate volume."
      }
    ]
  },
  {
    id: "cro",
    slug: "cro",
    title: "Conversion Rate Optimization (CRO)",
    shortDesc: "Turn existing traffic into qualified sales leads and customer orders through quantitative UX testing and behavioral insights.",
    description: "CRO leverages user heatmaps, session recordings, and rigorous A/B split testing to remove conversion friction points and maximize revenue per visitor without increasing ad spend.",
    iconName: "TrendingUp",
    featured: true,
    keyMetrics: "Average +32% conversion rate increase on key landing pages",
    deliverables: [
      "User Friction & Drop-Off Behavioral Analysis",
      "Heatmap & Session Recording Analytics",
      "Hypothesis Creation & A/B Split Testing Roadmap",
      "Conversion-Focused UX/UI Wireframing & Redesign",
      "Checkout & Lead Form Optimization"
    ],
    process: [
      { step: "01", title: "Quantitative Data Collection", desc: "Analyzing funnel drop-offs using GA4, heatmaps, and form analytics." },
      { step: "02", title: "Friction Point Identification", desc: "Pinpointing messaging disconnects, slow load times, or layout confusion." },
      { step: "03", title: "A/B Experiment Execution", desc: "Running statistically significant split tests on headlines, CTAs, and layout structures." },
      { step: "04", title: "Winning Variation Rollout", desc: "Permanently deploying winning variations to elevate baseline conversion rates." }
    ],
    faqs: [
      {
        question: "How much website traffic is required to run statistical A/B split tests?",
        answer: "We recommend a minimum of 10,000 monthly unique visitors per key landing page to achieve statistical significance within a 30-day testing cycle."
      }
    ]
  },
  {
    id: "content-strategy",
    slug: "content-strategy",
    title: "Content Strategy & Authority Marketing",
    shortDesc: "Build industry authority and capture buyer demand with expert-led, E-E-A-T compliant content topic clusters.",
    description: "We produce research-backed whitepapers, blog articles, case studies, and buyer guides that position your organization as the trusted authority while ranking for high-intent search queries.",
    iconName: "FileText",
    featured: false,
    keyMetrics: "High-trust content engineered for search & AI citations",
    deliverables: [
      "Topic Cluster Content Roadmaps",
      "Subject Matter Expert (SME) Interviewing & Editing",
      "E-E-A-T Verification & Author Schema Integration",
      "Content Decay Audit & Historical Optimization",
      "Multi-Channel Asset Distribution"
    ],
    process: [
      { step: "01", title: "Demand & Intent Analysis", desc: "Identifying content gaps across the buyer journey." },
      { step: "02", title: "Expert Content Creation", desc: "Drafting thoroughly researched articles guided by SEO & E-E-A-T guidelines." },
      { step: "03", title: "Structured Publishing", desc: "Formatting with semantic headings, author blocks, and custom infographics." },
      { step: "04", title: "Distribution & Syndication", desc: "Amplifying content across email, social, and industry channels." }
    ],
    faqs: [
      {
        question: "How does content strategy tie into search engine rankings?",
        answer: "Search engines reward topical authority. Publishing interconnected content clusters signals to Google and AI engines that your domain is a comprehensive source of truth."
      }
    ]
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Performance Web Design & Architecture",
    shortDesc: "Custom, lightning-fast web applications built with modern semantic technology, optimized for conversions and Core Web Vitals.",
    description: "We engineer accessible, ultra-responsive web applications from scratch using modern semantic web technologies that achieve perfect Core Web Vitals scores and convert visitors reliably.",
    iconName: "Code",
    featured: false,
    keyMetrics: "Sub-1 second page load times & 95+ Lighthouse performance scores",
    deliverables: [
      "Custom Component Architecture & Design System",
      "Mobile-First Responsive Layout Engineering",
      "Core Web Vitals Optimization (LCP, INP, CLS)",
      "Technical SEO & Structured Schema Foundation",
      "Secure Static & Headless CMS Integration"
    ],
    process: [
      { step: "01", title: "Architecture & UX Wireframing", desc: "Mapping conversion pathways, information hierarchy, and mobile layout design." },
      { step: "02", title: "Modular Component Coding", desc: "Developing scalable React components using semantic HTML5 and clean CSS." },
      { step: "03", title: "Performance & A11y Tuning", desc: "Optimizing bundle size, accessibility attributes, and cross-browser support." },
      { step: "04", title: "Deployment & Monitoring", desc: "Setting up CI/CD workflows, automated testing, and CDN caching." }
    ],
    faqs: [
      {
        question: "Why is website performance critical for digital marketing conversion?",
        answer: "Every 1-second delay in page load time reduces conversion rates by up to 20%. Fast sites also receive higher organic ranking scores from Google's page experience signals."
      }
    ]
  }
];
