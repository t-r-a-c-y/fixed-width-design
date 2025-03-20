
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HospitalsList from './HospitalsList';

interface Hospital {
  id: string;
  name: string;
  location: string;
  beds: number;
  occupancy: number;
  doctors: number;
  contact: {
    phone: string;
    email: string;
  };
}

interface HospitalsListSectionProps {
  hospitals: Hospital[];
}

const HospitalsListSection: React.FC<HospitalsListSectionProps> = ({ hospitals }) => {
  return (
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
  );
};

export default HospitalsListSection;
