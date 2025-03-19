
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Users, Bandage, Users2, AlertTriangle, Download } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import RecoveredChart from '@/components/dashboard/RecoveredChart';
import VaccinationChart from '@/components/dashboard/VaccinationChart';
import PredictionsChart from '@/components/dashboard/PredictionsChart';
import HospitalTable from '@/components/dashboard/HospitalTable';
import OutbreakMap from '@/components/dashboard/OutbreakMap';
import SeparationChart from '@/components/dashboard/SeparationChart';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        {/* First Row: Pandemic Updates and Recovered Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Pandemic Updates (2/3 width) */}
          <div className="bg-white rounded-lg p-4 lg:col-span-2 animate-fadeIn">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-lg font-bold">Pandemic Updates</h2>
                <p className="text-xs text-gray-500">New Highlights</p>
              </div>
              <Button variant="outline" size="sm" className="h-8 px-3 flex items-center gap-1">
                <Download size={14} />
                Export
              </Button>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <StatCard 
                icon={<Users size={18} />}
                title="Total Cases"
                value="19453"
                change="+95 from yesterday"
                iconColor="#2DB4F8"
                changeType="increase"
              />
              <StatCard 
                icon={<Bandage size={18} />}
                title="Are in treatment"
                value="40000"
                change="+53 from yesterday"
                iconColor="#307FE2"
                changeType="increase"
              />
              <StatCard 
                icon={<AlertTriangle size={18} />}
                title="Dead"
                value="5000"
                change="+12 from yesterday"
                iconColor="#FF6B6B"
                changeType="increase"
              />
              <StatCard 
                icon={<Users2 size={18} />}
                title="Total Quarantized"
                value="10"
                change="0.5% from yesterday"
                iconColor="#20C997"
                changeType="neutral"
              />
            </div>
          </div>
          
          {/* Recovered Chart (1/3 width) */}
          <div className="lg:col-span-1">
            <RecoveredChart />
          </div>
        </div>

        {/* Rearranged Charts Row: Vaccination, Predictions, Separation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <VaccinationChart />
          </div>
          <div className="lg:col-span-1">
            <PredictionsChart />
          </div>
          <div className="lg:col-span-1">
            <SeparationChart />
          </div>
        </div>
        
        {/* Third Row - Hospital Table, Outbreak Map, and 6 Degrees of Separation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <HospitalTable />
          </div>
          <div className="lg:col-span-1">
            <OutbreakMap />
          </div>
          <div className="lg:col-span-1">
            <SeparationChart />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
