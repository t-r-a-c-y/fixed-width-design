
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, BarChart2, Activity, Heart, Milestone } from 'lucide-react';

const PredictionSummaryCards: React.FC = () => {
  const stats = [
    {
      id: 1,
      title: "Total Cases",
      value: "89,935",
      change: "+3.7",
      changeText: "This week",
      changeType: "increase",
      icon: <BarChart2 size={20} />,
      color: "#4f46e5"
    },
    {
      id: 2,
      title: "Total Recoveries",
      value: "23,283.5",
      change: "+1.4",
      changeText: "This week",
      changeType: "increase",
      icon: <Activity size={20} />,
      color: "#06b6d4"
    },
    {
      id: 3,
      title: "Total Vaccinated Cases",
      value: "46,827",
      change: "-3.5",
      changeText: "This week",
      changeType: "decrease",
      icon: <Milestone size={20} />,
      color: "#10b981"
    },
    {
      id: 4,
      title: "Total Deaths",
      value: "124,854",
      change: "+2.8",
      changeText: "This week",
      changeType: "increase",
      icon: <Heart size={20} />,
      color: "#ef4444"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.id}>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: stat.color }}
              >
                {stat.icon}
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {stat.changeType === "increase" ? (
                <ArrowUpRight size={16} className="text-green-500 mr-1" />
              ) : (
                <ArrowDownRight size={16} className="text-red-500 mr-1" />
              )}
              <span className={`text-sm ${stat.changeType === "increase" ? "text-green-500" : "text-red-500"}`}>
                {stat.change}% {stat.changeText}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PredictionSummaryCards;
