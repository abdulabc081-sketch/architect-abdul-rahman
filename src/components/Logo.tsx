import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-12' }) => {
  return (
    <div className={`select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Abdul Rahman Azhar logo"
        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};
