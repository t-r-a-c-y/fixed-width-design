
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', infected: 40, normal: 24 },
  { name: 'Tue', infected: 30, normal: 13 },
  { name: 'Wed', infected: 20, normal: 8 },
  { name: 'Thu', infected: 27, normal: 18 },
  { name: 'Fri', infected: 18, normal: 13 },
  { name: 'Sat', infected: 23, normal: 18 },
  { name: 'Sun', infected: 34, normal: 26 },
];

const SeparationChart = () => {
  return (
    <div className="bg-white rounded-lg p-5 animate-fadeIn">
      <h3 className="text-lg font-semibold mb-6">Using 6 degree of Separation</h3>
      
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              hide
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              hide
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '8px'
              }}
            />
            <Bar dataKey="infected" fill="#2DB4F8" radius={[5, 5, 0, 0]} />
            <Bar dataKey="normal" fill="#4CD964" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between mt-4 pt-4 border-t">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <div>
            <p className="text-sm">Infected</p>
            <p className="text-lg font-semibold">1,134</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <div>
            <p className="text-sm">Normal</p>
            <p className="text-lg font-semibold">636</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparationChart;
