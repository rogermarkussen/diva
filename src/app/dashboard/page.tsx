import { ContactList } from '@/components/ContactList';
import { ReportList } from '@/components/ReportList';

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ContactList />
      <ReportList />
    </div>
  );
}
