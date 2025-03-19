
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const areas = [
  { id: 1, name: 'Kigali Province', percentage: 91.57, color: '#1E88E5' },
  { id: 2, name: 'Muhanga, Nyabihu', percentage: 63.25, color: '#F44336' },
  { id: 3, name: 'Karongi, Nyanza', percentage: 52.95, color: '#FF9800' },
  { id: 4, name: 'Gicumbi,Rulindo', percentage: 47.39, color: '#4CAF50' }
];

const AffectedAreas = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-lg">Most affected areas</h2>
        <Button variant="outline" size="sm" className="h-8 flex items-center gap-1">
          4th August 2024
          <ChevronDown size={14} />
        </Button>
      </div>
      
      <div className="space-y-6">
        {areas.map((area) => (
          <div key={area.id} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-full mr-3"
              style={{ backgroundColor: area.color }}
            ></div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-medium">{area.name}</h3>
                <span className="text-sm font-medium">{area.percentage}%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: `${area.percentage}%`,
                    backgroundColor: area.color
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffectedAreas;
