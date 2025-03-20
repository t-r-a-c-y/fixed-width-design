
import React, { useState, useEffect } from 'react';
import { User, EyeOff, Eye, Mail, Moon, Sun, Bell, Lock, Globe, Clock } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from "@/components/ui/use-toast";

// Define a type for country data
type CountryOption = {
  value: string;
  label: string;
  flag: string;
};

// Create a context for theme and country
export const AppContext = React.createContext<{
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCountry: CountryOption;
  setSelectedCountry: React.Dispatch<React.SetStateAction<CountryOption>>;
}>({
  darkMode: false,
  setDarkMode: () => {},
  selectedCountry: { value: 'rw', label: 'Rwanda', flag: 'RW' },
  setSelectedCountry: () => {},
});

// Countries data
const countries: CountryOption[] = [
  { value: 'rw', label: 'Rwanda', flag: 'RW' },
  { value: 'us', label: 'United States', flag: 'US' },
  { value: 'uk', label: 'United Kingdom', flag: 'UK' },
  { value: 'ca', label: 'Canada', flag: 'CA' },
  { value: 'au', label: 'Australia', flag: 'AU' },
  { value: 'fr', label: 'France', flag: 'FR' },
  { value: 'de', label: 'Germany', flag: 'DE' },
  { value: 'jp', label: 'Japan', flag: 'JP' },
];

const SettingsPage: React.FC = () => {
  const { toast } = useToast();
  
  // Access the context
  const context = React.useContext(AppContext);
  
  // State for form fields
  const [firstName, setFirstName] = useState('Alexa');
  const [lastName, setLastName] = useState('Rowles');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState(context.selectedCountry.value);
  const [language, setLanguage] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [emails, setEmails] = useState([{ email: 'alexarowles@gmail.com', isPrimary: true, addedAt: '1 month ago' }]);
  const [newEmail, setNewEmail] = useState('');
  const [showAddEmailForm, setShowAddEmailForm] = useState(false);
  
  // Password fields
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Password visibility toggles
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Notification settings
  const [feedbackEmails, setFeedbackEmails] = useState(true);
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);
  const [vaccinationProgress, setVaccinationProgress] = useState(true);
  const [supportEmails, setSupportEmails] = useState(false);
  const [lockdownAdvisory, setLockdownAdvisory] = useState(true);
  
  // Update context when country changes
  useEffect(() => {
    if (country) {
      const selectedCountryData = countries.find(c => c.value === country);
      if (selectedCountryData) {
        context.setSelectedCountry(selectedCountryData);
      }
    }
  }, [country, context.setSelectedCountry]);
  
  const handleSaveChanges = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully.",
    });
    console.log('Saving settings...');
  };
  
  const handleAddEmail = () => {
    if (!newEmail) {
      toast({
        title: "Error",
        description: "Please enter an email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Check for duplicate
    if (emails.some(e => e.email === newEmail)) {
      toast({
        title: "Duplicate email",
        description: "This email is already in your list.",
        variant: "destructive",
      });
      return;
    }
    
    setEmails([...emails, { 
      email: newEmail, 
      isPrimary: false, 
      addedAt: 'just now' 
    }]);
    
    setNewEmail('');
    setShowAddEmailForm(false);
    
    toast({
      title: "Email added",
      description: "Your new email has been added successfully.",
    });
  };
  
  const handleSetPrimaryEmail = (index: number) => {
    const updatedEmails = emails.map((email, i) => ({
      ...email,
      isPrimary: i === index
    }));
    setEmails(updatedEmails);
    
    toast({
      title: "Primary email updated",
      description: `${emails[index].email} is now your primary email.`,
    });
  };
  
  const handleRemoveEmail = (index: number) => {
    // Prevent removing the primary email
    if (emails[index].isPrimary) {
      toast({
        title: "Cannot remove primary email",
        description: "Please set another email as primary first.",
        variant: "destructive",
      });
      return;
    }
    
    // Prevent removing the last email
    if (emails.length <= 1) {
      toast({
        title: "Cannot remove email",
        description: "You must have at least one email address.",
        variant: "destructive",
      });
      return;
    }
    
    const updatedEmails = emails.filter((_, i) => i !== index);
    setEmails(updatedEmails);
    
    toast({
      title: "Email removed",
      description: "The email has been removed from your account.",
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <div className="flex items-center gap-2">
            <Button onClick={handleSaveChanges} className="bg-blue-light hover:bg-blue">
              Save Changes
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Profile Section */}
          <div className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
            <Avatar className="w-20 h-20 border-4 border-blue-light">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
            </Avatar>
            <div>
              <h2 className="text-xl font-medium dark:text-white">{firstName} {lastName}</h2>
              <p className="text-gray-500 dark:text-gray-400">{emails.find(e => e.isPrimary)?.email}</p>
            </div>
            <Button variant="outline" className="ml-auto dark:text-gray-300 dark:border-gray-600">
              Edit
            </Button>
          </div>

          {/* Name Fields */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="dark:text-gray-300">First Name</Label>
                <Input 
                  id="firstName" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your First Name"
                />
              </div>
              
              <div>
                <Label htmlFor="lastName" className="dark:text-gray-300">Last Name</Label>
                <Input 
                  id="lastName" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your Last Name"
                />
              </div>
              
              <div>
                <Label htmlFor="gender" className="dark:text-gray-300">Gender</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger id="gender" className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Your Gender Name" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="country" className="dark:text-gray-300">Country</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger id="country" className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Your Country Name" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    {countries.map((countryOption) => (
                      <SelectItem key={countryOption.value} value={countryOption.value}>
                        {countryOption.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="language" className="dark:text-gray-300">Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language" className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Your Language Name" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="timezone" className="dark:text-gray-300">Time Zone</Label>
                <Select value={timeZone} onValueChange={setTimeZone}>
                  <SelectTrigger id="timezone" className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="Your Time Zone" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectItem value="utc">UTC (GMT)</SelectItem>
                    <SelectItem value="est">Eastern Time (EST/EDT)</SelectItem>
                    <SelectItem value="cst">Central Time (CST/CDT)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MST/MDT)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PST/PDT)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Email Addresses */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium dark:text-white">My email Address</h2>
            
            <div className="space-y-2">
              {emails.map((email, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md dark:bg-gray-700">
                  <Mail size={16} className="text-blue-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium dark:text-white">{email.email}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{email.addedAt}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    {email.isPrimary ? (
                      <span className="text-xs bg-blue-light/10 text-blue-light px-2 py-1 rounded-full">
                        Primary
                      </span>
                    ) : (
                      <>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleSetPrimaryEmail(index)}
                          className="text-sm text-blue-light hover:text-blue-dark"
                        >
                          Set as Primary
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleRemoveEmail(index)}
                          className="text-sm text-red-500 hover:text-red-600"
                        >
                          Remove
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {showAddEmailForm ? (
              <div className="p-4 border rounded-md dark:border-gray-700 dark:bg-gray-800">
                <Label htmlFor="new-email" className="dark:text-gray-300">New Email Address</Label>
                <div className="flex gap-2 mt-2">
                  <Input 
                    id="new-email" 
                    type="email" 
                    placeholder="Enter new email address" 
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <Button onClick={handleAddEmail} className="bg-blue-light hover:bg-blue">
                    Add
                  </Button>
                  <Button variant="outline" onClick={() => setShowAddEmailForm(false)} className="dark:border-gray-600 dark:text-gray-300">
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowAddEmailForm(true)} 
                className="text-blue-light dark:border-gray-600 dark:text-blue-light"
              >
                + Add Email Address
              </Button>
            )}
          </div>

          {/* Appearance */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium dark:text-white">Appearance</h2>
            
            <div className="flex gap-4">
              <div 
                className={`p-4 rounded-md cursor-pointer border flex items-center gap-3 transition-colors
                ${!context.darkMode 
                  ? 'bg-blue-light/10 border-blue-light'
                  : 'bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600'}`}
                onClick={() => context.setDarkMode(false)}
              >
                <Sun 
                  size={20} 
                  className={!context.darkMode ? 'text-blue-light' : 'text-gray-500 dark:text-gray-400'} 
                />
                <span 
                  className={!context.darkMode 
                    ? 'font-medium text-blue-light' 
                    : 'text-gray-500 dark:text-gray-400'
                  }
                >
                  Light Mode
                </span>
              </div>
              
              <div 
                className={`p-4 rounded-md cursor-pointer border flex items-center gap-3 transition-colors
                ${context.darkMode 
                  ? 'bg-blue-light/10 border-blue-light dark:border-blue-light'
                  : 'bg-white border-gray-200'}`}
                onClick={() => context.setDarkMode(true)}
              >
                <Moon 
                  size={20} 
                  className={context.darkMode ? 'text-blue-light' : 'text-gray-500'} 
                />
                <span 
                  className={context.darkMode ? 'font-medium text-blue-light' : 'text-gray-500'}
                >
                  Dark Mode
                </span>
              </div>
            </div>
          </div>

          {/* Password and Authentication */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium dark:text-white">Password and authentication</h2>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="current-password" className="dark:text-gray-300">Current Password</Label>
                  <div className="relative mt-1">
                    <Input 
                      id="current-password"
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Write current password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute right-0 top-0 h-full dark:text-gray-400"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="new-password" className="dark:text-gray-300">New Password</Label>
                    <div className="relative mt-1">
                      <Input 
                        id="new-password"
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Write the new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="absolute right-0 top-0 h-full dark:text-gray-400"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="confirm-password" className="dark:text-gray-300">Rewrite New Password</Label>
                    <div className="relative mt-1">
                      <Input 
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Rewrite the new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="absolute right-0 top-0 h-full dark:text-gray-400"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications & Alerts */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium dark:text-white">Notifications & Alert</h2>
            
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium dark:text-white">Feedback Emails</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Receive feedback request emails</p>
                    </div>
                    <Switch 
                      checked={feedbackEmails} 
                      onCheckedChange={setFeedbackEmails} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium dark:text-white">Emergency Alerts</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about emergency situations</p>
                    </div>
                    <Switch 
                      checked={emergencyAlerts} 
                      onCheckedChange={setEmergencyAlerts} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium dark:text-white">Vaccination Progress</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Updates on vaccination campaigns</p>
                    </div>
                    <Switch 
                      checked={vaccinationProgress} 
                      onCheckedChange={setVaccinationProgress} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium dark:text-white">Support emails</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Receive support and help information</p>
                    </div>
                    <Switch 
                      checked={supportEmails} 
                      onCheckedChange={setSupportEmails} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium dark:text-white">Lockdown Advisory</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Get lockdown and restriction updates</p>
                    </div>
                    <Switch 
                      checked={lockdownAdvisory} 
                      onCheckedChange={setLockdownAdvisory} 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
