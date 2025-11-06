import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Car, 
  Hotel, 
  TrendingUp, 
  Users, 
  Calendar, 
  MapPin, 
  Clock,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Activity
} from 'lucide-react';

const AdminDashboard = () => {
  // Mock data - replace with real data from backend
  const stats = {
    totalBookings: 156,
    todayBookings: 12,
    revenue: 85420,
    activeDrivers: 28,
    pendingApprovals: 5,
    maintenanceDue: 3
  };

  const recentBookings = [
    {
      id: 'BK001',
      customer: 'Rajesh Sharma',
      service: 'Car Booking',
      destination: 'Pune to Mumbai',
      date: '2024-01-15',
      status: 'confirmed',
      amount: 2500
    },
    {
      id: 'BK002',
      customer: 'Priya Patel',
      service: 'Hotel Booking',
      destination: 'Goa',
      date: '2024-01-16',
      status: 'pending',
      amount: 4200
    },
    {
      id: 'BK003',
      customer: 'Amit Kumar',
      service: 'Airport Transfer',
      destination: 'Mumbai Airport',
      date: '2024-01-15',
      status: 'completed',
      amount: 1200
    },
    {
      id: 'BK004',
      customer: 'Sneha Reddy',
      service: 'Wedding Car',
      destination: 'Nashik',
      date: '2024-01-17',
      status: 'confirmed',
      amount: 8500
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-primary text-primary-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'completed': return 'bg-success text-success-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your travel business.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-2xl font-bold text-foreground">{stats.totalBookings}</p>
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
                <p className="text-sm text-muted-foreground">Today's Bookings</p>
                <p className="text-2xl font-bold text-foreground">{stats.todayBookings}</p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold text-foreground">₹{stats.revenue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Drivers</p>
                <p className="text-2xl font-bold text-foreground">{stats.activeDrivers}</p>
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
                <p className="text-sm text-muted-foreground">Pending Approvals</p>
                <p className="text-2xl font-bold text-warning">{stats.pendingApprovals}</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Maintenance Due</p>
                <p className="text-2xl font-bold text-destructive">{stats.maintenanceDue}</p>
              </div>
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <Activity className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="shadow-card bg-card border-0">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                Recent Bookings
              </CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Booking ID</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Service</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Destination</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                        <td className="p-4">
                          <span className="font-medium text-primary">{booking.id}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-foreground">{booking.customer}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-muted-foreground">{booking.service}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-muted-foreground text-sm">{booking.destination}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <span className="font-semibold text-foreground">₹{booking.amount}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card className="shadow-card bg-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Car className="h-4 w-4 mr-2" />
                Add New Booking
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Register Driver
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <DollarSign className="h-4 w-4 mr-2" />
                Generate Invoice
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Activity className="h-4 w-4 mr-2" />
                Schedule Maintenance
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="shadow-card bg-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-warning" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg">
                <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">3 vehicles due for maintenance</p>
                  <p className="text-xs text-muted-foreground">Schedule services soon</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">5 bookings need approval</p>
                  <p className="text-xs text-muted-foreground">Review pending requests</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg">
                <TrendingUp className="h-4 w-4 text-success mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Revenue up 15% this month</p>
                  <p className="text-xs text-muted-foreground">Great progress!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;