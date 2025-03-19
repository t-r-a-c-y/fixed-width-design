
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface ChartData {
  name: string;
  value: number;
}

interface HospitalChartProps {
  data: ChartData[];
  type: 'bar' | 'line';
  color?: string;
  height?: number | string;
  showGrid?: boolean;
  xAxisKey?: string;
  yAxisKey?: string;
}

const HospitalChart: React.FC<HospitalChartProps> = ({
  data,
  type,
  color = '#4f46e5',
  height = 200,
  showGrid = true,
  xAxisKey = 'name',
  yAxisKey = 'value'
}) => {
  const renderChart = () => {
    if (type === 'bar') {
      return (
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />}
          <XAxis dataKey={xAxisKey} axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white',
              borderRadius: '8px',
              borderColor: '#f0f0f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          />
          <Bar dataKey={yAxisKey} fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      );
    } else {
      return (
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />}
          <XAxis dataKey={xAxisKey} axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
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
            dataKey={yAxisKey} 
            stroke={color} 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: color, stroke: 'white', strokeWidth: 2 }}
          />
        </LineChart>
      );
    }
  };

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default HospitalChart;
