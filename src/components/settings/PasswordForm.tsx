
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { EyeOff, Eye } from 'lucide-react';

interface PasswordFormProps {
  currentPassword: string;
  setCurrentPassword: React.Dispatch<React.SetStateAction<string>>;
  newPassword: string;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordForm: React.FC<PasswordFormProps> = ({
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword
}) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
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
  );
};

export default PasswordForm;
