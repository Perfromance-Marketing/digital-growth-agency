import React, { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustBar } from '../components/sections/TrustBar';
import { ServiceCards } from '../components/sections/ServiceCards';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { RoiCalculator } from '../components/sections/RoiCalculator';
import { CaseStudyCard } from '../components/sections/CaseStudyCard';
import { TestimonialCard } from '../components/sections/TestimonialCard';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Modal } from '../components/ui/Modal';
import { AuditTool } from '../components/sections/AuditTool';
import { caseStudiesData } from '../data/caseStudiesData';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const HomePage = ({ onNavigate, onSelectService }) => {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="Performance Marketing & Technical SEO Agency"
        description="Data-backed SEO, PPC advertising, and conversion rate optimization for enterprise brands and B2B scaleups."
        canonicalPath="/"
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onNavigate={onNavigate}
          onOpenAuditModal={() => setAuditModalOpen(true)}
        />

        {/* 2. Trust Credentials & Verified Benchmarks Bar */}
        <TrustBar />

        {/* 3. Core Services Grid */}
        <ServiceCards
          onNavigate={onNavigate}
          onSelectService={onSelectService}
        />

        {/* 4. 4-Stage Methodology */}
        <ProcessSteps />

        {/* 5. Interactive ROI & Budget Growth Calculator */}
        <RoiCalculator
          onOpenAuditModal={() => setAuditModalOpen(true)}
        />

        {/* 6. Case Studies Showcase */}
        <section className="section bg-gradient-subtle" id="work">
          <div className="container">
            <div className="section-header">
              <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Quantifiable Proof</span>
              <h2>Verified Client Growth Results</h2>
              <p className="text-lead">
                Explore how our technical search and CRO frameworks systematically scale customer acquisition.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
              {caseStudiesData.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} onNavigate={onNavigate} />
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Button variant="outline" icon={ArrowRight} onClick={() => onNavigate('/case-studies')}>
                View All Case Studies & Detailed Metrics
              </Button>
            </div>
          </div>
        </section>

        {/* 7. E-E-A-T & Executive Reviews */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="badge badge-teal" style={{ marginBottom: 'var(--space-sm)' }}>Executive Feedback</span>
              <h2>Trusted by Marketing Leaders</h2>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-lg)' }}>
              <TestimonialCard
                quote="Digital Growth Agency replaced subjective marketing guesses with rigorous technical search optimization. Our organic leads doubled within 6 months."
                authorRole="VP of Marketing"
                companyType="B2B Cloud SaaS Platform"
                verifiedResult="+185% Pipeline Opportunity Growth"
              />
              <TestimonialCard
                quote="Their CRO split testing unlocked immediate conversion rate gains on our product pages. Our paid media return on ad spend tripled year-over-year."
                authorRole="Chief Growth Officer"
                companyType="D2C Apparel Brand"
                verifiedResult="3.8x Blended ROAS Achieved"
              />
              <TestimonialCard
                quote="The team's grasp of local schema and entity-based SEO helped us dominate top search positions across all 12 regional market locations."
                authorRole="Managing Partner"
                companyType="Regional Financial Consultancy"
                verifiedResult="#1 Local Map Pack Rank"
              />
            </div>
          </div>
        </section>

        {/* 8. FAQ Section */}
        <FAQSection />

        {/* 9. Final Conversion CTA & Contact Section */}
        <ContactSection />
      </main>

      {/* Audit Modal */}
      <Modal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        title="Free 30-Minute Growth Audit"
      >
        <AuditTool isModal onClose={() => setAuditModalOpen(false)} />
      </Modal>
    </>
  );
};
