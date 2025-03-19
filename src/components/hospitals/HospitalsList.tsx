
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Avatar } from '@/components/ui/avatar';
import { MapPin, Phone, Mail, ExternalLink, Eye } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface Hospital {
  id: string;
  name: string;
  location: string;
  beds: number;
  occupancy: number;
  doctors: number;
  contact: {
    phone: string;
    email: string;
  };
}

interface HospitalsListProps {
  hospitals: Hospital[];
}

const HospitalsList: React.FC<HospitalsListProps> = ({ hospitals }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Beds</TableHead>
          <TableHead>Capacity</TableHead>
          <TableHead>Doctors</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {hospitals.map((hospital) => (
          <TableRow key={hospital.id}>
            <TableCell className="font-medium">{hospital.id}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <div className="bg-primary text-white flex items-center justify-center h-full text-xs font-bold">
                    {hospital.name.charAt(0)}
                  </div>
                </Avatar>
                <span>{hospital.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <MapPin size={14} className="text-gray-400" />
                <span className="text-sm">{hospital.location}</span>
              </div>
            </TableCell>
            <TableCell>{hospital.beds}</TableCell>
            <TableCell>
              <ProgressBar 
                value={hospital.occupancy} 
                color={
                  hospital.occupancy > 80 ? "#ef4444" : 
                  hospital.occupancy > 60 ? "#f97316" : "#22c55e"
                }
                showValue
              />
            </TableCell>
            <TableCell>{hospital.doctors}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <a href={`tel:${hospital.contact.phone}`} className="text-blue-500 hover:text-blue-700">
                  <Phone size={14} />
                </a>
                <a href={`mailto:${hospital.contact.email}`} className="text-blue-500 hover:text-blue-700">
                  <Mail size={14} />
                </a>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <Eye size={14} />
                </button>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <ExternalLink size={14} />
                </a>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HospitalsList;
