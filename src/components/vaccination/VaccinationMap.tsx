
import React from 'react';

const VaccinationMap: React.FC = () => {
  return (
    <div className="h-[200px] overflow-hidden relative">
      <img 
        src="/lovable-uploads/b5f27020-fc90-4fd8-b500-257586006630.png" 
        alt="Vaccination Coverage Map"
        className="w-full h-full object-cover object-center"
        style={{ clipPath: 'inset(17% 0 50% 0)' }} // This crops the image to show just the map part
      />
    </div>
  );
};

export default VaccinationMap;
