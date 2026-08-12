import React from 'react';
import { Search, Target, TrendingUp, FileText, Code, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const iconMap = {
  Search,
  Target,
  TrendingUp,
  FileText,
  Code
};

export const ServiceCards = ({ onNavigate, onSelectService }) => {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Specialized Capabilities</span>
          <h2>Enterprise Growth Services Engine</h2>
          <p className="text-lead">
            Every service is engineered around technical precision, data integrity, and conversion optimization to drive enterprise ARR growth.
          </p>
        </div>

        <div className="grid grid-3" style={{ gap: 'var(--space-lg)' }}>
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Search;
            return (
              <Card key={service.id} variant="interactive" className="flex flex-col justify-between">
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'var(--color-bg-surface-subtle)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-brand-primary)',
                      marginBottom: 'var(--space-md)'
                    }}
                  >
                    <IconComponent size={24} aria-hidden="true" />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-sm)' }}>{service.title}</h3>
                  <p className="text-sm" style={{ marginBottom: 'var(--space-md)' }}>{service.shortDesc}</p>

                  <div style={{ backgroundColor: 'var(--color-bg-surface-subtle)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-brand-teal)', marginBottom: 'var(--space-md)' }}>
                    &bull; {service.keyMetrics}
                  </div>

                  <ul style={{ marginBottom: 'var(--space-lg)' }}>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs flex items-center gap-xs" style={{ marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                        <Check size={14} style={{ color: 'var(--color-brand-primary)', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Button
                    variant="outline"
                    size="sm"
                    icon={ArrowRight}
                    onClick={() => {
                      if (onSelectService) onSelectService(service);
                      else if (onNavigate) onNavigate(`/services/${service.slug}`);
                    }}
                    style={{ width: '100%' }}
                  >
                    View Deliverables
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
