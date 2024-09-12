import Link from "next/link";
import navbarStyles from "./navbarStyles.module.scss";
import componentStyles from "./componentStyles.module.scss";

export default function Navbar() {
  return (
    <nav class={navbarStyles.nav_wrapper}>
      <div>
        <Link href="/home" class={navbarStyles.nav_left}>
          LOGO
        </Link>
      </div>

      <div class={navbarStyles.nav_middle}>
        <Link href="/home" class={navbarStyles.nav_items}>
          Home
        </Link>
        <Link href="/about" class={navbarStyles.nav_items}>
          About
        </Link>
        <Link href="/doctors" class={navbarStyles.nav_items}>
          Doctors
        </Link>
        <Link href="/services" class={navbarStyles.nav_items}>
          Services
        </Link>
      </div>

      <div class={navbarStyles.nav_right}>
        <button class={componentStyles.blue_filled_button}>Contact us</button>
      </div>
    </nav>
  );
}
