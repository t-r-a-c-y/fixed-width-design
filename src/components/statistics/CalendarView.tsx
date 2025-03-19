
import React from 'react';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const calendar = [
  [null, null, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, null, null]
];

// Function to get the style for a specific day
const getDayStyle = (day: number | null) => {
  if (!day) return {};
  
  // Highlight specific days (example)
  if (day === 9) return { backgroundColor: '#4F46E5', color: 'white' };
  if (day === 16) return { backgroundColor: '#22C55E', color: 'white' };
  if (day === 17) return { backgroundColor: '#2DB4F8', color: 'white' };
  
  return {};
};

const CalendarView = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-1 mb-1">
        {days.map((day, i) => (
          <div key={i} className="flex items-center justify-center text-[10px] text-gray-500 h-6">
            {day}
          </div>
        ))}
      </div>
      
      {calendar.map((week, i) => (
        <div key={i} className="grid grid-cols-7 gap-1 mb-1">
          {week.map((day, j) => (
            <div 
              key={j}
              className="flex items-center justify-center text-xs rounded-full w-6 h-6"
              style={getDayStyle(day)}
            >
              {day || ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarView;
