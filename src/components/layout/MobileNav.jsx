import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../ui/Button';

export const MobileNav = ({ isOpen, navLinks, currentPath, onNavigate, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 'var(--header-height)',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--color-bg-dark)',
        zIndex: 99,
        padding: 'var(--space-lg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowY: 'auto'
      }}
    >
      <nav aria-label="Mobile Navigation">
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {navLinks.map((link, idx) => {
            const isActive = currentPath === link.path;
            return (
              <li key={idx}>
                <a
                  href={link.path}
                  onClick={(e) => onNavigate(link.path, e)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--color-brand-primary)' : '#F8FAFC',
                    display: 'block',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div style={{ marginTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <Button
          variant="teal"
          size="lg"
          icon={ArrowRight}
          onClick={(e) => onNavigate('/audit', e)}
          style={{ width: '100%' }}
        >
          Free 30-Min Audit
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={(e) => onNavigate('/contact', e)}
          style={{ width: '100%' }}
        >
          Book Consultation
        </Button>

        <div className="text-xs text-center" style={{ color: 'var(--color-text-inverse-muted)', marginTop: 'var(--space-md)' }}>
          {siteConfig.agencyName} &bull; {siteConfig.contact.phone}
        </div>
      </div>
    </div>
  );
};
