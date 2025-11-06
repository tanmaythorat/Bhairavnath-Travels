import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LayoutDashboard, 
  Car, 
  Hotel, 
  Receipt, 
  Users, 
  Settings, 
  Bell,
  LogOut,
  Search,
  Filter,
  Download,
  Plus
} from 'lucide-react';
import AdminDashboard from '@/components/admin/AdminDashboard';
import BookingManagement from '@/components/admin/BookingManagement';
import BillingSystem from '@/components/admin/BillingSystem';
import DriverRecords from '@/components/admin/DriverRecords';
import MaintenanceRecords from '@/components/admin/MaintenanceRecords';
import AdminLogin from '@/components/admin/AdminLogin';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(5);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      {/* Admin Header */}
      <header className="bg-card shadow-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <LayoutDashboard className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Admin Panel</h1>
                <p className="text-sm text-muted-foreground">Tours & Travels Management</p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>

              {/* User Menu */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">Admin User</p>
                  <p className="text-xs text-muted-foreground">Administrator</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleLogout}
                  className="text-destructive hover:text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Navigation Tabs */}
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-none lg:inline-flex bg-card shadow-card p-1 h-auto">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="bookings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Car className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Bookings</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Receipt className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Billing</span>
            </TabsTrigger>
            <TabsTrigger value="drivers" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Drivers</span>
            </TabsTrigger>
            <TabsTrigger value="maintenance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Settings className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Maintenance</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Download className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Reports</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="dashboard" className="space-y-6">
            <AdminDashboard />
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <BookingManagement />
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <BillingSystem />
          </TabsContent>

          <TabsContent value="drivers" className="space-y-6">
            <DriverRecords />
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-6">
            <MaintenanceRecords />
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="shadow-card bg-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Reports & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <Receipt className="h-6 w-6" />
                    <div className="text-center">
                      <p className="font-semibold">Booking Reports</p>
                      <p className="text-xs text-muted-foreground">Export booking data</p>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <Download className="h-6 w-6" />
                    <div className="text-center">
                      <p className="font-semibold">Financial Reports</p>
                      <p className="text-xs text-muted-foreground">Revenue & payments</p>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <Car className="h-6 w-6" />
                    <div className="text-center">
                      <p className="font-semibold">Fleet Reports</p>
                      <p className="text-xs text-muted-foreground">Vehicle utilization</p>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;