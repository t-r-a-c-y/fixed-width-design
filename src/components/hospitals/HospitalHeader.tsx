
import React from 'react';
import { Search } from 'lucide-react';

interface HospitalHeaderProps {
  onSearch?: (query: string) => void;
  onAddHospital?: () => void;
}

const HospitalHeader: React.FC<HospitalHeaderProps> = ({ onSearch, onAddHospital }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Hospitals</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search hospitals..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-64 focus:outline-none focus:ring-2 focus:ring-blue-light focus:border-transparent"
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </div>
        <button 
          className="bg-blue-light text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => onAddHospital && onAddHospital()}
        >
          Add Hospital
        </button>
      </div>
    </div>
  );
};

export default HospitalHeader;
