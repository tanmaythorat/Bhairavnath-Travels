import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Car, Hotel, Plane, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">Bhairavnath Travels</h3>
                  <p className="text-sm text-muted-foreground">Premium Travel Services</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner for premium travel experiences across India. 
                We provide safe, comfortable, and reliable transportation services.
              </p>
              
              {/* Newsletter Signup */}
              <div className="pt-4">
                <h4 className="font-semibold text-card-foreground mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm"
                  />
                  <Button size="sm" variant="default">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-6">Our Services</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Car Booking', icon: Car },
                  { name: 'Hotel Booking', icon: Hotel },
                  { name: 'Flight Booking', icon: Plane, badge: 'Coming Soon' },
                  { name: 'Corporate Cabs', icon: Car },
                  { name: 'Airport Transfers', icon: MapPin },
                  { name: 'Wedding Cars', icon: Car }
                ].map((service) => (
                  <li key={service.name} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm">{service.name}</span>
                    {service.badge && (
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-6">Destinations</h3>
              <ul className="space-y-3">
                {[
                  'Pune', 'Mumbai', 'Goa', 'Nashik', 
                  'Nagpur', 'Satara', 'Aurangabad'
                ].map((city) => (
                  <li key={city}>
                    <a 
                      href={`#${city.toLowerCase()}`} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {city}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="#destinations" 
                    className="text-sm text-primary font-medium hover:text-primary-light transition-colors"
                  >
                    View All Cities →
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-card-foreground">Call Us</div>
                    <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                    <div className="text-sm text-muted-foreground">+91 87654 32109</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-card-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">info@Bhairavnath Travels.com</div>
                    <div className="text-sm text-muted-foreground">support@Bhairavnath Travels.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-card-foreground">Address</div>
                    <div className="text-sm text-muted-foreground">
                      123 Business Park, Pune,<br />
                      Maharashtra 411001
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <div className="text-sm font-medium text-card-foreground mb-3">Follow Us</div>
                  <div className="flex gap-3">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-8 h-8 bg-secondary/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Bhairavnath Travels. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;