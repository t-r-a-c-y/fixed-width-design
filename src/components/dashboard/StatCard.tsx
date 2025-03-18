
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  change: string;
  iconColor: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  change,
  iconColor,
  changeType = 'neutral'
}) => {
  const getChangeColor = () => {
    if (changeType === 'increase') return 'text-green-500';
    if (changeType === 'decrease') return 'text-red-500';
    return 'text-gray-500';
  };

  return (
    <div className="bg-white rounded-lg p-3 transition-all duration-300 hover:shadow-sm animate-slideUp">
      <div 
        className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white mb-2")}
        style={{ backgroundColor: iconColor }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold">{value}</h3>
      <p className="text-gray-600 text-xs">{title}</p>
      <p className={cn("text-[10px] mt-1", getChangeColor())}>
        {change}
      </p>
    </div>
  );
};

export default StatCard;
