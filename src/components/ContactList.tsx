'use client';

import { useState } from 'react';
import { Button } from './Button';

interface Contact {
  id: number;
  name: string;
  email: string;
  isMain: boolean;
}

const initialContacts: Contact[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', isMain: true },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', isMain: false },
  { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', isMain: false },
];

export function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [newContactName, setNewContactName] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');

  const handleAddContact = () => {
    if (newContactName && newContactEmail) {
      const newContact: Contact = {
        id: Math.max(...contacts.map((c) => c.id)) + 1,
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
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} ({contact.email}) {contact.isMain && <strong>(Main)</strong>}
            {!contact.isMain && (
              <Button onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
            )}
            {!contact.isMain && (
              <Button onClick={() => setMainContact(contact.id)}>Set as Main</Button>
            )}
          </li>
        ))}
      </ul>
      <div>
        <h3>Add New Contact</h3>
        <input
          type="text"
          placeholder="Name"
          value={newContactName}
          onChange={(e) => setNewContactName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={newContactEmail}
          onChange={(e) => setNewContactEmail(e.target.value)}
        />
        <Button onClick={handleAddContact}>Add Contact</Button>
      </div>
    </div>
  );
}
