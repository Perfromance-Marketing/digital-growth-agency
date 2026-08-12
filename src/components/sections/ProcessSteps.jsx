import React from 'react';
import { Card } from '../ui/Card';

export const ProcessSteps = () => {
  const steps = [
    {
      num: "01",
      title: "Diagnostic & Technical Audit",
      desc: "We perform a baseline quantitative audit across your technical SEO graph, ad spend efficiency, conversion drop-off points, and Core Web Vitals performance."
    },
    {
      num: "02",
      title: "Growth Architecture Roadmap",
      desc: "We build a 90-day execution roadmap mapping topic clusters, paid search match structures, CRO hypothesis split tests, and custom schema markups."
    },
    {
      num: "03",
      title: "Sprint Execution & Testing",
      desc: "Our senior growth team deploys campaigns, optimizes technical schemas, publishes E-E-A-T articles, and monitors real-time conversion API data."
    },
    {
      num: "04",
      title: "Attribution & Scaled Growth",
      desc: "We deliver bi-weekly executive reporting with full pipeline attribution, reallocating budgets to winning channels to compound annual ARR growth."
    }
  ];

  return (
    <section className="section section-subtle">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Methodology</span>
          <h2>The 4-Stage Growth Architecture</h2>
          <p className="text-lead">
            A structured, repeatable methodology designed to systematically lower CAC while scaling organic search dominance and paid media ROAS.
          </p>
        </div>

        <div className="grid grid-4" style={{ gap: 'var(--space-md)' }}>
          {steps.map((step, idx) => (
            <Card key={idx} className="flex flex-col justify-between" style={{ position: 'relative' }}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--color-brand-primary)',
                    marginBottom: 'var(--space-sm)',
                    opacity: 0.9
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-xs)' }}>{step.title}</h3>
                <p className="text-sm">{step.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
