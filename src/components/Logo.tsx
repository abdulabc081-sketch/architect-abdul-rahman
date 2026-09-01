import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-12', isDark = true }) => {
  const stroke = isDark ? '#D7C6A6' : '#A77D48';

  return (
    <div className={`select-none ${className}`}>
      <svg
        viewBox="0 0 520 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        aria-label="Abdul Rahman Azhar logo"
      >
        <path
          d="M87 330L245 72L404 330"
          stroke={stroke}
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M160 248H332"
          stroke={stroke}
          strokeWidth="18"
          strokeLinecap="round"
        />

        <path
          d="M350 120V330"
          stroke={stroke}
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M350 120C424 120 474 158 474 218C474 278 430 316 364 316H350"
          stroke={stroke}
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M350 316L470 330"
          stroke={stroke}
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
