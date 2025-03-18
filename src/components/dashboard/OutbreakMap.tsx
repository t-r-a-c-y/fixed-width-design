
import React from 'react';

const OutbreakMap = () => {
  return (
    <div className="bg-white rounded-lg p-5 animate-fadeIn">
      <h3 className="text-lg font-semibold mb-6">Outbreak Map</h3>
      
      <div className="relative h-[280px] w-full flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" className="max-w-full">
          {/* Simplified world map */}
          <path d="M100,100 L200,120 L250,80 L300,150 L320,130 L400,150 L450,120 L500,140 L550,100 L600,150 L650,120 L700,140" 
            stroke="#E5E7EB" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M300,200 L350,220 L400,180 L450,220 L500,200" 
            stroke="#E5E7EB" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M200,250 L250,270 L300,250 L350,280 L400,260 L450,280 L500,250 L550,270 L600,240" 
            stroke="#E5E7EB" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          
          {/* USA (blue) */}
          <circle cx="150" cy="140" r="30" fill="#2DB4F8" fillOpacity="0.8" />
          
          {/* China (red) */}
          <circle cx="550" cy="150" r="40" fill="#FF6B6B" fillOpacity="0.8" />
          
          {/* Brazil (red) */}
          <circle cx="250" cy="280" r="35" fill="#FF6B6B" fillOpacity="0.8" />
          
          {/* India (red) */}
          <circle cx="500" cy="200" r="30" fill="#FF6B6B" fillOpacity="0.8" />
          
          {/* Australia (green) */}
          <circle cx="600" cy="300" r="25" fill="#4CD964" fillOpacity="0.8" />
          
          {/* Indonesia (teal) */}
          <circle cx="550" cy="230" r="25" fill="#20C997" fillOpacity="0.8" />
        </svg>
      </div>
      
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
    </div>
  );
};

export default OutbreakMap;
