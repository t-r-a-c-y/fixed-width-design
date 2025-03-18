
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Users, Bandage, Users2, AlertTriangle, Download } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import RecoveredChart from '@/components/dashboard/RecoveredChart';
import VaccinationChart from '@/components/dashboard/VaccinationChart';
import PredictionsChart from '@/components/dashboard/PredictionsChart';
import CasesChart from '@/components/dashboard/CasesChart';
import HospitalTable from '@/components/dashboard/HospitalTable';
import OutbreakMap from '@/components/dashboard/OutbreakMap';
import SeparationChart from '@/components/dashboard/SeparationChart';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Pandemic Updates */}
        <div className="bg-white rounded-lg p-6 animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold">Pandemic Updates</h2>
              <p className="text-sm text-gray-500">New Highlights</p>
            </div>
            <Button variant="outline" size="sm" className="h-9 px-4 flex items-center gap-2">
              <Download size={16} />
              Export
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              icon={<Users size={20} />}
              title="Total Cases"
              value="19453"
              change="+95 from yesterday"
              iconColor="#2DB4F8"
              changeType="increase"
            />
            <StatCard 
              icon={<Bandage size={20} />}
              title="Are in treatment"
              value="40000"
              change="+53 from yesterday"
              iconColor="#307FE2"
              changeType="increase"
            />
            <StatCard 
              icon={<AlertTriangle size={20} />}
              title="Dead"
              value="5000"
              change="+12 from yesterday"
              iconColor="#FF6B6B"
              changeType="increase"
            />
            <StatCard 
              icon={<Users2 size={20} />}
              title="Total Quarantized"
              value="10"
              change="0.5% from yesterday"
              iconColor="#20C997"
              changeType="neutral"
            />
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecoveredChart />
          <div className="grid grid-cols-1 gap-6">
            <PredictionsChart />
          </div>
        </div>
        
        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <VaccinationChart />
          <CasesChart />
          <SeparationChart />
        </div>
        
        {/* Charts Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HospitalTable />
          <OutbreakMap />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
