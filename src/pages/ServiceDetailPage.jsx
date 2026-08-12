import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { SchemaMarkup } from '../components/seo/SchemaMarkup';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { generateServiceSchema } from '../utils/seoUtils';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ServiceDetailPage = ({ service, onNavigate }) => {
  if (!service) return null;

  return (
    <>
      <SEOHead
        title={`${service.title} Strategy & Implementation`}
        description={service.shortDesc}
        canonicalPath={`/services/${service.slug}`}
      />
      <SchemaMarkup schemaData={generateServiceSchema(service)} />

      <Breadcrumbs
        items={[
          { label: 'Services', path: '/services' },
          { label: service.title, path: `/services/${service.slug}` }
        ]}
        onNavigate={onNavigate}
      />

      <main>
        {/* Service Hero */}
        <section className="section bg-gradient-subtle">
          <div className="container" style={{ maxWidth: '900px' }}>
            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Specialized Capability</span>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>{service.title}</h1>
            <p className="text-lead" style={{ marginBottom: 'var(--space-lg)' }}>
              {service.description}
            </p>

            <div className="flex items-center gap-md">
              <Button variant="teal" size="lg" icon={ArrowRight} onClick={() => onNavigate('/audit')}>
                Request {service.title} Audit
              </Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate('/contact')}>
                Speak with a Strategist
              </Button>
            </div>
          </div>
        </section>

        {/* Deliverables Breakdown */}
        <section className="section">
          <div className="container">
            <div className="section-header text-left">
              <h2>Key Deliverables & Execution Blueprint</h2>
              <p className="text-lead">What your team receives when engaging our {service.title} growth sprint.</p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-lg)' }}>
              {service.deliverables.map((item, idx) => (
                <Card key={idx} className="flex items-center gap-md">
                  <CheckCircle2 size={24} style={{ color: 'var(--color-brand-primary)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.05rem' }}>{item}</h4>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Execution Process Timeline */}
        <section className="section section-subtle">
          <div className="container">
            <div className="section-header">
              <h2>The 4-Step {service.title} Process</h2>
            </div>

            <div className="grid grid-4" style={{ gap: 'var(--space-md)' }}>
              {service.process.map((p, idx) => (
                <Card key={idx}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-brand-teal)', marginBottom: 'var(--space-xs)' }}>
                    {p.step}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: 'var(--space-xs)' }}>{p.title}</h4>
                  <p className="text-xs">{p.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="section">
            <div className="container" style={{ maxWidth: '840px' }}>
              <div className="section-header">
                <h2>{service.title} FAQs</h2>
              </div>
              <Accordion items={service.faqs} />
            </div>
          </section>
        )}
      </main>
    </>
  );
};
