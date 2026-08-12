import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { SchemaMarkup } from '../components/seo/SchemaMarkup';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { EeatAuthorBlock } from '../components/sections/EeatAuthorBlock';
import { blogData } from '../data/blogData';
import { siteConfig } from '../config/siteConfig';

export const BlogPostPage = ({ postSlug, onNavigate }) => {
  const post = blogData.find(b => b.slug === postSlug) || blogData[0];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.publishDate,
    "dateModified": post.lastUpdated || post.publishDate,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "sameAs": post.author.linkedin
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.agencyName,
      "url": siteConfig.siteUrl
    }
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        ogType="article"
      />
      <SchemaMarkup schemaData={articleSchema} />

      <Breadcrumbs
        items={[
          { label: 'Blog', path: '/blog' },
          { label: post.title, path: `/blog/${post.slug}` }
        ]}
        onNavigate={onNavigate}
      />

      <main className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>{post.category}</span>
          <h1 style={{ marginBottom: 'var(--space-md)' }}>{post.title}</h1>

          {/* E-E-A-T Author Card */}
          <EeatAuthorBlock
            author={post.author}
            publishDate={post.publishDate}
            readTime={post.readTime}
          />

          {/* Article Body */}
          <div
            className="blog-article-content"
            style={{ fontSize: '1.05rem', lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </main>
    </>
  );
};
