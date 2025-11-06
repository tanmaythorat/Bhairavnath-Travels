import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Users, 
  Search, 
  Plus, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Car,
  Star,
  Eye,
  Edit,
  UserCheck,
  UserX,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Driver {
  id: string;
  name: string;
  phone: string;
  email: string;
  licenseNumber: string;
  licenseExpiry: string;
  address: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'on-trip' | 'maintenance';
  rating: number;
  totalTrips: number;
  assignedVehicle?: string;
  vehicleNumber?: string;
  experience: string;
  emergencyContact: string;
  languages: string[];
  photo?: string;
}

const DriverRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data - replace with real data from backend
  const [drivers] = useState<Driver[]>([
    {
      id: 'DR001',
      name: 'Ravi Kumar',
      phone: '+91 98765 43210',
      email: 'ravi.kumar@email.com',
      licenseNumber: 'MH14 20230045678',
      licenseExpiry: '2026-08-15',
      address: 'Pune, Maharashtra',
      joinDate: '2022-03-15',
      status: 'active',
      rating: 4.8,
      totalTrips: 245,
      assignedVehicle: 'Honda City',
      vehicleNumber: 'MH 12 AB 1234',
      experience: '8 years',
      emergencyContact: '+91 87654 32109',
      languages: ['English', 'Hindi', 'Marathi']
    },
    {
      id: 'DR002',
      name: 'Suresh Patil',
      phone: '+91 87654 32109',
      email: 'suresh.patil@email.com',
      licenseNumber: 'MH20 20220089012',
      licenseExpiry: '2025-12-20',
      address: 'Mumbai, Maharashtra',
      joinDate: '2021-07-22',
      status: 'on-trip',
      rating: 4.6,
      totalTrips: 389,
      assignedVehicle: 'Toyota Innova',
      vehicleNumber: 'MH 01 CD 5678',
      experience: '12 years',
      emergencyContact: '+91 76543 21098',
      languages: ['English', 'Hindi', 'Gujarati']
    },
    {
      id: 'DR003',
      name: 'Amit Sharma',
      phone: '+91 76543 21098',
      email: 'amit.sharma@email.com',
      licenseNumber: 'DL08 20210034567',
      licenseExpiry: '2027-03-10',
      address: 'Nashik, Maharashtra',
      joinDate: '2023-01-10',
      status: 'active',
      rating: 4.9,
      totalTrips: 156,
      assignedVehicle: 'Maruti Dzire',
      vehicleNumber: 'MH 15 EF 9012',
      experience: '5 years',
      emergencyContact: '+91 65432 10987',
      languages: ['English', 'Hindi']
    },
    {
      id: 'DR004',
      name: 'Prakash Desai',
      phone: '+91 65432 10987',
      email: 'prakash.desai@email.com',
      licenseNumber: 'GA05 20200012345',
      licenseExpiry: '2025-09-30',
      address: 'Goa',
      joinDate: '2020-11-05',
      status: 'maintenance',
      rating: 4.7,
      totalTrips: 567,
      assignedVehicle: 'Mahindra Scorpio',
      vehicleNumber: 'GA 07 GH 3456',
      experience: '15 years',
      emergencyContact: '+91 54321 09876',
      languages: ['English', 'Hindi', 'Konkani']
    },
    {
      id: 'DR005',
      name: 'Ganesh Rao',
      phone: '+91 54321 09876',
      email: 'ganesh.rao@email.com',
      licenseNumber: 'KA03 20220067890',
      licenseExpiry: '2024-06-15',
      address: 'Satara, Maharashtra',
      joinDate: '2022-08-18',
      status: 'inactive',
      rating: 4.2,
      totalTrips: 98,
      experience: '3 years',
      emergencyContact: '+91 43210 98765',
      languages: ['English', 'Hindi', 'Kannada']
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'on-trip': return 'bg-primary text-primary-foreground';
      case 'maintenance': return 'bg-warning text-warning-foreground';
      case 'inactive': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return CheckCircle;
      case 'on-trip': return Car;
      case 'maintenance': return Clock;
      case 'inactive': return UserX;
      default: return UserCheck;
    }
  };

  const handleAddDriver = () => {
    toast({
      title: "Add Driver",
      description: "Driver registration form will be opened.",
    });
  };

  const handleStatusUpdate = (driverId: string, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Driver ${driverId} status changed to ${newStatus}`,
    });
  };

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.phone.includes(searchTerm) ||
                         driver.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.vehicleNumber?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || driver.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Calculate summary stats
  const activeDrivers = drivers.filter(d => d.status === 'active').length;
  const onTripDrivers = drivers.filter(d => d.status === 'on-trip').length;
  const averageRating = drivers.reduce((sum, d) => sum + d.rating, 0) / drivers.length;
  const totalTrips = drivers.reduce((sum, d) => sum + d.totalTrips, 0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Driver Records</h2>
          <p className="text-muted-foreground">Manage driver profiles, licenses, and assignments</p>
        </div>
        <Button onClick={handleAddDriver} className="bg-gradient-hero hover:shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          Add New Driver
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Drivers</p>
                <p className="text-2xl font-bold text-foreground">{drivers.length}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Drivers</p>
                <p className="text-2xl font-bold text-success">{activeDrivers}</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">On Trip</p>
                <p className="text-2xl font-bold text-primary">{onTripDrivers}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Car className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold text-foreground">{averageRating.toFixed(1)}</p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Star className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="shadow-card bg-card border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search drivers, license, vehicle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter */}
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-input rounded-md bg-background hover:border-primary/50 transition-colors"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="on-trip">On Trip</option>
              <option value="maintenance">Maintenance</option>
              <option value="inactive">Inactive</option>
            </select>

            {/* Clear Filters */}
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Drivers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDrivers.map((driver) => {
          const StatusIcon = getStatusIcon(driver.status);
          
          return (
            <Card key={driver.id} className="shadow-card bg-card border-0 hover-lift">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-hero text-white font-semibold">
                        {driver.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{driver.name}</h3>
                      <p className="text-primary font-medium">ID: {driver.id}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(driver.status)}>
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {driver.status}
                  </Badge>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{driver.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground truncate">{driver.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{driver.address}</span>
                  </div>
                </div>

                {/* License Info */}
                <div className="bg-secondary/30 rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-muted-foreground">LICENSE</span>
                    <span className="text-xs text-muted-foreground">Exp: {driver.licenseExpiry}</span>
                  </div>
                  <p className="text-sm font-mono text-foreground">{driver.licenseNumber}</p>
                </div>

                {/* Vehicle Assignment */}
                {driver.assignedVehicle && (
                  <div className="bg-primary/10 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Car className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{driver.assignedVehicle}</span>
                    </div>
                    <p className="text-xs text-primary font-mono">{driver.vehicleNumber}</p>
                  </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Rating</p>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-3 w-3 text-accent fill-current" />
                      <span className="text-sm font-semibold text-foreground">{driver.rating}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Trips</p>
                    <p className="text-sm font-semibold text-foreground">{driver.totalTrips}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p className="text-sm font-semibold text-foreground">{driver.experience}</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Languages:</p>
                  <div className="flex flex-wrap gap-1">
                    {driver.languages.map((lang) => (
                      <span 
                        key={lang}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    <Award className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredDrivers.length === 0 && (
        <Card className="shadow-card bg-card border-0">
          <CardContent className="p-12 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No drivers found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DriverRecords;