
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, BarChart2, Activity, Map, Hospital, Syringe, Settings, LogOut, Grid } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { AppContext } from '../pages/Settings';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, to, isActive }) => {
  return (
    <Link to={to} className={`sidebar-item ${isActive ? 'active' : ''}`}>
      {icon}
      <span>{label}</span>
    </Link>
  );
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// Define a type for country data
type CountryOption = {
  value: string;
  label: string;
  flag: string;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for dark mode and country
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>({ 
    value: 'rw', 
    label: 'Rwanda', 
    flag: 'RW' 
  });

  const sidebarItems = [
    { icon: <Grid size={20} />, label: 'Dashboard', path: '/' },
    { icon: <Activity size={20} />, label: 'Pandemics', path: '/pandemics' },
    { icon: <BarChart2 size={20} />, label: 'Statistics', path: '/statistics' },
    { icon: <Map size={20} />, label: 'Predictions', path: '/predictions' },
    { icon: <Hospital size={20} />, label: 'Hospitals', path: '/hospitals' },
    { icon: <Syringe size={20} />, label: 'Vaccinations', path: '/vaccinations' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, selectedCountry, setSelectedCountry }}>
      <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden animate-fadeIn dark:bg-gray-900 dark:text-gray-200">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 bg-white flex flex-col dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded bg-blue-light flex items-center justify-center text-white font-bold">
                $P
              </div>
              <h1 className="text-xl font-bold dark:text-white">PandemicNet</h1>
            </div>

            <nav className="flex flex-col gap-1">
              {sidebarItems.map((item) => (
                <SidebarItem
                  key={item.path}
                  icon={item.icon}
                  label={item.label}
                  to={item.path}
                  isActive={location.pathname === item.path}
                />
              ))}
            </nav>
          </div>

          <div className="mt-auto p-5">
            <SidebarItem
              icon={<LogOut size={20} />}
              label="Sign Out"
              to="/logout"
              isActive={false}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-xl font-bold dark:text-white">
              {sidebarItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="pl-10 pr-4 py-2 rounded-md bg-gray-50 border border-gray-200 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-light focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2 border-r border-gray-200 pr-4 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900 dark:text-green-400">
                  <span className="text-xs font-medium">{selectedCountry.flag}</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium dark:text-white">{selectedCountry.label}({selectedCountry.flag})</p>
                </div>
              </div>
              
              <div className="relative">
                <Bell size={20} className="dark:text-gray-300" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">
                  3
                </span>
              </div>
              
              <Link to="/settings" className="flex items-center gap-2">
                <Avatar className="w-8 h-8 border-2 border-blue-light">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium dark:text-white">Alexa</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
                </div>
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-8xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default DashboardLayout;
