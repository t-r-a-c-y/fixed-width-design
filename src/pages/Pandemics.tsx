
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Phone, Mail, MapPin, ArrowUpRight, ArrowDownRight, Users, Info } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const PandemicsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Rwanda Pandemic Overview</h1>
        </div>
        
        {/* Key Stats Cards */}
        <div className="grid grid-cols-5 gap-4">
          {statsCards.map((card, index) => (
            <StatsCard key={index} {...card} />
          ))}
        </div>
        
        {/* Main Content - 2 columns */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <OutbreakMap />
            <HospitalCapacityTable />
            <VaccinationDataTable />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <VaccinationBreakdown />
            <SymptomsBreakdown />
            <PandemicMeasures />
            <EmergencyContact />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, change, changeType, color }: {
  title: string;
  value: string;
  change: string;
  changeType?: 'increase' | 'decrease';
  color: string;
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <div className="mt-2 flex items-center text-xs">
          {changeType === 'increase' ? (
            <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
          ) : (
            <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
          )}
          <span className={changeType === 'increase' ? 'text-green-500' : 'text-red-500'}>
            {change}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

// Outbreak Map Component
const OutbreakMap = () => {
  const regions = [
    { id: 'low', name: 'Low', color: '#4CD964' },
    { id: 'moderate', name: 'Moderate', color: '#FEC6A1' },
    { id: 'high', name: 'High', color: '#FF6B6B' }
  ];
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Infection Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] relative bg-gray-100 rounded-md flex items-center justify-center">
          <img 
            src="/lovable-uploads/2ab9761e-65bf-4352-95d4-2be5606b138b.png" 
            alt="Pandemic Map" 
            className="h-full object-cover opacity-40"
          />
          <div className="absolute top-2 right-2 bg-white p-2 rounded-md shadow-sm">
            <div className="text-xs font-medium mb-1">Prevalence</div>
            {regions.map((region) => (
              <div className="flex items-center gap-2 text-xs" key={region.id}>
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: region.color }}
                ></div>
                <span>{region.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Vaccination Breakdown Component
const VaccinationBreakdown = () => {
  const data = [
    { name: 'Jan', first: 4000, second: 2400 },
    { name: 'Feb', first: 3000, second: 1398 },
    { name: 'Mar', first: 2000, second: 9800 },
    { name: 'Apr', first: 2780, second: 3908 },
    { name: 'May', first: 1890, second: 4800 },
    { name: 'Jun', first: 2390, second: 3800 },
    { name: 'Jul', first: 3490, second: 4300 },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Vaccination Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              barSize={16}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  padding: '8px'
                }}
              />
              <Bar dataKey="first" name="First Dose" fill="#2DB4F8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="second" name="Second Dose" fill="#4CD964" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>First Dose</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Second Dose</span>
          </div>
          <div className="text-xs text-blue-500">See all data</div>
        </div>
      </CardContent>
    </Card>
  );
};

// Hospital Capacity Table Component
const HospitalCapacityTable = () => {
  const hospitalData = [
    { id: "KGH", name: "Kigali General Hospital", beds: 450, icu: 50, ventilators: 35, occupancy: 78 },
    { id: "RRH", name: "Ruhengeri Referral Hospital", beds: 320, icu: 30, ventilators: 25, occupancy: 65 },
    { id: "HHC", name: "Huye Health Center", beds: 200, icu: 15, ventilators: 10, occupancy: 88 },
    { id: "KMC", name: "Kanombe Military Clinic", beds: 150, icu: 20, ventilators: 15, occupancy: 45 }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Health Center Capacity</CardTitle>
        <div className="text-xs text-gray-500 flex justify-between">
          <span>Last 24h: 15:35 - 16:35</span>
          <span className="text-blue-500">See all</span>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs font-medium">ID</TableHead>
              <TableHead className="text-xs font-medium">Name</TableHead>
              <TableHead className="text-xs font-medium text-right">Beds</TableHead>
              <TableHead className="text-xs font-medium text-right">ICU</TableHead>
              <TableHead className="text-xs font-medium text-right">Vent.</TableHead>
              <TableHead className="text-xs font-medium text-right">Occ.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hospitalData.map((hospital) => (
              <TableRow key={hospital.id}>
                <TableCell className="text-xs">{hospital.id}</TableCell>
                <TableCell className="text-xs font-medium">{hospital.name}</TableCell>
                <TableCell className="text-xs text-right">{hospital.beds}</TableCell>
                <TableCell className="text-xs text-right">{hospital.icu}</TableCell>
                <TableCell className="text-xs text-right">{hospital.ventilators}</TableCell>
                <TableCell className="text-xs text-right font-medium">{hospital.occupancy}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

// Symptoms Breakdown Component
const SymptomsBreakdown = () => {
  const symptomsData = [
    { name: "Fever (38°C/100.4°F)", percentage: 85 },
    { name: "Dry cough", percentage: 70 },
    { name: "Fatigue", percentage: 65 },
    { name: "Shortness of breath", percentage: 50 },
    { name: "Loss of taste/smell", percentage: 40 },
    { name: "Headache", percentage: 30 },
    { name: "Body aches", percentage: 25 },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-medium">Common Symptoms (per 100,000 people)</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {symptomsData.map((symptom, index) => (
            <div key={index}>
              <div className="flex justify-between text-xs mb-1">
                <span>{symptom.name}</span>
                <span className="font-medium">{symptom.percentage}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-blue-500" 
                  style={{ width: `${symptom.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Vaccination Data Table Component
const VaccinationDataTable = () => {
  const vaccineData = [
    { id: 1, type: "RNA vaccine", producer: "BioNTech/Pfizer", count: "323,000 doses", status: "In use" },
    { id: 2, type: "Viral vector", producer: "Oxford/AstraZeneca", count: "200,000 doses", status: "In use" },
    { id: 3, type: "Inactivated", producer: "Sinovac Biotech", count: "145,000 doses", status: "In use" },
    { id: 4, type: "Protein subunit", producer: "Novavax", count: "80,000 doses", status: "On hold" }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Vaccination Data (type)</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs font-medium">#</TableHead>
              <TableHead className="text-xs font-medium">Type</TableHead>
              <TableHead className="text-xs font-medium">Producer</TableHead>
              <TableHead className="text-xs font-medium">Count</TableHead>
              <TableHead className="text-xs font-medium text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vaccineData.map((vaccine) => (
              <TableRow key={vaccine.id}>
                <TableCell className="text-xs">{vaccine.id}</TableCell>
                <TableCell className="text-xs font-medium">{vaccine.type}</TableCell>
                <TableCell className="text-xs">{vaccine.producer}</TableCell>
                <TableCell className="text-xs">{vaccine.count}</TableCell>
                <TableCell className="text-xs">
                  <div className={`px-2 py-1 rounded-full text-xs text-center w-16 mx-auto ${
                    vaccine.status === 'In use' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {vaccine.status}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

// Pandemic Measures Component
const PandemicMeasures = () => {
  const measures = [
    { id: 1, measure: "Social distancing", enforcement: "Recommended (public spaces)", status: "Active" },
    { id: 2, measure: "Face coverings", enforcement: "Required in public transport", status: "Active" },
    { id: 3, measure: "Large gatherings", enforcement: "Limited to 50 people", status: "Active" },
    { id: 4, measure: "School closures", enforcement: "Only in hot zones", status: "Active" },
    { id: 5, measure: "Border restrictions", enforcement: "Test on arrival", status: "Active" }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Pandemic Control Measures</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs font-medium">#</TableHead>
              <TableHead className="text-xs font-medium">Measure</TableHead>
              <TableHead className="text-xs font-medium">Enforcement</TableHead>
              <TableHead className="text-xs font-medium text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {measures.map((measure) => (
              <TableRow key={measure.id}>
                <TableCell className="text-xs">{measure.id}</TableCell>
                <TableCell className="text-xs font-medium">{measure.measure}</TableCell>
                <TableCell className="text-xs">{measure.enforcement}</TableCell>
                <TableCell className="text-xs">
                  <div className="px-2 py-1 rounded-full text-xs text-center w-16 mx-auto bg-green-50 text-green-600">
                    {measure.status}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

// Emergency Contact Component
const EmergencyContact = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Emergency Contact/Help</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 p-2 rounded-md">
                <Phone size={16} className="text-gray-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Emergency Hotline</p>
                <p className="text-sm font-medium">+250 788 123 456</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 p-2 rounded-md">
                <Mail size={16} className="text-gray-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email Support</p>
                <p className="text-sm font-medium">support@pandemic.rw</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 p-2 rounded-md">
                <MapPin size={16} className="text-gray-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Central Response Unit</p>
                <p className="text-sm font-medium">Kigali, Rwanda</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl font-bold text-blue-500">112</div>
              <p className="text-xs text-blue-700">Emergency Services</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Sample data for stats cards
const statsCards = [
  {
    title: "Confirmed Cases",
    value: "33,495",
    change: "+1.2% from last week",
    changeType: "increase",
    color: "#2DB4F8"
  },
  {
    title: "Active Cases",
    value: "10,487",
    change: "-3.6% from last week",
    changeType: "decrease",
    color: "#FF9F43"
  },
  {
    title: "Recovered",
    value: "8,159",
    change: "+4.5% from last week",
    changeType: "increase",
    color: "#4CD964"
  },
  {
    title: "Deaths",
    value: "2,845",
    change: "+0.8% from last week",
    changeType: "increase",
    color: "#FF6B6B"
  },
  {
    title: "Tests",
    value: "5,046",
    change: "+2.3% from last week",
    changeType: "increase",
    color: "#A78BFA"
  }
];

export default PandemicsPage;
