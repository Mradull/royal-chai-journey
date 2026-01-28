import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, ArrowRight, Check } from 'lucide-react';

const EmailSignup: FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "Welcome to the Royal Circle!",
      description: "You'll be the first to know when we launch.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-3 animate-fade-in-up">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <p className="font-body text-foreground/80">You're on the list!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-12 h-14 bg-background border-border/50 rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/20"
          />
        </div>
        <Button 
          type="submit"
          disabled={isLoading}
          className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium tracking-wide rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
        >
          {isLoading ? (
            <span className="animate-pulse">Joining...</span>
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-3 font-body">
        Be the first to experience royal chai. No spam, we promise.
      </p>
    </form>
  );
};

export default EmailSignup;
