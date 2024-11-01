"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }) {
  const [csrfToken, setCsrfToken] = useState('');
  const router = useRouter();

  // Fetch the CSRF token and set it in the state
  const fetchCsrfToken = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/csrf-token`, {
        credentials: 'include', // Include credentials if your CSRF config needs cookies
      });
      const data = await res.json();
      console.log("Fetched CSRF Token:", data.csrfToken); // Log fetched CSRF token
      setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error("Error fetching CSRF Token:", error);
    }
  };

  useEffect(() => {
    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("CSRF Token on Submit:", csrfToken); // Log CSRF token on submit

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/submit`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "CSRF-Token": csrfToken, // Add CSRF token here
        },
        body: JSON.stringify({ data: 'yourData' }),
        credentials: 'include',
        mode: 'cors',
      });

      const data = await res.json();
      console.log("Submit Response:", data);
      // Handle successful submission here
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  return (
    <div>
      {children}
    </div>
  );
}
