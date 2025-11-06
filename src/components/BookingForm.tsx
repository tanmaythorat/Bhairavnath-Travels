import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, MapPin, Car, Hotel, Plane, Phone, Mail, Users } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface BookingFormData {
  city: string;
  serviceType: string;
  date: Date | undefined;
  passengers: string;
  name: string;
  email: string;
  phone: string;
}

const cities = [
  'Pune', 'Nashik', 'Mumbai', 'Nagpur', 'Satara', 
  'Chhatrapati Sambhaji Nagar (Aurangabad)', 'Goa'
];

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    city: '',
    serviceType: '',
    date: undefined,
    passengers: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.city || !formData.serviceType || !formData.date || !formData.name || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Booking Request Submitted!",
      description: `We'll contact you shortly at ${formData.phone} to confirm your ${formData.serviceType} booking in ${formData.city}.`,
    });

    // Reset form
    setFormData({
      city: '',
      serviceType: '',
      date: undefined,
      passengers: '',
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Book Your Perfect Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your destination, select your service, and let us create an unforgettable experience for you.
          </p>
        </div>

        <Card className="shadow-float hover-lift bg-card-gradient backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold flex items-center justify-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              Quick Booking Form
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* City Selection */}
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium">Select City *</Label>
                  <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors">
                      <SelectValue placeholder="Choose your destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium">Service Type *</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4" />
                          Car Booking
                        </div>
                      </SelectItem>
                      <SelectItem value="hotel">
                        <div className="flex items-center gap-2">
                          <Hotel className="h-4 w-4" />
                          Hotel Booking
                        </div>
                      </SelectItem>
                      <SelectItem value="corporate">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4" />
                          Corporate Cabs
                        </div>
                      </SelectItem>
                      <SelectItem value="airport">
                        <div className="flex items-center gap-2">
                          <Plane className="h-4 w-4" />
                          Airport Transfer
                        </div>
                      </SelectItem>
                      <SelectItem value="wedding">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4" />
                          Wedding Cars
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Picker */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Travel Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal hover:border-primary/50 transition-colors",
                          !formData.date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => setFormData({ ...formData, date })}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Passengers */}
                <div className="space-y-2">
                  <Label htmlFor="passengers" className="text-sm font-medium">Number of Passengers</Label>
                  <Select value={formData.passengers} onValueChange={(value) => setFormData({ ...formData, passengers: value })}>
                    <SelectTrigger className="hover:border-primary/50 transition-colors">
                      <SelectValue placeholder="Select passengers" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {num} {num === 1 ? 'Passenger' : 'Passengers'}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-4 border-t border-border/50">
                <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="hover:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  variant="premium" 
                  size="lg" 
                  className="w-full text-lg py-6 hover-lift"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Submit Booking Request
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-3">
                  We'll contact you within 30 minutes to confirm your booking
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;