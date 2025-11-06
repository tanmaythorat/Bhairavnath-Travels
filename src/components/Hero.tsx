import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';

const Hero = () => {
    // Scroll to ID smoothly
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="glass-card p-4 rounded-2xl">
          <MapPin className="h-6 w-6 text-accent" />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass-card p-4 rounded-2xl">
          <Calendar className="h-6 w-6 text-accent" />
        </div>
      </div>
      
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-card p-4 rounded-2xl">
          <Users className="h-6 w-6 text-accent" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Explore India with
            <span className="block text-transparent bg-gradient-accent bg-clip-text">
              Premium Travel
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience luxury car bookings, premium hotels, and unforgettable journeys across 
            India's most beautiful destinations with our world-class travel services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 h-auto animate-scale-in hover-lift"
                        onClick={() => scrollTo('booking')}

            >
              Book Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="text-lg px-8 py-4 h-auto animate-scale-in hover-lift"
              style={{ animationDelay: '0.2s' }}
                        onClick={() => scrollTo('destinations')}

            >
              Explore Destinations
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-accent">7+</div>
            <div className="text-white/80 text-sm">Cities Covered</div>
          </div>
          
          <div className="glass-card p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-accent">50+</div>
            <div className="text-white/80 text-sm">Luxury Cars</div>
          </div>
          
          <div className="glass-card p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-accent">1000+</div>
            <div className="text-white/80 text-sm">Happy Customers</div>
          </div>
          
          <div className="glass-card p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-accent">24/7</div>
            <div className="text-white/80 text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;