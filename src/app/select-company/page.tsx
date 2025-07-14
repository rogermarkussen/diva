'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';

const companies = [
  { id: 1, name: 'Company A' },
  { id: 2, name: 'Company B' },
  { id: 3, name: 'Company C' },
];

export default function SelectCompanyPage() {
  const router = useRouter();

  const handleSelectCompany = (companyId: number) => {
    router.push(`/dashboard?companyId=${companyId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Select a Company
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 space-y-4">
          <ul className="space-y-4">
            {companies.map((company) => (
              <li key={company.id} className="flex items-center justify-between">
                <span className="font-medium">{company.name}</span>
                <Button onClick={() => handleSelectCompany(company.id)}>
                  Select
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
