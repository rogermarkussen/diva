'use client';

import { useRouter } from 'next/navigation';
import { Button } from './Button';

interface Report {
  id: number;
  name: string;
  deadline: string;
  lastAccessedBy: string;
  status: 'Not Started' | 'In Progress' | 'Submitted';
}

const initialReports: Report[] = [
  {
    id: 1,
    name: 'Quarterly Report Q2 2024',
    deadline: '2024-07-31',
    lastAccessedBy: 'John Doe',
    status: 'In Progress',
  },
  {
    id: 2,
    name: 'Annual Report 2023',
    deadline: '2024-03-31',
    lastAccessedBy: 'Jane Smith',
    status: 'Submitted',
  },
  {
    id: 3,
    name: 'Monthly Report May 2024',
    deadline: '2024-06-15',
    lastAccessedBy: '',
    status: 'Not Started',
  },
];

const statusStyles = {
  'Not Started': 'bg-gray-200 text-gray-800',
  'In Progress': 'bg-yellow-200 text-yellow-800',
  'Submitted': 'bg-green-200 text-green-800',
};

export function ReportList() {
  const router = useRouter();

  const handleViewReport = (reportId: number) => {
    router.push(`/reports/${reportId}`);
  };

  return (
    <div className="bg-white shadow sm:rounded-lg mt-8">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium text-gray-900">Reports</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {initialReports.map((report) => (
            <div
              key={report.id}
              className="bg-white overflow-hidden shadow rounded-lg border border-gray-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 truncate">
                      {report.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Deadline: {report.deadline}
                    </p>
                  </div>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      statusStyles[report.status]
                    }`}
                  >
                    {report.status}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    Last accessed by: {report.lastAccessedBy || 'N/A'}
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <Button
                  onClick={() => handleViewReport(report.id)}
                  className="w-full"
                >
                  View Report
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
