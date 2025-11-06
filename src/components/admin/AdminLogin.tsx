import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, User, Eye, EyeOff, Shield } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication (replace with real authentication)
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!",
      });
      onLogin();
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" />
      
      <Card className="w-full max-w-md shadow-float bg-card border-0 relative z-10">
        <CardHeader className="text-center space-y-4">
          {/* Logo */}
          <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto shadow-glow">
            <Shield className="h-8 w-8 text-white" />
          </div>
          
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">Admin Login</CardTitle>
            <p className="text-muted-foreground mt-2">Access the Tours & Travels management panel</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="pl-10 hover:border-primary/50 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="pl-10 pr-10 hover:border-primary/50 transition-colors"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1 h-8 w-8 p-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Login Button */}
            <Button 
              type="submit" 
              className="w-full bg-gradient-hero hover:shadow-glow transition-all" 
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing In...
                </div>
              ) : (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  Sign In to Admin Panel
                </>
              )}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <p className="text-sm font-medium text-accent mb-2">Demo Credentials:</p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Username:</strong> admin</p>
              <p><strong>Password:</strong> admin123</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              🔒 Secure connection enabled. Your data is protected.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;