import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-8', isDark = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Architectural Geometric Monogram AR */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        {/* Geometric Architectural AR icon based on reference */}
        {/* Outer A frame */}
        <path
          d="M6 40L22 8L30 24"
          stroke={isDark ? '#C5A880' : '#9E7D4E'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* A Crossbar */}
        <path
          d="M13 28H28"
          stroke={isDark ? '#C5A880' : '#9E7D4E'}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* R Loop and diagonal stem */}
        <path
          d="M30 16H38C41.3137 16 44 18.6863 44 22C44 25.3137 41.3137 28 38 28H30V40"
          stroke={isDark ? '#C5A880' : '#9E7D4E'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37 28L44 40"
          stroke={isDark ? '#C5A880' : '#9E7D4E'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex flex-col text-left leading-tight">
        <span
          className={`font-cormorant font-bold tracking-[0.2em] text-[15px] sm:text-[16px] uppercase ${
            isDark ? 'text-neutral-100' : 'text-neutral-900'
          }`}
        >
          ABDUL RAHMAN AZHAR
        </span>
        <span
          className={`font-manrope text-[9px] sm:text-[10px] tracking-[0.35em] font-semibold uppercase ${
            isDark ? 'text-[#C5A880]' : 'text-[#9E7D4E]'
          }`}
        >
          ARCHITECTURAL
        </span>
      </div>
    </div>
  );
};
