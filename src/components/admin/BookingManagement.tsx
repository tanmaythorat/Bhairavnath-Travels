import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Car, 
  Hotel, 
  MapPin, 
  Calendar, 
  Phone, 
  Mail,
  Eye,
  Edit,
  Check,
  X,
  Clock,
  Users,
  Star
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Booking {
  id: string;
  customer: {
    name: string;
    phone: string;
    email: string;
  };
  service: string;
  type: 'car' | 'hotel' | 'corporate' | 'airport' | 'wedding';
  destination: string;
  pickupLocation?: string;
  date: string;
  time?: string;
  passengers: number;
  duration?: string;
  vehicleType?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  amount: number;
  createdAt: string;
  notes?: string;
}

const BookingManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');

  // Mock data - replace with real data from backend
  const [bookings] = useState<Booking[]>([
    {
      id: 'BK001',
      customer: {
        name: 'Rajesh Sharma',
        phone: '+91 98765 43210',
        email: 'rajesh@email.com'
      },
      service: 'Car Booking - Local',
      type: 'car',
      destination: 'Pune City Tour',
      pickupLocation: 'Pune Railway Station',
      date: '2024-01-15',
      time: '09:00 AM',
      passengers: 4,
      duration: '8 hours',
      vehicleType: 'Sedan (Honda City)',
      status: 'confirmed',
      amount: 2500,
      createdAt: '2024-01-10T10:30:00',
      notes: 'Customer requested AC and music system'
    },
    {
      id: 'BK002',
      customer: {
        name: 'Priya Patel',
        phone: '+91 87654 32109',
        email: 'priya@email.com'
      },
      service: 'Hotel Booking',
      type: 'hotel',
      destination: 'Goa Beach Resort',
      date: '2024-01-16',
      passengers: 2,
      duration: '3 nights',
      status: 'pending',
      amount: 4200,
      createdAt: '2024-01-11T14:20:00',
      notes: 'Sea view room preferred'
    },
    {
      id: 'BK003',
      customer: {
        name: 'Amit Kumar',
        phone: '+91 76543 21098',
        email: 'amit@email.com'
      },
      service: 'Airport Transfer',
      type: 'airport',
      destination: 'Mumbai Airport',
      pickupLocation: 'Andheri East',
      date: '2024-01-15',
      time: '06:00 AM',
      passengers: 2,
      vehicleType: 'Hatchback (Swift)',
      status: 'completed',
      amount: 1200,
      createdAt: '2024-01-12T09:15:00'
    },
    {
      id: 'BK004',
      customer: {
        name: 'Sneha Reddy',
        phone: '+91 65432 10987',
        email: 'sneha@email.com'
      },
      service: 'Wedding Car Rental',
      type: 'wedding',
      destination: 'Nashik Wedding Venue',
      pickupLocation: 'Nashik City',
      date: '2024-01-17',
      time: '08:00 AM',
      passengers: 6,
      duration: '12 hours',
      vehicleType: 'Luxury (BMW 3 Series)',
      status: 'confirmed',
      amount: 8500,
      createdAt: '2024-01-08T11:45:00',
      notes: 'Decorated car required, red roses preferred'
    },
    {
      id: 'BK005',
      customer: {
        name: 'Corporate Solutions Ltd',
        phone: '+91 54321 09876',
        email: 'bookings@corp.com'
      },
      service: 'Corporate Cab Service',
      type: 'corporate',
      destination: 'Multiple locations',
      date: '2024-01-18',
      time: '07:00 AM',
      passengers: 1,
      duration: 'Monthly',
      vehicleType: 'Sedan (Dzire)',
      status: 'pending',
      amount: 15000,
      createdAt: '2024-01-13T16:30:00',
      notes: 'Monthly corporate contract for employee transport'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-primary text-primary-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'completed': return 'bg-success text-success-foreground';
      case 'cancelled': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'car': return Car;
      case 'hotel': return Hotel;
      case 'airport': return MapPin;
      case 'wedding': return Star;
      default: return Car;
    }
  };

  const handleStatusUpdate = (bookingId: string, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Booking ${bookingId} status changed to ${newStatus}`,
    });
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.destination.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    const matchesService = serviceFilter === 'all' || booking.type === serviceFilter;
    
    return matchesSearch && matchesStatus && matchesService;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Booking Management</h2>
          <p className="text-muted-foreground">Manage all customer bookings and reservations</p>
        </div>
        <Button className="bg-gradient-hero hover:shadow-glow">
          <Car className="h-4 w-4 mr-2" />
          New Booking
        </Button>
      </div>

      {/* Filters */}
      <Card className="shadow-card bg-card border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search bookings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            {/* Service Filter */}
            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Services" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="car">Car Booking</SelectItem>
                <SelectItem value="hotel">Hotel Booking</SelectItem>
                <SelectItem value="corporate">Corporate Cabs</SelectItem>
                <SelectItem value="airport">Airport Transfer</SelectItem>
                <SelectItem value="wedding">Wedding Cars</SelectItem>
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
                setServiceFilter('all');
              }}
            >
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Bookings List */}
      <div className="grid gap-6">
        {filteredBookings.map((booking) => {
          const ServiceIcon = getServiceIcon(booking.type);
          
          return (
            <Card key={booking.id} className="shadow-card bg-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Booking Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <ServiceIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{booking.service}</h3>
                          <p className="text-primary font-medium">ID: {booking.id}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </div>

                    {/* Customer Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-foreground">{booking.customer.name}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          <span>{booking.customer.phone}</span>
                        </div>
                        {booking.customer.email && (
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            <span>{booking.customer.email}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Trip Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{booking.destination}</span>
                      </div>
                      {booking.pickupLocation && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground ml-6">
                          <span>From: {booking.pickupLocation}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{booking.date}</span>
                        </div>
                        {booking.time && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{booking.time}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {booking.notes && (
                      <div className="p-3 bg-secondary/30 rounded-lg">
                        <p className="text-sm text-muted-foreground"><strong>Notes:</strong> {booking.notes}</p>
                      </div>
                    )}
                  </div>

                  {/* Booking Details */}
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Passengers:</span>
                        <span className="font-medium text-foreground">{booking.passengers}</span>
                      </div>
                      {booking.duration && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium text-foreground">{booking.duration}</span>
                        </div>
                      )}
                      {booking.vehicleType && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Vehicle:</span>
                          <span className="font-medium text-foreground">{booking.vehicleType}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center pt-2 border-t border-border/50">
                        <span className="text-muted-foreground">Total Amount:</span>
                        <span className="text-xl font-bold text-primary">₹{booking.amount}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    {booking.status === 'pending' && (
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      Created: {new Date(booking.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredBookings.length === 0 && (
        <Card className="shadow-card bg-card border-0">
          <CardContent className="p-12 text-center">
            <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No bookings found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BookingManagement;