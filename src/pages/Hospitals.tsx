
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import HospitalHeader from '@/components/hospitals/HospitalHeader';
import HospitalSummaryCards from '@/components/hospitals/HospitalSummaryCards';
import HospitalCharts from '@/components/hospitals/HospitalCharts';
import HospitalStats from '@/components/hospitals/HospitalStats';
import HospitalsListSection from '@/components/hospitals/HospitalsListSection';
import { 
  occupancyData, 
  admissionsData, 
  treatmentData, 
  patientAdmissionsData, 
  hospitals 
} from '@/data/hospitalsData';

const HospitalsPage: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Implement search logic here
  };

  const handleAddHospital = () => {
    console.log('Adding new hospital');
    // Implement add hospital logic here
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <HospitalHeader 
          onSearch={handleSearch} 
          onAddHospital={handleAddHospital} 
        />

        {/* Summary Cards */}
        <HospitalSummaryCards />

        {/* Charts Section */}
        <HospitalCharts 
          admissionsData={admissionsData} 
          treatmentData={treatmentData} 
        />

        {/* Donut Charts and Stats */}
        <HospitalStats 
          occupancyData={occupancyData} 
          patientAdmissionsData={patientAdmissionsData} 
        />

        {/* Hospital List */}
        <HospitalsListSection hospitals={hospitals} />
      </div>
    </DashboardLayout>
  );
};

export default HospitalsPage;
