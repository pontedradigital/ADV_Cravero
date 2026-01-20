import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded transition-all duration-300 font-sans font-semibold text-sm tracking-wider uppercase disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-dark-900 hover:brightness-110 active:scale-[0.98]",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900 active:scale-[0.98]",
    text: "text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};