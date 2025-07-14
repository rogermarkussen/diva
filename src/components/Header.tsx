'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  companyName: string;
  userName: string;
  userCompanies: { id: number; name: string }[];
}

export function Header({
  companyName,
  userName,
  userCompanies,
}: HeaderProps) {
  const router = useRouter();
  const [showSwitcher, setShowSwitcher] = useState(false);

  const handleSwitchCompany = (companyId: number) => {
    // In a real app, you would switch the company in the user's session
    // and then reload the page or redirect to the dashboard.
    console.log(`Switched to company: ${companyId}`);
    setShowSwitcher(false);
    router.push('/dashboard');
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{companyName}</h1>
          <p className="text-sm text-gray-500">Signed in as {userName}</p>
        </div>
        {userCompanies.length > 1 && (
          <div className="relative">
            <button
              onClick={() => setShowSwitcher(!showSwitcher)}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
              Switch Company
            </button>
            {showSwitcher && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {userCompanies.map((company) => (
                    <a
                      key={company.id}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSwitchCompany(company.id);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {company.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
