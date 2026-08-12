import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ContactSection } from '../components/sections/ContactSection';

export const ContactPage = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="Contact Growth Architecture Strategy Team"
        description="Schedule a consultation with our senior digital marketing architects."
        canonicalPath="/contact"
      />
      <Breadcrumbs items={[{ label: 'Contact', path: '/contact' }]} onNavigate={onNavigate} />

      <main>
        <ContactSection />
      </main>
    </>
  );
};
