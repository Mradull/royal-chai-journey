import { FC } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Decorative Crown Element */}
      <svg 
        viewBox="0 0 80 40" 
        className="w-20 h-10 text-accent mb-2"
        fill="currentColor"
      >
        <path d="M40 0L45 15H55L47 24L50 40H40L30 40L33 24L25 15H35L40 0Z" />
        <circle cx="20" cy="20" r="4" />
        <circle cx="60" cy="20" r="4" />
        <path d="M10 25L15 15L20 20" strokeWidth="2" stroke="currentColor" fill="none" />
        <path d="M70 25L65 15L60 20" strokeWidth="2" stroke="currentColor" fill="none" />
      </svg>
      
      {/* Brand Name */}
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-wide text-foreground">
        CHAI <span className="text-gold-gradient">CULTURE</span>
      </h1>
      
      {/* Decorative Line */}
      <div className="flex items-center gap-3 mt-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
        <span className="text-accent text-sm">✦</span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
      </div>
    </div>
  );
};

export default Logo;
