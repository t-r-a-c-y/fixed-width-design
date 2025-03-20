
import React from 'react';
import { File, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reports = [
  {
    id: 1,
    title: 'Local Vaccination Stats',
    icon: <File size={16} className="text-blue-500" />,
    downloadButton: 'PDF'
  },
  {
    id: 2,
    title: 'Worldwide Vaccination Report',
    icon: <File size={16} className="text-green-500" />,
    downloadButton: 'ZIP'
  }
];

const VaccinationReports: React.FC = () => {
  return (
    <div className="mt-4 space-y-3">
      {reports.map((report) => (
        <div key={report.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
          <div className="flex items-center gap-2">
            {report.icon}
            <span className="text-sm">{report.title}</span>
          </div>
          <Button variant="outline" size="sm" className="h-7 px-2 text-xs bg-white">
            {report.downloadButton}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default VaccinationReports;
