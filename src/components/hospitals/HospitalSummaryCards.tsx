
import React from 'react';
import HospitalStatCard from './HospitalStatCard';
import { Hospital, Bed, Activity, Heart } from 'lucide-react';

const HospitalSummaryCards: React.FC = () => {
  return (
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
  );
};

export default HospitalSummaryCards;
