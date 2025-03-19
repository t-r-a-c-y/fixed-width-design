
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HealthReport = () => {
  const data = [50, 70, 60, 80, 90, 70, 80, 75, 85, 65, 75, 85];
  const barWidth = 100 / data.length - 2;
  
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium">Health Report</h3>
        <Button variant="ghost" size="sm" className="text-white flex items-center text-xs gap-1 p-0">
          March 2025
          <ChevronDown size={14} />
        </Button>
      </div>
      
      <div className="h-32 flex items-end gap-[2px]">
        {data.map((value, i) => (
          <div 
            key={i}
            style={{ 
              height: `${value}%`,
              width: `${barWidth}%` 
            }}
            className="bg-blue-400 opacity-70 rounded-t"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HealthReport;
