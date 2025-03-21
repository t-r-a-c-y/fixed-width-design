
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface ProfileSectionProps {
  firstName: string;
  lastName: string;
  primaryEmail: string | undefined;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ firstName, lastName, primaryEmail }) => {
  return (
    <div className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
      <Avatar className="w-20 h-20 border-4 border-blue-light">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
      </Avatar>
      <div>
        <h2 className="text-xl font-medium dark:text-white">{firstName} {lastName}</h2>
        <p className="text-gray-500 dark:text-gray-400">{primaryEmail}</p>
      </div>
      <Button variant="outline" className="ml-auto dark:text-gray-300 dark:border-gray-600">
        Edit
      </Button>
    </div>
  );
};

export default ProfileSection;
