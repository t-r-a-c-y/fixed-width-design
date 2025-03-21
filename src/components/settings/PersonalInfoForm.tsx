
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Define a type for country data
type CountryOption = {
  value: string;
  label: string;
  flag: string;
};

interface PersonalInfoFormProps {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  timeZone: string;
  setTimeZone: React.Dispatch<React.SetStateAction<string>>;
  countries: CountryOption[];
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  gender,
  setGender,
  country,
  setCountry,
  language,
  setLanguage,
  timeZone,
  setTimeZone,
  countries,
}) => {
  return (
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
  );
};

export default PersonalInfoForm;
