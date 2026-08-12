import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Accessible Accordion Component for FAQs
 */
export const AccordionItem = ({ title, children, defaultOpen = false, id }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = `accordion-content-${id}`;
  const triggerId = `accordion-trigger-${id}`;

  return (
    <div className="accordion-item">
      <button
        id={triggerId}
        type="button"
        className="accordion-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{title}</span>
        <ChevronDown
          size={20}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform var(--transition-fast)'
          }}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div id={contentId} role="region" aria-labelledby={triggerId} className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion = ({ items = [] }) => {
  return (
    <div className="accordion">
      {items.map((item, idx) => (
        <AccordionItem key={idx} id={idx} title={item.question || item.title}>
          <p>{item.answer || item.content}</p>
        </AccordionItem>
      ))}
    </div>
  );
};
