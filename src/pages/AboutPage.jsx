import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { siteConfig } from '../config/siteConfig';
import { Card } from '../components/ui/Card';
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';

export const AboutPage = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title={`About Us | ${siteConfig.agencyName}`}
        description="Learn about our technical search architecture team, operating values, and data-driven growth principles."
        canonicalPath="/about"
      />
      <Breadcrumbs items={[{ label: 'About Us', path: '/about' }]} onNavigate={onNavigate} />

      <main>
        <section className="section bg-gradient-subtle">
          <div className="container" style={{ maxWidth: '900px' }}>
            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Agency Philosophy</span>
            <h1>Engineering Revenue Growth Through Technical Precision</h1>
            <p className="text-lead">
              Founded in {siteConfig.credentials.foundedYear}, {siteConfig.agencyName} was established to replace subjective marketing promises with empirical search engineering, first-party data analytics, and conversion rate optimization.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Our Operating Principles</h2>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-lg)' }}>
              <Card>
                <div style={{ color: 'var(--color-brand-primary)', marginBottom: 'var(--space-sm)' }}>
                  <ShieldCheck size={28} />
                </div>
                <h3>1. Attributable Revenue Focus</h3>
                <p className="text-sm">We judge marketing success by ARR growth, CAC reduction, and verified ROAS — never by vanity impression metrics.</p>
              </Card>

              <Card>
                <div style={{ color: 'var(--color-brand-teal)', marginBottom: 'var(--space-sm)' }}>
                  <Award size={28} />
                </div>
                <h3>2. Technical Entity Search</h3>
                <p className="text-sm">We structure web assets and topic clusters for modern Answer Engine Optimization (AEO) to capture AI search citations.</p>
              </Card>

              <Card>
                <div style={{ color: 'var(--color-brand-primary)', marginBottom: 'var(--space-sm)' }}>
                  <Users size={28} />
                </div>
                <h3>3. Senior Specialist Squads</h3>
                <p className="text-sm">Clients work directly with seasoned SEO architects, PPC strategists, and CRO engineers — never junior account managers.</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
