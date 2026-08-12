import React, { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { caseStudiesData } from '../data/caseStudiesData';
import { CaseStudyCard } from '../components/sections/CaseStudyCard';
import { Button } from '../components/ui/Button';

export const CaseStudiesPage = ({ caseStudySlug = null, onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  if (caseStudySlug) {
    const singleStudy = caseStudiesData.find(cs => cs.slug === caseStudySlug) || caseStudiesData[0];
    return (
      <>
        <SEOHead
          title={`Case Study: ${singleStudy.title}`}
          description={singleStudy.challenge}
          canonicalPath={`/case-studies/${singleStudy.slug}`}
        />
        <Breadcrumbs
          items={[
            { label: 'Case Studies', path: '/case-studies' },
            { label: singleStudy.title, path: `/case-studies/${singleStudy.slug}` }
          ]}
          onNavigate={onNavigate}
        />
        <main className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>{singleStudy.industry}</span>
            <h1>{singleStudy.title}</h1>

            <div className="grid grid-3" style={{ gap: 'var(--space-md)', margin: 'var(--space-xl) 0', backgroundColor: 'var(--color-bg-surface-subtle)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)' }}>
              {singleStudy.results.map((res, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-brand-teal)' }}>{res.metric}</div>
                  <div className="text-xs" style={{ fontWeight: 600 }}>{res.label}</div>
                </div>
              ))}
            </div>

            <h2>Client Challenge</h2>
            <p className="text-lead" style={{ marginBottom: 'var(--space-xl)' }}>{singleStudy.challenge}</p>

            <h2>Growth Strategy & Execution</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>{singleStudy.solution}</p>

            <Button variant="primary" size="lg" onClick={() => onNavigate('/audit')}>
              Achieve Similar Results for Your Brand
            </Button>
          </div>
        </main>
      </>
    );
  }

  const filteredStudies = activeFilter === 'all'
    ? caseStudiesData
    : caseStudiesData.filter(cs => cs.industrySlug === activeFilter);

  return (
    <>
      <SEOHead
        title="Verified Client Case Studies & Growth Benchmarks"
        description="Real-world case studies demonstrating attributable pipeline revenue and ROAS expansion."
        canonicalPath="/case-studies"
      />
      <Breadcrumbs items={[{ label: 'Case Studies', path: '/case-studies' }]} onNavigate={onNavigate} />

      <main className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Proven Execution</span>
            <h2>Client Case Studies & Verified Results</h2>
            <p className="text-lead">
              Transparent, metric-driven breakdowns of how our growth architecture drives enterprise revenue.
            </p>
          </div>

          {/* Industry Filter Tabs */}
          <div className="flex justify-center gap-xs flex-wrap" style={{ marginBottom: 'var(--space-xl)' }}>
            <Button
              variant={activeFilter === 'all' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('all')}
            >
              All Industries
            </Button>
            <Button
              variant={activeFilter === 'b2b-saas' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('b2b-saas')}
            >
              B2B SaaS
            </Button>
            <Button
              variant={activeFilter === 'e-commerce' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('e-commerce')}
            >
              E-Commerce
            </Button>
            <Button
              variant={activeFilter === 'professional-services' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('professional-services')}
            >
              Professional Services
            </Button>
          </div>

          <div className="grid grid-3" style={{ gap: 'var(--space-lg)' }}>
            {filteredStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
