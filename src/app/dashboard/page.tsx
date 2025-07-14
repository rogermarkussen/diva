import { ContactList } from '@/components/ContactList';
import { ReportList } from '@/components/ReportList';
import { Header } from '@/components/Header';

const user = {
  name: 'John Doe',
  companies: [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
  ],
  currentCompany: { id: 1, name: 'Company A' },
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        companyName={user.currentCompany.name}
        userName={user.name}
        userCompanies={user.companies}
      />
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="space-y-8">
              <ContactList />
              <ReportList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
