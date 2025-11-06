import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  isComingSoon?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  badge, 
  isComingSoon = false 
}) => {
  return (
    <Card className="group relative overflow-hidden hover-lift bg-card shadow-card hover:shadow-float transition-all duration-300 border-0">
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-card">
            {badge}
          </span>
        </div>
      )}
      
      {isComingSoon && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-card">
            Coming Soon
          </span>
        </div>
      )}

      <CardContent className="p-8 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-card">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            {description}
          </p>

          {/* Features List */}
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <Button 
          variant={isComingSoon ? "outline" : "default"} 
          className="w-full group-hover:shadow-glow transition-all"
          disabled={isComingSoon}
        >
          {isComingSoon ? 'Notify Me' : 'Book Now'}
        </Button>
      </CardContent>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
};

export default ServiceCard;