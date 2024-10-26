import { useState } from "react";
import footerStyles from "./footerStyles.module.scss";
import componentStyles from "./componentStyles.module.scss";
import Link from "next/link";
import Image from "next/image";
import API_URL from "../admin/config"; 


export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch(`${API_URL}/api/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Subscription successful!");
        setEmail(""); // Clear input after successful subscription
      } else {
        alert("Error subscribing. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

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
          call us on : 0709604705/ 0786047668
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
        <form onSubmit={handleSubscribe} className={footerStyles.right_middle}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={footerStyles.email_input}
          />
        </form>

        <div className={footerStyles.right_bottom}>
          <Link href="/about">
            <Image
              src="/facebook.svg"
              width={32}
              height={32}
              alt="Facebook"
            />
          </Link>
          <Link href="/about">
            <Image src="/x.svg" width={28} height={28} alt="Close" />
          </Link>
          <Link href="/about">
            <Image
              src="/linkedin.svg"
              width={28}
              height={28}
              alt="LinkedIn"
            />
          </Link>
        </div>
      </div>

      <div>
        Developed with love and patience by{" "}
        <a href="mailto:rohan.pckg@outlook.com">rohan_pckg</a>
      </div>
    </footer>
  );
}
