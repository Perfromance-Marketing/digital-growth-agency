import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { servicesData } from '../data/servicesData';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';

export const ServicesHubPage = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Digital Marketing Services Hub"
        description="Comprehensive enterprise SEO, paid performance advertising, CRO, and technical web development capabilities."
        canonicalPath="/services"
      />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }]} onNavigate={onNavigate} />

      <main className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Service Catalog</span>
            <h2>Performance Growth Architecture Services</h2>
            <p className="text-lead">
              Our core verticals are engineered to lower Customer Acquisition Costs (CAC) while capturing organic search authority.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
            {servicesData.map((service) => (
              <Card key={service.id} className="flex flex-col justify-between">
                <div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>{service.title}</h3>
                  <p className="text-sm" style={{ marginBottom: 'var(--space-md)' }}>{service.description}</p>

                  <div style={{ backgroundColor: 'var(--color-bg-surface-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-md)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-brand-teal)' }}>
                    &bull; Key Metric: {service.keyMetrics}
                  </div>

                  <h4 style={{ fontSize: '0.95rem', marginBottom: 'var(--space-xs)' }}>Core Deliverables:</h4>
                  <ul style={{ marginBottom: 'var(--space-lg)' }}>
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-xs" style={{ marginBottom: '6px' }}>
                        <Check size={16} style={{ color: 'var(--color-brand-primary)', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="primary"
                  icon={ArrowRight}
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                >
                  Explore {service.title} Strategy
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
