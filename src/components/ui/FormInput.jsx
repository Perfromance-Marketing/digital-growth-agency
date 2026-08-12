import React from 'react';

/**
 * Accessible Form Control Component
 */
export const FormInput = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error = null,
  helperText = null,
  options = null, // For select dropdowns
  rows = 4, // For textareas
  className = ''
}) => {
  const isSelect = type === 'select';
  const isTextarea = type === 'textarea';

  return (
    <div className={`form-group ${className}`.trim()}>
      <label htmlFor={id} className="form-label">
        {label} {required && <span style={{ color: 'var(--color-error)' }}>*</span>}
      </label>

      {isSelect ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className="form-select"
          aria-invalid={Boolean(error)}
        >
          {options?.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : isTextarea ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="form-textarea"
          aria-invalid={Boolean(error)}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="form-input"
          aria-invalid={Boolean(error)}
        />
      )}

      {helperText && !error && (
        <span className="text-xs" style={{ color: 'var(--color-text-muted)', marginTop: '4px' }}>
          {helperText}
        </span>
      )}
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};
