
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', total: 40, recovered: 25, infected: 15 },
  { name: 'Feb', total: 30, recovered: 20, infected: 10 },
  { name: 'Mar', total: 20, recovered: 15, infected: 5 },
  { name: 'Apr', total: 27, recovered: 18, infected: 9 },
  { name: 'May', total: 18, recovered: 12, infected: 6 },
  { name: 'Jun', total: 23, recovered: 16, infected: 7 },
  { name: 'Jul', total: 34, recovered: 24, infected: 10 },
  { name: 'Aug', total: 45, recovered: 32, infected: 13 },
  { name: 'Sep', total: 65, recovered: 45, infected: 20 },
  { name: 'Oct', total: 60, recovered: 42, infected: 18 },
  { name: 'Nov', total: 55, recovered: 40, infected: 15 },
  { name: 'Dec', total: 50, recovered: 38, infected: 12 },
];

const CasesChart = () => {
  return (
    <div className="chart-container h-[300px] animate-fadeIn">
      <h3 className="text-lg font-semibold mb-2">Total Cases</h3>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barSize={12}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12 }}
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
          <Bar 
            dataKey="total" 
            fill="#2DB4F8" 
            radius={[5, 5, 0, 0]} 
          />
          <Bar 
            dataKey="recovered" 
            fill="#4CD964" 
            radius={[5, 5, 0, 0]} 
          />
          <Bar 
            dataKey="infected" 
            fill="#FF6B6B" 
            radius={[5, 5, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Stats below chart */}
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
          <div>
            <p className="text-sm font-semibold text-green-500">Recovered Cases</p>
            <p className="text-lg font-bold">8,523%</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
          <div>
            <p className="text-sm font-semibold text-red-500">Infected Cases</p>
            <p className="text-lg font-bold">12,523%</p>
            <p className="text-xs text-gray-500">45 today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesChart;
