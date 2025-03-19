
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'Jack Dane',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    status: 'Quarantined',
    location: 'Nyarugenge, Kigali',
    timeAgo: '10 min ago',
    statusColor: '#4CD964'
  },
  {
    id: 2,
    name: 'Magdalene Angel',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    status: 'Hospitalized',
    location: 'Gasabo, Kigali',
    timeAgo: '3 mins ago',
    statusColor: '#FF3B30'
  },
  {
    id: 3,
    name: 'Kendall Jenner',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    status: 'Hospitalized',
    location: 'Gasabo, Kigali',
    timeAgo: '20 mins ago',
    statusColor: '#FF3B30'
  }
];

const ActivePatients = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-lg">Active Patients</h2>
        <Button variant="outline" size="sm" className="h-8 flex items-center gap-1">
          1st, August 2024
          <ChevronDown size={14} />
        </Button>
      </div>
      
      <div className="space-y-5">
        {patients.map((patient) => (
          <div key={patient.id} className="flex flex-col">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                <img 
                  src={patient.avatar}
                  alt={patient.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium">{patient.name}</h3>
                <p className="text-xs text-gray-500">{patient.location}</p>
              </div>
              <Button variant="ghost" className="ml-auto text-gray-400">
                •••
              </Button>
            </div>
            
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-1">
              <div 
                className="h-full rounded-full" 
                style={{ 
                  width: patient.id === 1 ? '70%' : patient.id === 2 ? '85%' : '60%',
                  backgroundColor: patient.statusColor 
                }}
              ></div>
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span>{patient.status}</span>
              <span className="text-gray-500">{patient.timeAgo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivePatients;
