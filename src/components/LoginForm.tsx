'use client';

import { useState } from 'react';
import { Button } from './Button';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Mock API call
    if (email === 'test@example.com' && password === 'password') {
      // In a real app, you'd get a token from the API
      // and store it in a cookie or local storage.
      // For now, we'll just redirect.
      window.location.href = '/dashboard';
    } else if (email === 'multi@example.com' && password === 'password') {
      window.location.href = '/select-company';
    }

    else {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <Button type="submit">Login</Button>
    </form>
  );
}
