"use client";

import { React, useState } from "react";

import Link from "next/link";
import navbarStyles from "./navbarStyles.module.scss";
import componentStyles from "./componentStyles.module.scss";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className={navbarStyles.nav_wrapper}>
      <div>
        <Link href="/home" className={navbarStyles.nav_left}>
          <Image src="/logo.svg" width={160} height={80} alt="upper-arrow" />
        </Link>
      </div>

      <div className={navbarStyles.nav_middle}>
        <Link href="/home" className={navbarStyles.nav_items}>
          Home
        </Link>
        <Link href="/about" className={navbarStyles.nav_items}>
          About
        </Link>
        <Link href="/news" className={navbarStyles.nav_items}>
          News
        </Link>
        <Link href="/services" className={navbarStyles.nav_items}>
          Services
        </Link>
      </div>

      <div className={navbarStyles.nav_right}>
        <Link href="/contact">
          <button className={componentStyles.contact_button}>Contact us</button>
        </Link>
      </div>

      <div
        className={navbarStyles.menu_wrapper}
        onClick={() => setActive(!active)}
      >
        <div
          className={active ? navbarStyles.activemenu : navbarStyles.menu}
        ></div>
      </div>

      <div
        className={active ? navbarStyles.activesidenav : navbarStyles.sidenav}
      >
        <Link href="/home" className={navbarStyles.nav_items}>
          Home
        </Link>
        <Link href="/about" className={navbarStyles.nav_items}>
          About
        </Link>
        <Link href="/news" className={navbarStyles.nav_items}>
          News
        </Link>
        <Link href="/services" className={navbarStyles.nav_items}>
          Services
        </Link>

        <Link href="/contact">
          <button className={componentStyles.contact_button}>Contact us</button>
        </Link>
      </div>
    </nav>
  );
}
