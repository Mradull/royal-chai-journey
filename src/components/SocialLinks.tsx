import { FC } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'X (Twitter)' },
];

const SocialLinks: FC = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
