
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface VaccinationProgressChartProps {
  timeRange?: 'weekly' | 'monthly' | 'yearly';
}

const VaccinationProgressChart: React.FC<VaccinationProgressChartProps> = ({ timeRange = 'monthly' }) => {
  const monthlyData = [
    { name: 'Jan', dose1: 4000, dose2: 2400 },
    { name: 'Feb', dose1: 3000, dose2: 1398 },
    { name: 'Mar', dose1: 2000, dose2: 9800 },
    { name: 'Apr', dose1: 2780, dose2: 3908 },
    { name: 'May', dose1: 1890, dose2: 4800 },
    { name: 'Jun', dose1: 2390, dose2: 3800 },
    { name: 'Jul', dose1: 3490, dose2: 4300 },
    { name: 'Aug', dose1: 4000, dose2: 2400 },
    { name: 'Sep', dose1: 3000, dose2: 1398 },
    { name: 'Oct', dose1: 2000, dose2: 9800 },
    { name: 'Nov', dose1: 2780, dose2: 3908 },
    { name: 'Dec', dose1: 1890, dose2: 4800 },
  ];

  const weeklyData = [
    { name: 'Week 1', dose1: 4000, dose2: 2400 },
    { name: 'Week 2', dose1: 3000, dose2: 1398 },
    { name: 'Week 3', dose1: 2000, dose2: 9800 },
    { name: 'Week 4', dose1: 2780, dose2: 3908 },
  ];

  const data = timeRange === 'weekly' ? weeklyData : monthlyData;

  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
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
          <Legend 
            wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }}
            iconType="circle"
            iconSize={8}
          />
          <Line 
            type="monotone" 
            dataKey="dose1" 
            name="First Dose"
            stroke="#ff4d4f" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="dose2" 
            name="Second Dose"
            stroke="#1890ff" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VaccinationProgressChart;
