import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { industriesData } from '../data/industriesData';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';

export const IndustriesPage = ({ industry = null, onNavigate }) => {
  if (industry) {
    return (
      <>
        <SEOHead
          title={`Digital Marketing for ${industry.title}`}
          description={industry.subtitle}
          canonicalPath={`/industries/${industry.slug}`}
        />
        <Breadcrumbs
          items={[
            { label: 'Industries', path: '/industries' },
            { label: industry.title, path: `/industries/${industry.slug}` }
          ]}
          onNavigate={onNavigate}
        />
        <main className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Industry Vertical</span>
            <h1>{industry.title}</h1>
            <p className="text-lead" style={{ marginBottom: 'var(--space-xl)' }}>{industry.subtitle}</p>
            <p style={{ marginBottom: 'var(--space-xl)' }}>{industry.description}</p>

            <Card style={{ marginBottom: 'var(--space-xl)', padding: 'var(--space-xl)' }}>
              <h3>Primary Growth Focus Areas</h3>
              <ul style={{ marginTop: 'var(--space-md)' }}>
                {industry.primaryFocus.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-sm" style={{ marginBottom: '8px' }}>
                    <Check size={18} style={{ color: 'var(--color-brand-primary)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Button variant="teal" size="lg" icon={ArrowRight} onClick={() => onNavigate('/audit')}>
              Request {industry.title} Growth Audit
            </Button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Industry Vertical Marketing Solutions"
        description="Tailored performance marketing for B2B SaaS, E-Commerce, Professional Services, and Healthcare."
        canonicalPath="/industries"
      />
      <Breadcrumbs items={[{ label: 'Industries', path: '/industries' }]} onNavigate={onNavigate} />

      <main className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Targeted Solutions</span>
            <h2>Industry Vertical Specializations</h2>
            <p className="text-lead">
              Custom acquisition models engineered specifically for your market dynamics.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
            {industriesData.map((ind) => (
              <Card key={ind.id} className="flex flex-col justify-between">
                <div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>{ind.title}</h3>
                  <p className="text-sm" style={{ marginBottom: 'var(--space-md)' }}>{ind.subtitle}</p>
                  <p className="text-xs" style={{ marginBottom: 'var(--space-md)' }}>{ind.description}</p>
                </div>
                <Button
                  variant="outline"
                  icon={ArrowRight}
                  onClick={() => onNavigate(`/industries/${ind.slug}`)}
                >
                  View {ind.title} Framework
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
