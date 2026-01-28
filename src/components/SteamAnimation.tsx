import { FC } from 'react';

const SteamAnimation: FC = () => {
  return (
    <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none">
      {/* Steam wisps */}
      <div className="steam steam-1 w-2 h-8 bg-gradient-to-t from-accent/20 to-transparent rounded-full blur-sm" 
           style={{ left: '-10px' }} />
      <div className="steam steam-2 w-3 h-10 bg-gradient-to-t from-accent/15 to-transparent rounded-full blur-sm" 
           style={{ left: '5px' }} />
      <div className="steam steam-3 w-2 h-6 bg-gradient-to-t from-accent/20 to-transparent rounded-full blur-sm" 
           style={{ left: '15px' }} />
    </div>
  );
};

export default SteamAnimation;
