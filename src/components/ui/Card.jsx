import React from 'react';

/**
 * Reusable Surface Card Component
 */
export const Card = ({
  children,
  variant = 'default', // default | dark | interactive
  className = '',
  onClick,
  ...props
}) => {
  const isDark = variant === 'dark';
  const isInteractive = variant === 'interactive' || Boolean(onClick);

  const classes = `card ${isDark ? 'card-dark' : ''} ${isInteractive ? 'card-interactive' : ''} ${className}`.trim();

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
};
