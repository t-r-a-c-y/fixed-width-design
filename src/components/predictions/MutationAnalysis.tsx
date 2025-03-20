
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mutationPrediction = [
  { day: 1, risk: 20 },
  { day: 2, risk: 18 },
  { day: 3, risk: 25 },
  { day: 4, risk: 22 },
  { day: 5, risk: 30 },
  { day: 6, risk: 25 },
  { day: 7, risk: 35 },
];

const variantDetection = [
  { day: 1, level: 10 },
  { day: 2, level: 15 },
  { day: 3, level: 12 },
  { day: 4, level: 18 },
  { day: 5, level: 15 },
  { day: 6, level: 22 },
  { day: 7, level: 20 },
];

const highRiskMutations = [
  { day: 1, level: 5 },
  { day: 2, level: 8 },
  { day: 3, level: 7 },
  { day: 4, level: 12 },
  { day: 5, level: 10 },
  { day: 6, level: 15 },
  { day: 7, level: 13 },
];

const MutationAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">AI-Predicted Mutation Risk</p>
          <div className="flex items-center">
            <span className="text-base font-semibold">3,837</span>
            <span className="text-xs text-red-500 ml-1">+5%</span>
          </div>
        </div>
        <div className="h-[50px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mutationPrediction}>
              <Tooltip contentStyle={{ fontSize: '10px' }} />
              <Line 
                type="monotone" 
                dataKey="risk" 
                stroke="#ef4444" 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">New Variant Detection</p>
          <div className="flex items-center">
            <span className="text-base font-semibold">2,245</span>
            <span className="text-xs text-green-500 ml-1">+18%</span>
          </div>
        </div>
        <div className="h-[50px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={variantDetection}>
              <Tooltip contentStyle={{ fontSize: '10px' }} />
              <Line 
                type="monotone" 
                dataKey="level" 
                stroke="#3b82f6" 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Potential High-Risk Mutations</p>
          <div className="flex items-center">
            <span className="text-base font-semibold">1,545</span>
            <span className="text-xs text-green-500 ml-1">+48%</span>
          </div>
        </div>
        <div className="h-[50px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={highRiskMutations}>
              <Tooltip contentStyle={{ fontSize: '10px' }} />
              <Line 
                type="monotone" 
                dataKey="level" 
                stroke="#3b82f6" 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MutationAnalysis;
