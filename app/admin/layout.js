/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import './global.css';

export const metadata = {
  title: "El-Shadai",
  description: "Committed to delivering the best primary healthcare.",
};

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Replace this with your actual authentication logic
    const isAuthenticated = !!localStorage.getItem('token'); // Example check for token in local storage

    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      router.push('/login');
    }
  }, [router]);

  // You can optionally render a loading state while the redirect happens
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
