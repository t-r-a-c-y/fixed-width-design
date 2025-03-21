
import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Bell, BarChart2, Activity, Map, Hospital, Syringe, Settings, LogOut, Grid } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { AppContext } from '../pages/Settings';
import { useUser, useClerk } from '@clerk/clerk-react';
import { useToast } from '@/components/ui/use-toast';

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
  const navigate = useNavigate();
  const { user } = useUser();
  const { signOut } = useClerk();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  const appContext = useContext(AppContext);
  const { darkMode, selectedCountry } = appContext || { 
    darkMode: false, 
    selectedCountry: { value: 'rw', label: 'Rwanda', flag: 'RW' }
  };

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

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account",
      });
      navigate('/login');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  // Safely access user information with proper type checking
  const userName = user ? (user.firstName || 'User') : 'User';
  const userInitial = userName.charAt(0).toUpperCase();
  // Fix the type issue by properly accessing and typing publicMetadata
  const userRole = user?.publicMetadata && typeof user.publicMetadata === 'object' && 'role' in user.publicMetadata 
    ? String(user.publicMetadata.role) 
    : 'Admin';
  const userImageUrl = user?.imageUrl || '';

  return (
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
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2 rounded-md w-full text-gray-600 font-medium hover:bg-red-100 hover:text-red-600 transition-colors dark:text-gray-300 dark:hover:bg-red-900/20 dark:hover:text-red-400"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
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
                <p className="font-medium dark:text-white">{selectedCountry.label} ({selectedCountry.flag})</p>
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
                {userImageUrl ? (
                  <img src={userImageUrl} alt={userName} />
                ) : (
                  <div className="w-full h-full bg-blue-light flex items-center justify-center text-white font-medium">
                    {userInitial}
                  </div>
                )}
              </Avatar>
              <div className="text-sm">
                <p className="font-medium dark:text-white">{userName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{userRole}</p>
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
  );
};

export default DashboardLayout;
