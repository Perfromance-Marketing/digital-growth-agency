import React from 'react';

/**
 * Component to inject valid JSON-LD structured data script tags into HTML output.
 */
export const SchemaMarkup = ({ schemaData }) => {
  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
