import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { blogData } from '../data/blogData';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const BlogPage = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Performance Growth & SEO Insights Blog"
        description="Expert analysis, Answer Engine Optimization (AEO) frameworks, and PPC CAC reduction strategies."
        canonicalPath="/blog"
      />
      <Breadcrumbs items={[{ label: 'Blog', path: '/blog' }]} onNavigate={onNavigate} />

      <main className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Knowledge Hub</span>
            <h2>Search Architecture & Growth Insights</h2>
            <p className="text-lead">
              Research-backed guides and technical strategies written by our senior search architects.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: 'var(--space-lg)' }}>
            {blogData.map((post) => (
              <Card key={post.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-md)' }}>
                    <span className="badge badge-teal">{post.category}</span>
                    <span className="text-xs flex items-center gap-xs" style={{ color: 'var(--color-text-muted)' }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-sm)' }}>{post.title}</h3>
                  <p className="text-sm" style={{ marginBottom: 'var(--space-md)' }}>{post.excerpt}</p>

                  <div className="text-xs" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                    By <strong>{post.author.name}</strong> &bull; {post.publishDate}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  icon={ArrowRight}
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                  style={{ width: '100%' }}
                >
                  Read Article
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
