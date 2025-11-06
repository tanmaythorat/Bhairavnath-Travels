import React from 'react';
import ServiceCard from './ServiceCard';
import { Car, Hotel, Plane, Building2, MapPin, Crown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const services = [

  
  {
    icon: Car,
    title: 'Car Booking',
    description: 'Premium car rentals with professional drivers for local and outstation travel. Choose from our diverse fleet of well-maintained vehicles.',
    features: [
      'Local & Outstation trips',
      'Professional drivers',
      'GPS tracking & safety',
      '24/7 customer support',
      'Flexible booking options'
    ],
    badge: 'Most Popular'
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    description: 'Comfortable accommodations across all major cities with verified properties and best price guarantees.',
    features: [
      'Verified hotel partners',
      'Best price guarantee',
      'Instant confirmation',
      'City-wise options',
      'Customer reviews'
    ]
  },
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Seamless flight booking experience with competitive prices and comprehensive travel solutions.',
    features: [
      'Domestic & International',
      'Best fare finder',
      'Easy cancellation',
      'Seat selection',
      'Travel insurance'
    ],
    isComingSoon: true
  },
  {
    icon: Building2,
    title: 'Corporate Cabs',
    description: 'Reliable corporate transportation solutions for businesses with dedicated account management and billing.',
    features: [
      'Dedicated fleet',
      'Account management',
      'Monthly billing',
      'Employee transport',
      'Meeting scheduling'
    ]
  },
  {
    icon: MapPin,
    title: 'Airport Transfers',
    description: 'Hassle-free airport transfers with on-time pickups, flight tracking, and comfortable rides.',
    features: [
      'Flight tracking',
      'On-time guarantee',
      'Meet & greet service',
      'Luggage assistance',
      'All airports covered'
    ]
  },
  {
    icon: Crown,
    title: 'Wedding Cars',
    description: 'Luxury wedding car rentals to make your special day memorable with decorated premium vehicles.',
    features: [
      'Luxury car collection',
      'Professional decoration',
      'Experienced chauffeurs',
      'Flexible packages',
      'Special occasion pricing'
    ],
    badge: 'Premium'
  }

  
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium
            <span className="block text-transparent bg-gradient-accent bg-clip-text">
              Travel Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience world-class travel services tailored to your needs. From luxury car rentals 
            to premium accommodations, we ensure every journey is comfortable and memorable.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={service.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="animate-fade-up h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ServiceCard {...service} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-card rounded-3xl shadow-float">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our travel experts can create personalized packages combining multiple services 
            for your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all hover:scale-105">
              Get Custom Quote
            </button>
            <button className="border border-primary/20 bg-background/80 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;