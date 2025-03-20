
import React from 'react';
import { Dot } from 'lucide-react';

const activities = [
  { 
    id: 1, 
    date: '2023-05-22',
    time: '09:15',
    title: 'New Vaccine Shipment Arrived',
    status: 'completed',
    highlight: '#4096ff'
  },
  { 
    id: 2, 
    date: '2023-05-21',
    time: '14:35',
    title: 'Vaccination Campaign Launched',
    status: 'in-progress',
    highlight: '#faad14'
  },
  { 
    id: 3, 
    date: '2023-05-20',
    time: '17:45',
    title: 'Rural Vaccine Supply Restocked',
    status: 'completed',
    highlight: '#52c41a'
  },
  { 
    id: 4, 
    date: '2023-05-19',
    time: '08:05',
    title: 'New Regional Vaccination Center Opening',
    status: 'upcoming',
    highlight: '#ff4d4f'
  },
];

const VaccinationActivity: React.FC = () => {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3 border-b border-gray-100 pb-3">
          <div className="min-w-[80px] text-xs text-gray-500">
            {activity.date.slice(-5).replace('-', '/')} {activity.time}
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium">{activity.title}</h4>
            <div className="flex items-center gap-1 mt-1 text-xs">
              <span 
                className="inline-block w-2 h-2 rounded-full" 
                style={{ backgroundColor: activity.highlight }}
              ></span>
              <span 
                className="text-gray-500 capitalize"
                style={{ color: activity.highlight }}
              >
                {activity.status}
              </span>
            </div>
          </div>
          <div>
            <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100">
              {activity.status === 'completed' ? 'DONE' : activity.status === 'in-progress' ? 'ACTIVE' : 'NEW'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VaccinationActivity;
