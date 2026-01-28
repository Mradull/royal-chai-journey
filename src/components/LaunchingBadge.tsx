import { FC } from 'react';
import { Sparkles } from 'lucide-react';

const LaunchingBadge: FC = () => {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30 animate-pulse-glow">
      <Sparkles className="w-4 h-4 text-accent" />
      <span className="font-body text-sm font-medium tracking-wide text-accent uppercase">
        Launching Soon
      </span>
      <Sparkles className="w-4 h-4 text-accent" />
    </div>
  );
};

export default LaunchingBadge;
