
import React, { useState } from 'react';
import { User, EyeOff, Eye, Mail, Moon, Sun, Bell, Lock, Globe, Clock } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

const SettingsPage: React.FC = () => {
  // State for form fields
  const [firstName, setFirstName] = useState('Alexa');
  const [lastName, setLastName] = useState('Rowles');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [emails, setEmails] = useState([{ email: 'alexarowles@gmail.com', isPrimary: true, addedAt: '1 month ago' }]);
  const [darkMode, setDarkMode] = useState(false);
  
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
  
  const handleSaveChanges = () => {
    // Implement save functionality
    console.log('Saving settings...');
    // Here you would typically make an API call to save the user settings
  };
  
  const handleAddEmail = () => {
    // Implement add email functionality
    console.log('Adding new email address...');
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
          <div className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-sm">
            <Avatar className="w-20 h-20 border-4 border-blue-light">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
            </Avatar>
            <div>
              <h2 className="text-xl font-medium">{firstName} {lastName}</h2>
              <p className="text-gray-500">{emails[0]?.email}</p>
            </div>
            <Button variant="outline" className="ml-auto">
              Edit
            </Button>
          </div>

          {/* Name Fields */}
          <Card>
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1"
                  placeholder="Your First Name"
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1"
                  placeholder="Your Last Name"
                />
              </div>
              
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger id="gender" className="mt-1">
                    <SelectValue placeholder="Your Gender Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="country">Country</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger id="country" className="mt-1">
                    <SelectValue placeholder="Your Country Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="rw">Rwanda</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="language">Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language" className="mt-1">
                    <SelectValue placeholder="Your Language Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="timezone">Time Zone</Label>
                <Select value={timeZone} onValueChange={setTimeZone}>
                  <SelectTrigger id="timezone" className="mt-1">
                    <SelectValue placeholder="Your Time Zone" />
                  </SelectTrigger>
                  <SelectContent>
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
            <h2 className="text-lg font-medium">My email Address</h2>
            
            <div className="space-y-2">
              {emails.map((email, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                  <Mail size={16} className="text-blue-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium">{email.email}</p>
                    <p className="text-xs text-gray-500">{email.addedAt}</p>
                  </div>
                  {email.isPrimary && (
                    <span className="ml-auto text-xs bg-blue-light/10 text-blue-light px-2 py-1 rounded-full">
                      Primary
                    </span>
                  )}
                </div>
              ))}
            </div>
            
            <Button variant="outline" size="sm" onClick={handleAddEmail} className="text-blue-light">
              + Add Email Address
            </Button>
          </div>

          {/* Appearance */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Appearance</h2>
            
            <div className="flex gap-4">
              <div 
                className={`p-4 rounded-md cursor-pointer border flex items-center gap-3 ${!darkMode ? 'bg-blue-light/10 border-blue-light' : 'bg-white border-gray-200'}`}
                onClick={() => setDarkMode(false)}
              >
                <Sun size={20} className={!darkMode ? 'text-blue-light' : 'text-gray-500'} />
                <span className={!darkMode ? 'font-medium text-blue-light' : 'text-gray-500'}>Light Mode</span>
              </div>
              
              <div 
                className={`p-4 rounded-md cursor-pointer border flex items-center gap-3 ${darkMode ? 'bg-blue-light/10 border-blue-light' : 'bg-white border-gray-200'}`}
                onClick={() => setDarkMode(true)}
              >
                <Moon size={20} className={darkMode ? 'text-blue-light' : 'text-gray-500'} />
                <span className={darkMode ? 'font-medium text-blue-light' : 'text-gray-500'}>Dark Mode</span>
              </div>
            </div>
          </div>

          {/* Password and Authentication */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Password and authentication</h2>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="current-password">Current Password</Label>
                  <div className="relative mt-1">
                    <Input 
                      id="current-password"
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Write current password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute right-0 top-0 h-full"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <div className="relative mt-1">
                      <Input 
                        id="new-password"
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Write the new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="absolute right-0 top-0 h-full"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="confirm-password">Rewrite New Password</Label>
                    <div className="relative mt-1">
                      <Input 
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Rewrite the new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="absolute right-0 top-0 h-full"
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
            <h2 className="text-lg font-medium">Notifications & Alert</h2>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Feedback Emails</p>
                      <p className="text-sm text-gray-500">Receive feedback request emails</p>
                    </div>
                    <Switch 
                      checked={feedbackEmails} 
                      onCheckedChange={setFeedbackEmails} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Emergency Alerts</p>
                      <p className="text-sm text-gray-500">Get notified about emergency situations</p>
                    </div>
                    <Switch 
                      checked={emergencyAlerts} 
                      onCheckedChange={setEmergencyAlerts} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Vaccination Progress</p>
                      <p className="text-sm text-gray-500">Updates on vaccination campaigns</p>
                    </div>
                    <Switch 
                      checked={vaccinationProgress} 
                      onCheckedChange={setVaccinationProgress} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Support emails</p>
                      <p className="text-sm text-gray-500">Receive support and help information</p>
                    </div>
                    <Switch 
                      checked={supportEmails} 
                      onCheckedChange={setSupportEmails} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Lockdown Advisory</p>
                      <p className="text-sm text-gray-500">Get lockdown and restriction updates</p>
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
