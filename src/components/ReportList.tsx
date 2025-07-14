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

export function ReportList() {
  const router = useRouter();

  const handleViewReport = (reportId: number) => {
    router.push(`/reports/${reportId}`);
  };

  return (
    <div>
      <h2>Reports</h2>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {initialReports.map((report) => (
          <div key={report.id} style={{ border: '1px solid black', padding: '16px' }}>
            <h3>{report.name}</h3>
            <p>Deadline: {report.deadline}</p>
            <p>Status: {report.status}</p>
            <p>Last accessed by: {report.lastAccessedBy || 'N/A'}</p>
            <Button onClick={() => handleViewReport(report.id)}>View Report</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
