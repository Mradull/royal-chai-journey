import Logo from '@/components/Logo';
import EmailSignup from '@/components/EmailSignup';
import SocialLinks from '@/components/SocialLinks';
import LaunchingBadge from '@/components/LaunchingBadge';
import DecorativePattern from '@/components/DecorativePattern';
import heroImage from '@/assets/hero-chai.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative corner patterns */}
      <DecorativePattern />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 lg:py-0 lg:px-16">
            <div className="max-w-xl w-full flex flex-col items-center text-center gap-8">
              {/* Launching Badge */}
              <div className="animate-fade-in-up">
                <LaunchingBadge />
              </div>

              {/* Logo */}
              <div className="animate-fade-in-up-delay-1">
                <Logo />
              </div>

              {/* Tagline */}
              <div className="animate-fade-in-up-delay-2">
                <p className="font-display text-2xl md:text-3xl italic text-muted-foreground">
                  "Brew the Royal Tradition"
                </p>
              </div>

              {/* Description */}
              <div className="animate-fade-in-up-delay-2 space-y-4">
                <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
                  Discover the authentic taste of Indian royalty with our premium 
                  instant chai tea premix — crafted from recipes passed down through 
                  generations of royal households.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-body">
                  <span className="w-8 h-px bg-border" />
                  <span>Authentic • Premium • Royal</span>
                  <span className="w-8 h-px bg-border" />
                </div>
              </div>

              {/* Email Signup */}
              <div className="w-full animate-fade-in-up-delay-3">
                <EmailSignup />
              </div>

              {/* Social Links */}
              <div className="animate-fade-in-up-delay-4">
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Follow our journey
                </p>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="hidden lg:block flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
            <img
              src={heroImage}
              alt="Premium masala chai with aromatic spices"
              className="w-full h-full object-cover"
            />
            {/* Floating spice elements decoration */}
            <div className="absolute bottom-20 left-10 z-20 animate-float">
              <div className="bg-background/90 backdrop-blur-sm px-6 py-4 rounded-lg border border-border/50 shadow-xl">
                <p className="font-display text-lg text-foreground">
                  🍵 100% Natural Spices
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Cardamom, Cinnamon, Ginger & more
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero Image */}
        <div className="lg:hidden relative h-64 -mt-8">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
          <img
            src={heroImage}
            alt="Premium masala chai with aromatic spices"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Footer */}
        <footer className="py-6 text-center border-t border-border/30">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chai Culture. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
