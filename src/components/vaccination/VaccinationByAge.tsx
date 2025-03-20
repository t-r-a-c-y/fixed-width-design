
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Children (0-12)', value: 25, color: '#0088FE' },
  { name: 'Teens (13-19)', value: 20, color: '#00C49F' },
  { name: 'Adults (20-60)', value: 35, color: '#FFBB28' },
  { name: 'Seniors (60+)', value: 20, color: '#FF8042' },
];

const VaccinationByAge: React.FC = () => {
  return (
    <div className="h-[200px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={180}
            endAngle={0}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-2xl font-bold">2.3x</div>
        <div className="text-xs text-gray-500">Vaccination Ratio</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="text-[10px]">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VaccinationByAge;
