
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Aug 2024', cases: 160 },
  { name: 'Sep 2024', cases: 220 },
  { name: 'Oct 2024', cases: 180 },
  { name: 'Nov 2024', cases: 240 },
  { name: 'Dec 2024', cases: 200 },
  { name: 'Jan 2025', cases: 260 },
  { name: 'Feb 2025', cases: 220 },
  { name: 'Mar 2025', cases: 230 },
  { name: 'Apr 2025', cases: 270 },
  { name: 'May 2025', cases: 220 },
];

const TotalCasesChart = () => {
  return (
    <div className="h-[200px] relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
        <div className="w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div>
        <span className="text-sm font-medium mt-1">234</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10 }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10 }} 
            domain={['dataMin - 50', 'dataMax + 50']}
            hide
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white',
              borderRadius: '8px',
              borderColor: '#f0f0f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="cases" 
            stroke="#4F46E5" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: '#4F46E5', stroke: 'white', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalCasesChart;
