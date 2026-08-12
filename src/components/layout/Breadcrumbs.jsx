import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { generateBreadcrumbSchema } from '../../utils/seoUtils';

export const Breadcrumbs = ({ items = [], onNavigate }) => {
  const allItems = [{ label: 'Home', path: '/' }, ...items];

  return (
    <>
      <SchemaMarkup schemaData={generateBreadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="container" style={{ paddingTop: 'var(--space-md)', paddingBottom: 'var(--space-xs)' }}>
        <ol style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)', listStyle: 'none' }}>
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                {idx > 0 && <ChevronRight size={14} style={{ margin: '0 4px', color: 'var(--color-text-muted)' }} aria-hidden="true" />}
                {isLast ? (
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.path}
                    onClick={(e) => {
                      if (e) e.preventDefault();
                      if (onNavigate) onNavigate(item.path);
                    }}
                    style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    {idx === 0 && <Home size={14} aria-hidden="true" />}
                    <span>{item.label}</span>
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
