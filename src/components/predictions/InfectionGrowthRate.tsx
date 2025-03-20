
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Sun', rate: 10 },
  { day: 'Mon', rate: 15 },
  { day: 'Tue', rate: 25 },
  { day: 'Wed', rate: 22 },
  { day: 'Thu', rate: 30 },
  { day: 'Fri', rate: 28 },
  { day: 'Sat', rate: 20 },
];

const InfectionGrowthRate: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-100 rounded-md p-3 text-center">
        <p className="text-xs text-gray-500">Current Rate</p>
        <p className="text-xl font-bold">10,578,911</p>
      </div>
      
      <div className="h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10 }}
              domain={[0, 40]}
              ticks={[0, 10, 20, 30, 40]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '8px',
                fontSize: '10px'
              }}
              formatter={(value) => [`${value}%`, 'Growth Rate']}
            />
            <Line 
              type="monotone" 
              dataKey="rate" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={{ stroke: '#3b82f6', strokeWidth: 2, r: 4, fill: 'white' }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2, fill: 'white' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InfectionGrowthRate;
