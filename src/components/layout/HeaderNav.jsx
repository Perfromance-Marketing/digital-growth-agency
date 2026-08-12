import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../ui/Button';
import { MobileNav } from './MobileNav';

export const HeaderNav = ({ currentPath = '/', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Locations', path: '/locations' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' }
  ];

  const handleNavClick = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--color-border-dark)',
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick('/', e)}
          className="flex items-center gap-sm"
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: 'var(--color-brand-primary)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}
          >
            <ShieldCheck size={22} aria-hidden="true" />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                display: 'block',
                lineHeight: 1
              }}
            >
              {siteConfig.agencyName}
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                color: 'var(--color-text-inverse-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600
              }}
            >
              Performance Growth
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden-mobile flex items-center gap-md"
          aria-label="Main Navigation"
          style={{ display: 'none' }}
        >
          <style>{`
            @media (min-width: 992px) {
              nav.hidden-mobile { display: flex !important; }
            }
          `}</style>
          {navLinks.map((link, idx) => {
            const isActive = currentPath === link.path || currentPath.startsWith(`${link.path}/`);
            return (
              <a
                key={idx}
                href={link.path}
                onClick={(e) => handleNavClick(link.path, e)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--color-brand-primary)' : '#E2E8F0',
                  padding: '0.4rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'color var(--transition-fast)'
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-md">
          <div className="hidden-mobile">
            <Button
              variant="teal"
              size="sm"
              icon={ArrowRight}
              onClick={() => handleNavClick('/audit')}
            >
              Free Growth Audit
            </Button>
          </div>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              color: '#FFFFFF',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Menu */}
      <MobileNav
        isOpen={mobileMenuOpen}
        navLinks={navLinks}
        currentPath={currentPath}
        onNavigate={handleNavClick}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};
