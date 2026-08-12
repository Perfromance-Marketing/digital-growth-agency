import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const CaseStudyCard = ({ caseStudy, onNavigate }) => {
  return (
    <Card variant="interactive" className="flex flex-col justify-between" style={{ height: '100%' }}>
      <div>
        <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-md)' }}>
          <span className="badge badge-brand">{caseStudy.industry}</span>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>{caseStudy.timeframe}</span>
        </div>

        <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-sm)' }}>{caseStudy.title}</h3>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)', fontSize: '0.85rem' }}>
          Client: <strong>{caseStudy.clientPlaceholder}</strong>
        </p>

        {/* Quantifiable Metrics Display */}
        <div className="grid grid-3" style={{ gap: 'var(--space-xs)', marginBottom: 'var(--space-md)', backgroundColor: 'var(--color-bg-surface-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
          {caseStudy.results.map((res, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-brand-teal)' }}>
                {res.metric}
              </div>
              <div className="text-xs" style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>
                {res.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm" style={{ marginBottom: 'var(--space-md)' }}>
          {caseStudy.solution}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-xs" style={{ marginBottom: 'var(--space-md)' }}>
          {caseStudy.servicesUsed.map((srv, idx) => (
            <span key={idx} className="badge" style={{ backgroundColor: 'var(--color-bg-surface-subtle)', color: 'var(--color-text-secondary)', fontSize: '0.68rem' }}>
              {srv}
            </span>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          icon={ArrowRight}
          onClick={() => onNavigate(`/case-studies/${caseStudy.slug}`)}
          style={{ width: '100%' }}
        >
          Read Full Breakdown
        </Button>
      </div>
    </Card>
  );
};
