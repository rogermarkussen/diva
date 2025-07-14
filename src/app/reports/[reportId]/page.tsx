'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';

const user = {
  name: 'John Doe',
  companies: [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
  ],
  currentCompany: { id: 1, name: 'Company A' },
};

export default function ReportPage({ params }: { params: { reportId: string } }) {
  const { reportId } = params;
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationLog, setValidationLog] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsUploading(false);

    setIsValidating(true);
    const log: string[] = [];
    const steps = [
      'Checking file format...',
      'Validating data structure...',
      'Cross-referencing with internal data...',
      'Checking for anomalies...',
      'Finalizing validation...',
      'Validation complete.',
    ];

    for (const step of steps) {
      log.push(step);
      setValidationLog([...log]);
      await new Promise((resolve) => setTimeout(resolve, 750));
    }
    setIsValidating(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        companyName={user.currentCompany.name}
        userName={user.name}
        userCompanies={user.companies}
      />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Upload File for Report {reportId}
                </h2>
                <div className="mt-4 flex items-center space-x-4">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="flex-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <Button
                    onClick={handleUpload}
                    disabled={!file || isUploading || isValidating}
                  >
                    {isUploading ? 'Uploading...' : 'Upload and Validate'}
                  </Button>
                </div>
              </div>
            </div>

            {(isValidating || validationLog.length > 0) && (
              <div className="mt-8 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-medium text-gray-900">
                    Validation Log
                  </h2>
                  <div className="mt-4 bg-gray-900 text-white rounded-md p-4">
                    <ul className="space-y-2">
                      {validationLog.map((entry, index) => (
                        <li key={index} className="font-mono text-sm">
                          {entry}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
