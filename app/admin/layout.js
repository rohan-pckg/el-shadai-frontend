/* eslint-disable react/prop-types */
'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import './global.css';

export const metadata = {
  title: "El-Shadai",
  description: "Committed to delivering the best primary healthcare.",
};

export default function RootLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check for token in local storage

    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      router.push('/login');
    } else {
      setLoading(false); // Set loading to false if authenticated
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon1.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
