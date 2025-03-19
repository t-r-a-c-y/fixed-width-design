
import React from 'react';
import { Download, ChevronDown, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import StatisticsSidebar from '@/components/statistics/StatisticsSidebar';
import TotalCasesChart from '@/components/statistics/TotalCasesChart';
import ActivePatients from '@/components/statistics/ActivePatients';
import AffectedAreas from '@/components/statistics/AffectedAreas';
import CaseList from '@/components/statistics/CaseList';
import HealthReport from '@/components/statistics/HealthReport';
import CalendarView from '@/components/statistics/CalendarView';
import KeyInsights from '@/components/statistics/KeyInsights';

const Statistics = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <StatisticsSidebar />
      
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Statistics</h1>
          <div className="flex items-center gap-2">
            <div className="relative w-[280px]">
              <input 
                type="text" 
                placeholder="Search here..." 
                className="w-full rounded-full py-2 px-4 pl-10 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#B4B4B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              Rwanda(RW)
              <ChevronDown size={14} />
            </Button>
            
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              🔔
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Muafiq</span>
                <span className="text-xs text-gray-500">Admin</span>
              </div>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="font-medium text-lg">Total Cases</h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>from</span>
                  <Button variant="outline" size="sm" className="h-8 text-xs flex items-center gap-1">
                    August 2024
                  </Button>
                  <span>to</span>
                  <Button variant="outline" size="sm" className="h-8 text-xs flex items-center gap-1">
                    Mar 2025
                  </Button>
                </div>
              </div>
              <TotalCasesChart />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <ActivePatients />
              <AffectedAreas />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium text-lg mb-4">Case List</h2>
              <CaseList />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Pandemic Overview</h2>
              <Button className="text-xs">Learn more</Button>
              
              <div className="mt-6">
                <HealthReport />
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">Daily Reports</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">March 2025</span>
                </div>
                <CalendarView />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-medium">Key Insights</h2>
                <Button variant="link" className="text-blue-500 text-xs px-0">View all</Button>
              </div>
              <KeyInsights />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
