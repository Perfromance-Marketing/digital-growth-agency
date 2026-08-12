import React, { useState, useEffect } from 'react';
import './assets/styles/global.css';
import { HeaderNav } from './components/layout/HeaderNav';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { LocationsPage } from './pages/LocationsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AuditPage } from './pages/AuditPage';
import { ContactPage } from './pages/ContactPage';

// Data
import { servicesData } from './data/servicesData';
import { industriesData } from './data/industriesData';
import { locationsData } from './data/locationsData';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Resolver Logic
  const renderView = () => {
    const path = currentPath;

    // Service Detail Route: /services/:slug
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      const service = servicesData.find(s => s.slug === slug) || servicesData[0];
      return <ServiceDetailPage service={service} onNavigate={navigateTo} />;
    }

    // Services Hub Route: /services
    if (path === '/services') {
      return <ServicesHubPage onNavigate={navigateTo} />;
    }

    // Industry Detail Route: /industries/:slug
    if (path.startsWith('/industries/')) {
      const slug = path.replace('/industries/', '');
      const industry = industriesData.find(i => i.slug === slug);
      return <IndustriesPage industry={industry} onNavigate={navigateTo} />;
    }

    // Industries Hub Route: /industries
    if (path === '/industries') {
      return <IndustriesPage onNavigate={navigateTo} />;
    }

    // Location Detail Route: /locations/:slug
    if (path.startsWith('/locations/')) {
      const slug = path.replace('/locations/', '');
      const location = locationsData.find(l => l.slug === slug);
      return <LocationsPage location={location} onNavigate={navigateTo} />;
    }

    // Locations Hub Route: /locations
    if (path === '/locations') {
      return <LocationsPage onNavigate={navigateTo} />;
    }

    // Case Studies Detail Route: /case-studies/:slug
    if (path.startsWith('/case-studies/')) {
      const slug = path.replace('/case-studies/', '');
      return <CaseStudiesPage caseStudySlug={slug} onNavigate={navigateTo} />;
    }

    // Case Studies Hub Route: /case-studies
    if (path === '/case-studies') {
      return <CaseStudiesPage onNavigate={navigateTo} />;
    }

    // Blog Post Detail Route: /blog/:slug
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      return <BlogPostPage postSlug={slug} onNavigate={navigateTo} />;
    }

    // Blog Hub Route: /blog
    if (path === '/blog') {
      return <BlogPage onNavigate={navigateTo} />;
    }

    // About Page: /about
    if (path === '/about') {
      return <AboutPage onNavigate={navigateTo} />;
    }

    // Audit Page: /audit
    if (path === '/audit') {
      return <AuditPage onNavigate={navigateTo} />;
    }

    // Contact Page: /contact
    if (path === '/contact') {
      return <ContactPage onNavigate={navigateTo} />;
    }

    // Default Fallback: Homepage /
    return <HomePage onNavigate={navigateTo} onSelectService={(srv) => navigateTo(`/services/${srv.slug}`)} />;
  };

  return (
    <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderNav currentPath={currentPath} onNavigate={navigateTo} />
      <div style={{ flex: 1 }}>{renderView()}</div>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
