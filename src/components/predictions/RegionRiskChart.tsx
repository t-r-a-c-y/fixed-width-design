
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'High-range', value: 40, color: '#f97316' },
  { name: 'Medium', value: 30, color: '#3b82f6' },
  { name: 'Low-risk', value: 30, color: '#10b981' },
];

const RegionRiskChart: React.FC = () => {
  return (
    <div className="relative h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            strokeWidth={8}
            stroke="#fff"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="text-xs font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionRiskChart;
