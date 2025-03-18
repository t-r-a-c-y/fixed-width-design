
import React from 'react';
import { cn } from '@/lib/utils';

interface Hospital {
  id: string;
  name: string;
  patients: number;
  capacity: number;
  occupancy: number;
  color: string;
}

const hospitals: Hospital[] = [
  { id: "01", name: "Kismandu Hospital", patients: 120, capacity: 150, occupancy: 80, color: "#2DB4F8" },
  { id: "02", name: "King Faisal Hospital", patients: 85, capacity: 100, occupancy: 85, color: "#4CD964" },
  { id: "03", name: "Legacy Clinic", patients: 54, capacity: 70, occupancy: 77, color: "#A78BFA" },
  { id: "04", name: "Rwanda Poly-clinic", patients: 67, capacity: 80, occupancy: 84, color: "#FF9F43" },
];

const HospitalTable = () => {
  return (
    <div className="bg-white rounded-lg p-5 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Hospitals that are treating people with the pandemic</h3>
        <div className="text-sm text-gray-500">Occupancy</div>
      </div>
      
      <div className="grid grid-cols-[auto_1fr_auto] gap-4 mb-4 text-sm font-medium text-gray-500 px-1">
        <div>#</div>
        <div>Name</div>
        <div></div>
      </div>
      
      <div className="space-y-4">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
            <div className="text-sm text-gray-500">{hospital.id}</div>
            <div>
              <p className="font-medium">{hospital.name}</p>
              <div className="mt-2 w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="h-2 rounded-full" 
                  style={{ width: `${hospital.occupancy}%`, backgroundColor: hospital.color }}
                ></div>
              </div>
            </div>
            <div className="text-sm font-medium" style={{ color: hospital.color }}>{hospital.occupancy}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalTable;
