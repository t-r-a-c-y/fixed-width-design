
import React, { useState, useEffect, createContext } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import DashboardLayout from '../layouts/DashboardLayout';
import ProfileSection from '../components/settings/ProfileSection';
import PersonalInfoForm from '../components/settings/PersonalInfoForm';
import EmailManager from '../components/settings/EmailManager';
import AppearanceToggle from '../components/settings/AppearanceToggle';
import PasswordForm from '../components/settings/PasswordForm';
import NotificationSettings from '../components/settings/NotificationSettings';
import { CountryOption, EmailData } from '../components/settings/types';

// Create a context for theme and country
export const AppContext = createContext<{
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
  const [emails, setEmails] = useState<EmailData[]>([
    { email: 'alexarowles@gmail.com', isPrimary: true, addedAt: '1 month ago' }
  ]);
  
  // Password fields
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
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

  // Get primary email for profile display
  const primaryEmail = emails.find(e => e.isPrimary)?.email;

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
          <ProfileSection 
            firstName={firstName} 
            lastName={lastName} 
            primaryEmail={primaryEmail} 
          />

          {/* Personal Information Form */}
          <PersonalInfoForm 
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            gender={gender}
            setGender={setGender}
            country={country}
            setCountry={setCountry}
            language={language}
            setLanguage={setLanguage}
            timeZone={timeZone}
            setTimeZone={setTimeZone}
            countries={countries}
          />

          {/* Email Manager */}
          <EmailManager 
            emails={emails}
            setEmails={setEmails}
          />

          {/* Appearance Toggle */}
          <AppearanceToggle />

          {/* Password Form */}
          <PasswordForm
            currentPassword={currentPassword}
            setCurrentPassword={setCurrentPassword}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />

          {/* Notification Settings */}
          <NotificationSettings
            feedbackEmails={feedbackEmails}
            setFeedbackEmails={setFeedbackEmails}
            emergencyAlerts={emergencyAlerts}
            setEmergencyAlerts={setEmergencyAlerts}
            vaccinationProgress={vaccinationProgress}
            setVaccinationProgress={setVaccinationProgress}
            supportEmails={supportEmails}
            setSupportEmails={setSupportEmails}
            lockdownAdvisory={lockdownAdvisory}
            setLockdownAdvisory={setLockdownAdvisory}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
