import { FC } from 'react';

const DecorativePattern: FC = () => {
  return (
    <>
      {/* Top left corner ornament */}
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path
            d="M0 0 L100 0 L100 20 C60 20, 40 40, 20 100 L0 100 Z"
            fill="currentColor"
          />
          <circle cx="50" cy="10" r="3" fill="currentColor" />
          <circle cx="70" cy="10" r="2" fill="currentColor" />
          <circle cx="10" cy="50" r="3" fill="currentColor" />
          <circle cx="10" cy="70" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Top right corner ornament */}
      <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none opacity-20 rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path
            d="M0 0 L100 0 L100 20 C60 20, 40 40, 20 100 L0 100 Z"
            fill="currentColor"
          />
          <circle cx="50" cy="10" r="3" fill="currentColor" />
          <circle cx="70" cy="10" r="2" fill="currentColor" />
          <circle cx="10" cy="50" r="3" fill="currentColor" />
          <circle cx="10" cy="70" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom left corner ornament */}
      <div className="fixed bottom-0 left-0 w-32 h-32 pointer-events-none opacity-20 -rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path
            d="M0 0 L100 0 L100 20 C60 20, 40 40, 20 100 L0 100 Z"
            fill="currentColor"
          />
          <circle cx="50" cy="10" r="3" fill="currentColor" />
          <circle cx="70" cy="10" r="2" fill="currentColor" />
          <circle cx="10" cy="50" r="3" fill="currentColor" />
          <circle cx="10" cy="70" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom right corner ornament */}
      <div className="fixed bottom-0 right-0 w-32 h-32 pointer-events-none opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path
            d="M0 0 L100 0 L100 20 C60 20, 40 40, 20 100 L0 100 Z"
            fill="currentColor"
          />
          <circle cx="50" cy="10" r="3" fill="currentColor" />
          <circle cx="70" cy="10" r="2" fill="currentColor" />
          <circle cx="10" cy="50" r="3" fill="currentColor" />
          <circle cx="10" cy="70" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Subtle center decoration */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-accent">
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" fill="none" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="5"
              x2="100"
              y2="25"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </div>
    </>
  );
};

export default DecorativePattern;
