
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowDown, ArrowUp, Activity, Users, Syringe, Clock } from 'lucide-react';

const VaccinationSummaryCards: React.FC = () => {
  const stats = [
    {
      title: 'Total Vaccination Centers',
      value: '89,935',
      change: '+1.4% since last week',
      changeType: 'increase',
      icon: <Activity className="text-white" size={16} />,
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Total Fully Vaccinated People',
      value: '23,283.5',
      change: '-1.5% since last week',
      changeType: 'decrease',
      icon: <Users className="text-white" size={16} />,
      iconBg: 'bg-purple-500',
    },
    {
      title: 'Total Doses Administered',
      value: '46,827',
      change: '+3.2% since last week',
      changeType: 'increase',
      icon: <Syringe className="text-white" size={16} />,
      iconBg: 'bg-green-500',
    },
    {
      title: 'Pending Second Dose',
      value: '124,854',
      change: '+1.0% since last week',
      changeType: 'increase',
      icon: <Clock className="text-white" size={16} />,
      iconBg: 'bg-orange-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
              <div className="flex items-center gap-1 mt-1">
                {stat.changeType === 'increase' ? (
                  <ArrowUp className="text-green-500" size={14} />
                ) : (
                  <ArrowDown className="text-red-500" size={14} />
                )}
                <span className={`text-xs ${stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <div className={`${stat.iconBg} w-8 h-8 rounded-full flex items-center justify-center`}>
              {stat.icon}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default VaccinationSummaryCards;
