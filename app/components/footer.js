import footerStyles from "./footerStyles.module.scss";
import componentStyles from "./componentStyles.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer class={footerStyles.container}>
      <div class={footerStyles.container_left}>
        <div class={footerStyles.left_top}>El Shaddai Hospital</div>
        <div class={footerStyles.left_middle}>
          El-Shadai hospital Entebbe is located at Kasenyi`road off Entebbe
          Highway Opposite Ssebuggwawo’s home, Busiro county, Katabi town
          council, Nkumba zone and Bukolwa ward.
        </div>

        <div class={footerStyles.left_bottom}>
          call us on : 0709604705/ 0786047668
        </div>
      </div>

      <div class={footerStyles.container_middle}>
        <div class={footerStyles.middle_top}>Explore</div>
        <div class={footerStyles.middle_bottom}>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/doctors">Doctors</Link>
          <Link href="/services">Services</Link>
        </div>
      </div>

      <div class={footerStyles.container_right}>
        <div class={footerStyles.right_top}>Subscribe to our News letter</div>
        <div class={footerStyles.right_middle}>
          <Link href="/about">
            <button class={componentStyles.secondary_button_white}>
              Learn more
              <Image
                src="/cross_arrow.svg"
                width={24}
                height={24}
                className={componentStyles.icon}
                alt="upper-arrow"
              />
            </button>
          </Link>
        </div>

        <div class={footerStyles.right_bottom}>
          <Link href="/about">
            <Image
              src="/facebook.svg"
              width={32}
              height={32}
              className={componentStyles.icon}
              alt="upper-arrow"
            />
          </Link>
          <Link href="/about">
            <Image
              src="/x.svg"
              width={28}
              height={28}
              className={componentStyles.icon}
              alt="upper-arrow"
            />
          </Link>
          <Link href="/about">
            <Image
              src="/linkedin.svg"
              width={28}
              height={28}
              className={componentStyles.icon}
              alt="upper-arrow"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
