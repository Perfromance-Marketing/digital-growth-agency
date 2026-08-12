import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { FormInput } from '../ui/FormInput';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceNeeded: 'seo',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (import.meta.env.VITE_CONTACT_FORM_ENDPOINT) {
        await fetch(siteConfig.contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }).catch(() => {});
      }
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="section section-subtle" id="contact">
      <div className="container">
        <div className="grid grid-2" style={{ gap: 'var(--space-2xl)', alignItems: 'center' }}>
          {/* Contact Details */}
          <div>
            <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Get In Touch</span>
            <h2>Schedule a Growth Architecture Strategy Session</h2>
            <p className="text-lead" style={{ marginBottom: 'var(--space-xl)' }}>
              Discuss your expansion goals, technical SEO bottlenecks, or paid media ROI targets with a senior growth strategist.
            </p>

            <div className="flex flex-col gap-md" style={{ marginBottom: 'var(--space-xl)' }}>
              <div className="flex items-center gap-md">
                <div style={{ width: '40px', height: '40px', backgroundColor: '#EFF6FF', color: 'var(--color-brand-primary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Direct Email</div>
                  <div style={{ fontWeight: 600 }}>{siteConfig.contact.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-md">
                <div style={{ width: '40px', height: '40px', backgroundColor: '#EFF6FF', color: 'var(--color-brand-primary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Phone Consultation</div>
                  <div style={{ fontWeight: 600 }}>{siteConfig.contact.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-md">
                <div style={{ width: '40px', height: '40px', backgroundColor: '#EFF6FF', color: 'var(--color-brand-primary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Headquarters</div>
                  <div style={{ fontWeight: 600 }}>{siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card style={{ padding: 'var(--space-xl)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-lg)' }}>
                <CheckCircle2 size={48} style={{ color: '#10B981', margin: '0 auto var(--space-md)' }} />
                <h3>Strategy Request Submitted</h3>
                <p className="text-sm">
                  Thank you, <strong>{formData.name}</strong>. A growth strategist will reach out to <strong>{formData.email}</strong> within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ marginBottom: 'var(--space-md)' }}>Send Inquiry</h3>

                <FormInput
                  id="contact-name"
                  label="Full Name"
                  required
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <FormInput
                  id="contact-email"
                  label="Business Email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <FormInput
                  id="contact-company"
                  label="Company Name"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />

                <FormInput
                  id="contact-service"
                  label="Primary Service Interest"
                  type="select"
                  value={formData.serviceNeeded}
                  onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  options={[
                    { value: 'seo', label: 'Technical SEO & AEO' },
                    { value: 'ppc', label: 'Paid Search & Meta Ads' },
                    { value: 'cro', label: 'Conversion Rate Optimization' },
                    { value: 'content', label: 'Content Strategy' },
                    { value: 'full-funnel', label: 'Full Funnel Growth Retainer' }
                  ]}
                />

                <FormInput
                  id="contact-message"
                  label="Project Details & Monthly Goals"
                  type="textarea"
                  rows={3}
                  placeholder="Tell us about your current marketing channels and targets..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <Button type="submit" variant="primary" icon={Send} disabled={isSubmitting} style={{ width: '100%', marginTop: 'var(--space-md)' }}>
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
