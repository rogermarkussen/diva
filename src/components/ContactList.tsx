'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';

interface Contact {
  id: number;
  name: string;
  email: string;
  isMain: boolean;
}

const allContacts: { [companyId: number]: Contact[] } = {
  1: [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', isMain: true },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', isMain: false },
  ],
  2: [
    { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', isMain: true },
  ],
  3: [
    { id: 4, name: 'Mary Williams', email: 'mary.williams@example.com', isMain: true },
    { id: 5, name: 'David Brown', email: 'david.brown@example.com', isMain: false },
    { id: 6, name: 'Susan Davis', email: 'susan.davis@example.com', isMain: false },
  ],
};

export function ContactList({ companyId }: { companyId: number }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');

  useEffect(() => {
    setContacts(allContacts[companyId] || []);
  }, [companyId]);

  const handleAddContact = () => {
    if (newContactName && newContactEmail) {
      const newContact: Contact = {
        id: Math.random(), // In a real app, this would be a proper ID from the backend
        name: newContactName,
        email: newContactEmail,
        isMain: false,
      };
      setContacts([...contacts, newContact]);
      setNewContactName('');
      setNewContactEmail('');
    }
  };

  const handleDeleteContact = (contactId: number) => {
    const contactToDelete = contacts.find((c) => c.id === contactId);
    if (contactToDelete && !contactToDelete.isMain) {
      setContacts(contacts.filter((c) => c.id !== contactId));
    }
  };

  const setMainContact = (contactId: number) => {
    setContacts(
      contacts.map((c) => ({
        ...c,
        isMain: c.id === contactId,
      }))
    );
  };

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium text-gray-900">Contacts</h2>
        <ul className="mt-4 space-y-4">
          {contacts.map((contact) => (
            <li key={contact.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-gray-500">{contact.email}</p>
              </div>
              <div className="flex items-center space-x-2">
                {contact.isMain ? (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Main
                  </span>
                ) : (
                  <>
                    <Button
                      onClick={() => setMainContact(contact.id)}
                      className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800"
                    >
                      Set as Main
                    </Button>
                    <Button
                      onClick={() => handleDeleteContact(contact.id)}
                      className="text-sm bg-red-500 hover:bg-red-700 text-white"
                    >
                      Delete
                    </Button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900">Add New Contact</h3>
          <div className="mt-4 flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              value={newContactName}
              onChange={(e) => setNewContactName(e.target.value)}
              className="flex-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              value={newContactEmail}
              onChange={(e) => setNewContactEmail(e.target.value)}
              className="flex-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <Button onClick={handleAddContact}>Add Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
