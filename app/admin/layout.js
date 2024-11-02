"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }) {
  const [csrfToken, setCsrfToken] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const router = useRouter();

  // Check if the user is authenticated
  const isAuthenticated = () => {
    return !!localStorage.getItem('token'); // Adjust this according to your auth logic
  };

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
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchCsrfToken(); // Fetch CSRF token when the component mounts
  }, []);

  useEffect(() => {
    // Check authentication after the CSRF token is fetched
    if (!isLoading) {
      if (!isAuthenticated()) {
        router.push('/login'); // Redirect to login page if not authenticated
      }
    }
  }, [isLoading, router]); // Dependency array includes isLoading

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

  if (isLoading) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  return (
    <div>
      {children}
    </div>
  );
}
