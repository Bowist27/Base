/**
 * InputField Component
 * Reusable input with label and icon
 */

import React from 'react';

interface InputFieldProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  id: string;
  required?: boolean;
  autoComplete?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  icon,
  id,
  required = false,
  autoComplete,
  disabled = false
}) => {
  return (
    <div className="form-group">
      {label && (
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-wrapper">
        <input
          type={type}
          id={id}
          className="form-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          disabled={disabled}
        />
        {icon && <span className="input-icon">{icon}</span>}
      </div>
    </div>
  );
};

export default InputField;
