import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Send } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { FormInput } from '../ui/FormInput';
import { Button } from '../ui/Button';

export const AuditTool = ({ isModal = false, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    websiteUrl: '',
    industry: 'b2b-saas',
    primaryGoal: 'lead-generation',
    monthlyBudget: '5k-15k',
    fullName: '',
    workEmail: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1 && !formData.websiteUrl) return;
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate endpoint submission or send to siteConfig.contactEndpoint
    try {
      if (import.meta.env.VITE_CONTACT_FORM_ENDPOINT) {
        await fetch(siteConfig.contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, _subject: 'New 30-Min Audit Request' })
        }).catch(() => {}); // Graceful fallback if demo endpoint is dummy
      }
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div style={{ padding: isModal ? 0 : 'var(--space-xl) 0' }}>
      {!isModal && (
        <div className="section-header">
          <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>Diagnostic Audit</span>
          <h2>Free 30-Minute Growth Architecture Audit</h2>
          <p className="text-lead">
            Receive a custom breakdown of your technical SEO health, PPC efficiency, and landing page conversion bottlenecks.
          </p>
        </div>
      )}

      {submitted ? (
        <div style={{ textAlign: 'center', padding: 'var(--space-xl)', backgroundColor: 'var(--color-bg-surface-subtle)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: '#D1FAE5', color: '#10B981', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)' }}>
            <CheckCircle2 size={28} />
          </div>
          <h3>Audit Request Received</h3>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            Our growth team is reviewing <strong>{formData.websiteUrl || 'your website'}</strong>. We will email your audit report to <strong>{formData.workEmail}</strong> within 1 business day.
          </p>
          {onClose && <Button variant="outline" onClick={onClose}>Close Dialog</Button>}
        </div>
      ) : (
        <form onSubmit={step === 3 ? handleSubmit : handleNextStep}>
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs" style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
            <span>Step {step} of 3</span>
            <span>{step === 1 ? 'Website Info' : step === 2 ? 'Growth Goals' : 'Contact Details'}</span>
          </div>

          {/* Step 1: Website & Industry */}
          {step === 1 && (
            <div>
              <FormInput
                id="audit-url"
                label="Your Website URL"
                type="url"
                placeholder="https://yourcompany.com"
                required
                value={formData.websiteUrl}
                onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                helperText="Enter your main domain to analyze technical SEO & mobile UX."
              />

              <FormInput
                id="audit-industry"
                label="Business Vertical"
                type="select"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                options={[
                  { value: 'b2b-saas', label: 'B2B SaaS & Software' },
                  { value: 'e-commerce', label: 'E-Commerce & Retail' },
                  { value: 'professional-services', label: 'Professional Services & Legal' },
                  { value: 'healthcare', label: 'Healthcare & Medical' },
                  { value: 'other', label: 'Other Industry' }
                ]}
              />

              <Button type="submit" variant="primary" icon={ArrowRight} style={{ width: '100%', marginTop: 'var(--space-md)' }}>
                Continue to Goals
              </Button>
            </div>
          )}

          {/* Step 2: Primary Goal & Budget */}
          {step === 2 && (
            <div>
              <FormInput
                id="audit-goal"
                label="Primary Growth Objective"
                type="select"
                value={formData.primaryGoal}
                onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                options={[
                  { value: 'lead-generation', label: 'Scale Inbound Lead Generation & Pipeline' },
                  { value: 'reduce-cac', label: 'Lower Paid Search Customer Acquisition Cost (CAC)' },
                  { value: 'organic-seo', label: 'Dominant Organic Search & AEO Rankings' },
                  { value: 'cro-landing', label: 'Improve Landing Page Conversion Rates' }
                ]}
              />

              <FormInput
                id="audit-budget"
                label="Current Monthly Marketing Ad Spend"
                type="select"
                value={formData.monthlyBudget}
                onChange={(e) => handleInputChange('monthlyBudget', e.target.value)}
                options={[
                  { value: 'under-5k', label: 'Under $5,000 / month' },
                  { value: '5k-15k', label: '$5,000 - $15,000 / month' },
                  { value: '15k-50k', label: '$15,000 - $50,000 / month' },
                  { value: '50k-plus', label: '$50,000+ / month' }
                ]}
              />

              <div className="flex gap-md" style={{ marginTop: 'var(--space-md)' }}>
                <Button type="button" variant="outline" icon={ArrowLeft} onClick={() => setStep(1)} style={{ flex: 1 }}>
                  Back
                </Button>
                <Button type="submit" variant="primary" icon={ArrowRight} style={{ flex: 2 }}>
                  Continue to Contact
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info & Submission */}
          {step === 3 && (
            <div>
              <FormInput
                id="audit-name"
                label="Full Name"
                type="text"
                required
                placeholder="Jane Doe"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
              />

              <FormInput
                id="audit-email"
                label="Business Email"
                type="email"
                required
                placeholder="jane@yourcompany.com"
                value={formData.workEmail}
                onChange={(e) => handleInputChange('workEmail', e.target.value)}
              />

              <FormInput
                id="audit-phone"
                label="Phone Number (Optional)"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />

              <div className="flex gap-md" style={{ marginTop: 'var(--space-md)' }}>
                <Button type="button" variant="outline" icon={ArrowLeft} onClick={() => setStep(2)} style={{ flex: 1 }}>
                  Back
                </Button>
                <Button type="submit" variant="teal" icon={Send} disabled={isSubmitting} style={{ flex: 2 }}>
                  {isSubmitting ? 'Sending Request...' : 'Generate My Audit'}
                </Button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};
