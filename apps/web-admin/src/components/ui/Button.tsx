/**
 * Button Component
 * Reusable button with loading state and variants
 */

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon
}) => {
  const classNames = [
    'btn',
    `btn-${variant}`,
    fullWidth && 'btn-full'
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="spinner" />
      ) : (
        <>
          {children}
          {icon && <span className="btn-icon">{icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
