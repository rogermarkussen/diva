'use client';

import { useState } from 'react';

interface HeaderProps {
  companyName: string;
  userName: string;
  userCompanies: { id: number; name: string }[];
  onSwitchCompany: (companyId: number) => void;
  showSwitcher: boolean;
}

export function Header({
  companyName,
  userName,
  userCompanies,
  onSwitchCompany,
  showSwitcher,
}: HeaderProps) {
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const handleSwitchCompany = (companyId: number) => {
    onSwitchCompany(companyId);
    setIsSwitcherOpen(false);
  };

  const otherCompanies = userCompanies.filter(
    (c) => c.name !== companyName
  );

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{companyName}</h1>
          <p className="text-sm text-gray-500">Signed in as {userName}</p>
        </div>
        {showSwitcher && otherCompanies.length > 0 && (
          <div className="relative">
            <button
              onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
              Switch Company
            </button>
            {isSwitcherOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {otherCompanies.map((company) => (
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
