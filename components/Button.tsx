import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 font-bold transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-widest flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#FF3E24] text-white hover:bg-[#D92D16] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 rounded-none",
    secondary: "bg-[#1A0C2F] text-white hover:bg-[#2D1B4E] shadow-xl hover:shadow-2xl rounded-none",
    outline: "bg-transparent border-2 border-[#1A0C2F] text-[#1A0C2F] hover:bg-[#1A0C2F] hover:text-white rounded-none"
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