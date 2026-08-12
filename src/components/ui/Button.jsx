import React from 'react';

/**
 * Reusable Button Component
 * Supports primary, secondary, outline, teal variants and sm/md/lg sizes.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon = null,
  href = null,
  ariaLabel = undefined,
  ...props
}) => {
  const baseClasses = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={baseClasses} aria-label={ariaLabel} {...props}>
        {Icon && <Icon size={18} aria-hidden="true" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {Icon && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
};
