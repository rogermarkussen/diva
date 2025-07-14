'use client';

import { ContactList } from '@/components/ContactList';
import { ReportList } from '@/components/ReportList';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const [companyId, setCompanyId] = useState<number | null>(null);

  useEffect(() => {
    const id = searchParams.get('companyId');
    if (id) {
      setCompanyId(parseInt(id));
    } else {
      // Default to company 1 if no ID is in the query params
      setCompanyId(1);
    }
  }, [searchParams]);

  if (!companyId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="px-4 py-8 sm:px-0">
        <div className="space-y-8">
          <ContactList companyId={companyId} />
          <ReportList />
        </div>
      </div>
    </div>
  );
}
