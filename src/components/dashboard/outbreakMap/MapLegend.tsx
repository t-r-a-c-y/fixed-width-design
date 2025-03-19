
import React from 'react';

const MapLegend: React.FC = () => {
  return (
    <div className="flex justify-between mt-4 pt-4 border-t">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <p className="text-sm">High</p>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
        <p className="text-sm">Moderate</p>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
        <p className="text-sm">Low</p>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-teal-400 mr-2"></div>
        <p className="text-sm">Recovered</p>
      </div>
    </div>
  );
};

export default MapLegend;
