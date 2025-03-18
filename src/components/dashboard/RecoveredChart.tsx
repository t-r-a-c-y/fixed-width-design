
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sick: 300, dead: 200, recovered: 240 },
  { name: 'Feb', sick: 280, dead: 190, recovered: 260 },
  { name: 'Mar', sick: 270, dead: 180, recovered: 280 },
  { name: 'Apr', sick: 260, dead: 170, recovered: 300 },
  { name: 'May', sick: 250, dead: 160, recovered: 320 },
  { name: 'Jun', sick: 300, dead: 220, recovered: 280 },
  { name: 'Jul', sick: 330, dead: 230, recovered: 270 },
  { name: 'Aug', sick: 300, dead: 220, recovered: 290 },
  { name: 'Sep', sick: 270, dead: 190, recovered: 340 },
  { name: 'Oct', sick: 250, dead: 180, recovered: 360 },
  { name: 'Nov', sick: 240, dead: 170, recovered: 380 },
  { name: 'Dec', sick: 230, dead: 160, recovered: 400 },
];

const CustomizedDot = (props: any) => {
  const { cx, cy, stroke, payload, value, dataKey } = props;

  // Only show dot for the last point of each line
  if (payload.name === 'Dec') {
    return (
      <circle 
        cx={cx} 
        cy={cy} 
        r={4} 
        fill={stroke} 
        stroke="white" 
        strokeWidth={2} 
      />
    );
  }
  
  return null;
};

const RecoveredChart = () => {
  return (
    <div className="chart-container h-full animate-fadeIn">
      <h3 className="text-sm font-semibold mb-2">Recovered & Death graph</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
          <defs>
            <linearGradient id="sickGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2DB4F8" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#2DB4F8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="deadGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="recoveredGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4CD964" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#4CD964" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 8 }} 
            axisLine={false} 
            tickLine={false}
            interval="preserveStartEnd"
          />
          <YAxis 
            tick={{ fontSize: 8 }} 
            axisLine={false} 
            tickLine={false}
            tickFormatter={(value) => `${value}k`}
          />
          <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.2} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              border: 'none', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              padding: '6px',
              fontSize: '10px'
            }}
            labelStyle={{ fontWeight: 'bold', marginBottom: '2px', fontSize: '10px' }}
            itemStyle={{ fontSize: '10px', padding: '1px 0' }}
          />
          <Legend 
            iconType="circle"
            iconSize={6}
            align="center"
            wrapperStyle={{ paddingTop: '5px', fontSize: '9px' }}
          />
          <Line 
            type="monotone" 
            dataKey="sick" 
            name="Sick"
            stroke="#2DB4F8" 
            strokeWidth={2} 
            activeDot={{ r: 4 }}
            dot={<CustomizedDot />}
          />
          <Line 
            type="monotone" 
            dataKey="dead" 
            name="Dead"
            stroke="#FF6B6B" 
            strokeWidth={2} 
            activeDot={{ r: 4 }}
            dot={<CustomizedDot />}
          />
          <Line 
            type="monotone" 
            dataKey="recovered" 
            name="Recovered"
            stroke="#4CD964" 
            strokeWidth={2}
            activeDot={{ r: 4 }}
            dot={<CustomizedDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RecoveredChart;
