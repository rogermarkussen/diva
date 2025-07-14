'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/Header';

const initialUser = {
  name: 'John Doe',
  companies: [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
    { id: 3, name: 'Company C' },
  ],
  currentCompany: { id: 1, name: 'Company A' },
};

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(initialUser);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const companyId = searchParams.get('companyId');
    if (companyId) {
      const newCompany = user.companies.find(
        (c) => c.id === parseInt(companyId)
      );
      if (newCompany) {
        setUser({ ...user, currentCompany: newCompany });
      }
    }
  }, [searchParams]);

  const handleSwitchCompany = (companyId: number) => {
    router.push(`/dashboard?companyId=${companyId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        companyName={user.currentCompany.name}
        userName={user.name}
        userCompanies={user.companies}
        onSwitchCompany={handleSwitchCompany}
        showSwitcher={true}
      />
      <main>{children}</main>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </Suspense>
  );
}
