
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import DonutChart from './DonutChart';
import HospitalChart from './HospitalChart';
import ProgressBar from './ProgressBar';

interface DonutData {
  name: string;
  value: number;
  color: string;
}

interface ChartData {
  name: string;
  value: number;
}

interface HospitalStatsProps {
  occupancyData: DonutData[];
  patientAdmissionsData: ChartData[];
}

const HospitalStats: React.FC<HospitalStatsProps> = ({ occupancyData, patientAdmissionsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Hospital Occupancy</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <DonutChart data={occupancyData} />
          <div className="mt-4 grid grid-cols-2 gap-4 w-full">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Occupied</p>
              <p className="text-lg font-bold">65%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Available</p>
              <p className="text-lg font-bold">35%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">COVID-19 Patient Admissions</CardTitle>
        </CardHeader>
        <CardContent>
          <HospitalChart 
            data={patientAdmissionsData} 
            type="bar"
            color="#f97316"
            height={180}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Hospital Resource Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">COVID-19 Wards</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <ProgressBar value={75} color="#4f46e5" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">ICU Beds</span>
                <span className="text-sm font-medium">82%</span>
              </div>
              <ProgressBar value={82} color="#ef4444" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Ventilators</span>
                <span className="text-sm font-medium">60%</span>
              </div>
              <ProgressBar value={60} color="#f97316" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Testing Capacity</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <ProgressBar value={45} color="#10b981" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Staff Allocation</span>
                <span className="text-sm font-medium">68%</span>
              </div>
              <ProgressBar value={68} color="#a855f7" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HospitalStats;
