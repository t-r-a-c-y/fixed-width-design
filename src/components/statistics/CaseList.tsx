
import React from 'react';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const cases = [
  { 
    id: 'ID29', 
    patientId: '#12345', 
    date: 'Dec 1, 2024', 
    hospital: 'Kacyiru Hospital', 
    location: '122 Hillside Ave', 
    severity: 'Critical', 
    severityColor: 'green-500',
    status: 'In-active'
  },
  { 
    id: 'ID30', 
    patientId: '#23456', 
    date: 'Nov 21, 2024', 
    hospital: 'Rwanda State', 
    location: 'Kimihurura Ave, Kinyinya', 
    severity: 'Severe', 
    severityColor: 'orange-500',
    status: 'Still Isolate'
  },
  { 
    id: '3', 
    patientId: '#32355', 
    date: 'Nov 20, 2024', 
    hospital: 'KE Norton', 
    location: '$500 Bruce Ave, Portage', 
    severity: '$427.14', 
    severityColor: 'yellow-500',
    status: 'On-Delivery'
  }
];

const CaseList = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">ID</TableHead>
            <TableHead>Patient ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Hospital Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Severity Level</TableHead>
            <TableHead>Status Case</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cases.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.patientId}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.hospital}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full bg-${item.severityColor} mr-2`}></div>
                  {item.severity}
                </div>
              </TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  •••
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CaseList;
