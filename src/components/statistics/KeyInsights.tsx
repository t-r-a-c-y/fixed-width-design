
import React from 'react';
import { Vaccination, Hospital, Activity, BarChart, Info } from 'lucide-react';

const insights = [
  {
    id: 1,
    title: 'Vaccination Progress',
    subtitle: '23,456 vaccinated',
    icon: <Vaccination size={20} className="text-blue-500" />,
    color: 'bg-blue-50'
  },
  {
    id: 2,
    title: 'ICU Bed Occupancy',
    subtitle: '76% occupied',
    icon: <Hospital size={20} className="text-green-500" />,
    color: 'bg-green-50'
  },
  {
    id: 3,
    title: 'Testing Rate',
    subtitle: '10,000 tests/day',
    icon: <Activity size={20} className="text-blue-500" />,
    color: 'bg-blue-50'
  },
  {
    id: 4,
    title: 'New Variant Cases',
    subtitle: '24% increase',
    icon: <Info size={20} className="text-purple-500" />,
    color: 'bg-purple-50'
  },
  {
    id: 5,
    title: 'Recovery Rate',
    subtitle: '87%',
    icon: <BarChart size={20} className="text-green-500" />,
    color: 'bg-green-50'
  }
];

const KeyInsights = () => {
  return (
    <div className="space-y-4">
      {insights.map((insight) => (
        <div key={insight.id} className="flex items-center gap-3">
          <div className={`${insight.color} p-3 rounded-md`}>
            {insight.icon}
          </div>
          <div>
            <h3 className="text-sm font-medium">{insight.title}</h3>
            <p className="text-xs text-gray-500">{insight.subtitle}</p>
          </div>
          <div className="ml-auto">
            <div className="text-xs">...</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyInsights;
