import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

/**
 * Accessible Modal Dialog Component
 */
export const Modal = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-md)' }}>
          <h3 id="modal-title" style={{ margin: 0 }}>{title}</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            ariaLabel="Close Modal"
            style={{ padding: '0.4rem 0.6rem' }}
          >
            <X size={20} aria-hidden="true" />
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
