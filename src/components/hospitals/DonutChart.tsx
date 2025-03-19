
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DonutChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  size = 120,
  innerRadius = 50,
  outerRadius = 70
}) => {
  return (
    <div style={{ width: size, height: size, margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white',
              borderRadius: '8px',
              borderColor: '#f0f0f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            formatter={(value, name) => [`${value}`, `${name}`]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
