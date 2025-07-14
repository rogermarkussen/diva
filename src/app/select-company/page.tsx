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
    // In a real app, you would set the selected company in the user's session
    // and then redirect to the dashboard.
    console.log(`Selected company: ${companyId}`);
    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Select Company</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name}
            <Button onClick={() => handleSelectCompany(company.id)}>
              Select
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
