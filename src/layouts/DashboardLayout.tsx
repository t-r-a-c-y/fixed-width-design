
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, BarChart2, Activity, Map, Hospital, Syringe, Settings, LogOut, Grid } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

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

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    { icon: <Grid size={20} />, label: 'Dashboard', path: '/' },
    { icon: <Activity size={20} />, label: 'Pandemics', path: '/pandemics' },
    { icon: <BarChart2 size={20} />, label: 'Statistics', path: '/statistics' },
    { icon: <Map size={20} />, label: 'Predictions', path: '/predictions' },
    { icon: <Hospital size={20} />, label: 'Hospitals', path: '/hospitals' },
    { icon: <Syringe size={20} />, label: 'Vaccinations', path: '/vaccinations' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden animate-fadeIn">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-5">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded bg-blue-light flex items-center justify-center text-white font-bold">
              $P
            </div>
            <h1 className="text-xl font-bold">PandemicNet</h1>
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
        <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
          <h1 className="text-xl font-bold">Dashboard</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 rounded-md bg-gray-50 border border-gray-200 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-light focus:border-transparent transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <span className="text-xs font-medium">RW</span>
              </div>
              <div className="text-sm">
                <p className="font-medium">Rwanda(RW)</p>
              </div>
            </div>
            
            <div className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">
                3
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8 border-2 border-blue-light">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Musafiq</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="max-w-8xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
