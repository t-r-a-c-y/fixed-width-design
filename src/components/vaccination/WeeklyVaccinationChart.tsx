
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'M', value: 240 },
  { name: 'T', value: 150 },
  { name: 'W', value: 320 },
  { name: 'T', value: 210 },
  { name: 'F', value: 270 },
  { name: 'S', value: 140 },
  { name: 'S', value: 90 },
];

const WeeklyVaccinationChart: React.FC = () => {
  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -20,
            bottom: 5,
          }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
          <XAxis 
            dataKey="name" 
            scale="band" 
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 'dataMax + 100']}
            ticks={[0, 100, 200, 300, 400]}
          />
          <Tooltip
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              padding: '8px'
            }}
            formatter={(value: number) => [`${value} doses`, 'Vaccinations']}
            labelFormatter={(label) => `${label}day`}
          />
          <Bar 
            dataKey="value" 
            fill="#4096ff"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyVaccinationChart;
