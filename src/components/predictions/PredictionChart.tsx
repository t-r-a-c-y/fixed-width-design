
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: '11-04-23', predicted: 340, actual: 240, forecastedCases: 300 },
  { name: '12-04-23', predicted: 300, actual: 139, forecastedCases: 250 },
  { name: '13-04-23', predicted: 280, actual: 190, forecastedCases: 220 },
  { name: '14-04-23', predicted: 278, actual: 290, forecastedCases: 290 },
  { name: '15-04-23', predicted: 289, actual: 380, forecastedCases: 340 },
  { name: '16-04-23', predicted: 339, actual: 330, forecastedCases: 350 },
  { name: '17-04-23', predicted: 349, actual: 300, forecastedCases: 320 },
  { name: '18-04-23', predicted: 410, actual: 380, forecastedCases: 400 },
  { name: '19-04-23', predicted: 450, actual: 410, forecastedCases: 430 },
  { name: '20-04-23', predicted: 470, actual: 440, forecastedCases: 460 },
];

const PredictionChart: React.FC = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorForecasted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ffc658" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
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
            verticalAlign="top" 
            height={36}
            formatter={(value) => {
              const lookup = {
                "predicted": "Pandemic Forecast Predicted Cases",
                "actual": "TRND Analysis for Potential Waves",
                "forecastedCases": "AI-Based Spread Prediction"
              };
              return <span className="text-xs">{lookup[value as keyof typeof lookup] || value}</span>;
            }}
          />
          <Area 
            type="monotone" 
            dataKey="predicted" 
            stroke="#82ca9d" 
            fillOpacity={1}
            fill="url(#colorPredicted)"
            strokeWidth={2}
          />
          <Area 
            type="monotone" 
            dataKey="actual" 
            stroke="#8884d8" 
            fillOpacity={1}
            fill="url(#colorActual)"
            strokeWidth={2}
          />
          <Area 
            type="monotone" 
            dataKey="forecastedCases" 
            stroke="#ffc658" 
            fillOpacity={1}
            fill="url(#colorForecasted)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictionChart;
