
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1', value1: 400, value2: 240 },
  { name: '2', value1: 300, value2: 139 },
  { name: '3', value1: 200, value2: 180 },
  { name: '4', value1: 278, value2: 390 },
  { name: '5', value1: 189, value2: 480 },
  { name: '6', value1: 239, value2: 380 },
  { name: '7', value1: 349, value2: 430 },
];

const PredictionsChart = () => {
  return (
    <div className="chart-container h-[300px] animate-fadeIn">
      <h3 className="text-lg font-semibold mb-2">Predictions</h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
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
          <Line
            type="monotone"
            dataKey="value1"
            stroke="#8884d8"
            strokeWidth={3}
            dot={{
              stroke: '#8884d8',
              strokeWidth: 2,
              r: 4,
              fill: 'white',
            }}
            activeDot={{
              stroke: '#8884d8',
              strokeWidth: 2,
              r: 6,
              fill: 'white',
            }}
          />
          <Line
            type="monotone"
            dataKey="value2"
            stroke="#4CD964"
            strokeWidth={3}
            dot={{
              stroke: '#4CD964',
              strokeWidth: 2,
              r: 4,
              fill: 'white',
            }}
            activeDot={{
              stroke: '#4CD964',
              strokeWidth: 2,
              r: 6,
              fill: 'white',
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
          <p className="text-sm">This Week</p>
          <p className="ml-2 text-sm font-semibold">3,004 people</p>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
          <p className="text-sm">Last Week</p>
          <p className="ml-2 text-sm font-semibold">4,504 people</p>
        </div>
      </div>
    </div>
  );
};

export default PredictionsChart;
