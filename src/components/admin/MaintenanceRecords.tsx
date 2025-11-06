import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Car, Calendar, Wrench } from 'lucide-react';

const MaintenanceRecords = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Maintenance Records</h2>
        <p className="text-muted-foreground">Vehicle maintenance scheduling and history</p>
      </div>

      <Card className="shadow-card bg-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Vehicle Maintenance
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center">
          <Wrench className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">Maintenance System</h3>
          <p className="text-muted-foreground mb-4">Track vehicle servicing, repairs, and maintenance schedules</p>
          <Button className="bg-gradient-hero">
            <Car className="h-4 w-4 mr-2" />
            Add Maintenance Record
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaintenanceRecords;