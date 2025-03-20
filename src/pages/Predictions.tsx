
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PredictionSummaryCards from '@/components/predictions/PredictionSummaryCards';
import PredictionChart from '@/components/predictions/PredictionChart';
import RegionRiskChart from '@/components/predictions/RegionRiskChart';
import MutationAnalysis from '@/components/predictions/MutationAnalysis';
import InfectionGrowthRate from '@/components/predictions/InfectionGrowthRate';
import QuarantineStatus from '@/components/predictions/QuarantineStatus';
import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PredictionsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Predictions</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-64 focus:outline-none focus:ring-2 focus:ring-blue-light focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <PredictionSummaryCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Predictions</h2>
                <Tabs defaultValue="week">
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="day">Day</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <PredictionChart />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Risk Level For Regions</h2>
                <Button variant="ghost" size="sm" className="p-1">
                  <ChevronDown size={16} />
                </Button>
              </div>
              <RegionRiskChart />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Current Infection Growth Rate</h2>
                <Button variant="outline" size="sm" className="text-xs">
                  This Week <ChevronDown size={12} className="ml-1" />
                </Button>
              </div>
              <InfectionGrowthRate />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Virus Mutation Probability</h2>
                <Button variant="outline" size="sm" className="text-xs">
                  This Week <ChevronDown size={12} className="ml-1" />
                </Button>
              </div>
              <MutationAnalysis />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Quarantine & Restriction Urgency</h2>
                <Button variant="outline" size="sm" className="text-xs">
                  This Week <ChevronDown size={12} className="ml-1" />
                </Button>
              </div>
              <QuarantineStatus />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PredictionsPage;
