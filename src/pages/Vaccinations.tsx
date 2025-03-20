
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Filter } from 'lucide-react';
import VaccinationSummaryCards from '@/components/vaccination/VaccinationSummaryCards';
import VaccinationMap from '@/components/vaccination/VaccinationMap';
import VaccinationProgressChart from '@/components/vaccination/VaccinationProgressChart';
import VaccinationByAge from '@/components/vaccination/VaccinationByAge';
import VaccinationActivity from '@/components/vaccination/VaccinationActivity';
import WeeklyVaccinationChart from '@/components/vaccination/WeeklyVaccinationChart';
import VaccinationReports from '@/components/vaccination/VaccinationReports';

const VaccinationsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="w-full space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vaccination</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 rounded-md bg-white border border-gray-200 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <VaccinationSummaryCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold">Vaccination Coverage By Region</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500">
                  Details <ChevronDown size={16} />
                </Button>
              </div>
              <VaccinationMap />
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs">80-100% Covered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-xs">60-80% Covered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <span className="text-xs">40-60% Covered By Region</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold">Vaccination Progress By Center</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500">
                  Export <ChevronDown size={16} />
                </Button>
              </div>
              <VaccinationProgressChart />
              <VaccinationReports />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold">Vaccination Progress Over Time</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 text-xs bg-white">
                    <Filter size={14} className="mr-1" /> Filter Results
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 text-xs bg-white">
                    <Download size={14} className="mr-1" /> Download
                  </Button>
                </div>
              </div>
              <Tabs defaultValue="default">
                <TabsList className="mb-4">
                  <TabsTrigger value="default" className="text-xs">Default</TabsTrigger>
                  <TabsTrigger value="prev" className="text-xs">Prev</TabsTrigger>
                </TabsList>
                <TabsContent value="default">
                  <div className="h-[240px]">
                    <VaccinationProgressChart timeRange="monthly" />
                  </div>
                </TabsContent>
                <TabsContent value="prev">
                  <div className="h-[240px]">
                    <VaccinationProgressChart timeRange="weekly" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold">Vaccination by Age Group</h3>
              </div>
              <VaccinationByAge />
              <div className="mt-5 bg-gray-50 p-3 rounded-md">
                <h4 className="font-semibold mb-2">Snapshot</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Children (0-12 years)</p>
                    <p className="font-bold">12,051.48</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Teens (13-19 years)</p>
                    <p className="font-bold">12,000.21</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Adults (20-60 years)</p>
                    <p className="font-bold">10,841.64</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Seniors (60+ years)</p>
                    <p className="font-bold">16,265.42</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-500">AVERAGE VACCINATIONS / PATIENT</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">13,765.00</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xs text-gray-500">05:56 PM</p>
                      <p className="text-xs text-gray-500">01/27/23</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold">Weekly Vaccination Trends</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500">
                  Details <ChevronDown size={16} />
                </Button>
              </div>
              <WeeklyVaccinationChart />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold">Latest Activities</h3>
                <Tabs defaultValue="default">
                  <TabsList>
                    <TabsTrigger value="default" className="text-xs">Default</TabsTrigger>
                    <TabsTrigger value="prev" className="text-xs">Prev</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <VaccinationActivity />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VaccinationsPage;
