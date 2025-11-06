import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Headphones } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your travel services. Could you please provide more information?");
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you within 30 minutes.",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in
            <span className="block text-transparent bg-gradient-accent bg-clip-text">
              Touch With Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions or need assistance? Our travel experts are here to help you plan 
            the perfect journey. Contact us anytime, anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone Support */}
            <Card className="hover-lift bg-card shadow-card hover:shadow-float transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Phone Support</h3>
                    <p className="text-muted-foreground text-sm mb-3">Call us for immediate assistance</p>
                    <div className="space-y-1">
                      <p className="text-primary font-semibold">+91 98765 43210</p>
                      <p className="text-primary font-semibold">+91 87654 32109</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Support */}
            <Card className="hover-lift bg-card shadow-card hover:shadow-float transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">WhatsApp Chat</h3>
                    <p className="text-muted-foreground text-sm mb-3">Quick responses via WhatsApp</p>
                    <p className="text-success font-semibold mb-3">+91 98765 43210</p>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="w-full bg-success hover:bg-success/90"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Support */}
            <Card className="hover-lift bg-card shadow-card hover:shadow-float transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-3">Send us detailed inquiries</p>
                    <p className="text-primary font-semibold text-sm mb-1">info@bhairavnathtravels.com</p>
                    <p className="text-primary font-semibold text-sm mb-3">bookings@bhairavnathtravels.com</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="hover-lift bg-gradient-card shadow-card hover:shadow-float transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Office Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Saturday:</span>
                        <span className="font-semibold text-card-foreground">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday:</span>
                        <span className="font-semibold text-card-foreground">10:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Emergency:</span>
                        <span className="font-semibold text-success">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-float bg-card border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">Quick Inquiry</h3>
                    <p className="text-muted-foreground">Get personalized assistance within 30 minutes</p>
                  </div>
                </div>

                <form onSubmit={handleQuickInquiry} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input 
                        id="contact-name" 
                        placeholder="Enter your name"
                        className="hover:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number *</Label>
                      <Input 
                        id="contact-phone" 
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="hover:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address</Label>
                      <Input 
                        id="contact-email" 
                        type="email" 
                        placeholder="your@email.com"
                        className="hover:border-primary/50 transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-service">Service Interest</Label>
                      <select 
                        id="contact-service"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background hover:border-primary/50 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="car">Car Booking</option>
                        <option value="hotel">Hotel Booking</option>
                        <option value="corporate">Corporate Cabs</option>
                        <option value="airport">Airport Transfer</option>
                        <option value="wedding">Wedding Cars</option>
                        <option value="package">Custom Package</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea 
                      id="contact-message"
                      placeholder="Tell us about your travel requirements..."
                      className="min-h-24 hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="lg" 
                    className="w-full hover-lift"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Inquiry
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Our travel experts will contact you within 30 minutes during business hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Office Locations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift bg-card shadow-card hover:shadow-float transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground mb-2">Mumbai Headquarters</h4>
                <p className="text-muted-foreground text-sm">
                  123 Business District,<br />
                  Bandra Kurla Complex,<br />
                  Mumbai - 400051
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card shadow-card hover:shadow-float transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground mb-2">Pune Branch</h4>
                <p className="text-muted-foreground text-sm">
                  456 IT Park Road,<br />
                  Hinjewadi Phase 2,<br />
                  Pune - 411057
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card shadow-card hover:shadow-float transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground mb-2">Goa Office</h4>
                <p className="text-muted-foreground text-sm">
                  789 Beach Road,<br />
                  Panaji, North Goa,<br />
                  Goa - 403001
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;