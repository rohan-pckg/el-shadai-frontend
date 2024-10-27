"use client";

import footerStyles from "./footerStyles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [csrfToken, setCsrfToken] = useState(""); // State for CSRF token

  // Validate email function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Fetch CSRF token
  const fetchCsrfToken = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/csrf-token`,
        {
          method: "GET",
          credentials: "include", // Include credentials to ensure cookies are sent
        },
      );
      if (!response.ok) throw new Error("Failed to fetch CSRF token");
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
      alert("Failed to fetch CSRF token. Please try again later.");
    }
  };

  // Subscribe handler
  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!csrfToken) {
      alert("CSRF token is not available. Please try again later.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/newsletter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "CSRF-Token": csrfToken, // Include CSRF token in the headers
          },
          credentials: "include", // Include credentials to send cookies
          body: JSON.stringify({ email }),
        },
      );

      if (!response.ok) throw new Error("Failed to subscribe");
      alert("Subscription successful!");
      setEmail(""); // Clear input field
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Could not subscribe. Please try again later.");
    }
  };

  // Fetch CSRF token when component mounts
  useEffect(() => {
    fetchCsrfToken();
  }, []);

  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.container_left}>
        <div className={footerStyles.left_top}>El Shaddai Hospital</div>
        <div className={footerStyles.left_middle}>
          El-Shadai hospital Entebbe is located at Kasenyi road off Entebbe
          Highway Opposite Ssebuggwawo’s home, Busiro county, Katabi town
          council, Nkumba zone and Bukolwa ward.
        </div>
        <div className={footerStyles.left_bottom}>
          call us on: 0709604705/0786047668
        </div>
      </div>

      <div className={footerStyles.container_middle}>
        <div className={footerStyles.middle_top}>Explore</div>
        <div className={footerStyles.middle_bottom}>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/news">News</Link>
          <Link href="/services">Services</Link>
        </div>
      </div>

      <div className={footerStyles.container_right}>
        <div className={footerStyles.right_top}>
          Subscribe to our Newsletter
        </div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className={footerStyles.email_input}
        />
        <button onClick={handleSubscribe}>Subscribe</button>

        <div className={footerStyles.right_bottom}>
          <Link href="/about">
            <Image src="/facebook.svg" width={32} height={32} alt="Facebook" />
          </Link>
          <Link href="/about">
            <Image src="/x.svg" width={28} height={28} alt="Twitter" />
          </Link>
          <Link href="/about">
            <Image src="/linkedin.svg" width={28} height={28} alt="LinkedIn" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
