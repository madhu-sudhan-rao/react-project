import React from 'react'
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
}

function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    children,
    className = '',
    disabled,
    ...props

}: ButtonProps) {
    const classes = `btn btn-${variant} btn-${size} ${loading ? "btn-loading" : ""}  ${className}`;
  return (
    <button
        className={classes}
        disabled={disabled || loading}
        {...props}
    >
        {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button;