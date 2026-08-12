import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export const TrustBar = () => {
  return (
    <section style={{ backgroundColor: 'var(--color-bg-dark)', color: '#FFF', padding: 'var(--space-xl) 0', borderTop: '1px solid var(--color-border-dark)', borderBottom: '1px solid var(--color-border-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-md)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-inverse-muted)', fontWeight: 600 }}>
          Verified Credentials & Performance Benchmarks
        </div>

        <div className="grid grid-4" style={{ gap: 'var(--space-md)', textAlign: 'center' }}>
          {siteConfig.credentials.verifiedMetrics.map((item, idx) => (
            <div key={idx} style={{ padding: 'var(--space-md)', backgroundColor: 'var(--color-bg-dark-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-dark)' }}>
              <div style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-brand-teal)' }}>
                {item.value}
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFF', marginTop: '2px' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-inverse-muted)', marginTop: '4px' }}>
                {item.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-md" style={{ marginTop: 'var(--space-lg)' }}>
          {siteConfig.credentials.certifications.map((cert, idx) => (
            <span key={idx} className="badge badge-dark" style={{ fontSize: '0.75rem' }}>
              &check; {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
