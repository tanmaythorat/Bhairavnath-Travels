import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Receipt, 
  Download, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Plus,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Send,
  Printer
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Invoice {
  id: string;
  bookingId: string;
  customerName: string;
  customerEmail: string;
  serviceType: string;
  amount: number;
  tax: number;
  totalAmount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  issueDate: string;
  dueDate: string;
  paymentDate?: string;
  createdAt: string;
}

const BillingSystem = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  // Mock data - replace with real data from backend
  const [invoices] = useState<Invoice[]>([
    {
      id: 'INV-001',
      bookingId: 'BK001',
      customerName: 'Rajesh Sharma',
      customerEmail: 'rajesh@email.com',
      serviceType: 'Car Booking',
      amount: 2500,
      tax: 450,
      totalAmount: 2950,
      status: 'paid',
      issueDate: '2024-01-10',
      dueDate: '2024-01-25',
      paymentDate: '2024-01-20',
      createdAt: '2024-01-10T10:30:00'
    },
    {
      id: 'INV-002',
      bookingId: 'BK002',
      customerName: 'Priya Patel',
      customerEmail: 'priya@email.com',
      serviceType: 'Hotel Booking',
      amount: 4200,
      tax: 756,
      totalAmount: 4956,
      status: 'sent',
      issueDate: '2024-01-12',
      dueDate: '2024-01-27',
      createdAt: '2024-01-12T14:20:00'
    },
    {
      id: 'INV-003',
      bookingId: 'BK003',
      customerName: 'Amit Kumar',
      customerEmail: 'amit@email.com',
      serviceType: 'Airport Transfer',
      amount: 1200,
      tax: 216,
      totalAmount: 1416,
      status: 'paid',
      issueDate: '2024-01-08',
      dueDate: '2024-01-23',
      paymentDate: '2024-01-15',
      createdAt: '2024-01-08T09:15:00'
    },
    {
      id: 'INV-004',
      bookingId: 'BK004',
      customerName: 'Sneha Reddy',
      customerEmail: 'sneha@email.com',
      serviceType: 'Wedding Car',
      amount: 8500,
      tax: 1530,
      totalAmount: 10030,
      status: 'overdue',
      issueDate: '2024-01-05',
      dueDate: '2024-01-20',
      createdAt: '2024-01-05T11:45:00'
    },
    {
      id: 'INV-005',
      bookingId: 'BK005',
      customerName: 'Corporate Solutions Ltd',
      customerEmail: 'bookings@corp.com',
      serviceType: 'Corporate Cabs',
      amount: 15000,
      tax: 2700,
      totalAmount: 17700,
      status: 'draft',
      issueDate: '2024-01-15',
      dueDate: '2024-01-30',
      createdAt: '2024-01-15T16:30:00'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-success text-success-foreground';
      case 'sent': return 'bg-primary text-primary-foreground';
      case 'overdue': return 'bg-destructive text-destructive-foreground';
      case 'draft': return 'bg-muted text-muted-foreground';
      case 'cancelled': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return CheckCircle;
      case 'sent': return Send;
      case 'overdue': return AlertCircle;
      case 'draft': return FileText;
      default: return Clock;
    }
  };

  const handleGenerateInvoice = () => {
    toast({
      title: "Invoice Generated",
      description: "New invoice has been created successfully.",
    });
  };

  const handleSendInvoice = (invoiceId: string) => {
    toast({
      title: "Invoice Sent",
      description: `Invoice ${invoiceId} has been sent to the customer.`,
    });
  };

  const handleDownloadInvoice = (invoiceId: string) => {
    toast({
      title: "Download Started",
      description: `Downloading invoice ${invoiceId} as PDF.`,
    });
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.bookingId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Calculate summary stats
  const totalAmount = invoices.reduce((sum, inv) => sum + inv.totalAmount, 0);
  const paidAmount = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.totalAmount, 0);
  const pendingAmount = invoices.filter(inv => inv.status !== 'paid' && inv.status !== 'cancelled').reduce((sum, inv) => sum + inv.totalAmount, 0);
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.totalAmount, 0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Billing System</h2>
          <p className="text-muted-foreground">Manage invoices, payments, and financial records</p>
        </div>
        <Button onClick={handleGenerateInvoice} className="bg-gradient-hero hover:shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          Generate Invoice
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold text-foreground">₹{totalAmount.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Paid Amount</p>
                <p className="text-2xl font-bold text-success">₹{paidAmount.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Amount</p>
                <p className="text-2xl font-bold text-warning">₹{pendingAmount.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-card border-0 hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overdue Amount</p>
                <p className="text-2xl font-bold text-destructive">₹{overdueAmount.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="shadow-card bg-card border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search invoices..."
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
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            {/* Date Range */}
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger>
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>

            {/* Export */}
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Invoices Table */}
      <Card className="shadow-card bg-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5 text-primary" />
            Invoice Records
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Invoice</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Service</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Due Date</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice) => {
                  const StatusIcon = getStatusIcon(invoice.status);
                  
                  return (
                    <tr key={invoice.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                      <td className="p-4">
                        <div>
                          <span className="font-medium text-primary">{invoice.id}</span>
                          <p className="text-xs text-muted-foreground">Booking: {invoice.bookingId}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <span className="font-medium text-foreground">{invoice.customerName}</span>
                          <p className="text-xs text-muted-foreground">{invoice.customerEmail}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-muted-foreground">{invoice.serviceType}</span>
                      </td>
                      <td className="p-4">
                        <div>
                          <span className="font-semibold text-foreground">₹{invoice.totalAmount}</span>
                          <p className="text-xs text-muted-foreground">Tax: ₹{invoice.tax}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusColor(invoice.status)}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {invoice.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground text-sm">{invoice.dueDate}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => handleDownloadInvoice(invoice.id)}
                          >
                            <Download className="h-3 w-3" />
                          </Button>
                          {invoice.status === 'draft' && (
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => handleSendInvoice(invoice.id)}
                            >
                              <Send className="h-3 w-3" />
                            </Button>
                          )}
                          <Button size="sm" variant="ghost">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-card bg-card border-0">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Printer className="h-6 w-6" />
              <div className="text-center">
                <p className="font-semibold">Bulk Print</p>
                <p className="text-xs text-muted-foreground">Print multiple invoices</p>
              </div>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Send className="h-6 w-6" />
              <div className="text-center">
                <p className="font-semibold">Send Reminders</p>
                <p className="text-xs text-muted-foreground">Email payment reminders</p>
              </div>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Receipt className="h-6 w-6" />
              <div className="text-center">
                <p className="font-semibold">Tax Reports</p>
                <p className="text-xs text-muted-foreground">Generate tax summaries</p>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingSystem;