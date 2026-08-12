import React from 'react';
import { Card } from '../ui/Card';
import { ShieldCheck } from 'lucide-react';

export const TestimonialCard = ({ quote, authorRole, companyType, verifiedResult }) => {
  return (
    <Card className="flex flex-col justify-between" style={{ height: '100%' }}>
      <div>
        <div className="flex items-center gap-xs" style={{ marginBottom: 'var(--space-md)', color: 'var(--color-brand-teal)' }}>
          <ShieldCheck size={18} />
          <span className="text-xs" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Verified Growth Executive</span>
        </div>

        <p className="text-sm" style={{ fontStyle: 'italic', marginBottom: 'var(--space-md)', lineHeight: 1.6 }}>
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>{authorRole}</div>
        <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{companyType}</div>
        <div style={{ marginTop: '4px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-brand-primary)' }}>
          Outcome: {verifiedResult}
        </div>
      </div>
    </Card>
  );
};
