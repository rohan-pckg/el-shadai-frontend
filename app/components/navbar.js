"use client";

import { React, useState } from "react";

import Link from "next/link";
import navbarStyles from "./navbarStyles.module.scss";
import componentStyles from "./componentStyles.module.scss";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className={navbarStyles.nav_wrapper}>
      <div>
        <Link href="/home" className={navbarStyles.nav_left}>
          LOGO
        </Link>
      </div>

      <div className={navbarStyles.nav_middle}>
        <Link href="/home" className={navbarStyles.nav_items}>
          Home
        </Link>
        <Link href="/about" className={navbarStyles.nav_items}>
          About
        </Link>
        <Link href="/doctors" className={navbarStyles.nav_items}>
          Doctors
        </Link>
        <Link href="/services" className={navbarStyles.nav_items}>
          Services
        </Link>
      </div>

      <div className={navbarStyles.nav_right}>
        <button className={componentStyles.contact_button}>Contact us</button>
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
        <Link href="/doctors" className={navbarStyles.nav_items}>
          Doctors
        </Link>
        <Link href="/services" className={navbarStyles.nav_items}>
          Services
        </Link>

        <button className={componentStyles.contact_button}>Contact us</button>
      </div>
    </nav>
  );
}
