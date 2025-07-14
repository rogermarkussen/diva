'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';

export default function ReportPage({ params }: { params: { reportId: string } }) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isvalidating, setIsValidating] = useState(false);
  const [validationLog, setValidationLog] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    // Simulate file upload
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
    <div>
      <h1>Report {params.reportId}</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <Button onClick={handleUpload} disabled={!file || isUploading || isvalidating}>
          {isUploading ? 'Uploading...' : 'Upload and Validate'}
        </Button>
      </div>

      {isvalidating && (
        <div>
          <h2>Validation Log</h2>
          <ul>
            {validationLog.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
