import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import logo from "@/assets/image/BTLOGO.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Contact', href: '#contact' },
    { label: 'Admin', href: '/admin' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
  <img
    src={logo}
    alt="Bhairavnath Travels Logo"
    className="w-10 h-10 rounded-lg object-cover"
  />
            <div>
              <h1 className="text-xl font-bold text-foreground">Bhairavnath Tours & Travels</h1>
              <p className="text-xs text-muted-foreground">Premium Travel Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-muted-foreground text-sm">
              <Phone className="w-4 h-4 mr-1" />
              +91 98765 43210
            </div>
            <Button variant="hero" size="sm" className="hover-lift">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center text-muted-foreground text-sm mb-3 px-2">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 90498 67935
                </div>
                <Button variant="hero" size="sm" className="w-full">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;