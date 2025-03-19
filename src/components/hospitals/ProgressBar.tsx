
import React from 'react';

interface ProgressBarProps {
  value: number;
  color?: string;
  height?: number;
  width?: string | number;
  showValue?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color = "#4f46e5",
  height = 8,
  width = '100%',
  showValue = false
}) => {
  return (
    <div className="flex items-center gap-2">
      <div 
        className="bg-gray-100 rounded-full overflow-hidden" 
        style={{ height, width }}
      >
        <div 
          className="h-full rounded-full" 
          style={{ 
            width: `${Math.min(value, 100)}%`, 
            backgroundColor: color,
            transition: 'width 0.5s ease-in-out'
          }}
        />
      </div>
      {showValue && (
        <span className="text-xs font-medium" style={{ color }}>
          {value}%
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
