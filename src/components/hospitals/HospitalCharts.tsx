
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import HospitalChart from './HospitalChart';

// Chart data types
interface ChartData {
  name: string;
  value: number;
}

interface HospitalChartsProps {
  admissionsData: ChartData[];
  treatmentData: ChartData[];
}

const HospitalCharts: React.FC<HospitalChartsProps> = ({ admissionsData, treatmentData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Monthly Hospital Admissions</CardTitle>
        </CardHeader>
        <CardContent>
          <HospitalChart 
            data={admissionsData} 
            type="bar"
            color="#4f46e5"
            height={220}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Average Treatment Duration (Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <HospitalChart 
            data={treatmentData} 
            type="line"
            color="#10b981"
            height={220}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default HospitalCharts;
