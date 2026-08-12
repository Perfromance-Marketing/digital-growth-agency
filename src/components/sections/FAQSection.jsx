import React from 'react';
import { faqData } from '../../data/faqData';
import { Accordion } from '../ui/Accordion';
import { SchemaMarkup } from '../seo/SchemaMarkup';
import { generateFaqSchema } from '../../utils/seoUtils';

export const FAQSection = ({ customFaqs = null, title = "Frequently Asked Questions" }) => {
  const faqsToDisplay = customFaqs || faqData;

  return (
    <section className="section" id="faq">
      <SchemaMarkup schemaData={generateFaqSchema(faqsToDisplay)} />
      <div className="container" style={{ maxWidth: '840px' }}>
        <div className="section-header">
          <span className="badge badge-brand" style={{ marginBottom: 'var(--space-sm)' }}>AEO Answers & Objections</span>
          <h2>{title}</h2>
          <p className="text-lead">
            Direct, transparent answers regarding agency contracts, technology stack, and performance metrics.
          </p>
        </div>

        <Accordion items={faqsToDisplay} />
      </div>
    </section>
  );
};
