# Digital Growth Agency - Performance Marketing & SEO Architecture

A professional, high-converting, SEO-first, and accessible Digital Marketing Agency web application built from scratch with Vite, React 18, and Vanilla CSS design system. Designed specifically for static hosting on **GitHub Pages**.

---

## 🚀 Key Features & Architecture Highlights

- **Centralized Branding (`siteConfig.js`)**: All agency names, phone numbers, addresses, social links, and metadata are defined in a single configuration file for easy global updates.
- **Corporate Trust Design System**: Modern Navy (`#1E3A8A`), Royal Blue (`#2563EB`), Deep Slate (`#0F172A`), and Teal (`#0D9488`) color palette with fluid typography (`clamp()`), accessible keyboard focus rings, and zero unnecessary visual bloat.
- **SEO Core Architecture**:
  - Semantic HTML5 structure throughout (`header`, `nav`, `main`, `article`, `section`, `aside`, `footer`).
  - Dynamic meta tags, OpenGraph cards, and canonical link injection (`SEOHead.jsx`).
  - Schema.org JSON-LD structured data generator (`Organization`, `Service`, `Article`, `FAQPage`, `BreadcrumbList`).
  - Answer Engine Optimization (AEO) direct Q&A formatting for AI search overviews (ChatGPT, Gemini, Google Search Overviews).
  - E-E-A-T expert author profiles (`EeatAuthorBlock.jsx`).
- **Interactive Business Tools**:
  - **ROI & Revenue Lift Calculator**: Real-time mathematical simulation model running 100% in browser logic.
  - **Free 30-Minute Growth Audit**: 3-step diagnostic lead magnet wizard.
- **Scalable Landing Page Expansion**:
  - Service detail template (`/services/:slug`).
  - Industry vertical template (`/industries/:slug`).
  - Local SEO location template (`/locations/:slug`).
  - Topic cluster blog posts (`/blog/:slug`).
- **GitHub Pages Ready**: Includes `404.html` SPA routing fallback script, `vite.config.js` relative base path, `.env.example`, `.gitignore`, `robots.txt`, `sitemap.xml`, and `.github/workflows/deploy.yml` GitHub Actions pipeline.

---

## 🛠️ Local Development & Build Commands

### Prerequisites
Node.js (v18+) and pnpm (or npm / yarn).

```bash
# 1. Install dependencies
pnpm install

# 2. Start local development server
pnpm dev

# 3. Build for static production release
pnpm build

# 4. Preview production build locally
pnpm preview
```

---

## 📦 Deploying to GitHub Pages

### Option A: Automated via GitHub Actions (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Digital Growth Agency website"
   git remote add origin https://github.com/YOUR_USERNAME/digital-growth-agency.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** -> **Pages**.
3. Under **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the static distribution whenever you push to `main`.

### Option B: Manual Static Build Deployment
1. Run `pnpm build`.
2. The compiled static distribution output will be generated in the `dist/` directory.
3. Deploy the contents of `dist/` to any static web host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3).

---

## 📄 License
Commercial License - Digital Growth Agency. All rights reserved.
