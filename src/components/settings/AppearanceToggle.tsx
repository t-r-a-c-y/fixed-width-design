
import React, { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { AppContext } from '../../pages/Settings';

const AppearanceToggle: React.FC = () => {
  const context = useContext(AppContext);
  
  // Handle non-existent context (as a failsafe)
  if (!context) {
    return null;
  }
  
  const { darkMode, setDarkMode } = context;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium dark:text-white">Appearance</h2>
      
      <div className="flex gap-4">
        <div 
          className={`p-4 rounded-md cursor-pointer border flex items-center gap-3 transition-colors
          ${!darkMode 
            ? 'bg-blue-light/10 border-blue-light'
            : 'bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600'}`}
          onClick={() => setDarkMode(false)}
        >
          <Sun 
            size={20} 
            className={!darkMode ? 'text-blue-light' : 'text-gray-500 dark:text-gray-400'} 
          />
          <span 
            className={!darkMode 
              ? 'font-medium text-blue-light' 
              : 'text-gray-500 dark:text-gray-400'
            }
          >
            Light Mode
          </span>
        </div>
        
        <div 
          className={`p-4 rounded-md cursor-pointer border flex items-center gap-3 transition-colors
          ${darkMode 
            ? 'bg-blue-light/10 border-blue-light dark:border-blue-light'
            : 'bg-white border-gray-200'}`}
          onClick={() => setDarkMode(true)}
        >
          <Moon 
            size={20} 
            className={darkMode ? 'text-blue-light' : 'text-gray-500'} 
          />
          <span 
            className={darkMode ? 'font-medium text-blue-light' : 'text-gray-500'}
          >
            Dark Mode
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppearanceToggle;
