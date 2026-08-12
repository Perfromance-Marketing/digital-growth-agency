import React from 'react';
import { UserCheck, Globe } from 'lucide-react';
import { Card } from '../ui/Card';

export const EeatAuthorBlock = ({ author, publishDate, readTime }) => {
  if (!author) return null;

  return (
    <Card style={{ backgroundColor: 'var(--color-bg-surface-subtle)', marginBottom: 'var(--space-xl)', borderLeft: '4px solid var(--color-brand-primary)' }}>
      <div className="flex items-center gap-md">
        <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-brand-navy)', borderRadius: 'var(--radius-full)', display: 'flex', itemsAlign: 'center', justifyContent: 'center', color: '#FFF', flexShrink: 0 }}>
          <UserCheck size={24} aria-hidden="true" />
        </div>

        <div style={{ flex: 1 }}>
          <div className="flex items-center justify-between flex-wrap gap-xs">
            <h4 style={{ margin: 0, fontSize: '1.05rem' }}>{author.name}</h4>
            <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              Published {publishDate} &bull; {readTime}
            </div>
          </div>

          <div className="text-xs" style={{ color: 'var(--color-brand-primary)', fontWeight: 600, marginBottom: '4px' }}>
            {author.role}
          </div>

          <p className="text-xs" style={{ margin: 0 }}>
            {author.bio}
          </p>
        </div>
      </div>
    </Card>
  );
};
