import { ContactList } from '@/components/ContactList';
import { ReportList } from '@/components/ReportList';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="px-4 py-8 sm:px-0">
        <div className="space-y-8">
          <ContactList />
          <ReportList />
        </div>
      </div>
    </div>
  );
}
