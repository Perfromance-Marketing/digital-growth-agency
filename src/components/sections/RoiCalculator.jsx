import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ArrowRight, Info } from 'lucide-react';
import { calculateMarketingRoi } from '../../utils/calculatorUtils';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const RoiCalculator = ({ onOpenAuditModal }) => {
  const [monthlySpend, setMonthlySpend] = useState(10000);
  const [convRate, setConvRate] = useState(1.5);
  const [avgDealValue, setAvgDealValue] = useState(350);

  const results = calculateMarketingRoi(monthlySpend, convRate, avgDealValue);

  return (
    <section className="section" id="roi-calculator">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-teal" style={{ marginBottom: 'var(--space-sm)' }}>Interactive Calculator</span>
          <h2>Projected Revenue Growth & ROI Calculator</h2>
          <p className="text-lead">
            Estimate your potential revenue lift by optimizing conversion rates and paid media efficiency.
          </p>
        </div>

        <div className="grid grid-2" style={{ gap: 'var(--space-xl)', alignItems: 'start' }}>
          {/* Controls Column */}
          <Card style={{ padding: 'var(--space-xl)' }}>
            <div className="flex items-center gap-xs" style={{ marginBottom: 'var(--space-lg)' }}>
              <Calculator size={20} style={{ color: 'var(--color-brand-primary)' }} />
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Growth Input Parameters</h3>
            </div>

            {/* Slider 1: Monthly Spend */}
            <div className="form-group" style={{ marginBottom: 'var(--space-lg)' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                <label className="form-label" htmlFor="spend-slider">Monthly Ad / Marketing Budget</label>
                <span style={{ fontWeight: 700, color: 'var(--color-brand-primary)' }}>
                  ${monthlySpend.toLocaleString()}
                </span>
              </div>
              <input
                id="spend-slider"
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }}
              />
              <div className="flex justify-between text-xs" style={{ color: 'var(--color-text-muted)' }}>
                <span>$1,000/mo</span>
                <span>$100,000/mo</span>
              </div>
            </div>

            {/* Slider 2: Conversion Rate */}
            <div className="form-group" style={{ marginBottom: 'var(--space-lg)' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                <label className="form-label" htmlFor="conv-slider">Current Conversion Rate</label>
                <span style={{ fontWeight: 700, color: 'var(--color-brand-primary)' }}>
                  {convRate}%
                </span>
              </div>
              <input
                id="conv-slider"
                type="range"
                min="0.2"
                max="5.0"
                step="0.1"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }}
              />
              <div className="flex justify-between text-xs" style={{ color: 'var(--color-text-muted)' }}>
                <span>0.2%</span>
                <span>5.0%</span>
              </div>
            </div>

            {/* Input 3: Average Customer Deal / Order Value */}
            <div className="form-group">
              <label className="form-label" htmlFor="deal-value-input">Average Order / Contract Value ($)</label>
              <input
                id="deal-value-input"
                type="number"
                min="10"
                max="50000"
                value={avgDealValue}
                onChange={(e) => setAvgDealValue(Number(e.target.value))}
                className="form-input"
              />
            </div>

            {/* Architecture Disclaimer */}
            <div className="flex items-center gap-xs text-xs" style={{ backgroundColor: 'var(--color-bg-surface-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
              <Info size={16} style={{ flexShrink: 0 }} />
              <span>
                <strong>Frontend Calculation Note:</strong> Computations run 100% locally in your browser based on benchmark CRO metrics (+0.85% conv lift). No backend API needed for calculations.
              </span>
            </div>
          </Card>

          {/* Results Column */}
          <Card variant="dark" style={{ padding: 'var(--space-xl)', border: '1px solid var(--color-brand-primary)' }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-lg)' }}>
              <span className="badge badge-teal">Projected Outcome</span>
              <span className="text-xs" style={{ color: 'var(--color-text-inverse-muted)' }}>Estimated Lift</span>
            </div>

            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <div className="text-xs" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-inverse-muted)', marginBottom: '4px', fontWeight: 600 }}>
                Projected Monthly Net Revenue Lift
              </div>
              <div style={{ fontSize: '2.75rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-brand-teal)' }}>
                +${results.netRevenueGrowth.toLocaleString()}
              </div>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-md)', marginBottom: 'var(--space-xl)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-dark)' }}>
              <div>
                <div className="text-xs" style={{ color: 'var(--color-text-inverse-muted)' }}>Est. Projected ROAS</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFF' }}>{results.projectedRoas}x Return</div>
              </div>

              <div>
                <div className="text-xs" style={{ color: 'var(--color-text-inverse-muted)' }}>Projected Conv. Rate</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFF' }}>{results.projectedConversionRate}%</div>
              </div>
            </div>

            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <div className="text-xs" style={{ color: 'var(--color-text-inverse-muted)', marginBottom: '6px' }}>
                Monthly Lead Volume Growth
              </div>
              <div className="flex items-center justify-between text-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
                <span>Current: <strong>{results.currentLeads} leads</strong></span>
                <ArrowRight size={16} style={{ color: 'var(--color-brand-teal)' }} />
                <span style={{ color: 'var(--color-brand-teal)' }}>Projected: <strong>{results.projectedLeads} leads</strong></span>
              </div>
            </div>

            <Button
              variant="teal"
              size="lg"
              icon={ArrowRight}
              onClick={onOpenAuditModal}
              style={{ width: '100%' }}
            >
              Get Custom Audit to Reach This Goal
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
