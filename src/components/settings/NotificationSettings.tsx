
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

interface NotificationSettingsProps {
  feedbackEmails: boolean;
  setFeedbackEmails: React.Dispatch<React.SetStateAction<boolean>>;
  emergencyAlerts: boolean;
  setEmergencyAlerts: React.Dispatch<React.SetStateAction<boolean>>;
  vaccinationProgress: boolean;
  setVaccinationProgress: React.Dispatch<React.SetStateAction<boolean>>;
  supportEmails: boolean;
  setSupportEmails: React.Dispatch<React.SetStateAction<boolean>>;
  lockdownAdvisory: boolean;
  setLockdownAdvisory: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  feedbackEmails,
  setFeedbackEmails,
  emergencyAlerts,
  setEmergencyAlerts,
  vaccinationProgress,
  setVaccinationProgress,
  supportEmails,
  setSupportEmails,
  lockdownAdvisory,
  setLockdownAdvisory
}) => {
  return (
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
  );
};

export default NotificationSettings;
