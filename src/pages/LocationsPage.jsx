import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { locationsData } from '../data/locationsData';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MapPin, ArrowRight } from 'lucide-react';

export const LocationsPage = ({ location = null, onNavigate }) => {
  if (location) {
    return (
      <>
        <SEOHead
          title={`Digital Marketing Agency ${location.cityName}, ${location.stateCode}`}
          description={location.description}
          canonicalPath={`/locations/${location.slug}`}
        />
        <Breadcrumbs
          items={[
            { label: 'Locations', path: '/locations' },
            { label: `${location.cityName}, ${location.stateCode}`, path: `/locations/${location.slug}` }
          ]}
          onNavigate={onNavigate}
        />
        <main className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <span className="badge badge-teal" style={{ marginBottom: 'var(--space-sm)' }}>Local Search Hub</span>
            <h1>Digital Marketing Agency in {location.cityName}, {location.stateCode}</h1>
            <p className="text-lead" style={{ marginBottom: 'var(--space-xl)' }}>{location.description}</p>
            <Card style={{ padding: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
              <h3>Regional Strategy Overview</h3>
              <p style={{ marginTop: 'var(--space-sm)' }}>
                Our {location.cityName} growth team delivers enterprise technical SEO, local map pack optimization, and paid search campaigns engineered for the {location.regionName} market.
              </p>
            </Card>
            <Button variant="primary" size="lg" icon={ArrowRight} onClick={() => onNavigate('/contact')}>
              Contact {location.cityName} Team
            </Button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Regional Office & Local SEO Hubs"
        description="Local search engine optimization and performance marketing hubs across key business regions."
        canonicalPath="/locations"
      />
      <Breadcrumbs items={[{ label: 'Locations', path: '/locations' }]} onNavigate={onNavigate} />

      <main className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Geographic Expansion</span>
            <h2>Regional Growth Hubs & Local SEO</h2>
            <p className="text-lead">
              Dominating local search intent and map pack rankings across major enterprise metropolitan areas.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
            {locationsData.map((loc) => (
              <Card key={loc.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-xs" style={{ color: 'var(--color-brand-primary)', marginBottom: 'var(--space-xs)' }}>
                    <MapPin size={18} />
                    <span style={{ fontWeight: 700 }}>{loc.regionName}</span>
                  </div>
                  <h3>{loc.cityName}, {loc.stateCode}</h3>
                  <p className="text-sm" style={{ marginBottom: 'var(--space-md)' }}>{loc.description}</p>
                </div>
                <Button variant="outline" icon={ArrowRight} onClick={() => onNavigate(`/locations/${loc.slug}`)}>
                  View {loc.cityName} Hub
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
