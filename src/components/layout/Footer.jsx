import React, { useState } from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Globe, Share2, ExternalLink, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { generateOrganizationSchema } from '../../utils/seoUtils';

export const Footer = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleLinkClick = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate(path);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="section-dark" style={{ borderTop: '1px solid var(--color-border-dark)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-xl)' }}>
      <SchemaMarkup schemaData={generateOrganizationSchema()} />
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: 'var(--space-2xl)' }}>
          {/* Column 1: Agency Brand & E-E-A-T Badges */}
          <div>
            <div className="flex items-center gap-sm" style={{ marginBottom: 'var(--space-md)' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--color-brand-primary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                <ShieldCheck size={20} aria-hidden="true" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', color: '#FFF' }}>
                {siteConfig.agencyName}
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-text-inverse-muted)', marginBottom: 'var(--space-md)' }}>
              {siteConfig.agencyShortDesc}
            </p>
            <div className="flex gap-sm">
              {siteConfig.credentials.certifications.slice(0, 2).map((cert, idx) => (
                <span key={idx} className="badge badge-dark" style={{ fontSize: '0.65rem' }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Core Services Architecture */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', marginBottom: 'var(--space-md)' }}>Services Hub</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              <li><a href="/services/seo" onClick={(e) => handleLinkClick('/services/seo', e)} style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9rem' }}>Enterprise Technical SEO</a></li>
              <li><a href="/services/ppc" onClick={(e) => handleLinkClick('/services/ppc', e)} style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9rem' }}>High-ROAS PPC Advertising</a></li>
              <li><a href="/services/cro" onClick={(e) => handleLinkClick('/services/cro', e)} style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9rem' }}>Conversion Rate Optimization</a></li>
              <li><a href="/services/content-strategy" onClick={(e) => handleLinkClick('/services/content-strategy', e)} style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9rem' }}>Content Strategy & E-E-A-T</a></li>
              <li><a href="/services/web-development" onClick={(e) => handleLinkClick('/services/web-development', e)} style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9rem' }}>Performance Web Development</a></li>
            </ul>
          </div>

          {/* Column 3: Industry & Location SEO Expansion */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', marginBottom: 'var(--space-md)' }}>Industry & Local SEO</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              <li><a href="/industries/b2b-saas" onClick={(e) => handleLinkClick('/industries/b2b-saas', e)} style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9rem' }}>B2B SaaS Growth</a></li>
              <li><a href="/industries/e-commerce" onClick={(e) => handleLinkClick('/industries/e-commerce', e)} style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9rem' }}>E-Commerce & D2C</a></li>
              <li><a href="/locations/chicago" onClick={(e) => handleLinkClick('/locations/chicago', e)} style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9rem' }}>Chicago SEO Agency</a></li>
              <li><a href="/locations/new-york" onClick={(e) => handleLinkClick('/locations/new-york', e)} style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9rem' }}>New York Marketing Hub</a></li>
              <li><a href="/case-studies" onClick={(e) => handleLinkClick('/case-studies', e)} style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9rem' }}>Verified Case Studies</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Growth Insights Newsletter */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', marginBottom: 'var(--space-md)' }}>Performance Insights</h4>
            <p className="text-sm" style={{ color: 'var(--color-text-inverse-muted)', marginBottom: 'var(--space-sm)' }}>
              Subscribe to our bi-weekly search architecture & CRO newsletter.
            </p>
            {newsletterSubmitted ? (
              <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                Thank you! You are subscribed to growth insights.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '4px' }}>
                <input
                  type="email"
                  placeholder="Enter business email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'var(--color-bg-dark-surface)',
                    border: '1px solid var(--color-border-dark)',
                    color: '#FFF',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    flex: 1
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--color-brand-primary)',
                    color: '#FFF',
                    padding: '0.5rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}

            <div style={{ marginTop: 'var(--space-md)', fontSize: '0.85rem', color: 'var(--color-text-inverse-muted)' }}>
              <div className="flex items-center gap-xs" style={{ marginBottom: '4px' }}>
                <Mail size={14} /> <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-xs">
                <Phone size={14} /> <span>{siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--color-border-dark)', paddingTop: 'var(--space-lg)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-md)', fontSize: '0.85rem', color: 'var(--color-text-inverse-muted)' }}>
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.agencyName}. All rights reserved. Built for performance & static GitHub Pages hosting.
          </div>
          <div className="flex gap-md">
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Globe size={18} /></a>
            <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Share2 size={18} /></a>
            <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><ExternalLink size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
