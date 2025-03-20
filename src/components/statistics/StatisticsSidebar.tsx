
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart, Activity, Hospital, Syringe, Settings, LogOut } from 'lucide-react';

const StatisticsSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { 
      name: 'Dashboard', 
      path: '/', 
      icon: <Activity size={20} /> 
    },
    { 
      name: 'Pandemics', 
      path: '/pandemics', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12H19M19 12C19 13.6569 17.6569 15 16 15C14.3431 15 13 13.6569 13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12ZM13 12H5M5 12C5 13.6569 3.65685 15 2 15C0.343145 15 -1 13.6569 -1 12C-1 10.3431 0.343145 9 2 9C3.65685 9 5 10.3431 5 12ZM16 9C16 7.4 15.6 5 12 5C8.4 5 7.5 7.5 7.5 12C7.5 16.5 8.4 19 12 19C15.6 19 16 16.6 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    { 
      name: 'Statistics', 
      path: '/statistics', 
      icon: <BarChart size={20} /> 
    },
    { 
      name: 'Predictions', 
      path: '/predictions', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2V19C2 20.66 3.34 22 5 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    { 
      name: 'Hospitals', 
      path: '/hospitals', 
      icon: <Hospital size={20} /> 
    },
    { 
      name: 'Vaccination', 
      path: '/vaccinations', 
      icon: <Syringe size={20} /> 
    },
    { 
      name: 'Settings', 
      path: '/settings', 
      icon: <Settings size={20} /> 
    },
  ];

  return (
    <div className="w-[240px] bg-white border-r border-gray-200 p-5 flex flex-col h-screen">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2C15.97 2 20 6.03 20 11C20 15.97 15.97 20 11 20C6.03 20 2 15.97 2 11C2 7.5 4 4.4 7 3" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 11L7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.5 21.5L17 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="font-bold text-lg">PandemicNet</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-current">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <Link 
        to="/signout" 
        className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 mt-4"
      >
        <LogOut size={20} />
        <span>Sign Out</span>
      </Link>
    </div>
  );
};

export default StatisticsSidebar;
