
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'East', population: 400000, vaccinated: 300000 },
  { name: 'Central', population: 600000, vaccinated: 420000 },
  { name: 'Western', population: 340000, vaccinated: 220000 },
  { name: 'Northern', population: 380000, vaccinated: 300000 },
  { name: 'Southern', population: 420000, vaccinated: 340000 },
];

const VaccinationChart = () => {
  return (
    <div className="chart-container h-[240px] animate-fadeIn">
      <h3 className="text-sm font-semibold mb-2">Vaccination updates</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false}
            tick={{ fontSize: 8 }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 8 }}
            tickFormatter={(value) => `${value/1000}k`}
          />
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
            formatter={(value: number) => [`${(value/1000).toFixed(1)}k`, '']}
          />
          <Legend 
            iconType="circle" 
            iconSize={6}
            wrapperStyle={{ paddingTop: '5px', fontSize: '9px' }}
          />
          <Bar dataKey="population" name="Population" fill="#2DB4F8" radius={[4, 4, 0, 0]} />
          <Bar dataKey="vaccinated" name="Vaccinated" fill="#4CD964" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VaccinationChart;
