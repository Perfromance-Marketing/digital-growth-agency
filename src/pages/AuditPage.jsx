import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { AuditTool } from '../components/sections/AuditTool';
import { Card } from '../components/ui/Card';

export const AuditPage = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Free 30-Minute Marketing & Technical SEO Audit"
        description="Request a comprehensive diagnostic audit evaluating your technical search graph, mobile UX, and paid media efficiency."
        canonicalPath="/audit"
      />
      <Breadcrumbs items={[{ label: 'Free Audit', path: '/audit' }]} onNavigate={onNavigate} />

      <main className="section bg-gradient-subtle">
        <div className="container" style={{ maxWidth: '800px' }}>
          <Card style={{ padding: 'var(--space-2xl)' }}>
            <AuditTool />
          </Card>
        </div>
      </main>
    </>
  );
};
