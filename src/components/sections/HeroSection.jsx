import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, BarChart3, TrendingUp } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const HeroSection = ({ onNavigate, onOpenAuditModal }) => {
  return (
    <section className="section bg-gradient-subtle" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-3xl)' }}>
      <div className="container">
        <div className="grid grid-2 items-center" style={{ gap: 'var(--space-2xl)' }}>
          {/* Left Hero Content */}
          <div>
            <Badge variant="brand" icon={ShieldCheck} className="margin-bottom-md" style={{ marginBottom: 'var(--space-md)' }}>
              Data-Driven Growth Engineering
            </Badge>

            <h1 style={{ marginBottom: 'var(--space-md)' }}>
              Scale Revenue Predictably with Performance Marketing & Technical SEO
            </h1>

            <p className="text-lead" style={{ marginBottom: 'var(--space-xl)' }}>
              {siteConfig.agencyShortDesc}
            </p>

            {/* Value Highlights */}
            <div className="flex flex-col gap-sm" style={{ marginBottom: 'var(--space-xl)' }}>
              <div className="flex items-center gap-sm">
                <CheckCircle2 size={18} style={{ color: 'var(--color-brand-primary)' }} />
                <span className="text-sm" style={{ fontWeight: 600 }}>Zero vanity metrics — focused strictly on CAC, ROAS, and ARR</span>
              </div>
              <div className="flex items-center gap-sm">
                <CheckCircle2 size={18} style={{ color: 'var(--color-brand-primary)' }} />
                <span className="text-sm" style={{ fontWeight: 600 }}>Technical Answer Engine Optimization (AEO) for AI search engine dominance</span>
              </div>
              <div className="flex items-center gap-sm">
                <CheckCircle2 size={18} style={{ color: 'var(--color-brand-primary)' }} />
                <span className="text-sm" style={{ fontWeight: 600 }}>100% transparent executive reporting & dedicated senior growth squad</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-md">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => {
                  if (onOpenAuditModal) onOpenAuditModal();
                  else if (onNavigate) onNavigate('/audit');
                }}
              >
                Free 30-Min Growth Audit
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('/case-studies')}
              >
                Explore Case Studies
              </Button>
            </div>
          </div>

          {/* Right Hero Graphic - Corporate Performance Card Stack */}
          <div>
            <div
              className="card"
              style={{
                padding: 'var(--space-xl)',
                backgroundColor: '#FFFFFF',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--color-border)',
                position: 'relative'
              }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-md)' }}>
                <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>Live Growth Simulation</span>
                <span className="text-xs" style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Verified Benchmark</span>
              </div>

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                  Attributable Pipeline Growth
                </div>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-brand-navy)' }}>
                  +148.4%
                </div>
              </div>

              {/* Metric Breakdown Grid */}
              <div className="grid grid-2" style={{ gap: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)' }}>
                <div>
                  <div className="flex items-center gap-xs" style={{ color: 'var(--color-brand-primary)', marginBottom: '2px' }}>
                    <TrendingUp size={16} /> <span className="text-xs" style={{ fontWeight: 700 }}>ROAS Lift</span>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>3.4x Avg</div>
                </div>

                <div>
                  <div className="flex items-center gap-xs" style={{ color: 'var(--color-brand-teal)', marginBottom: '2px' }}>
                    <BarChart3 size={16} /> <span className="text-xs" style={{ fontWeight: 700 }}>CAC Shift</span>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>-32.8% Lower</div>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-md)', backgroundColor: 'var(--color-bg-surface-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                &ldquo;Digital Growth Agency replaced guesswork with technical rigor, reducing our customer acquisition costs within 90 days.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
