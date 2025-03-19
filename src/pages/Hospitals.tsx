
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Activity, AlertCircle, Bed, Heart, Hospital, Search, Users } from 'lucide-react';
import HospitalStatCard from '@/components/hospitals/HospitalStatCard';
import HospitalChart from '@/components/hospitals/HospitalChart';
import DonutChart from '@/components/hospitals/DonutChart';
import HospitalsList from '@/components/hospitals/HospitalsList';

const occupancyData = [
  { name: 'Occupied', value: 65, color: '#4f46e5' },
  { name: 'Available', value: 35, color: '#e5e7eb' },
];

const admissionsData = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 40 },
  { name: 'Wed', value: 45 },
  { name: 'Thu', value: 65 },
  { name: 'Fri', value: 55 },
  { name: 'Sat', value: 80 },
  { name: 'Sun', value: 65 },
  { name: 'Mon', value: 70 },
  { name: 'Tue', value: 75 },
  { name: 'Wed', value: 85 },
  { name: 'Thu', value: 90 },
];

const treatmentData = [
  { name: 'Jan', value: 45 },
  { name: 'Feb', value: 52 },
  { name: 'Mar', value: 49 },
  { name: 'Apr', value: 62 },
  { name: 'May', value: 55 },
  { name: 'Jun', value: 72 },
  { name: 'Jul', value: 80 },
  { name: 'Aug', value: 75 },
  { name: 'Sep', value: 92 },
  { name: 'Oct', value: 85 },
  { name: 'Nov', value: 90 },
];

const patientAdmissionsData = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 28 },
  { name: 'Mar', value: 32 },
  { name: 'Apr', value: 35 },
  { name: 'May', value: 30 },
];

const hospitals = [
  {
    id: 'H001',
    name: 'Unity Medical Center',
    location: 'Kigali, Rwanda',
    beds: 350,
    occupancy: 75,
    doctors: 45,
    contact: {
      phone: '+250 123 456 789',
      email: 'info@unitymedical.rw',
    },
  },
  {
    id: 'H002',
    name: 'King Faisal Hospital',
    location: 'Kigali, Rwanda',
    beds: 280,
    occupancy: 82,
    doctors: 38,
    contact: {
      phone: '+250 789 012 345',
      email: 'contact@kingfaisal.rw',
    },
  },
  {
    id: 'H003',
    name: 'Rwanda Military Hospital',
    location: 'Kigali, Rwanda',
    beds: 200,
    occupancy: 65,
    doctors: 30,
    contact: {
      phone: '+250 456 789 012',
      email: 'info@rmh.rw',
    },
  },
  {
    id: 'H004',
    name: 'Legacy Clinics',
    location: 'Kigali, Rwanda',
    beds: 120,
    occupancy: 58,
    doctors: 22,
    contact: {
      phone: '+250 234 567 890',
      email: 'info@legacyclinics.rw',
    },
  },
  {
    id: 'H005',
    name: 'Kibagabaga Hospital',
    location: 'Kigali, Rwanda',
    beds: 180,
    occupancy: 71,
    doctors: 27,
    contact: {
      phone: '+250 345 678 901',
      email: 'info@kibagabaga.rw',
    },
  },
];

const HospitalsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Hospitals</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search hospitals..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-64 focus:outline-none focus:ring-2 focus:ring-blue-light focus:border-transparent"
              />
            </div>
            <button className="bg-blue-light text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Add Hospital
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HospitalStatCard 
            title="Total Hospitals" 
            value="4,109" 
            icon={<Hospital />}
            color="#4f46e5"
            secondaryValue="1,022"
            secondaryLabel="Accepting Patients"
          />
          
          <HospitalStatCard 
            title="Average Hospital Capacity" 
            value="67%" 
            icon={<Bed />}
            color="#f97316"
            secondaryValue="33%"
            secondaryLabel="Available"
          />
          
          <HospitalStatCard 
            title="Monthly Admissions" 
            value="$37k" 
            icon={<Activity />}
            color="#10b981"
            secondaryValue="$29k"
            secondaryLabel="Last Month"
          />
          
          <HospitalStatCard 
            title="Available COVID Beds" 
            value="$18k" 
            icon={<Heart />}
            color="#ef4444"
            secondaryValue="$20k"
            secondaryLabel="Allotted Funds"
          />
        </div>

        {/* Charts Section */}
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

        {/* Donut Charts and Stats */}
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

        {/* Hospital List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Hospitals List</CardTitle>
              <Tabs defaultValue="all" className="w-[300px]">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="full">Full Capacity</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <HospitalsList hospitals={hospitals} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HospitalsPage;
