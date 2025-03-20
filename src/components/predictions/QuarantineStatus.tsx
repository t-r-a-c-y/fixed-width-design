
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Progress } from '@/components/ui/progress';

const QuarantineStatus: React.FC = () => {
  const data = [
    { name: 'Previous', value: 2592 },
    { name: 'Current', value: 3574 },
  ];
  
  const COLORS = ['#e4e4e7', '#3b82f6'];

  return (
    <div className="space-y-6">
      <div className="relative h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold">27%</p>
          <p className="text-xs text-gray-500">Increase</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs">Previous:</span>
          </div>
          <span className="text-xs font-semibold">2592</span>
        </div>
        <Progress value={40} className="h-2" />
        
        <div className="flex items-center justify-between mb-1 mt-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <span className="text-xs">Current:</span>
          </div>
          <span className="text-xs font-semibold">3574</span>
        </div>
        <Progress value={60} className="h-2 bg-gray-200" />
      </div>
    </div>
  );
};

export default QuarantineStatus;
