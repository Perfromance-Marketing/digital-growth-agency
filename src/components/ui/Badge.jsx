import React from 'react';

/**
 * Reusable Badge Component
 */
export const Badge = ({
  children,
  variant = 'brand', // brand | teal | dark
  icon: Icon = null,
  className = ''
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`.trim()}>
      {Icon && <Icon size={14} aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
};
